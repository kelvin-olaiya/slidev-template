# Slidev Template

A ready-to-go [Slidev](https://sli.dev/) presentation template with CI, GitHub Pages deployment, and automated PDF releases baked in.

## Getting started

```bash
npm install
npm run dev
```

Visit <http://localhost:3030> to see the slides. Edit [`slides.md`](./slides.md) to make changes — Slidev hot-reloads as you type.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local dev server and open the slides in your browser |
| `npm run build` | Build the slides for production into `dist/` |
| `npm run export` | Export the slides to PDF |

## Project structure

```
slides.md       # The presentation content
components/     # Custom Vue components usable in slides
snippets/       # Code snippets included in slides
public/         # Static assets
style.css       # Global styles / theme overrides
```

## CI/CD

This template ships with three GitHub Actions workflows:

- **CI** (`.github/workflows/ci.yml`) — builds the slides on every push and pull request against `main`.
- **Pages** (`.github/workflows/pages.yml`) — builds and deploys the slides to GitHub Pages on every push to `main`.
- **Release** (`.github/workflows/release.yml`) — runs [semantic-release](https://semantic-release.gitbook.io/) on every push to `main`, versioning the repo from [Conventional Commits](https://www.conventionalcommits.org/) and publishing a PDF export of the slides as a GitHub release asset.

Deployment configs for Netlify (`netlify.toml`) and Vercel (`vercel.json`) are also included if you'd rather host there instead of GitHub Pages.

## Learn more

See the [Slidev documentation](https://sli.dev/) for the full guide to syntax, themes, and layouts.
