import type { User } from "@supabase/supabase-js";

export const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/00w7sL3Sqdjg8Shdye2ZO01";
export const PACK_ID = "pack_reussite_2026";
export const PACK_NAME = "Pack Réussite ExamenCivique.info";
export const PACK_PRICE = "19,99 €";
export const PACK_DURATION = "3 mois";
export const PACK_DURATION_MONTHS = 3;

export const buildStripePaymentLink = (user?: User | null) => {
  try {
    const url = new URL(STRIPE_PAYMENT_LINK);
    if (user?.id) {
      url.searchParams.set("client_reference_id", user.id);
    }
    if (user?.email) {
      url.searchParams.set("prefilled_email", user.email);
    }
    return url.toString();
  } catch {
    return STRIPE_PAYMENT_LINK;
  }
};
