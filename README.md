This projects was built with NextJS and Tailwind, intended to be served as a static site.

## Development Stuff
This project keeps it as simple as possible while using familiar tools:
1. NextJS
2. Tailwind (and Heroicons)
3. Git-based deployments

The landing page is in `src/pages/index.js` and just uses that Tailwind markup directly in the JSX: no need for CSS modules here, it's literally just a homepage.

Like all NextJS projects, just use `npm run dev` to get going, but I recommend doing a `npm run build` to test for all errors/warnings before Vercel tells you anyway.

## Deployment Stuff
It's currently hosted via Vercel:
- Prod: https://algomart.dev
- Staging: https://staging.algomart.dev

DNS is managed via [DNSimple](https://dnsimple.com/), and the [Rocket Insights YouTube account](https://www.youtube.com/channel/UClRUfLgiwqRdjX6f9mGyWzw/videos) is serving up the videos.

_Note: there's an extra `export` script in the package.json file to help build a static site intended for DigitalOcean._
