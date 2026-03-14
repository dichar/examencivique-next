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

## Flux d’accès aux quiz
Voir `docs/quiz-access-flow.md`.

## Documentation
- `docs/quiz-access-flow.md`
- `docs/FAQ_PRODUIT.md`
- `TODO_PAYMENTS.md`
- `VERCEL.md`
