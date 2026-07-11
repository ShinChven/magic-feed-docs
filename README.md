# Magic Feed — Website

The VitePress website for **Magic Feed**, a rich content sharing app built with Flutter. Deployed to GitHub Pages at <https://magic-feed.atlassc.net/>.

## Development

```sh
npm install
npm run docs:dev      # local dev server
npm run docs:build    # production build → docs/.vitepress/dist
npm run docs:preview  # preview the production build
```

## Deployment

Pushing to `master` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages.

One-time setup:

1. In the repository's **Settings → Pages**, set **Source** to **GitHub Actions**.
2. In the same page, set **Custom domain** to `magic-feed.atlassc.net` and enable **Enforce HTTPS** once the certificate is issued.
3. At the DNS provider for `atlassc.net`, add a CNAME record pointing `magic-feed` to `shinchven.github.io`.

The site is built with `base: '/'` and ships a `CNAME` file, so it must be served from the custom domain (or any domain root), not from a `/magic-feed/` subpath.
