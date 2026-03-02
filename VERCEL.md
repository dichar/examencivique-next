# Déploiement Vercel (gratuit)

## 1) Préparer le repo
Depuis `/opt/perso/examencivique-next` :

```bash
git init
git add .
git commit -m "Initial Next.js migration"
```

## 2) Pousser sur GitHub
Crée un repo GitHub vide, puis :

```bash
git branch -M main
git remote add origin <URL_DU_REPO_GITHUB>
git push -u origin main
```

## 3) Déployer sur Vercel
1. Connecte-toi à Vercel
2. Import GitHub repository
3. Framework détecté: Next.js
4. Build command: `next build`
5. Output: auto

Vercel fournira un domaine gratuit `*.vercel.app`.

## 4) (Optionnel) Domaine personnalisé
Ajoute ton domaine dans Vercel > Project Settings > Domains.

## 5) Vérifications
- `https://<ton-domaine>` -> page d'accueil OK
- `https://<ton-domaine>/blog/<slug>` -> SSR/SSG OK
- `https://<ton-domaine>/sitemap.xml` -> OK
- `https://<ton-domaine>/robots.txt` -> OK
