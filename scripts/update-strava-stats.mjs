#!/usr/bin/env node
// Fetches Spencer's Strava all-time / year-to-date totals and writes them to
// data/strava-stats.json. Run by .github/workflows/strava-stats.yml on a
// schedule; the site's front end reads the JSON file at page load.
//
// Required environment variables:
//   STRAVA_CLIENT_ID
//   STRAVA_CLIENT_SECRET
//   STRAVA_REFRESH_TOKEN
//   STRAVA_ATHLETE_ID
//
// See STRAVA_SETUP.md for how to obtain these one time.

import { writeFile } from 'node:fs/promises';

const { STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET, STRAVA_REFRESH_TOKEN, STRAVA_ATHLETE_ID } = process.env;

for (const [name, value] of Object.entries({
    STRAVA_CLIENT_ID,
    STRAVA_CLIENT_SECRET,
    STRAVA_REFRESH_TOKEN,
    STRAVA_ATHLETE_ID,
})) {
    if (!value) {
        console.error(`Missing required environment variable: ${name}`);
        process.exit(1);
    }
}

const METERS_PER_MILE = 1609.344;
const toMiles = (meters) => Math.round((meters / METERS_PER_MILE) * 10) / 10;

async function refreshAccessToken() {
    const res = await fetch('https://www.strava.com/oauth/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            client_id: STRAVA_CLIENT_ID,
            client_secret: STRAVA_CLIENT_SECRET,
            grant_type: 'refresh_token',
            refresh_token: STRAVA_REFRESH_TOKEN,
        }),
    });

    if (!res.ok) {
        throw new Error(`Token refresh failed: ${res.status} ${await res.text()}`);
    }

    const data = await res.json();

    // Strava can rotate the refresh token. If it does, the stored repo secret
    // needs to be updated by hand, or the next scheduled run will fail.
    if (data.refresh_token && data.refresh_token !== STRAVA_REFRESH_TOKEN) {
        console.warn(
            'Strava issued a new refresh_token. Update the STRAVA_REFRESH_TOKEN ' +
            'repo secret to keep the workflow working: ' + data.refresh_token
        );
    }

    return data.access_token;
}

async function fetchStats(accessToken) {
    const res = await fetch(`https://www.strava.com/api/v3/athletes/${STRAVA_ATHLETE_ID}/stats`, {
        headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!res.ok) {
        throw new Error(`Stats fetch failed: ${res.status} ${await res.text()}`);
    }

    return res.json();
}

// Strava's /stats endpoint only gives all-time and year-to-date totals, not
// a true "this week" figure — so it's computed here from the activity list.
const BIKE_SPORT_TYPES = new Set(['Ride', 'VirtualRide', 'GravelRide', 'MountainBikeRide', 'EBikeRide']);

function startOfWeekEpochUTC() {
    const now = new Date();
    const day = now.getUTCDay(); // 0 = Sunday
    const daysSinceMonday = day === 0 ? 6 : day - 1;
    const monday = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - daysSinceMonday));
    return Math.floor(monday.getTime() / 1000);
}

async function fetchWeeklyBikeMiles(accessToken) {
    const after = startOfWeekEpochUTC();
    const res = await fetch(`https://www.strava.com/api/v3/athlete/activities?after=${after}&per_page=100`, {
        headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!res.ok) {
        throw new Error(`Activities fetch failed: ${res.status} ${await res.text()}`);
    }

    const activities = await res.json();
    const meters = activities
        .filter((a) => BIKE_SPORT_TYPES.has(a.sport_type || a.type))
        .reduce((sum, a) => sum + (a.distance || 0), 0);

    return toMiles(meters);
}

async function main() {
    const accessToken = await refreshAccessToken();
    const [stats, weeklyBikeMiles] = await Promise.all([
        fetchStats(accessToken),
        fetchWeeklyBikeMiles(accessToken),
    ]);

    const output = {
        updatedAt: new Date().toISOString(),
        allTimeRunMiles: toMiles(stats.all_run_totals?.distance ?? 0),
        allTimeRideMiles: toMiles(stats.all_ride_totals?.distance ?? 0),
        ytdRunMiles: toMiles(stats.ytd_run_totals?.distance ?? 0),
        ytdRideMiles: toMiles(stats.ytd_ride_totals?.distance ?? 0),
        weeklyBikeMiles,
    };

    await writeFile('data/strava-stats.json', JSON.stringify(output, null, 2) + '\n');
    console.log('Wrote data/strava-stats.json:', output);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
