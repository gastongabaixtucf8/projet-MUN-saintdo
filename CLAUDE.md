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

```
projet-mun/
├── index.html
├── about.html
├── pau.html
├── conference.html
├── gallery.html
├── style.css
├── script.js
├── admin/
│   ├── index.html      — Interface admin (Decap CMS)
│   └── config.yml      — Configuration du CMS
├── _data/
│   ├── pdfs.json       — Liste des PDFs
│   └── gallery.json    — Liste des photos
└── images/
    ├── logo MUN.webp
    ├── ville-de-pau.webp
    ├── chateau-pau.webp
    ├── pau-tour-de-france.webp
    ├── section-paloise.webp
    ├── gallery/        — Photos galerie (gérées via admin)
    └── committee/      — Photos du comité organisateur
```

## Content management (Decap CMS)

An admin panel lives at `/admin` (Decap CMS, configured in `admin/config.yml`). It reads and writes two JSON data files:

- `_data/pdfs.json` — documents shown on the Conference page
- `_data/gallery.json` — photos shown on the Gallery page

Gallery images are stored in `images/gallery/`; committee photos in `images/committee/`. Each admin save creates a GitHub commit and Netlify redeploys automatically.

### Netlify Identity + Git Gateway setup (one-time)

1. **Site configuration** → **Identity** → **"Enable Identity"**
2. **Identity** → **Services** → **"Enable Git Gateway"**
3. **Identity** → **Users** → **"Invite users"** → enter admin emails
4. Admins receive an email to set their password
5. They access `/admin`, log in, and manage content

Without Netlify: edit `_data/pdfs.json` directly for PDFs; drop photos into `images/gallery/` and register them in `_data/gallery.json`.

## Key content facts

- Contact email: `mun@saintdominique.fr`
- Registration: via MyMUN (`mymun.com`)
- Partner school: Alleyn's School, London (`alleynsmun.co.uk`)
- Venue: 30 Avenue Fouchet, 64000 Pau
- Recommended hotels: B&B Hôtel Pau Centre (budget), Kyriad Pau Centre (mid-range), Hôtel Ostal (boutique)

## Pending tasks

| Task | Owner | Status |
|---|---|---|
| Gallery photos | Mme Lemoine | Waiting |
| Organising committee names & photos | Secrétariat (September) | Waiting |
| Hotel booking links & prices | — | To confirm |
| Conference document PDFs | Organising committee | Upcoming |
| Netlify Identity + Git Gateway activation | Netlify admin | To do |
