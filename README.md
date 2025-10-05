# Restaurant vitrine + Decap CMS (sans serveur)

Ce projet est un **site vitrine simple** (HTML/CSS/JS) pour un restaurant, avec un **panneau d'administration** via **Decap CMS** à l'URL `/admin`.  
Le contenu est stocké dans `content/site.json`. Le client peut modifier le contenu (textes, menu, horaires, etc.) **sans toucher au code**.

## ▶️ Aperçu rapide en local
1. Ouvrez `index.html` dans un navigateur pour voir le site.
2. Modifiez `content/site.json`, puis rafraîchissez la page.

> ⚠️ La page `/admin` nécessite un hébergement avec **Git Gateway** (Netlify) pour fonctionner (authentification + commit des changements). En local, `admin/` ne pourra pas enregistrer les changements.

## ☁️ Déployer gratuitement sur Netlify (recommandé)
1. **Créez un dépôt Git** (GitHub, GitLab ou Bitbucket) et poussez ce dossier.
2. **Connectez votre dépôt à Netlify** (bouton *New site from Git*).
3. Dans Netlify, activez **Identity** :
   - *Identity* → *Enable Identity*
   - *Settings* → *Registration*: choisissez *Invite only*
4. Activez **Git Gateway** :
   - *Identity* → *Settings* → *Services* → *Enable Git Gateway*
5. Invitez votre client (courriel) dans *Identity* → *Invite users*.
6. Accédez à `https://votre-domaine.netlify.app/admin/`, connectez-vous, éditez et **Publier**.

## 🧰 Comment ça marche
- **Decap CMS** affiche une interface d'édition.
- Lorsqu'on clique **Publier**, Decap CMS fait un commit Git via **Git Gateway**.
- Netlify détecte le commit → **reconstruit** le site → le contenu est à jour.
- Le site lit **content/site.json** (via `script.js`) et affiche les infos.

## 📁 Structure
```
.
├── admin/
│   ├── config.yml        # Configuration Decap CMS
│   └── index.html        # Charge l'interface CMS
├── content/
│   └── site.json         # Contenu éditable par le client
├── images/
│   └── uploads/          # Médias téléversés
├── index.html            # Page du site
├── styles.css            # Styles
├── script.js             # Logique pour charger et afficher le contenu
├── netlify.toml          # Config Netlify (build statique)
└── README.md
```

## ✏️ Changer le logo
- Téléversez `images/uploads/logo.png` (ou autre nom).
- Dans `/admin`, mettez `images/uploads/votrelogo.png` dans le champ **Logo (URL)**.

## 🔒 Rôles & sécurité
- Donnez au client le rôle *Editor* dans Netlify Identity.
- Gardez le rôle *Owner* pour vous.
- Sauvegardes : le contenu est versionné **dans Git** (rollback facile).

## 🧩 Personnaliser
- Ajoutez d'autres champs dans `admin/config.yml` (ex : *galerie*, *équipe*).
- Lisez ces champs dans `script.js` pour les afficher.

Bon déploiement ! 🍽️
# test_site_vitrine
