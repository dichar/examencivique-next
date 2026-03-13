"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

function GoogleCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextUrl = searchParams.get("next") || "/compte";

  useEffect(() => {
    const exchange = async () => {
      const { error } = await supabase.auth.exchangeCodeForSession(window.location.href);
      if (error) {
        router.push("/login");
        return;
      }
      router.push(nextUrl);
    };

    exchange();
  }, [router, nextUrl]);

  return (
    <div className="question-card p-8 text-center">
      <h1 className="text-xl font-semibold mb-2">Connexion en cours...</h1>
      <p className="text-muted-foreground">Merci de patienter.</p>
    </div>
  );
}

export default function GoogleCallbackPage() {
  return (
    <section className="container-narrow py-12">
      <Suspense fallback={<div className="question-card p-8 text-center">Connexion en cours...</div>}>
        <GoogleCallbackContent />
      </Suspense>
    </section>
  );
}
