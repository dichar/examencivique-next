"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SUPPORT_EMAIL } from "@/lib/constants";

type AuthMode = "login" | "signup";

export default function AuthForm({ mode }: { mode: AuthMode }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const title = mode === "login" ? "Connexion" : "Inscription";
  const buttonLabel = mode === "login" ? "Se connecter" : "Créer un compte";

  const handleEmailAuth = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        router.push("/compte");
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setMessage("Compte créé. Vous pouvez vous connecter.");
        router.push("/login");
      }
    } catch (err) {
      const error = err as Error;
      setMessage(error.message || "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    setMessage(null);
    const origin = window.location.origin;

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${origin}/auth/google/callback`,
      },
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto question-card p-8">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-muted-foreground mb-6">
        Accédez à vos résultats et à vos entraînements enregistrés.
      </p>

      <Button type="button" variant="outline" className="w-full mb-4" onClick={handleGoogle} disabled={loading}>
        Continuer avec Google
      </Button>

      <div className="relative my-6">
        <div className="h-px bg-border" />
        <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-background px-3 text-xs text-muted-foreground">
          ou par email
        </span>
      </div>

      <form onSubmit={handleEmailAuth} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="vous@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Mot de passe</Label>
          <Input
            id="password"
            type="password"
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <Button className="w-full" type="submit" disabled={loading}>
          {buttonLabel}
        </Button>
      </form>

      {message && <p className="text-sm text-muted-foreground mt-4">{message}</p>}

      <p className="text-xs text-muted-foreground mt-6">
        Besoin d'aide ?{" "}
        <a className="underline underline-offset-2" href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>
      </p>
    </div>
  );
}
