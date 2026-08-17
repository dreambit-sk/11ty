# CLAUDE.md — DreamBit (11ty)

## Quick Facts

- **What:** Marketing site for **DreamBit s.r.o.**, English lessons (osobne v Stupave + online). Slovak-language content.
- **Stack:** [Eleventy/11ty](https://www.11ty.dev/) v2 + Bootstrap 5 (compiled via Laravel Mix / webpack + SASS).
- **Repo:** `git@github.com:dreambit-sk/11ty.git` (branch: `main`).
- **Hosting:** Netlify, auto-deploys on push to `main`. Live domain: **https://dreambit.sk**.
- **Node:** 22 (pinned — see [[infrastructure]]).
- **Booking:** External [Bookio](https://services.bookio.com) widget on the `/pages/book` page (their servers store the booking data).

## Critical Constraints

- **Content is Slovak** — `lang="sk"` site-wide. Don't reintroduce `lang="en"`.
- **Build runs in `node-toolbox`** — `flatpak-spawn --host toolbox run --container node-toolbox npm run build`. Node/npm are not on the host PATH.
- **Never edit `_site/` or `dist/`** — generated output (gitignored). Edit `src/` and `.eleventy.js`.
- **Legal + contact data lives in one place:** [src/data/business.js](src/data/business.js). Imprint, privacy page, JSON-LD and llms.txt all read from it.
- **Open TODOs (legal):** register `vložka` number is a placeholder (`XXXXX/B`); Bookio's exact operator + privacy link + DPA still to confirm. See [[roadmap]].
- **Light-only design** — `color-scheme: only light` declared (meta + `:root`). Don't remove; it shields against mobile force-dark.
- **Node version** is set in 3 places (`netlify.toml`, `.nvmrc`, `package.json` engines) **and** the Netlify UI (Dependency management). `netlify.toml` wins at build time.

## Code-to-notes map

| Area / files | Note |
|---|---|
| What the project is, index of notes | [[overview]] |
| Netlify, GitHub, build pipeline, Node pinning, domain, Bookio | [[infrastructure]] |
| 11ty config, data files, includes/layouts, SEO/AI additions | [[build-plan]] |
| Coding conventions (Slovak content, headings, single-source data) | [[best-practices]] |
| Threat model, GDPR/Bookio, privacy, dependency vulns | [[security]] |
| Local SEO + growth ideas | [[ideas]] |
| Prioritised backlog | [[roadmap]] |

Key source paths: `.eleventy.js` (config), `src/data/` (global data), `src/includes/` (partials incl. `meta.njk`, `schema.njk`), `src/layouts/base.njk`, `src/pages/`, `src/scss/`.

## Notes rules

Obsidian-compatible `notes/` folder. Lowercase filenames, `[[WikiLinks]]`, YAML frontmatter (`title`, `tags`, `created`). **Update the relevant note in the same change whenever behaviour, flow, a decision, or a constraint changes** — not optional.
