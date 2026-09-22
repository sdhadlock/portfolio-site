# Strava Live Stats — One-Time Setup

The site's "Miles run" / "Miles biked" numbers (Beyond Engineering section) and
the "Miles biked this week" hero stat are refreshed every 6 hours by
`.github/workflows/strava-stats.yml`, which runs
`scripts/update-strava-stats.mjs` and commits the result to
`data/strava-stats.json`. The page's `script.js` just reads that JSON file —
nothing dynamic runs on GitHub Pages itself. The weekly figure is computed by
summing ride activities since the most recent Monday (UTC), since Strava's
stats endpoint only exposes all-time/YTD/last-4-weeks totals, not a true
"this week" number.

To turn this on, you need to give the workflow access to your Strava data
**once**. Do these steps yourself in your own browser/terminal — don't paste
your Client Secret, refresh token, or the exchange command's output into a
chat with anyone, including an AI assistant. None of these values should ever
appear in the repo itself; they only go into GitHub's encrypted repo secrets.

## 1. Create a Strava API application

1. Go to <https://www.strava.com/settings/api> (log in if needed).
2. Fill in the form:
   - **Application Name:** something like "Spencer Hadlock Portfolio"
   - **Category:** anything reasonable (e.g. "Other")
   - **Website:** `https://www.spencerhadlock.com`
   - **Authorization Callback Domain:** `localhost`
3. Save. You'll see a **Client ID** and **Client Secret** — keep this tab open.

## 2. Authorize the app and get a code

Replace `CLIENT_ID` below with your actual Client ID, then open the resulting
URL in your browser:

```
https://www.strava.com/oauth/authorize?client_id=CLIENT_ID&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=activity:read_all
```

Click **Authorize**. You'll land on a "this site can't be reached"
`localhost` error page — that's expected, ignore it. Look at the browser's
address bar and copy the value after `code=` (and before `&scope=`).

## 3. Exchange the code for a refresh token

In your own terminal (not through an AI assistant), run:

```bash
curl -X POST https://www.strava.com/oauth/token \
  -d client_id=CLIENT_ID \
  -d client_secret=CLIENT_SECRET \
  -d code=AUTHORIZATION_CODE \
  -d grant_type=authorization_code
```

The JSON response includes:
- `refresh_token` — you need this
- `athlete.id` — your numeric Strava athlete ID, also needed

## 4. Add four GitHub repo secrets

In the `portfolio-site` repo on GitHub: **Settings → Secrets and variables →
Actions → New repository secret**. Add:

| Secret name             | Value                          |
|--------------------------|---------------------------------|
| `STRAVA_CLIENT_ID`       | Client ID from step 1           |
| `STRAVA_CLIENT_SECRET`   | Client Secret from step 1       |
| `STRAVA_REFRESH_TOKEN`   | `refresh_token` from step 3     |
| `STRAVA_ATHLETE_ID`      | `athlete.id` from step 3        |

## 5. Run it once manually

Go to the repo's **Actions** tab → **Update Strava Stats** → **Run workflow**.
After it finishes, `data/strava-stats.json` should be updated with your real
totals (check the commit it makes), and the numbers should appear on the live
site within a minute or two of the next GitHub Pages rebuild.

## Notes

- The `activity:read_all` scope includes private activities in your totals.
  If you'd rather only count public activities, use `activity:read` instead
  in step 2's URL.
- Strava occasionally rotates the refresh token on use. If the scheduled
  workflow ever starts failing, check its log — the script prints a new
  refresh token there if Strava issued one, and you'd paste that into the
  `STRAVA_REFRESH_TOKEN` secret to replace the old value.
- Nothing here changes GitHub Pages' hosting setup; the site is still fully
  static, `data/strava-stats.json` is just a file in the repo that gets
  rewritten on a schedule.
