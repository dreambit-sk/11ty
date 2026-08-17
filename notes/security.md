---
title: Security & data protection
tags: [security, gdpr, privacy]
created: 2026-08-17
---

# Security & data protection

## Threat model

Static marketing site, **no backend and no application-side data collection**. Attack surface is minimal:

- No forms posting to our own server; no database; no auth.
- No analytics, tracking pixels, or advertising cookies (verified — the only site JS is Bootstrap).
- No AI/model endpoints in this project, so the global AI-guardrails checklist does **not** apply here (revisit if that ever changes).

## Personal data (GDPR)

Personal data is processed only through two channels:

1. **Bookio booking widget** (`/pages/book`) — name, email, phone, reservation date/time, notes. **Stored on Bookio's systems; Bookio is a processor (sprostredkovateľ).**
2. **Email** to `jarka@dreambit.sk`.

Compliance artefacts:

- **Privacy policy** — `src/pages/privacy.md` (Slovak, GDPR / zák. 18/2018). Names Bookio as processor, states data is retained on Bookio's systems, lists data-subject rights and ÚOOÚ as supervisory authority.
- **Imprint** — `src/pages/imprint.md` (§3a Obchodného zákonníka + §4 zák. o elektronickom obchode): company identifiers, register entry, SOI, ODR.

### Open GDPR items (see [[roadmap]])

- Confirm and link **Bookio's operator legal name + privacy policy**, and ensure a **spracovateľská zmluva (DPA)** is in place.
- Register `vložka` number is a placeholder in `business.js` — fill from ORSR (legally required in imprint).
- Consider spelling out concrete retention periods.

## Dependency vulnerabilities

GitHub Dependabot reports a large number of advisories (~109 at last push: critical/high mostly) in the **build toolchain** (`laravel-mix`, old `bootstrap`, `luxon` 1.x, transitive webpack deps). These are **build-time devDependencies** — nothing here ships to visitors or runs at request time, so runtime exposure is low. Still worth a toolchain modernisation pass (tracked in [[roadmap]]).

## Transport / headers

- Served over HTTPS by Netlify.
- Consider adding security headers (CSP, X-Content-Type-Options, Referrer-Policy) via a header rule in `netlify.toml` (or a `_headers` file) — not yet configured. Note any CSP must allow the Bookio script/iframe + AWS S3 asset host.
