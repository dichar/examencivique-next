import { NextResponse } from "next/server";
import Stripe from "stripe";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { PACK_DURATION_MONTHS, PACK_ID, PACK_NAME } from "@/lib/payments";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

if (!STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY env variable.");
}

const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: "2024-04-10",
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const sessionId = body?.sessionId as string | undefined;

    if (!sessionId) {
      return NextResponse.json({ ok: false, error: "Missing sessionId" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session || session.payment_status !== "paid") {
      return NextResponse.json({ ok: false, error: "Payment not confirmed" }, { status: 402 });
    }

    const userId = session.client_reference_id;
    if (!userId) {
      return NextResponse.json({ ok: false, error: "Missing client_reference_id" }, { status: 400 });
    }

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
        email: session.customer_details?.email || session.customer_email || null,
        is_paid: true,
        paid_until: paidUntil.toISOString(),
        pack_id: PACK_ID,
        pack_name: PACK_NAME,
      },
      { onConflict: "id" },
    );

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, paid_until: paidUntil.toISOString() });
  } catch (error) {
    return NextResponse.json({ ok: false, error: (error as Error).message }, { status: 500 });
  }
}
