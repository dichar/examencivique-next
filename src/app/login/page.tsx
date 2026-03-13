"use client";

import { Suspense, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AuthForm from "@/components/AuthForm";
import { useAuth } from "@/components/AuthProvider";

function SignupNotice() {
  const searchParams = useSearchParams();
  const signupNotice = useMemo(() => {
    const status = searchParams.get("signup");
    if (status === "confirm") {
      return "Compte créé. Vérifiez votre email pour confirmer l'inscription avant de vous connecter.";
    }
    if (status === "success") {
      return "Compte créé. Vous pouvez maintenant vous connecter.";
    }
    return null;
  }, [searchParams]);

  if (!signupNotice) return null;

  return (
    <div className="question-card p-4 mb-6 border border-success/30 bg-success/10 text-success text-sm">
      {signupNotice}
    </div>
  );
}

function LoginContent() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const searchParams = useSearchParams();
  const nextUrl = searchParams.get("next") || "";

  useEffect(() => {
    if (!loading && user) {
      router.replace(nextUrl || "/compte");
    }
  }, [loading, user, router, nextUrl]);

  if (loading || user) {
    return (
      <section className="container-narrow py-12">
        <div className="question-card p-8 text-center">Redirection...</div>
      </section>
    );
  }

  return (
    <>
      <SignupNotice />
      <AuthForm mode="login" nextUrl={nextUrl || undefined} />
    </>
  );
}

export default function LoginPage() {
  return (
    <section className="container-narrow py-12">
      <Suspense fallback={<div className="question-card p-8 text-center">Chargement...</div>}>
        <LoginContent />
      </Suspense>
    </section>
  );
}
