# Magic Feed — Website

The VitePress website for **Magic Feed**, a rich content sharing app built with Flutter. Deployed to GitHub Pages at <https://shinchven.github.io/magic-feed/>.

## Development

```sh
npm install
npm run docs:dev      # local dev server
npm run docs:build    # production build → docs/.vitepress/dist
npm run docs:preview  # preview the production build
```

## Deployment

Pushing to `master` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages.

One-time setup: in the repository's **Settings → Pages**, set **Source** to **GitHub Actions**.
