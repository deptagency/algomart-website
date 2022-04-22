This projects was built with NextJS and Tailwind, intended to be served as a static site.

# Development Stuff
_Note: with something as simple as this but with modern tools, it's all too easy to over-engineer the solution. Godspeed!_

Those modern tools are:
1. NextJS
2. Tailwind (and Heroicons)
3. Git-based deployments

The landing page is in `src/pages/index.js` and just uses that Tailwind markup directly in the JSX: no need for CSS modules here, it's literally just a homepage.

Like all NextJS projects, just use `npm run dev` to get going, but I recommend doing a `npm run build` to test for all errors/warnings before Vercel tells you anyway.

### YouTube Videos
The thumbnails are pulled directly from YouTube using the video ID in the URL for the image source. The videos live in the [Rocket Insights YouTube account](https://www.youtube.com/channel/UClRUfLgiwqRdjX6f9mGyWzw/videos), so you'll need access to that if you want to change the thumbnails to be better than the default choices.


# Deployment Stuff

### Opening a PR
When you open a pull request it should default to compare against the `develop` branch (ie staging). When the PR gets opened, Vercel will give you a dedicated preview environment for your changes.

### Updating Production
The easiest and most predictable method is to simply open a pull request that compares `develop` to `main` and when that merges, it's live.

### DNS Info
DNS is managed via [DNSimple](https://dnsimple.com/), and the site is currently hosted via Vercel:
- Prod: https://algomart.dev
- Staging: https://staging.algomart.dev


_Note: there's an extra `export` script in the package.json file to help build a static site destined for DigitalOcean._
