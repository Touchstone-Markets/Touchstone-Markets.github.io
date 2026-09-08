# Touchstone Markets

Marketing site for Touchstone Markets, served from GitHub Pages at
[touchstone-markets.github.io](https://touchstone-markets.github.io).

## Stack

- Next.js 16 (App Router, Turbopack) with static export (`output: "export"`)
- Tailwind CSS v4
- Deployed by `.github/workflows/deploy.yml` on every push to `main`

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # writes static site to ./out
```

## Deployment

Pushes to `main` build the site and publish `./out` to GitHub Pages via the
workflow in `.github/workflows/deploy.yml`. Enable Pages once in repo settings
(Source: GitHub Actions).
