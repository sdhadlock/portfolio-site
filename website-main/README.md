# Cornell High Frequency Trading Club website

The current website is plain HTML in `dist/`. No dependencies or build step are required.

Live site: https://cornell-high-frequency-trading-club.github.io/website/

## Edit and preview

Edit files in `dist/`. Run `python3 -m http.server 8000 --directory dist` and open http://localhost:8000.

## Deployment

GitHub Pages uses GitHub Actions. Every push to `main` publishes only `dist/` using `.github/workflows/deploy.yml`. The workflow can also be run manually from the Actions tab.

The older root-level website files are retained for reference and are not deployed.

## Custom domain

A domain is optional. When one is available, configure it under Settings → Pages → Custom domain, add the DNS records GitHub requests, and enable HTTPS once the certificate is ready.

## Current functionality

The password field is decorative and does not restrict access. The interest form is a coming-soon page.
