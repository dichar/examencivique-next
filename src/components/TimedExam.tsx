"use client";

import { useState, useEffect, useCallback } from "react";
import { Question, selectExamQuestions, themeColors, themeShortNames, PASSING_SCORE, TOTAL_QUESTIONS, EXAM_DURATION_MINUTES } from "@/lib/questions";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle, RotateCcw, Trophy, Target, ArrowRight, ChevronLeft, ChevronRight, Clock, AlertTriangle, Timer } from "lucide-react";
import confetti from "canvas-confetti";
import { useLanguage } from "@/i18n/LanguageContext";

type ExamState = "intro" | "playing" | "review" | "results" | "timeUp";

interface AnswerState {
  selectedAnswer: string | null;
  isCorrect: boolean | null;
}

export default function TimedExam() {
  const { t } = useLanguage();
  const [state, setState] = useState<ExamState>("intro");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerState>>({});
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION_MINUTES * 60);

  const initExam = useCallback(() => {
    const selected = selectExamQuestions();
    setQuestions(selected);
    setCurrentIndex(0);
    setAnswers({});
    setScore(0);
    setTimeLeft(EXAM_DURATION_MINUTES * 60);
    setState("playing");
  }, []);

  // Timer countdown
  useEffect(() => {
    if (state !== "playing") return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          // Calculate final score
          let finalScore = 0;
          Object.values(answers).forEach(a => {
            if (a.isCorrect) finalScore++;
          });
          setScore(finalScore);
          setState("timeUp");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [state, answers]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

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
      }
    }));
  };

  const handleNext = () => {
    if (currentIndex < TOTAL_QUESTIONS - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Calculate final score
      let finalScore = 0;
      const updatedAnswers = { ...answers };
      if (currentAnswer?.isCorrect) finalScore++;
      Object.values(updatedAnswers).forEach(a => {
        if (a.isCorrect) finalScore++;
      });
      // Subtract 1 to avoid double counting current answer
      finalScore = Object.values(answers).filter(a => a.isCorrect).length;
      if (currentAnswer?.isCorrect) finalScore = Object.values({ ...answers, [currentIndex]: currentAnswer }).filter(a => a.isCorrect).length;
      
      setScore(Object.values({ ...answers }).filter(a => a.isCorrect).length);
      setState("results");
      if (Object.values(answers).filter(a => a.isCorrect).length >= PASSING_SCORE) {
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

  const finalScore = Object.values(answers).filter(a => a.isCorrect).length;
  const isPassed = finalScore >= PASSING_SCORE;

  // Time warning colors
  const getTimeColor = () => {
    if (timeLeft <= 60) return "text-destructive";
    if (timeLeft <= 300) return "text-amber-500";
    return "text-primary";
  };

  if (state === "intro") {
    return (
      <div className="question-card p-8 text-center max-w-2xl mx-auto animate-scale-in">
        <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-6">
          <Timer className="w-8 h-8 text-amber-500" />
        </div>
        <h2 className="text-2xl font-bold mb-2">{t('exam.title')}</h2>
        <p className="text-primary font-medium mb-4">{t('exam.subtitle')}</p>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {t('exam.description')}
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-muted rounded-lg">
            <Target className="w-6 h-6 text-primary mx-auto mb-2" />
            <span className="block text-2xl font-bold">40</span>
            <span className="text-sm text-muted-foreground">Questions</span>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <Clock className="w-6 h-6 text-amber-500 mx-auto mb-2" />
            <span className="block text-2xl font-bold">45</span>
            <span className="text-sm text-muted-foreground">Minutes</span>
          </div>
        </div>

        <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg mb-6">
          <div className="flex items-center gap-2 text-amber-700">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-medium">{t('exam.warning')}</span>
          </div>
        </div>

        <Button onClick={initExam} size="lg" className="gap-2 bg-amber-500 hover:bg-amber-600">
          {t('exam.start')}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    );
  }

  if (state === "timeUp") {
    return (
      <div className="question-card p-8 text-center max-w-2xl mx-auto animate-scale-in">
        <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
          <Clock className="w-10 h-10 text-destructive" />
        </div>
        
        <h2 className="text-2xl font-bold mb-2">{t('exam.timeUp')}</h2>
        <p className="text-muted-foreground mb-6">{t('exam.timeUpDesc')}</p>

        <div className={cn(
          "inline-flex items-center gap-2 px-6 py-3 rounded-full text-xl font-bold mb-8",
          finalScore >= PASSING_SCORE ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
        )}>
          {finalScore} / {TOTAL_QUESTIONS}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
          <div className="p-4 bg-success/10 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-success mx-auto mb-1" />
            <span className="font-semibold text-success">{finalScore} {t('quiz.goodAnswers')}</span>
          </div>
          <div className="p-4 bg-destructive/10 rounded-lg">
            <XCircle className="w-5 h-5 text-destructive mx-auto mb-1" />
            <span className="font-semibold text-destructive">{TOTAL_QUESTIONS - finalScore} {t('quiz.errors')}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={() => setState("review")} variant="outline" className="gap-2">
            {t('quiz.viewAnswers')}
          </Button>
          <Button onClick={initExam} className="gap-2">
            <RotateCcw className="w-4 h-4" />
            {t('quiz.restart')}
          </Button>
        </div>
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
          {isPassed ? t('quiz.congratulations') : t('quiz.keepStudying')}
        </h2>
        
        <p className="text-muted-foreground mb-4">
          {isPassed ? t('quiz.passed') : t('quiz.failed')}
        </p>

        <div className="text-sm text-muted-foreground mb-6">
          {t('exam.timeRemaining')}: {formatTime(timeLeft)}
        </div>

        <div className={cn(
          "inline-flex items-center gap-2 px-6 py-3 rounded-full text-xl font-bold mb-8",
          isPassed ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
        )}>
          {finalScore} / {TOTAL_QUESTIONS}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
          <div className="p-4 bg-success/10 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-success mx-auto mb-1" />
            <span className="font-semibold text-success">{finalScore} {t('quiz.goodAnswers')}</span>
          </div>
          <div className="p-4 bg-destructive/10 rounded-lg">
            <XCircle className="w-5 h-5 text-destructive mx-auto mb-1" />
            <span className="font-semibold text-destructive">{TOTAL_QUESTIONS - finalScore} {t('quiz.errors')}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={() => setState("review")} variant="outline" className="gap-2">
            {t('quiz.viewAnswers')}
          </Button>
          <Button onClick={initExam} className="gap-2">
            <RotateCcw className="w-4 h-4" />
            {t('quiz.restart')}
          </Button>
        </div>
      </div>
    );
  }

  if (state === "review") {
    return (
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">{t('quiz.review')}</h2>
          <Button onClick={initExam} variant="outline" size="sm" className="gap-2">
            <RotateCcw className="w-4 h-4" />
            {t('quiz.restart')}
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
                <strong className="text-foreground">{t('quiz.explanation')} :</strong> {q.explanation}
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
      {/* Timer Bar */}
      <div className="mb-4 p-4 bg-card rounded-xl border border-border shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Timer className={cn("w-5 h-5", getTimeColor())} />
            <span className="text-sm font-medium text-muted-foreground">{t('exam.timeRemaining')}</span>
          </div>
          <span className={cn("text-2xl font-bold font-mono", getTimeColor())}>
            {formatTime(timeLeft)}
          </span>
        </div>
        <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className={cn(
              "h-full rounded-full transition-all duration-1000",
              timeLeft <= 60 ? "bg-destructive" : timeLeft <= 300 ? "bg-amber-500" : "bg-primary"
            )}
            style={{ width: `${(timeLeft / (EXAM_DURATION_MINUTES * 60)) * 100}%` }}
          />
        </div>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2 text-sm">
          <span className="text-muted-foreground">{t('quiz.question')} {currentIndex + 1} / {TOTAL_QUESTIONS}</span>
          <span className="font-medium text-primary">{Object.values(answers).filter(a => a.isCorrect).length} {t('quiz.correct')}</span>
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
              
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectAnswer(option)}
                  disabled={!!currentAnswer?.selectedAnswer}
                  className={cn(
                    "answer-option",
                    isSelected && "selected"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className={cn(
                      "flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold",
                      isSelected && "border-primary bg-primary text-primary-foreground",
                      !isSelected && "border-border"
                    )}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-left">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>
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
            {t('quiz.previous')}
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={!currentAnswer?.selectedAnswer}
            className="gap-2"
          >
            {currentIndex === TOTAL_QUESTIONS - 1 ? t('quiz.results') : t('quiz.next')}
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
