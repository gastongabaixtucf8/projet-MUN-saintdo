# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static website for the **MUN Saint Dominique** conference (Institut Saint Dominique, Pau). Conference dates: 19–21 March 2027. No build system — plain HTML, CSS, and JavaScript, deployed to Netlify (also linked to Vercel under project `projet-mun-saintdo`).

## Development

Open `index.html` directly in a browser, or serve locally with:

```bash
npx serve .
# or
python3 -m http.server 8080
```

No build step, no package manager, no compilation required.

## Site structure

| File | Page |
|---|---|
| `index.html` | Accueil (hero, présentation, contact) |
| `about.html` | À propos (école, programme MUN, partenariat Alleyn's) |
| `pau.html` | Pau & Infos pratiques (carte Google Maps, hôtels, transport) |
| `conference.html` | Conférence (comité organisateur, inscription, PDFs) |
| `gallery.html` | Galerie photos |

Shared assets: `style.css` (global styles), `script.js` (nav, gallery, PDF rendering).

## Content management (Decap CMS)

An admin panel lives at `/admin` (Decap CMS, configured in `admin/config.yml`). It reads and writes two JSON data files:

- `_data/pdfs.json` — documents shown on the Conference page
- `_data/gallery.json` — photos shown on the Gallery page

Gallery images are stored in `images/gallery/`; committee photos in `images/committee/`. Each admin save creates a GitHub commit and Netlify redeploys automatically.

The Netlify Identity + Git Gateway setup (one-time) is documented in `RESUME.md §4`.

## Key content facts

- Contact email: `mun@saintdominique.fr`
- Registration: via MyMUN (`mymun.com`)
- Partner school: Alleyn's School, London (`alleynsmun.co.uk`)
- Venue: 30 Avenue Fouchet, 64000 Pau
