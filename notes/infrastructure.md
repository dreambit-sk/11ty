---
title: Infrastructure
tags: [infrastructure, deployment, netlify]
created: 2026-08-17
---

# Infrastructure

## Hosting & deployment

- **Host:** Netlify (project "dreambit"). Auto-builds and deploys on every push to `main`.
- **Repo:** `git@github.com:dreambit-sk/11ty.git`.
- **Domain:** https://dreambit.sk (Netlify manages the custom domain).
- **Build command:** `npm run build` → cleans, then `build:mix` (Laravel Mix, production) then `build:eleventy`.
- **Publish dir:** `_site`.
- Both `command` and `publish` are pinned in [netlify.toml](../netlify.toml) so they're version-controlled, not only in the Netlify UI.

## Local build

Node/npm are **not** on the host PATH. Run through the toolbox:

```
flatpak-spawn --host toolbox run --container node-toolbox npm run build
```

Dev server: `npm run dev` (Eleventy `--serve` + `mix watch`) → http://localhost:8080/.

## Node version (important)

Node is pinned to **22** in several places; they must stay in sync:

- [netlify.toml](../netlify.toml) `[build.environment] NODE_VERSION = "22"` — **authoritative at build time**.
- [.nvmrc](../.nvmrc) = `22` — used by local `nvm` and as a fallback.
- `package.json` `engines.node` = `>=22`.
- **Netlify UI → Dependency management → Node.js** — set to `22.x` to clear the end-of-life / agent banners (this UI value is what those banners read for display; `netlify.toml` still governs the actual build).

Background: the site was originally on Node 18 (EOL April 2025). A committed `.nvmrc` alone did **not** update the Netlify UI banners because a dashboard `NODE_VERSION` setting overrode it — hence `netlify.toml`. Node 22 is LTS (support into ~April 2027). Netlify recommends 24.x; a bump is a one-line change once build-tested. Build verified green on Node 22.22.0.

## External services

- **Bookio** — reservation widget embedded on `/pages/book` (script from `bookio-services-eu.s3...amazonaws.com`, iframe `services.bookio.com/dreambit/widget`). Booking data is stored on Bookio's systems (they are a GDPR processor). See [[security]].
- **Netlify** — also serves as CDN; may log request metadata (e.g. IP) for the static site.

## Baseurl / env

`.eleventy.js` `baseUrl` defaults to `https://dreambit.sk` (override with `BASE_URL` env var). Used for absolute URLs in OG tags, canonical, sitemap, JSON-LD, llms.txt.
