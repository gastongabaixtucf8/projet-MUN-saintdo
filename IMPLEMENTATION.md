# Implémentation du site MUN Saint Dominique

## Vue d'ensemble

Le site est composé de trois parties qui travaillent ensemble :

```
Sanity Studio  →  Vercel (site web)
(les admins         (ce que les visiteurs
modifient           voient)
le contenu)
       ↑
   Base de données
   Sanity (cloud)
```

---

## 1. Sanity — Le gestionnaire de contenu (CMS)

### C'est quoi ?
Sanity est une plateforme qui stocke le contenu du site (textes, images, PDFs) dans le cloud. Les admins peuvent modifier ce contenu sans toucher au code.

### Le Studio (interface admin)
- **En local** : `localhost:3333` (uniquement sur l'ordinateur de développement)
- **En ligne** : à déployer via `npx sanity deploy` → URL publique type `https://mun-saintdo.sanity.studio`

### Comment un admin modifie du contenu ?
1. Ouvrir le Studio (local ou en ligne)
2. Se connecter avec son compte Sanity (Google ou GitHub)
3. Trouver le document à modifier (ex: "Site Settings")
4. Modifier le champ souhaité
5. Cliquer sur **Publish**
6. Le changement apparaît immédiatement sur le site

### Les données
- **Project ID** : `3pjewoqe`
- **Dataset** : `production`
- Les données sont stockées dans le cloud Sanity, accessibles depuis n'importe où

### Ajouter un admin
1. Aller sur [sanity.io/manage](https://sanity.io/manage)
2. Cliquer sur le projet `3pjewoqe`
3. **Members** → **Invite member**
4. Entrer l'email de la personne → rôle **Editor**

---

## 2. Vercel — L'hébergement du site

### C'est quoi ?
Vercel héberge le site web (ce que les visiteurs voient). Chaque fois qu'un changement est poussé sur GitHub, Vercel redéploie automatiquement.

### URLs
- **Site en production** : `https://projet-mun-saintdo.vercel.app`
- **Dashboard Vercel** : `vercel.com/gastongabaixtucf8s-projects/projet-mun-saintdo`

### Comment le site récupère le contenu ?
À chaque fois qu'un visiteur charge la page, Next.js interroge Sanity en temps réel :

```
Visiteur ouvre le site
        ↓
Vercel exécute le code Next.js
        ↓
Next.js demande le contenu à Sanity
        ↓
Sanity renvoie le texte/images/PDFs
        ↓
La page s'affiche avec le contenu à jour
```

C'est pourquoi un changement publié dans Sanity apparaît **immédiatement** sur le site, sans redéploiement.

### Variables d'environnement sur Vercel
Ces clés permettent au site de se connecter à Sanity :
| Variable | Valeur |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `3pjewoqe` |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |

---

## 3. Le code — Next.js

### Structure
```
projet-mun/
├── app/
│   ├── page.tsx        → page d'accueil (ce que les visiteurs voient)
│   ├── layout.tsx      → structure commune à toutes les pages
│   └── globals.css     → styles (couleurs, polices, mise en page)
├── lib/sanity/
│   └── client.ts       → connexion entre Next.js et Sanity
└── studio/             → code du Studio Sanity
    ├── sanity.config.ts
    └── schemaTypes/
        └── siteSettings.ts  → définit les champs éditables dans le Studio
```

### Modifier le design
- **Position du texte / mise en page** → `app/globals.css`
- **Structure de la page** → `app/page.tsx`

### Modifier ce qu'on peut éditer dans le Studio
→ `studio/schemaTypes/siteSettings.ts`  
Ajouter un champ = ajouter une nouvelle option dans le Studio pour les admins.

---

## 4. Workflow complet

### Modifier du contenu (admin, sans coder)
1. Ouvrir le Studio
2. Modifier → Publier
3. Le site se met à jour automatiquement ✓

### Modifier le design (développeur)
1. Modifier le code dans `app/page.tsx` ou `app/globals.css`
2. Tester en local sur `localhost:3000`
3. Pousser sur GitHub (`git push`) → Vercel redéploie automatiquement ✓

### Ajouter un nouveau champ éditable
1. Ajouter le champ dans `studio/schemaTypes/siteSettings.ts`
2. Ajouter la récupération du champ dans `app/page.tsx`
3. Pousser sur GitHub → redéploiement automatique ✓

---

## 5. Commandes utiles (développement local)

```bash
# Démarrer le site en local
npm run dev                        # → localhost:3000

# Démarrer le Studio en local
cd studio && npm run dev           # → localhost:3333

# Déployer le Studio en ligne
cd studio && npx sanity deploy

# Déployer le site sur Vercel
vercel --prod
```

---

## 6. Comptes et accès

| Service | Compte | Accès |
|---|---|---|
| Sanity | GitHub (gaston.gabaix@gmail.com) | sanity.io/manage |
| Vercel | gastongabaixtucf8 | vercel.com |
| GitHub | gastongabaixtucf8 | github.com/gastongabaixtucf8/projet-MUN-saintdo |
