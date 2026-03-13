 "use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AuthForm from "@/components/AuthForm";
import { useAuth } from "@/components/AuthProvider";

function SignupContent() {
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

  return <AuthForm mode="signup" nextUrl={nextUrl || undefined} />;
}

export default function SignupPage() {
  return (
    <section className="container-narrow py-12">
      <Suspense fallback={<div className="question-card p-8 text-center">Chargement...</div>}>
        <SignupContent />
      </Suspense>
    </section>
  );
}
