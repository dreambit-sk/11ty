---
title: Best practices
tags: [conventions, standards]
created: 2026-08-17
---

# Best practices

Conventions specific to this repo (in addition to the global standards).

## Content & language

- Site content is **Slovak**; keep `lang="sk"`. Only per-page `meta.lang` should ever differ, and only with reason.
- Keep titles/descriptions keyword-relevant for local search ("angličtina", "Stupava", "online").

## Markup / SEO

- Every page has exactly one `<h1>`. To upgrade a heading's semantics without changing its look, keep the visual size via a Bootstrap class (e.g. `<h1 class="h2">`, `<h2 class="h4">`).
- Structured data, OG/Twitter/canonical tags belong in `includes/schema.njk` and `includes/meta.njk` — don't inline per page.
- Declare `color-scheme: only light` (already in `_custom.scss` `:root` + `<meta>`); don't remove.

## Data & single source of truth

- Legal/contact/company facts live only in `src/data/business.js`. Imprint, privacy, JSON-LD and llms.txt read from it. Never duplicate these values inline.
- Testimonials live in `src/data/reviews.js` (drives both the visible list and JSON-LD reviews).

## Build hygiene

- Edit `src/` and config; **never** edit generated `_site/` or `dist/` (gitignored).
- Run builds through `node-toolbox` (see [[infrastructure]]).
- Don't commit build output or secrets. No API keys in source.

## External embeds

- Third-party embeds (Bookio) are the only external scripts. Any new embed that processes personal data must be reflected in the privacy policy and [[security]].

## Deployment

- `main` is the deploy branch (Netlify auto-deploys). Push only intentionally; there is no separate staging.
