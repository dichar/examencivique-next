 "use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthForm from "@/components/AuthForm";
import { useAuth } from "@/components/AuthProvider";

export default function LoginPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

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
      <AuthForm mode="login" />
    </section>
  );
}
