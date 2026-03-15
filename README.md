# ExamenCivique.info

Plateforme d'entraînement à l'examen civique français (QCM OFII).

## Offre & accès
- 2 quiz gratuits pour démarrer.
- Pack Réussite : accès complet pendant 3 mois.
- Renouvellement non automatique.

## Démarrage local
```bash
npm install
npm run dev
```

## Variables d’environnement (local)
- `NEXT_PUBLIC_SITE_URL=http://localhost:3000`
- `SUPABASE_URL=...`
- `SUPABASE_ANON_KEY=...`
- `SUPABASE_SERVICE_ROLE_KEY=...`
- `STRIPE_SECRET_KEY=sk_test_...`
- `STRIPE_WEBHOOK_SECRET=whsec_...`

## Paiements Stripe
- Payment Link configuré dans `src/lib/payments.ts` (`STRIPE_PAYMENT_LINK`).
- Webhook : `/api/stripe/webhook` (events Stripe `checkout.session.completed`, `checkout.session.async_payment_succeeded`).
- En local, utiliser `stripe listen --forward-to http://localhost:3000/api/stripe/webhook` et mettre le `whsec_...` dans `STRIPE_WEBHOOK_SECRET`.

## SEO, Indexation & LLMs
- **Sitemap** : `public/sitemap.xml` (URL publique `https://www.examencivique.info/sitemap.xml`).
- **Robots** : `public/robots.txt` (inclut Google/Bing/LLMs + `Sitemap:` absolu).
- **Redirection canonique** : apex -> `www` via `next.config.mjs` pour éviter le duplicate content.
- **Balises meta** : globales dans `src/app/layout.tsx` (title/description/canonical/OpenGraph/Twitter).
- **JSON‑LD** : schemas FAQ/HowTo/WebApplication dans les pages (ex. `src/app-pages/Index.tsx`).
- **LLMs** : `public/llms.txt` pour ingestion RAG et recommandations IA.
- **Yandex** :
  - Meta verification dans `src/app/layout.tsx` (`yandex-verification`).
  - Fichiers de vérification dans `public/` (ex. `yandex_00355f4c88f8eac0.html`, `yandex_ac96d69e216e33bc.html`).
- **IndexNow** :
  - Key file `public/<INDEXNOW_KEY>.txt` (ex. `public/a5aee2da3eac4d02bc6bdfe142df97af.txt`).
  - Script d’envoi : `node scripts/indexnow.mjs` (nécessite `INDEXNOW_KEY` + `NEXT_PUBLIC_SITE_URL`).
  - Script de check : `node scripts/indexnow-check.mjs`.

## Flux d’accès aux quiz
Voir `docs/quiz-access-flow.md`.

## Documentation
- `docs/quiz-access-flow.md`
- `docs/FAQ_PRODUIT.md`
- `TODO_PAYMENTS.md`
- `VERCEL.md`
