import { NextResponse } from "next/server";
import Stripe from "stripe";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { PACK_DURATION_MONTHS, PACK_ID, PACK_NAME } from "@/lib/payments";

export const runtime = "nodejs";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY ?? "";
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET ?? "";

if (!STRIPE_SECRET_KEY || !STRIPE_WEBHOOK_SECRET) {
  throw new Error("Missing Stripe webhook env variables.");
}

const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: "2024-04-10",
});

const applyPackToUser = async (userId: string, email?: string | null) => {
  const { data: existingProfile } = await supabaseAdmin
    .from("profiles")
    .select("paid_until")
    .eq("id", userId)
    .maybeSingle();
  const existingPaidUntilRaw = existingProfile?.paid_until as string | undefined;
  const existingPaidUntil = existingPaidUntilRaw ? new Date(existingPaidUntilRaw) : null;
  const baseDate = existingPaidUntil && existingPaidUntil > new Date() ? existingPaidUntil : new Date();
  const paidUntil = new Date(baseDate);
  paidUntil.setMonth(paidUntil.getMonth() + PACK_DURATION_MONTHS);

  const { error } = await supabaseAdmin.from("profiles").upsert(
    {
      id: userId,
      email: email ?? null,
      is_paid: true,
      paid_until: paidUntil.toISOString(),
      pack_id: PACK_ID,
      pack_name: PACK_NAME,
    },
    { onConflict: "id" },
  );

  if (error) {
    throw new Error(error.message);
  }
};

const resolveUserId = async (session: Stripe.Checkout.Session) => {
  if (session.client_reference_id) return session.client_reference_id;

  const email = session.customer_details?.email || session.customer_email;
  if (!email) return null;

  const { data, error } = await supabaseAdmin.from("profiles").select("id").eq("email", email).maybeSingle();
  if (error || !data?.id) return null;
  return data.id;
};

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ ok: false, error: "Missing signature" }, { status: 400 });
  }

  const payload = await request.text();
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(payload, signature, STRIPE_WEBHOOK_SECRET);
  } catch (error) {
    return NextResponse.json({ ok: false, error: (error as Error).message }, { status: 400 });
  }

  if (
    event.type === "checkout.session.completed" ||
    event.type === "checkout.session.async_payment_succeeded"
  ) {
    const session = event.data.object as Stripe.Checkout.Session;
    if (session.payment_status === "paid") {
      const userId = await resolveUserId(session);
      if (!userId) {
        console.warn("Stripe webhook: user not found for session", session.id);
      } else {
        try {
          await applyPackToUser(
            userId,
            session.customer_details?.email || session.customer_email || null,
          );
        } catch (error) {
          console.error("Stripe webhook: failed to apply pack", error);
          return NextResponse.json({ ok: false, error: (error as Error).message }, { status: 500 });
        }
      }
    }
  }

  return NextResponse.json({ received: true });
}
