"use client";

import { useState } from "react";
import Quiz from "@/components/Quiz";
import TimedExam from "@/components/TimedExam";
import FAQSection, { homeFaqItems } from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Target, Clock, CheckCircle2 } from "lucide-react";

export default function Entrainement() {
  const [mode, setMode] = useState<"training" | "exam">("training");

  return (
    <>
      <section className="seo-section bg-gradient-to-b from-background to-muted/30">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold">Choisissez votre mode</h2>
              <p className="text-muted-foreground text-sm">
                Entraînement libre ou examen chronométré pour vous mettre en condition réelle.
              </p>
            </div>
            <div className="inline-flex items-center rounded-xl border border-border bg-card p-1">
              <button
                onClick={() => setMode("training")}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  mode === "training" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Entraînement
              </button>
              <button
                onClick={() => setMode("exam")}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  mode === "exam" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Examen 45 min
              </button>
            </div>
          </div>

          {mode === "training" ? <Quiz /> : <TimedExam />}
        </div>
      </section>
      <header className="bg-gradient-to-b from-primary via-primary to-primary/90 text-primary-foreground py-10 sm:py-14">
        <div className="container-wide text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Entraînez-vous à l'examen civique dans des conditions réelles.
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Testez vos connaissances dans des conditions identiques à l'examen civique.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Target className="w-6 h-6 mx-auto mb-2" />
              <span className="block text-2xl font-bold">40</span>
              <span className="text-sm text-white/80">Questions QCM</span>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Clock className="w-6 h-6 mx-auto mb-2" />
              <span className="block text-2xl font-bold">45</span>
              <span className="text-sm text-white/80">Minutes</span>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <CheckCircle2 className="w-6 h-6 mx-auto mb-2" />
              <span className="block text-2xl font-bold">32/40</span>
              <span className="text-sm text-white/80">Score minimum</span>
            </div>
          </div>
        </div>
      </header>
      <TestimonialsSection />

      <FAQSection
        items={homeFaqItems.slice(0, 4)}
        title="FAQ Entraînement Examen Civique"
        subtitle="Réponses rapides aux questions sur l'entraînement et le format officiel."
        showCTA={true}
        includeJsonLd={true}
      />
    </>
  );
}
