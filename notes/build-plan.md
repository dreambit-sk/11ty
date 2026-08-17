---
title: Build plan & architecture
tags: [architecture, eleventy, seo]
created: 2026-08-17
---

# Build plan & architecture

## Tech stack decisions

- **11ty v2** — static output is ideal for SEO/AI crawlers and near-zero hosting cost. Templates: Nunjucks (`njk`) + Markdown (Markdown also processed through Nunjucks).
- **Bootstrap 5 via Laravel Mix** — inherited from the `11ty-plain-bootstrap5` template. Mix/webpack compiles `src/scss/app.scss` → `dist/app.css` and `src/js/app.js` → `dist/app.js`; Eleventy passthrough-copies `dist/`.

## Directory layout (`src/`)

- `data/` — global data (filename = key):
  - `business.js` — **single source of truth** for legal/contact details, course offerings, areaServed, social profiles. Consumed by imprint, privacy, `schema.njk`, `llms.njk`.
  - `reviews.js` — testimonials; rendered on the homepage and emitted as schema.org `Review`.
  - `build.js` — env + build timestamp.
- `includes/` — partials: `header`, `navigation`, `footer`, `meta` (OG/Twitter/canonical), **`schema.njk`** (JSON-LD), plus the image shortcode defined in `.eleventy.js`.
- `layouts/base.njk` — HTML skeleton; sets `lang`, `color-scheme`, includes `meta.njk` + `schema.njk`.
- `pages/` — `book.njk` (Bookio widget), `imprint.md`, `privacy.md`.
- `index.njk` — homepage (hero, offering cards, reviews loop).
- `scss/` — `app.scss` (Bootstrap imports), `_custom.scss` (custom + `color-scheme`), `_my_variables.scss`.

## SEO / AI-search additions

Implemented to improve organic ranking and citation by AI answer engines:

- **JSON-LD** (`schema.njk`): `LocalBusiness` + `EducationalOrganization` with address, `areaServed`, `makesOffer` (courses), `review` + `aggregateRating`. Site-wide via `base.njk`.
- **`lang="sk"`** everywhere (was `en`/empty — a major mis-signal on Slovak content).
- **Single `<h1>`** per page (homepage uses a `visually-hidden` h1; other headings upgraded semantically while keeping their Bootstrap size class, e.g. `<h1 class="h2">`).
- **`meta.njk`**: canonical, `og:type`, fixed `og:locale` (`sk_SK`), corrected Twitter tags.
- **`sitemap.njk`** → `/sitemap.xml` (loops `collections.all`, `isoDate` filter for lastmod).
- **`robots.njk`** → `/robots.txt` (allows all incl. GPTBot/ClaudeBot/PerplexityBot/Google-Extended; links sitemap).
- **`llms.njk`** → `/llms.txt` (plain-Slovak business summary for LLM crawlers).

`sitemap`/`robots`/`llms` set `eleventyExcludeFromCollections: true` so they don't pollute the sitemap loop or navigation.

## Conventions when adding pages

Give every page a real `<h1>` and (where relevant) a `title`/`meta` block. If it introduces new legal or contact facts, add them to `data/business.js`, don't hardcode. See [[best-practices]].
