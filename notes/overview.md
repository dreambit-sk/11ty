---
title: Overview
tags: [overview]
created: 2026-08-17
---

# Overview

Marketing website for **DreamBit s.r.o.** — private English lessons in Stupava (Slovakia) and online, taught by Jarka (Jarmila Munro), an experienced tutor with 15 years in London and business/finance background. The site is in **Slovak**.

## Purpose

- Present the offering (bežná angličtina, pracovná angličtina) and testimonials.
- Let visitors **book lessons** via an embedded Bookio widget (`/pages/book`).
- Provide legally required company info (imprint) and a GDPR privacy policy.
- Rank locally ("angličtina Stupava") and be quotable by AI answer engines.

## Tech at a glance

- [Eleventy/11ty](https://www.11ty.dev/) v2 static site generator (Nunjucks + Markdown).
- Bootstrap 5 compiled with Laravel Mix (webpack) + SASS.
- Hosted on Netlify, deployed from GitHub `main`. Domain: https://dreambit.sk.

## Notes index

- [[infrastructure]] — hosting, deploy pipeline, Node version, external services.
- [[build-plan]] — architecture, 11ty config, data/includes/layouts, SEO & AI additions.
- [[best-practices]] — coding conventions for this repo.
- [[security]] — threat model, GDPR/Bookio, dependency vulnerabilities.
- [[ideas]] — local SEO and growth ideas.
- [[roadmap]] — prioritised backlog and open TODOs.
