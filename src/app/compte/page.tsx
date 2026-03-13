"use client";

import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { PASSING_SCORE } from "@/lib/questions";
import { buildStripePaymentLink, PACK_DURATION, PACK_NAME, PACK_PRICE } from "@/lib/payments";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, ReferenceLine, XAxis, YAxis } from "recharts";

export default function ComptePage() {
  const { user, profile, loading, signOut, refreshProfile } = useAuth();
  const [results, setResults] = useState<
    { id: string; score: number; total_questions: number; passed: boolean; created_at: string }[]
  >([]);
  const [resultsLoading, setResultsLoading] = useState(false);
  const [answersByResult, setAnswersByResult] = useState<
    Record<
      string,
      {
        question_text: string;
        selected_answer: string | null;
        correct_answer: string;
        theme: string;
        is_correct: boolean | null;
      }[]
    >
  >({});
  const [answersLoading, setAnswersLoading] = useState<Record<string, boolean>>({});
  const [showOnlyErrors, setShowOnlyErrors] = useState<Record<string, boolean>>({});
  const totalSessions = results.length;
  const bestScore = totalSessions ? Math.max(...results.map((r) => r.score)) : 0;
  const avgScore = totalSessions ? (results.reduce((sum, r) => sum + r.score, 0) / totalSessions).toFixed(1) : "0";
  const passRate = totalSessions
    ? Math.round((results.filter((r) => r.passed).length / totalSessions) * 100)
    : 0;
  const orderedResults = [...results].sort(
    (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );
  const paidUntilRaw =
    (profile?.paid_until as string | undefined) ?? (user?.user_metadata?.paid_until as string | undefined);
  const paidUntilDate = paidUntilRaw ? new Date(paidUntilRaw) : null;
  const hasActivePack =
    Boolean(profile?.is_paid ?? user?.user_metadata?.is_paid) &&
    paidUntilDate !== null &&
    paidUntilDate > new Date();
  const paymentLink = buildStripePaymentLink(user);
  const packName =
    (profile?.pack_name as string | undefined) ||
    (user?.user_metadata?.pack_name as string | undefined) ||
    PACK_NAME;
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
    refreshProfile();

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
  }, [user?.id, refreshProfile]);

  const loadAnswers = async (resultId: string) => {
    if (!user) return;
    setAnswersLoading((prev) => ({ ...prev, [resultId]: true }));
    const { data } = await supabase
      .from("quiz_answers")
      .select("question_text, selected_answer, correct_answer, theme, is_correct")
      .eq("quiz_result_id", resultId)
      .eq("user_id", user.id);

    setAnswersByResult((prev) => ({ ...prev, [resultId]: data ?? [] }));
    setAnswersLoading((prev) => ({ ...prev, [resultId]: false }));
  };

  const groupByTheme = (
    items: {
      question_text: string;
      selected_answer: string | null;
      correct_answer: string;
      theme: string;
      is_correct: boolean | null;
    }[],
  ) => {
    return items.reduce<Record<string, typeof items>>((acc, item) => {
      if (!acc[item.theme]) acc[item.theme] = [];
      acc[item.theme].push(item);
      return acc;
    }, {});
  };

  const exportCsv = (resultId: string) => {
    const data = answersByResult[resultId];
    if (!data || data.length === 0) return;
    const onlyErrors = showOnlyErrors[resultId];
    const filtered = onlyErrors ? data.filter((d) => d.is_correct === false) : data;

    const rows = [
      ["theme", "question", "selected_answer", "correct_answer", "is_correct"],
      ...filtered.map((row) => [
        row.theme,
        row.question_text,
        row.selected_answer ?? "",
        row.correct_answer,
        row.is_correct ? "true" : "false",
      ]),
    ];

    const csvContent = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `erreurs-${resultId}.csv`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const exportPdf = (resultId: string) => {
    const data = answersByResult[resultId];
    if (!data || data.length === 0) return;
    const onlyErrors = showOnlyErrors[resultId];
    const filtered = onlyErrors ? data.filter((d) => d.is_correct === false) : data;
    const grouped = groupByTheme(filtered);

    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write("<html><head><title>Erreurs</title></head><body>");
    printWindow.document.write("<h1>Erreurs et réponses</h1>");
    Object.entries(grouped).forEach(([theme, items]) => {
      printWindow.document.write(`<h2>${theme}</h2>`);
      items.forEach((item) => {
        printWindow.document.write("<div style='margin-bottom:12px;'>");
        printWindow.document.write(`<div><strong>Question:</strong> ${item.question_text}</div>`);
        printWindow.document.write(`<div><strong>Votre réponse:</strong> ${item.selected_answer ?? "—"}</div>`);
        printWindow.document.write(`<div><strong>Bonne réponse:</strong> ${item.correct_answer}</div>`);
        printWindow.document.write("</div>");
      });
    });
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

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
                  <div key={result.id} className="rounded-lg border p-3 text-sm space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-medium">
                          {result.score}/{result.total_questions} — {result.passed ? "Réussi" : "Échoué"}
                        </p>
                        <p className="text-muted-foreground">
                          {new Date(result.created_at).toLocaleString("fr-FR")}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => loadAnswers(result.id)}
                          disabled={answersLoading[result.id]}
                        >
                          {answersLoading[result.id] ? "Chargement..." : "Voir erreurs"}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => exportCsv(result.id)}
                          disabled={!answersByResult[result.id]}
                        >
                          Export CSV
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => exportPdf(result.id)}
                          disabled={!answersByResult[result.id]}
                        >
                          Export PDF
                        </Button>
                      </div>
                    </div>

                    {answersByResult[result.id] && (
                      <div className="space-y-2 border-t border-border pt-3">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <p className="text-sm font-medium">Détails par thème</p>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              setShowOnlyErrors((prev) => ({
                                ...prev,
                                [result.id]: !prev[result.id],
                              }))
                            }
                          >
                            {showOnlyErrors[result.id] ? "Voir tout" : "Seulement erreurs"}
                          </Button>
                        </div>
                        {Object.entries(
                          groupByTheme(
                            showOnlyErrors[result.id]
                              ? answersByResult[result.id].filter((item) => item.is_correct === false)
                              : answersByResult[result.id],
                          ),
                        ).map(([theme, items]) => (
                          <div key={theme} className="rounded-lg bg-muted/50 p-3 space-y-2">
                            <p className="font-semibold">{theme}</p>
                            {items.map((item, idx) => (
                              <div key={`${result.id}-${theme}-${idx}`} className="rounded-lg bg-muted p-3">
                                <p className="font-medium mb-2">{item.question_text}</p>
                                <p className="text-muted-foreground">
                                  Votre réponse: <span className="font-medium">{item.selected_answer ?? "—"}</span>
                                </p>
                                <p className="text-muted-foreground">
                                  Bonne réponse: <span className="font-medium">{item.correct_answer}</span>
                                </p>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
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

        <section id="abonnement" className="pt-2 border-t border-border space-y-3">
          <h2 className="text-lg font-semibold">Mon pack</h2>
          <div className="rounded-lg border p-4 space-y-3">
            <div>
              <p className="font-semibold">{packName}</p>
              {hasActivePack ? (
                <p className="text-sm text-muted-foreground">
                  Actif {paidUntilDate ? `jusqu'au ${paidUntilDate.toLocaleDateString("fr-FR")}` : "sans date limite"}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">Aucun pack actif pour le moment.</p>
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              {PACK_NAME} – {PACK_PRICE} · Accès {PACK_DURATION}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild>
                <a href={paymentLink} target="_blank" rel="noopener noreferrer">
                  {hasActivePack ? "Renouveler le pack" : "Accéder à la version complète"}
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/questions">Voir les contenus inclus</Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Paiement unique, activation immédiate après confirmation Stripe.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
