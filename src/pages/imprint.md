---
layout: base
title: Impressum
eleventyNavigation:
  key: Imprint
  hideInMainNav: true
---

# Impressum

Prevádzkovateľ webovej stránky a poskytovateľ služieb:

**{{ business.legalName }}**

Sídlo: {{ business.street }}, {{ business.postalCode }} {{ business.city }}, {{ business.country }}

IČO: {{ business.ico }}
DIČ: {{ business.dic }}
IČ DPH: {{ business.icDph }}

Spoločnosť zapísaná v Obchodnom registri {{ business.registerCourt }}, {{ business.registerEntry }}.

Konatelia: {% for person in business.executives %}{{ person }}{% if not loop.last %}, {% endif %}{% endfor %}.

## Kontakt

E-mail: [{{ business.email }}](mailto:{{ business.email }})

## Orgán dozoru

Slovenská obchodná inšpekcia (SOI)
Inšpektorát SOI pre Bratislavský kraj
Bajkalská 21/A, P. O. BOX č. 5, 820 07 Bratislava

## Riešenie sporov online

Spotrebiteľ má právo obrátiť sa na predávajúceho so žiadosťou o nápravu, prípadne podať návrh na alternatívne riešenie sporu. Európska platforma na riešenie sporov online (ODR) je dostupná na [ec.europa.eu/consumers/odr](https://ec.europa.eu/consumers/odr).
