# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Website for the **MUN Saint Dominique** conference (Institut Saint Dominique, Pau). Conference dates: 19–21 March 2027. Stack: **Next.js 15** (App Router, React 19) + **Tailwind CSS** + **Sanity** (CMS) + **Vercel** (hosting).

Six pages (Home, About, MUN 2027, Pau & Travel, Gallery, Contact) plus a shared Header and Footer. Most content is hardcoded in the page components; Sanity powers the gallery photos, the programme PDF, and the committee topics PDF.

## Live URLs

- **Website (public):** https://projet-mun-saintdo.vercel.app — auto-deploys on every push to `main` (Vercel Git integration). This is the link to share.
- **Sanity Studio (admin, login required):** https://munsaintdo.sanity.studio — where admins manage photos/PDFs. Deploy it with `cd studio && npx sanity deploy`.
- The old WordPress site at `mun.saintdominique.fr` is **separate and unrelated** to this project.

## Git workflow

After every file edit, Claude automatically runs `git add -A && git commit -m "auto-save" && git push origin main` via a PostToolUse hook in `.claude/settings.json`. Pushing to `main` triggers a production deploy on Vercel.

## Development

```bash
# Web app (Next.js) — runs on localhost:3000
npm run dev

# Sanity Studio — runs on localhost:3333
cd studio && npm run dev

# Deploy the Studio (after schema/structure changes)
cd studio && npx sanity deploy
```

## Environment variables

The Sanity project is already created (project ID `3pjewoqe`) and both env files are filled in.

**Web app** — `.env.local` at the root:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=3pjewoqe
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=   # contact form delivery (see below)
```

The contact form (`components/ContactForm.tsx`) sends submissions to `mun@saintdominique.fr` via [Web3Forms](https://web3forms.com). Get a free access key for that address and set it in `.env.local` and in the Vercel project env vars. Until the key is set, the form shows an error on submit.

**Studio** — `studio/.env`:
```
SANITY_STUDIO_PROJECT_ID=3pjewoqe
SANITY_STUDIO_DATASET=production
```

## Project structure

```
projet-mun/
├── app/                        — Next.js pages (App Router)
│   ├── layout.tsx              — Root layout, wraps pages with Header + Footer
│   ├── page.tsx                — Home (hardcoded content)
│   ├── globals.css             — Tailwind + reusable component classes
│   ├── about/page.tsx          — Hero, autoplay video, Institut, Our Philosophy, MUN programme, Alleyn's, CTA
│   ├── mun2027/page.tsx        — Overview, organising committee, documents (fetches 2 PDFs from Sanity)
│   ├── pau/page.tsx            — City, attractions, travel, Pro Sky, partner hotels, map
│   ├── gallery/page.tsx        — Photo gallery (fetches galleryPhoto from Sanity)
│   └── contact/page.tsx        — Contact form, info, socials, map
├── components/
│   ├── Header.tsx              — White top bar (socials + Apply) + floating glass pills (logo + nav); sticky nav (client)
│   ├── Footer.tsx              — Deep-navy footer with links and contact info
│   ├── ContactForm.tsx         — Web3Forms contact form (client component)
│   └── OrganisingCommittee.tsx — Shared committee section (data + cards), used on MUN 2027
├── lib/sanity/client.ts        — Sanity client
├── studio/                     — Sanity Studio (standalone, deployed)
│   ├── sanity.config.ts        — Config + custom structure; singletons protected from delete/duplicate
│   ├── sanity.cli.ts           — studioHost: munsaintdo, deployment.appId
│   └── schemaTypes/
│       ├── index.ts
│       ├── galleryPhoto.ts             — image + optional caption
│       ├── programDocument.ts          — programme PDF (singleton "programme-singleton")
│       ├── committeeTopicsDocument.ts  — committee topics PDF (singleton "committee-topics-singleton")
│       ├── delegateGuideDocument.ts    — delegate guide PDF (singleton "delegate-guide-singleton")
│       └── committeeMember.ts          — organising committee member (name, role, photo, quote, order)
├── public/
│   ├── images/                 — logo, hero, committee photos, Pau photos (served)
│   ├── saint-dominique-video.mp4 — About page autoplay video (~30 MB)
│   └── delegates-guide.pdf     — static download on MUN 2027
├── tailwind.config.js          — custom theme (navy palette + gold)
├── next.config.ts              — cdn.sanity.io images + Cache-Control headers
└── images/                     — source/original images (duplicates of public/images; only public/ is served)
```

## How content works

Most page content is hardcoded in the `app/**/page.tsx` files — to change copy, edit the JSX. Sanity drives three things, all editable in the Studio (login required) and live without a redeploy:

- **Gallery photos** — `/gallery` fetches `*[_type == "galleryPhoto"] | order(_createdAt desc)`. Studio → **Gallery Photos**.
- **Programme PDF** — `/mun2027` fetches the `programDocument` singleton. Studio → **Programme PDF**. Shows "Coming Soon" until uploaded.
- **Committee Topics PDF** — `/mun2027` fetches the `committeeTopicsDocument` singleton. Studio → **Committee Topics PDF**. Shows "Coming Soon" until uploaded.

To **replace a PDF**, edit the file field on the existing singleton and Publish — do NOT delete the document (the Delete action is disabled on singletons to prevent the Studio getting stuck in a deleted/read-only state).

## Sanity schema

Three document types: `galleryPhoto` (image + optional caption), `programDocument` and `committeeTopicsDocument` (each a single PDF `file` field, used as a singleton). The old test `siteSettings` type has been removed. `sanity.config.ts` disables the `delete`/`duplicate` actions for the singleton types.

## Design / theme

Tailwind custom theme (`tailwind.config.js`):
- `navy-dark` `#0e1f42` — header + footer (the darkest anchor)
- `navy` `#1f4280` — page heroes, CTA sections, headings
- `navy-mid` `#34609f`, `navy-light` `#5180c5` — accents/hovers
- `gold` `#c9a84c` — accent

