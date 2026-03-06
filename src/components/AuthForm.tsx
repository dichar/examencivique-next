"use client";

import Link from "next/link";
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
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        const signupStatus = data?.session ? "success" : "confirm";
        router.push(`/login?signup=${signupStatus}`);
      }
    } catch (err) {
      const error = err as Error;
      const rawMessage = (error?.message || "").toLowerCase();
      let friendly = "Une erreur est survenue. Vérifiez vos informations et réessayez.";

      if (rawMessage.includes("invalid login credentials")) {
        friendly = "Email ou mot de passe incorrect.";
      } else if (rawMessage.includes("email not confirmed")) {
        friendly = "Email non confirmé. Vérifiez votre boîte mail avant de vous connecter.";
      } else if (rawMessage.includes("user already registered")) {
        friendly = "Un compte existe déjà avec cet email. Connectez-vous ou réinitialisez le mot de passe.";
      } else if (rawMessage.includes("password") && rawMessage.includes("least")) {
        friendly = "Mot de passe trop court. Utilisez au moins 6 caractères.";
      } else if (rawMessage.includes("weak password")) {
        friendly = "Mot de passe trop faible. Utilisez au moins 6 caractères et une combinaison de lettres/chiffres.";
      } else if (rawMessage.includes("rate limit") || rawMessage.includes("too many")) {
        friendly = "Trop de tentatives. Réessayez dans quelques minutes.";
      } else if (rawMessage.includes("user not found")) {
        friendly = "Aucun compte associé à cet email.";
      }

      setMessage(friendly);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    setMessage(null);
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || window.location.origin;

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${siteUrl}/auth/google/callback`,
      },
    });

    if (error) {
      setMessage("Impossible de se connecter avec Google pour le moment. Réessayez plus tard.");
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
          {mode === "signup" && (
            <p className="text-xs text-muted-foreground">Minimum 6 caractères.</p>
          )}
        </div>
        <Button className="w-full" type="submit" disabled={loading}>
          {buttonLabel}
        </Button>
      </form>

      {message && <p className="text-sm text-destructive mt-4">{message}</p>}

      <p className="text-xs text-muted-foreground mt-6">
        En créant un compte, vous acceptez la{" "}
        <Link href="/confidentialite" className="underline underline-offset-2">
          Politique de confidentialité
        </Link>{" "}
        et les{" "}
        <Link href="/conditions" className="underline underline-offset-2">
          Conditions d'utilisation
        </Link>
        .
      </p>

      <p className="text-xs text-muted-foreground mt-6">
        Besoin d'aide ?{" "}
        <a className="underline underline-offset-2" href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>
      </p>
    </div>
  );
}
