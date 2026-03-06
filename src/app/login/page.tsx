 "use client";

import { useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AuthForm from "@/components/AuthForm";
import { useAuth } from "@/components/AuthProvider";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, loading } = useAuth();
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

  useEffect(() => {
    if (!loading && user) {
      router.replace("/");
    }
  }, [loading, user, router]);

  if (loading || user) {
    return (
      <section className="container-narrow py-12">
        <div className="question-card p-8 text-center">Redirection...</div>
      </section>
    );
  }

  return (
    <section className="container-narrow py-12">
      {signupNotice && (
        <div className="question-card p-4 mb-6 border border-success/30 bg-success/10 text-success text-sm">
          {signupNotice}
        </div>
      )}
      <AuthForm mode="login" />
    </section>
  );
}