Other notes:
- **Header**: a solid white top bar (navy social circles + gold "Apply on MyMUN") that scrolls away, plus two frosted "liquid-glass" pills (logo + nav) that are sticky and follow on scroll. Glass = `bg-white/65 backdrop-blur-md border-2 border-gray-400/80`. The logo's globe overflows its pill.
- **Rounded sections**: big colored/photo bands use `rounded-[2rem]` (or `rounded-t`/`rounded-b` where they touch another colored band, to avoid white notches between two adjacent navy sections).
- Reusable classes in `globals.css`: `.btn-primary`, `.btn-outline`, `.btn-white`, `.nav-link`, `.card`, `.form-input`, `.section-title`, `.page-hero`.

## Caching & replacing images

- Pages and local media are served with `Cache-Control: public, max-age=0, must-revalidate` (see `next.config.ts` `headers()`), so visitors always get the latest version without a forced refresh.
- **When replacing an image, give it a NEW filename** (e.g. `pau.jpg` → `pau-2.jpg`) and update the reference. The Next.js image optimizer caches optimized images by source URL, so reusing the same filename can still serve the old picture. A new filename guarantees the new image shows.

## Key content facts

- Contact email: `mun@saintdominique.fr` · Phone: +33 5 59 32 01 23
- Conference dates: 19, 20 & 21 March 2027
- Registration: via MyMUN (`mymun.com`)
- Partner school: Alleyn's School, London (`alleynsmun.co.uk`)
- Venue: 30 Avenue Fouchet, 64000 Pau
- Official travel partner: **Pro Sky** (`pro-sky.com`) — page Pau lists email + phone contacts for two regions.
- The MUN 2027 page no longer lists a per-committee section or a "Language" field. The conference theme is still to be announced.
- The organising committee shown is the 2025–2026 team; the 2027 committee is confirmed in September 2026.

## Writing rules

- **Never use emojis** anywhere in the codebase — not in JSX, not in text content, not in comments. Use SVG icons or plain text labels instead.
- No comments in code unless the reason is non-obvious.
- All site content is in English.

## Pending tasks

| Task | Owner | Status |
|---|---|---|
| Upload real Programme PDF & Committee Topics PDF (replace test files) | Organising committee | Upcoming |
| Gallery photos | Mme Lemoine | Waiting |
| 2027 organising committee names & photos | Secrétariat (September 2026) | Waiting |
| Conference theme | Organising committee | To confirm |
| Point `mun.saintdominique.fr` to this Vercel site (DNS, school IT) | School / Gaston | Idea |
| Compress the About page video (~30 MB → lighter) | — | Optional |
