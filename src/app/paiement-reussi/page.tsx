"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/AuthProvider";

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);
  const { refreshProfile } = useAuth();

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    if (!sessionId) {
      setStatus("error");
      setMessage("Session de paiement manquante.");
      return;
    }

    const confirm = async () => {
      setStatus("loading");
      try {
        const res = await fetch("/api/stripe/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId }),
        });
        const data = await res.json();
        if (!res.ok || !data.ok) {
          throw new Error(data?.error || "Paiement non confirmé.");
        }
        try {
          await refreshProfile();
        } catch {
          // ignore
        }
        setStatus("success");
        setMessage("Paiement confirmé. Votre accès complet est activé.");
      } catch (error) {
        setStatus("error");
        setMessage((error as Error).message);
      }
    };

    confirm();
  }, [searchParams]);

  return (
    <div className="question-card p-8 text-center max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Paiement</h1>
      {status === "loading" && <p className="text-muted-foreground">Validation du paiement en cours...</p>}
      {status === "success" && <p className="text-success">{message}</p>}
      {status === "error" && <p className="text-destructive">{message}</p>}
      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
        <Button asChild>
          <Link href="/examen-chronometre?start=1">Commencer un quiz</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Retour à l'accueil</Link>
        </Button>
      </div>
    </div>
  );
}

export default function PaiementReussiPage() {
  return (
    <section className="seo-section">
      <div className="container-narrow py-12">
        <Suspense fallback={<div className="question-card p-8 text-center">Chargement...</div>}>
          <PaymentSuccessContent />
        </Suspense>
      </div>
    </section>
  );
}
