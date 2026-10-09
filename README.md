# Astro Capital Corporate Information Portal

A public information portal presenting company details and website statements with source attribution. It distinguishes statements published by the website from official corporate or regulatory records.

## Local development

```sh
npm install
npm run dev
```

## Build

```sh
npm run typecheck
BASE_PATH=/astro-capital-verification-portal/ npm run build
```

The GitHub Actions workflow deploys the production build to GitHub Pages whenever `main` is updated.
