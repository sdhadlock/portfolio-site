// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// Smooth scrolling that accounts for the sticky nav height
const nav = document.querySelector('nav');
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const target = targetId.length > 1 ? document.querySelector(targetId) : null;
        if (target) {
            e.preventDefault();
            const offsetTop = target.getBoundingClientRect().top + window.scrollY - nav.offsetHeight;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    });
});

// Live Strava stats — data/strava-stats.json is refreshed on a schedule by
// .github/workflows/strava-stats.yml (see STRAVA_SETUP.md). Only present on
// pages that have the #strava-run / #strava-ride elements.
(function loadStravaStats() {
    const runEl = document.getElementById('strava-run');
    const rideEl = document.getElementById('strava-ride');
    const weekRideEl = document.getElementById('strava-week-ride');
    const metaEl = document.getElementById('strava-meta');
    if (!runEl && !rideEl && !weekRideEl) return;

    fetch('data/strava-stats.json', { cache: 'no-store' })
        .then(res => (res.ok ? res.json() : null))
        .then(data => {
            if (!data) return;
            if (runEl && data.allTimeRunMiles != null) runEl.textContent = data.allTimeRunMiles.toLocaleString();
            if (rideEl && data.allTimeRideMiles != null) rideEl.textContent = data.allTimeRideMiles.toLocaleString();
            if (weekRideEl && data.weeklyBikeMiles != null) weekRideEl.textContent = data.weeklyBikeMiles.toLocaleString();
            if (metaEl && data.updatedAt) {
                const date = new Date(data.updatedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                });
                metaEl.innerHTML = `Live totals via <a href="https://www.strava.com" target="_blank" rel="noopener">Strava</a> · updated ${date}`;
            }
        })
        .catch(() => {
            // Leave the placeholder "—" values in place if the fetch fails.
        });
})();
