"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function GoogleCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const exchange = async () => {
      const { error } = await supabase.auth.exchangeCodeForSession(window.location.href);
      if (error) {
        router.push("/login");
        return;
      }
      router.push("/compte");
    };

    exchange();
  }, [router]);

  return (
    <section className="container-narrow py-12">
      <div className="question-card p-8 text-center">
        <h1 className="text-xl font-semibold mb-2">Connexion en cours...</h1>
        <p className="text-muted-foreground">Merci de patienter.</p>
      </div>
    </section>
  );
}
