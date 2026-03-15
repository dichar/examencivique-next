"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import PackPaywallDialog from "@/components/PackPaywallDialog";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle, Volume2, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";
import { useQuizAccess } from "@/hooks/useQuizAccess";
import { buildStripePaymentLink, PACK_DURATION, PACK_NAME, PACK_PRICE } from "@/lib/payments";

type RawQuestion = {
  question: string;
  options: string[];
  correctAnswer: number | string;
  explanation: string;
  category: string;
};

type NormalizedQuestion = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
};

type QuizMode = "normal" | "errors";

interface QuizEngineProps {
  title: string;
  description?: string;
  questionsData: RawQuestion[] | { questions: RawQuestion[] };
  questionsPerSession?: number;
  mode?: QuizMode;
  quizKey: string;
}

type AnswerState = {
  selectedIndex: number | null;
  isCorrect: boolean | null;
  showExplanation: boolean;
};

const shuffle = <T,>(items: T[]) => {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const normalizeQuestions = (data: RawQuestion[] | { questions: RawQuestion[] }) => {
  const raw = Array.isArray(data) ? data : data.questions;
  return raw.map((q) => {
    const correctIndex =
      typeof q.correctAnswer === "number"
        ? q.correctAnswer
        : Math.max(0, q.options.indexOf(q.correctAnswer));
    return {
      id: `${q.category}::${q.question}`.toLowerCase(),
      question: q.question,
      options: q.options,
      correctIndex,
      explanation: q.explanation,
      category: q.category,
    };
  });
};

const useStorageList = (key: string) => {
  const [set, setSet] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return;
      const parsed = JSON.parse(raw) as string[];
      setSet(new Set(parsed));
    } catch {
      // ignore
    }
  }, [key]);

  const persist = useCallback(
    (next: Set<string>) => {
      setSet(next);
      try {
        localStorage.setItem(key, JSON.stringify(Array.from(next)));
      } catch {
        // ignore
      }
    },
    [key],
  );

  return { set, persist };
};

