# TODO Paiements / Packs

Date: 2026-03-06

## À faire côté Stripe (prod)
- Créer le webhook Stripe vers `https://www.examencivique.info/api/stripe/webhook`.
- Activer les events:
  - `checkout.session.completed`
  - `checkout.session.async_payment_succeeded`
- Récupérer la valeur `STRIPE_WEBHOOK_SECRET` (whsec_...).
- Vérifier que le Payment Link utilisé est celui du pack dans `src/lib/payments.ts` (constante `STRIPE_PAYMENT_LINK`).

## À faire côté Vercel (prod)
- Ajouter les variables d’environnement:
  - `STRIPE_SECRET_KEY=sk_live_...`
  - `STRIPE_WEBHOOK_SECRET=whsec_...`
  - `SUPABASE_SERVICE_ROLE_KEY=...`
  - `NEXT_PUBLIC_SITE_URL=https://www.examencivique.info`

## Vérifications post-déploiement
- Faire un paiement test en mode live et vérifier:
  - Le webhook reçoit l’event.
  - Le user reçoit `is_paid=true`, `paid_until=...`, `pack_id=pack_reussite_2026`.
- Vérifier l’accès aux quiz:
  - Si pack actif: accès illimité.
  - Si non payé: 2 quiz gratuits au total, puis paywall (Pack Réussite).

## Suivi
- Mettre à jour `/compte` si nouveau pack (pack_id/pack_name).
- Si ajout d’autres packs: mapper `pack_id` selon `price_id` Stripe.
