"use client";

import { useState, useEffect, useCallback } from "react";
import { Question, selectExamQuestions, themeColors, themeShortNames, PASSING_SCORE, TOTAL_QUESTIONS } from "@/lib/questions";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle, RotateCcw, Trophy, Target, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import confetti from "canvas-confetti";

type QuizState = "intro" | "playing" | "review" | "results";

interface AnswerState {
  selectedAnswer: string | null;
  isCorrect: boolean | null;
  showExplanation: boolean;
}

export default function Quiz() {
  const [state, setState] = useState<QuizState>("intro");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerState>>({});
  const [score, setScore] = useState(0);

  const initQuiz = useCallback(() => {
    const selected = selectExamQuestions();
    setQuestions(selected);
    setCurrentIndex(0);
    setAnswers({});
    setScore(0);
    setState("playing");
  }, []);

  const currentQuestion = questions[currentIndex];
  const currentAnswer = answers[currentIndex];
  const progress = ((currentIndex + 1) / TOTAL_QUESTIONS) * 100;

  const handleSelectAnswer = (answer: string) => {
    if (currentAnswer?.selectedAnswer) return;

    const isCorrect = answer === currentQuestion.correctAnswer;
    
    setAnswers(prev => ({
      ...prev,
      [currentIndex]: {
        selectedAnswer: answer,
        isCorrect,
        showExplanation: true,
      }
    }));

    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < TOTAL_QUESTIONS - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setState("results");
      if (score + (currentAnswer?.isCorrect ? 1 : 0) >= PASSING_SCORE) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const isPassed = score >= PASSING_SCORE;

  if (state === "intro") {
    return (
      <div className="question-card p-8 text-center max-w-2xl mx-auto animate-scale-in">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Target className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Simulateur d'Examen Civique</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Cet examen contient <strong>40 questions</strong> réparties selon les thématiques officielles. 
          Vous devez obtenir au moins <strong>32 bonnes réponses (80%)</strong> pour réussir.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm">
          <div className="p-3 bg-muted rounded-lg">
            <span className="font-semibold">Principes & Valeurs</span>
            <span className="block text-muted-foreground">11 questions</span>
          </div>
          <div className="p-3 bg-muted rounded-lg">
            <span className="font-semibold">Institutions</span>
            <span className="block text-muted-foreground">6 questions</span>
          </div>
          <div className="p-3 bg-muted rounded-lg">
            <span className="font-semibold">Droits & Devoirs</span>
            <span className="block text-muted-foreground">11 questions</span>
          </div>
          <div className="p-3 bg-muted rounded-lg">
            <span className="font-semibold">Histoire & Culture</span>
            <span className="block text-muted-foreground">8 questions</span>
          </div>
          <div className="p-3 bg-muted rounded-lg sm:col-span-2">
            <span className="font-semibold">Vie en Société</span>
            <span className="block text-muted-foreground">4 questions</span>
          </div>
        </div>
        <Button onClick={initQuiz} size="lg" className="gap-2">
          Commencer l'examen
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    );
  }

  if (state === "results") {
    return (
      <div className="question-card p-8 text-center max-w-2xl mx-auto animate-scale-in">
        <div className={cn(
          "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6",
          isPassed ? "bg-success/10" : "bg-destructive/10"
        )}>
          {isPassed ? (
            <Trophy className="w-10 h-10 text-success" />
          ) : (
            <XCircle className="w-10 h-10 text-destructive" />
          )}
        </div>
        
        <h2 className="text-2xl font-bold mb-2">
          {isPassed ? "Félicitations !" : "Continuez vos révisions"}
        </h2>
        
        <p className="text-muted-foreground mb-6">
          {isPassed 
            ? "Vous avez réussi l'examen civique !"
            : "Vous n'avez pas atteint le score minimum de 32/40."}
        </p>

        <div className={cn(
          "inline-flex items-center gap-2 px-6 py-3 rounded-full text-xl font-bold mb-8",
          isPassed ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
        )}>
          {score} / {TOTAL_QUESTIONS}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
          <div className="p-4 bg-success/10 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-success mx-auto mb-1" />
            <span className="font-semibold text-success">{score} bonnes</span>
          </div>
          <div className="p-4 bg-destructive/10 rounded-lg">
            <XCircle className="w-5 h-5 text-destructive mx-auto mb-1" />
            <span className="font-semibold text-destructive">{TOTAL_QUESTIONS - score} erreurs</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={() => setState("review")} variant="outline" className="gap-2">
            Voir les réponses
          </Button>
          <Button onClick={initQuiz} className="gap-2">
            <RotateCcw className="w-4 h-4" />
            Recommencer
          </Button>
        </div>
      </div>
    );
  }

  if (state === "review") {
    return (
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Révision des réponses</h2>
          <Button onClick={initQuiz} variant="outline" size="sm" className="gap-2">
            <RotateCcw className="w-4 h-4" />
            Recommencer
          </Button>
        </div>
        
        {questions.map((q, idx) => {
          const answer = answers[idx];
          const themeStyle = themeColors[q.theme];
          
          return (
            <div key={q.id} className="question-card p-6 animate-slide-up" style={{ animationDelay: `${idx * 50}ms` }}>
              <div className="flex items-start gap-3 mb-4">
                <span className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                  answer?.isCorrect ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
                )}>
                  {idx + 1}
                </span>
                <div className="flex-1">
                  <span className={cn("theme-badge mb-2", themeStyle.bg, themeStyle.text)}>
                    {themeShortNames[q.theme]}
                  </span>
                  <p className="font-medium mt-2">{q.question}</p>
                </div>
              </div>
              
              <div className="grid gap-2 ml-11">
                {q.options.map((option) => {
                  const isSelected = answer?.selectedAnswer === option;
                  const isCorrectAnswer = option === q.correctAnswer;
                  
                  return (
                    <div
                      key={option}
                      className={cn(
                        "p-3 rounded-lg text-sm border-2",
                        isCorrectAnswer && "border-success bg-success/10 text-success",
                        isSelected && !isCorrectAnswer && "border-destructive bg-destructive/10 text-destructive",
                        !isSelected && !isCorrectAnswer && "border-transparent bg-muted"
                      )}
                    >
                      <div className="flex items-center gap-2">
                        {isCorrectAnswer && <CheckCircle2 className="w-4 h-4 flex-shrink-0" />}
                        {isSelected && !isCorrectAnswer && <XCircle className="w-4 h-4 flex-shrink-0" />}
                        {option}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-4 ml-11 p-3 bg-primary/5 rounded-lg text-sm text-muted-foreground">
                <strong className="text-foreground">Explication :</strong> {q.explanation}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Playing state
  const themeStyle = themeColors[currentQuestion?.theme] || { bg: "bg-muted", text: "text-muted-foreground", border: "" };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2 text-sm">
          <span className="text-muted-foreground">Question {currentIndex + 1} / {TOTAL_QUESTIONS}</span>
          <span className="font-medium text-primary">{score} bonnes réponses</span>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Question Card */}
      <div className="question-card overflow-hidden animate-scale-in" key={currentIndex}>
        <div className="p-6 sm:p-8">
          {/* Theme Badge */}
          <div className={cn("theme-badge mb-4", themeStyle.bg, themeStyle.text)}>
            {themeShortNames[currentQuestion?.theme]}
          </div>

          {/* Question */}
          <h2 className="text-lg sm:text-xl font-semibold mb-6 leading-relaxed">
            {currentQuestion?.question}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion?.options.map((option, idx) => {
              const isSelected = currentAnswer?.selectedAnswer === option;
              const isCorrectAnswer = option === currentQuestion.correctAnswer;
              const showResult = currentAnswer?.showExplanation;
              
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectAnswer(option)}
                  disabled={!!currentAnswer?.selectedAnswer}
                  className={cn(
                    "answer-option",
                    isSelected && !showResult && "selected",
                    showResult && isCorrectAnswer && "correct",
                    showResult && isSelected && !isCorrectAnswer && "incorrect"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className={cn(
                      "flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold",
                      showResult && isCorrectAnswer && "border-success bg-success text-success-foreground",
                      showResult && isSelected && !isCorrectAnswer && "border-destructive bg-destructive text-destructive-foreground",
                      !showResult && isSelected && "border-primary bg-primary text-primary-foreground",
                      !showResult && !isSelected && "border-border"
                    )}>
                      {showResult && isCorrectAnswer && <CheckCircle2 className="w-4 h-4" />}
                      {showResult && isSelected && !isCorrectAnswer && <XCircle className="w-4 h-4" />}
                      {!showResult && String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-left">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {currentAnswer?.showExplanation && (
            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20 animate-fade-in">
              <p className="text-sm">
                <strong className="text-primary">Explication :</strong>{" "}
                <span className="text-muted-foreground">{currentQuestion?.explanation}</span>
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="px-6 sm:px-8 py-4 bg-muted/50 border-t border-border flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Précédent
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={!currentAnswer?.selectedAnswer}
            className="gap-2"
          >
            {currentIndex === TOTAL_QUESTIONS - 1 ? "Voir les résultats" : "Suivant"}
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
