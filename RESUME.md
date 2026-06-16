# Résumé du projet — Site MUN Saint Dominique

---

## 1. Vue d'ensemble du site

Site web de la conférence **Model United Nations (MUN) de l'Institut Saint Dominique**, Pau.  
Hébergé sur **Netlify**, code source sur **GitHub** (repo : `gastongabaixtucf8/projet-mun`).

### Pages du site
| Page | Fichier | Contenu |
|---|---|---|
| Accueil | `index.html` | Hero, présentation, liens rapides, contact |
| À propos | `about.html` | École, programme MUN, partenariat Alleyn's |
| Pau & Infos pratiques | `pau.html` | Découvrir Pau, choses à faire, transport, hôtels, carte |
| Conférence | `conference.html` | Comité organisateur, inscription, documents PDF |
| Galerie | `gallery.html` | Photos des éditions précédentes |

---

## 2. Informations de la conférence

- **Dates** : 19, 20 & 21 Mars 2027
- **Lieu** : Institut Saint Dominique, 30 Avenue Fouchet, 64000 Pau
- **Inscription** : via MyMUN (mymun.com)
- **Email de contact** : mun@saintdominique.fr
- **Partenaire** : Alleyn's School, Londres (alleynsmun.co.uk)

### Hôtels recommandés (page Pau)
1. **B&B Hôtel Pau Centre** — budget
2. **Kyriad Pau Centre** — milieu de gamme
3. **Hôtel Ostal** — boutique

---

## 3. Modifications réalisées

### Visuelles
- Nouveau logo (`logo MUN.webp`) — remplace l'ancien
- Suppression de tous les emojis sur toutes les pages
- **Page d'accueil** : dates affichées en bleu dans le hero
- **Page Pau** :
  - `ville-de-pau.webp` en fond de la section "Discover Pau" (opacité 65%)
  - Texte de "Discover Pau" en noir pour lisibilité
  - 3 photos carrées (`section-paloise.webp`, `chateau-pau.webp`, `pau-tour-de-france.webp`) intercalées dans "Things to Do in Pau"
  - Section "Outdoor Activities" supprimée
  - Carte Google Maps interactive en bas de page
- **Page Conference** : "Organising Committee" placé en premier

### Contenu
- Textes enrichis sur toutes les pages (plus de détails, style proche du site actuel)
- Formulaire de contact : ajout du champ "Your school / establishment"
- Email `mun@saintdominique.fr` dans la section contact

### Technique
- Google Maps embed (Institut Saint Dominique) : page Pau + page Accueil
- Toutes les pages mises à jour sur GitHub et déployées sur Netlify

---

## 4. Système admin (Decap CMS)

### Comment ça fonctionne
L'interface admin est accessible à l'URL : **`votre-site.netlify.app/admin`**

Elle permet aux admins (sans toucher au code) de :
- Ajouter / modifier / supprimer des **PDFs** (page Conférence)
- Uploader / supprimer des **photos** (page Galerie)

Chaque modification crée automatiquement un commit sur GitHub et Netlify redéploie le site en 1-2 minutes.

### Fichiers de données
| Fichier | Rôle |
|---|---|
| `_data/pdfs.json` | Liste des documents PDF affichés sur la page Conférence |
| `_data/gallery.json` | Liste des photos de la galerie |
| `images/gallery/` | Dossier où sont stockées les photos de la galerie |

### Mise en place sur Netlify (étapes à faire une seule fois)
1. **Site configuration** → **Identity** → **"Enable Identity"**
2. **Identity** → **Services** → **"Enable Git Gateway"**
3. **Identity** → **Users** → **"Invite users"** → entrer les emails des admins
4. Les admins reçoivent un email pour créer leur mot de passe
5. Ils accèdent à `/admin`, se connectent, et gèrent le contenu

### Sans Netlify (solution manuelle)
- Éditer `_data/pdfs.json` directement pour les PDFs
- Glisser les photos dans `images/gallery/` et les ajouter dans `_data/gallery.json`

---

## 5. Ce qui reste à faire

| Tâche | Responsable | Statut |
|---|---|---|
| Photos de la conférence (galerie) | Mme Lemoine | En attente |
| Noms et photos du comité organisateur | Élèves du secrétariat (septembre) | En attente |
| Liens de réservation exacts des hôtels | À vérifier | À confirmer |
| Prix des hôtels | À vérifier | À confirmer |
| PDFs des documents de conférence | Comité organisateur | À venir |
| Activation Netlify Identity + Git Gateway | Admin Netlify | À faire |

---

## 6. Structure technique du projet

```
projet-mun/
├── index.html          — Page d'accueil
├── about.html          — À propos
├── pau.html            — Pau & Infos pratiques
├── conference.html     — Conférence
├── gallery.html        — Galerie
├── style.css           — Styles CSS globaux
├── script.js           — JavaScript (nav, galerie, PDFs)
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

---

*Document généré le 15 juin 2026*
