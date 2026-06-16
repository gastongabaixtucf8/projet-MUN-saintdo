# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Website for the **MUN Saint Dominique** conference (Institut Saint Dominique, Pau). Conference dates: 19–21 March 2027. Stack: **Next.js** (frontend) + **Sanity** (CMS) + **Vercel** (hosting).

## Git workflow

After every file edit, Claude automatically runs `git add -A && git commit -m "auto-save" && git push origin main` via a PostToolUse hook in `.claude/settings.json`. No manual commits needed.

## Development

```bash
# Web app (Next.js) — runs on localhost:3000
npm run dev

# Sanity Studio — runs on localhost:3333
cd studio && npm run dev
```

Both need their own env files filled in (see below) before they work.

## Environment variables

**Web app** — create `.env.local` at the root (copy from `.env.local.example`):
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

**Studio** — create `studio/.env` (copy from `studio/.env.example`):
```
SANITY_STUDIO_PROJECT_ID=your-project-id
SANITY_STUDIO_DATASET=production
```

The Sanity project ID is found at sanity.io/manage → your project → Settings.

## Project structure

```
projet-mun/
├── app/                    — Next.js pages (App Router)
│   ├── layout.tsx
│   ├── page.tsx            — Home page, fetches message from Sanity
│   └── globals.css
├── lib/sanity/
│   └── client.ts           — Sanity client
├── studio/                 — Sanity Studio (standalone)
│   ├── sanity.config.ts
│   └── schemaTypes/
│       └── siteSettings.ts — "message" field shown on home page
├── package.json            — Next.js deps
└── next.config.ts
```

## How content works

- Admins open the Studio, find **Site Settings**, and change the **Message** field
- The Next.js page fetches `*[_type == "siteSettings"][0].message` from Sanity
- If no message is set, the page falls back to `"Hello Cows"`

## Sanity schema

Currently one document type: `siteSettings` with a single `message` (string) field. This is the test schema — the real site will add: gallery photos, conference PDFs, committee members, page content.

## Key content facts

- Contact email: `mun@saintdominique.fr`
- Registration: via MyMUN (`mymun.com`)
- Partner school: Alleyn's School, London (`alleynsmun.co.uk`)
- Venue: 30 Avenue Fouchet, 64000 Pau
- Conference dates: 19–21 March 2027

## Pending tasks

| Task | Owner | Status |
|---|---|---|
| Create Sanity account + project, fill in env files | Gaston | To do |
| Gallery photos | Mme Lemoine | Waiting |
| Organising committee names & photos | Secrétariat (September) | Waiting |
| Hotel booking links & prices | — | To confirm |
| Conference document PDFs | Organising committee | Upcoming |
