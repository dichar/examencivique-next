"use client";

import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { PASSING_SCORE } from "@/lib/questions";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, ReferenceLine, XAxis, YAxis } from "recharts";

export default function ComptePage() {
  const { user, loading, signOut } = useAuth();
  const [results, setResults] = useState<
    { id: string; score: number; total_questions: number; passed: boolean; created_at: string }[]
  >([]);
  const [resultsLoading, setResultsLoading] = useState(false);
  const totalSessions = results.length;
  const bestScore = totalSessions ? Math.max(...results.map((r) => r.score)) : 0;
  const avgScore = totalSessions ? (results.reduce((sum, r) => sum + r.score, 0) / totalSessions).toFixed(1) : "0";
  const passRate = totalSessions
    ? Math.round((results.filter((r) => r.passed).length / totalSessions) * 100)
    : 0;
  const orderedResults = [...results].sort(
    (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );
  const chartData = orderedResults.map((result, index) => ({
    index: index + 1,
    label: new Date(result.created_at).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "short",
    }),
    score: result.score,
  }));
  const chartConfig = {
    score: {
      label: "Score",
      color: "hsl(var(--primary))",
    },
  };

  useEffect(() => {
    if (!user) return;

    const fetchResults = async () => {
      setResultsLoading(true);
      const { data } = await supabase
        .from("quiz_results")
        .select("id, score, total_questions, passed, created_at")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      setResults(data ?? []);
      setResultsLoading(false);
    };

    fetchResults();
  }, [user?.id]);

  if (loading) {
    return (
      <section className="container-narrow py-12">
        <div className="question-card p-8 text-center">Chargement...</div>
      </section>
    );
  }

  if (!user) {
    return (
      <section className="container-narrow py-12">
        <div className="question-card p-8 text-center space-y-4">
          <h1 className="text-xl font-semibold">Connectez-vous pour accéder à votre compte.</h1>
          <Button asChild>
            <Link href="/login">Connexion</Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="container-narrow py-12">
      <div className="question-card p-8 space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-bold">Mon compte</h1>
          <p className="text-muted-foreground">Connecté en tant que {user.email}</p>
        </header>

        <section id="scores" className="pt-2 border-t border-border space-y-4">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h2 className="text-lg font-semibold">Mes résultats</h2>
            <span className="text-xs text-muted-foreground">Historique conservé en base</span>
          </div>

          {totalSessions > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-lg border bg-card text-center text-sm">
                <div className="text-muted-foreground">Sessions</div>
                <div className="font-bold">{totalSessions}</div>
              </div>
              <div className="p-3 rounded-lg border bg-card text-center text-sm">
                <div className="text-muted-foreground">Meilleur</div>
                <div className="font-bold">{bestScore}/40</div>
              </div>
              <div className="p-3 rounded-lg border bg-card text-center text-sm">
                <div className="text-muted-foreground">Moyenne</div>
                <div className="font-bold">{avgScore}/40</div>
              </div>
              <div className="p-3 rounded-lg border bg-card text-center text-sm">
                <div className="text-muted-foreground">Réussite</div>
                <div className="font-bold">{passRate}%</div>
              </div>
            </div>
          )}

          {resultsLoading ? (
            <p className="text-sm text-muted-foreground">Chargement...</p>
          ) : results.length === 0 ? (
            <p className="text-sm text-muted-foreground">Aucun résultat enregistré pour le moment.</p>
          ) : (
            <div className="space-y-4">
              <div className="rounded-lg border bg-card p-4">
                <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                  <p className="text-sm font-medium">Courbe d'évolution</p>
                  <p className="text-xs text-muted-foreground">Seuil de réussite : {PASSING_SCORE}/40</p>
                </div>
                <ChartContainer config={chartConfig} className="h-56 sm:h-72 w-full !aspect-auto">
                  <LineChart data={chartData} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="label"
                      tickMargin={8}
                      minTickGap={16}
                    />
                    <YAxis domain={[0, 40]} tickMargin={8} />
                    <ReferenceLine y={PASSING_SCORE} stroke="hsl(var(--muted-foreground))" strokeDasharray="4 4" />
                    <ChartTooltip content={<ChartTooltipContent labelKey="label" />} />
                    <Line
                      dataKey="score"
                      type="monotone"
                      stroke="var(--color-score)"
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      activeDot={{ r: 5 }}
                    />
                  </LineChart>
                </ChartContainer>
              </div>
              <div className="space-y-2">
                {results.map((result) => (
                  <div key={result.id} className="flex items-center justify-between rounded-lg border p-3 text-sm">
                    <div>
                      <p className="font-medium">
                        {result.score}/{result.total_questions} — {result.passed ? "Réussi" : "Échoué"}
                      </p>
                      <p className="text-muted-foreground">
                        {new Date(result.created_at).toLocaleString("fr-FR")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        <section id="parametres" className="pt-2 border-t border-border space-y-3">
          <h2 className="text-lg font-semibold">Paramètres</h2>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={() => signOut()}>
              Déconnexion
            </Button>
          </div>
        </section>
      </div>
    </section>
  );
}