export default function QuizEngine({
  title,
  description,
  questionsData,
  questionsPerSession = 40,
  mode = "normal",
  quizKey,
}: QuizEngineProps) {
  const normalized = useMemo(() => normalizeQuestions(questionsData), [questionsData]);
  const seenKey = `examencivique.seen.${quizKey}`;
  const errorKey = `examencivique.errors.${quizKey}`;
  const { set: seenSet, persist: persistSeen } = useStorageList(seenKey);
  const { set: errorSet, persist: persistErrors } = useStorageList(errorKey);
  const seenRef = useRef(seenSet);
  const errorRef = useRef(errorSet);

  useEffect(() => {
    seenRef.current = seenSet;
  }, [seenSet]);

  useEffect(() => {
    errorRef.current = errorSet;
  }, [errorSet]);

  const [questions, setQuestions] = useState<NormalizedQuestion[]>([]);
  const [shuffledOptionsMap, setShuffledOptionsMap] = useState<Record<string, number[]>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({});
  const [instantCorrection, setInstantCorrection] = useState(true);
  const [state, setState] = useState<"playing" | "results">("playing");
  const { user, profile, profileLoading } = useAuth();
  const { count, paid, ready, hasAccess, requiresSignup, freeLimit, consumeAttempt } = useQuizAccess(
    user,
    profile,
    profileLoading,
  );
  const [showPaywall, setShowPaywall] = useState(false);
  const [showSignupPrompt, setShowSignupPrompt] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  const [accessChecked, setAccessChecked] = useState(false);
  const pathname = usePathname();
  const nextUrl = useMemo(() => encodeURIComponent(pathname), [pathname]);

  const initializeSession = useCallback(() => {
    setAccessGranted(false);
    setAccessChecked(false);
    let pool = normalized;
    if (mode === "errors") {
      pool = normalized.filter((q) => errorRef.current.has(q.id));
    } else if (seenRef.current.size > 0) {
      pool = normalized.filter((q) => !seenRef.current.has(q.id));
    }

    if (pool.length === 0) {
      pool = normalized;
    }

    const selected = shuffle(pool).slice(0, questionsPerSession);
    const shuffled = selected.reduce<Record<string, number[]>>((acc, question) => {
      const indices = shuffle(question.options.map((_, idx) => idx));
      acc[question.id] = indices;
      return acc;
    }, {});

    setQuestions(selected);
    setShuffledOptionsMap(shuffled);
    setCurrentIndex(0);
    setAnswers({});
    setState("playing");
    setShowPaywall(false);
    setShowSignupPrompt(false);
  }, [mode, normalized, questionsPerSession]);

  useEffect(() => {
    if (normalized.length === 0) return;
    initializeSession();
  }, [initializeSession, normalized.length, mode, questionsPerSession, quizKey]);

  const paymentLink = buildStripePaymentLink(user);

  const currentQuestion = questions[currentIndex];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;
  const totalQuestions = questions.length;
  const answeredCount = Object.values(answers).filter((a) => a.selectedIndex !== null).length;
  const score = Object.values(answers).filter((a) => a.isCorrect).length;

  const hasSelected = currentAnswer?.selectedIndex !== null && currentAnswer?.selectedIndex !== undefined;

  const handleSelect = (optionIndex: number) => {
    if (!currentQuestion || hasSelected) return;
    const isCorrect = optionIndex === currentQuestion.correctIndex;

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        selectedIndex: optionIndex,
        isCorrect,
        showExplanation: instantCorrection,
      },
    }));

    const nextSeen = new Set(seenSet);
    nextSeen.add(currentQuestion.id);
    persistSeen(nextSeen);

    if (!isCorrect) {
      const nextErrors = new Set(errorSet);
      nextErrors.add(currentQuestion.id);
      persistErrors(nextErrors);
    }
  };

  const handleNext = () => {
    if (!currentQuestion) return;
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setState("results");
      if (!paid && !user && count >= 1) {
        setShowSignupPrompt(true);
      }
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const speakQuestion = () => {
    if (!currentQuestion || typeof window === "undefined") return;
    if (!window.speechSynthesis) return;
    const optionOrder = shuffledOptionsMap[currentQuestion.id] || currentQuestion.options.map((_, idx) => idx);
    const optionsText = optionOrder
      .map((optionIndex, displayIndex) => {
        const label = String.fromCharCode(65 + displayIndex);
        return `${label}. ${currentQuestion.options[optionIndex]}`;
      })
      .join(". ");
    const utterance = new SpeechSynthesisUtterance(`${currentQuestion.question}. ${optionsText}`);
    utterance.lang = "fr-FR";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (!ready || state !== "playing") return;
    if (paid) {
      setAccessGranted(true);
      setAccessChecked(true);
      return;
    }
    if (accessChecked) return;
    if (!hasAccess) {
      setShowPaywall(true);
      setAccessChecked(true);
      return;
    }
    let cancelled = false;
    (async () => {
      const ok = await consumeAttempt();
      if (cancelled) return;
      if (ok) {
        setAccessGranted(true);
      } else {
        setShowPaywall(true);
      }
      setAccessChecked(true);
    })();
    return () => {
      cancelled = true;
    };
  }, [ready, state, accessChecked, paid, hasAccess, consumeAttempt]);

  if (mode === "errors" && errorSet.size === 0) {
    return (
      <div className="question-card p-8 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Aucune erreur enregistrée</h2>
        <p className="text-muted-foreground mb-6">
          Faites un QCM complet pour générer vos erreurs et revenir ici.
        </p>
        <Button asChild>
          <Link href="/examen-chronometre?start=1">Démarrer un QCM</Link>
        </Button>
      </div>
    );
  }

  if (!ready) {
    return null;
  }

  if (state === "playing" && !accessChecked) {
    return null;
  }

  if (state === "playing" && !accessGranted) {
    return (
      <>
        {requiresSignup ? (
          <div className="question-card p-8 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Voir mes résultats</h2>
            <p className="text-muted-foreground mb-6">
              Connectez-vous ou créez un compte pour consulter vos résultats et continuer votre préparation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link href={`/login?next=${nextUrl}`}>Voir mes résultats</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={`/inscription?next=${nextUrl}`}>Créer un compte</Link>
              </Button>
            </div>
          </div>
        ) : (
          <>
            <PackPaywallDialog
              open={showPaywall}
              onOpenChange={setShowPaywall}
              freeLimit={freeLimit}
              paymentLink={paymentLink}
            />

            {!showPaywall && (
              <div className="question-card p-8 text-center max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-2">Accès limité</h2>
                <p className="text-muted-foreground mb-6">
                  Vous avez utilisé vos {freeLimit} quiz gratuits. Pour continuer à vous entraîner et accéder à tous les
                  quiz, passez au {PACK_NAME} – {PACK_PRICE}.
                </p>
                <Button asChild>
                  <a href={paymentLink} target="_blank" rel="noopener noreferrer">
                    Accéder à la version complète
                  </a>
                </Button>
                <div className="mt-6 text-left text-sm text-muted-foreground space-y-2">
                  <p className="font-semibold text-foreground">
                    {PACK_NAME} – {PACK_PRICE}
                  </p>
                  <p>Accès {PACK_DURATION}</p>
                  <p>Paiement 100 % sécurisé via Stripe</p>
                  <p>Accès immédiat après paiement</p>
                  <p>Sans engagement</p>
                </div>
              </div>
            )}
          </>
        )}
      </>
    );
  }

  if (state === "results") {
    return (
      <div className="question-card p-8 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Résultats</h2>
        <p className="text-muted-foreground mb-6">
          Score : <strong>{score}</strong> / {totalQuestions}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={initializeSession} className="gap-2">
            <RotateCcw className="w-4 h-4" />
            Recommencer
          </Button>
          <Button asChild variant="outline">
            <Link href="/questions">Voir toutes les questions</Link>
          </Button>
        </div>
        <PackPaywallDialog
          open={showPaywall}
          onOpenChange={setShowPaywall}
          freeLimit={freeLimit}
          paymentLink={paymentLink}
        />
        <Dialog open={showSignupPrompt} onOpenChange={setShowSignupPrompt}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Voir mes résultats</DialogTitle>
              <DialogDescription>
                Connectez-vous ou créez un compte pour consulter vos résultats et continuer votre préparation.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button asChild>
                <Link href={`/login?next=${nextUrl}`}>Voir mes résultats</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={`/inscription?next=${nextUrl}`}>Créer un compte</Link>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  if (!currentQuestion) {
    return null;
  }

  const optionOrder = shuffledOptionsMap[currentQuestion.id] || currentQuestion.options.map((_, idx) => idx);
  const progress = totalQuestions > 0 ? Math.round(((currentIndex + 1) / totalQuestions) * 100) : 0;

  return (
    <div className="max-w-3xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">{title}</h1>
        {description && <p className="text-muted-foreground">{description}</p>}
      </header>

      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          Question {currentIndex + 1} / {totalQuestions} · {answeredCount} répondue(s)
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={instantCorrection}
            onChange={(event) => setInstantCorrection(event.target.checked)}
          />
          Corrections en temps réel
        </label>
      </div>

      <div className="question-card p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold">
            {currentQuestion.category}
          </span>
          <Button variant="outline" size="sm" onClick={speakQuestion} className="gap-2">
            <Volume2 className="w-4 h-4" />
            Écouter
          </Button>
        </div>

        <h2 className="text-lg sm:text-xl font-semibold mb-6">{currentQuestion.question}</h2>

        <div className="space-y-3">
          {optionOrder.map((optionIndex, displayIndex) => {
            const option = currentQuestion.options[optionIndex];
            const isSelected = currentAnswer?.selectedIndex === optionIndex;
            const isCorrect = currentAnswer?.showExplanation && optionIndex === currentQuestion.correctIndex;
            const isWrong =
              currentAnswer?.showExplanation && isSelected && optionIndex !== currentQuestion.correctIndex;

            return (
              <button
                key={option}
                onClick={() => handleSelect(optionIndex)}
                disabled={hasSelected}
                className={cn(
                  "w-full text-left border rounded-lg px-4 py-3 transition-colors",
                  isSelected && !currentAnswer?.showExplanation && "border-primary bg-primary/5",
                  isCorrect && "border-success bg-success/10 text-success",
                  isWrong && "border-destructive bg-destructive/10 text-destructive",
                  !isSelected && !isCorrect && !isWrong && "border-border hover:border-primary/50",
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold">
                    {String.fromCharCode(65 + displayIndex)}
                  </span>
                  <span>{option}</span>
                </div>
              </button>
            );
          })}
        </div>

        {currentAnswer?.showExplanation && (
          <div className="mt-6 p-4 rounded-lg border border-border bg-muted/40 text-sm">
            <div className="flex items-center gap-2 mb-2">
              {currentAnswer.isCorrect ? (
                <CheckCircle2 className="w-4 h-4 text-success" />
              ) : (
                <XCircle className="w-4 h-4 text-destructive" />
              )}
              <span className="font-semibold">
                {currentAnswer.isCorrect ? "Bonne réponse" : "Mauvaise réponse"}
              </span>
            </div>
            <p className="text-muted-foreground">{currentQuestion.explanation}</p>
          </div>
        )}

        <div className="mt-8 flex items-center justify-between">
          <Button variant="ghost" onClick={handlePrevious} disabled={currentIndex === 0} className="gap-2">
            <ChevronLeft className="w-4 h-4" />
            Précédent
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentAnswer?.selectedIndex === null}
            className="gap-2"
          >
            {currentIndex === totalQuestions - 1 ? "Voir les résultats" : "Suivant"}
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="mt-6 text-right text-sm text-muted-foreground">
        Progression : {progress}%
      </div>

      <br/>
    </div>
  );
}
