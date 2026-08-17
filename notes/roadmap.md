---
title: Roadmap
tags: [roadmap, backlog]
created: 2026-08-17
---

# Roadmap

Prioritised backlog. See [[ideas]] for the raw pool.

## Now — legal must-fix

- [ ] **Register `vložka` number** — replace placeholder `XXXXX/B` in `src/data/business.js` with the real value from ORSR. Legally required in the imprint.
- [ ] **Bookio processor details** — confirm operator legal name, link its privacy policy in `privacy.md`, and ensure a signed **DPA (spracovateľská zmluva)** exists. See [[security]].
- [ ] **Set Netlify UI Node.js = 22.x** (Dependency management) to clear EOL/agent banners. Build already pinned to 22 via `netlify.toml`. See [[infrastructure]].

## Next — growth

- [ ] **Google Business Profile** — set up; then add profile + Facebook URLs to `business.socialProfiles`.
- [ ] Slovak directory listings (Firmy.sk, Zoznam, Azet).
- [ ] Verify `sitemap.xml` / `robots.txt` and submit sitemap in Google Search Console.

## Later — maintenance & content

- [ ] **Dependency modernisation** — address Dependabot advisories; consider replacing `laravel-mix` with Vite and bumping Bootstrap.
- [ ] Evaluate **Node 24** (build-test, then bump `netlify.toml`/`.nvmrc`/`engines`).
- [ ] **Blog section** (Slovak articles) for long-tail local SEO + AI citation.
- [ ] Refine privacy policy retention periods; add security headers / CSP via `netlify.toml`.

## Done

- SEO/AI optimisation: JSON-LD, `lang=sk`, `<h1>`s, sitemap, robots, llms.txt, canonical + meta fixes.
- Imprint rewritten to Slovak legal minimum; GDPR privacy policy added.
- `color-scheme: only light` shield.
- Node pinned to 22 (`netlify.toml` + `.nvmrc` + `engines`); default `baseUrl` → https://dreambit.sk.
