# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Website for the **MUN Saint Dominique** conference (Institut Saint Dominique, Pau). Conference dates: 19–21 March 2027. Stack: **Next.js 15** (App Router, React 19) + **Sanity** (CMS) + **Vercel** (hosting).

The site is live and built out: six real pages (Home, About, MUN 2027, Pau & Travel, Gallery, Contact) plus a shared Header and Footer. Most content is hardcoded in the page components; Sanity currently powers only the gallery photos and the programme PDF.

## Git workflow

After every file edit, Claude automatically runs `git add -A && git commit -m "auto-save" && git push origin main` via a PostToolUse hook in `.claude/settings.json`. No manual commits needed.

## Development

```bash
# Web app (Next.js) — runs on localhost:3000
npm run dev

# Sanity Studio — runs on localhost:3333
cd studio && npm run dev
```

## Environment variables

The Sanity project is already created (project ID `3pjewoqe`) and both env files are filled in.

**Web app** — `.env.local` at the root:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=3pjewoqe
NEXT_PUBLIC_SANITY_DATASET=production
```

**Studio** — `studio/.env`:
```
SANITY_STUDIO_PROJECT_ID=3pjewoqe
SANITY_STUDIO_DATASET=production
```

The Sanity project ID is found at sanity.io/manage → your project → Settings.

## Project structure

```
projet-mun/
├── app/                        — Next.js pages (App Router)
│   ├── layout.tsx              — Root layout, wraps pages with Header + Footer
│   ├── page.tsx                — Home (hardcoded content)
│   ├── globals.css             — Tailwind + reusable component classes
│   ├── about/page.tsx          — School, MUN programme, organising committee, partner
│   ├── mun2027/page.tsx        — Conference overview, committees, documents (fetches programme PDF)
│   ├── pau/page.tsx            — City, attractions, travel, accommodation, map
│   ├── gallery/page.tsx        — Photo gallery (fetches galleryPhoto from Sanity)
│   └── contact/page.tsx        — Contact info, socials, map
├── components/
│   ├── Header.tsx              — Sticky nav + mobile menu (client component)
│   └── Footer.tsx              — Footer with links and contact info
├── lib/sanity/
│   └── client.ts               — Sanity client
├── studio/                     — Sanity Studio (standalone)
│   ├── sanity.config.ts        — Studio config + custom structure (singletons)
│   └── schemaTypes/
│       ├── index.ts
│       ├── siteSettings.ts     — legacy test "message" field (unused by the site)
│       ├── galleryPhoto.ts     — image + optional caption
│       └── programDocument.ts  — programme PDF (singleton "programme-singleton")
├── public/images/              — logo, hero, committee photos, Pau photos (served)
├── tailwind.config.js          — custom theme (navy + gold)
├── package.json                — Next.js deps
└── next.config.ts              — allows cdn.sanity.io images
```

## How content works

Most page content is hardcoded directly in the `app/**/page.tsx` files — to change copy, edit the JSX. Sanity drives two things only:

- **Gallery photos** — `/gallery` fetches `*[_type == "galleryPhoto"] | order(_createdAt desc)`. Admins add photos in the Studio under **Gallery Photos**.
- **Programme PDF** — `/mun2027` fetches the `programDocument` singleton (`_id == "programme-singleton"`). Admins upload the PDF in the Studio under **Programme PDF**. Shows "Coming Soon" until uploaded.

The `siteSettings` "message" field is leftover scaffolding from the initial test and is not used anywhere on the site.

## Sanity schema

Three document types: `galleryPhoto` (image + optional caption), `programDocument` (single PDF file, used as a singleton), and `siteSettings` (legacy, unused). Future content types may include committee members and richer page content.

## Design / theme

- Tailwind with a custom theme: `navy` (`#0e1f42`), `navy-mid`, `navy-light`, and `gold` (`#c9a84c`) accent.
- Reusable classes in `globals.css`: `.btn-primary`, `.btn-outline`, `.btn-white`, `.nav-link`, `.card`, `.form-input`, `.section-title`, `.page-hero`.

## Key content facts

- Contact email: `mun@saintdominique.fr`
- Phone: +33 5 59 32 01 23
- Registration: via MyMUN (`mymun.com`)
- Partner school: Alleyn's School, London (`alleynsmun.co.uk`)
- Venue: 30 Avenue Fouchet, 64000 Pau
- Conference dates: 19–21 March 2027
- Committees: UNGA, UNSC, HRC, ECOSOC (topics to be announced)
- The organising committee currently shown on `/about` is the 2025–2026 team; the 2027 committee is confirmed in September 2026.

## Writing rules

- **Never use emojis** anywhere in the codebase — not in JSX, not in text content, not in comments. Use SVG icons or plain text labels instead.
- No comments in code unless the reason is non-obvious.
- All site content is in English.

## Pending tasks

| Task | Owner | Status |
|---|---|---|
| Gallery photos | Mme Lemoine | Waiting |
| Programme PDF upload | Organising committee | Upcoming |
| 2027 organising committee names & photos | Secrétariat (September 2026) | Waiting |
| Conference theme & committee topics | Organising committee | To confirm |
| Hotel booking links & prices | — | To confirm |
