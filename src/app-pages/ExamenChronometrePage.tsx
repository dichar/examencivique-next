"use client";

import dynamic from "next/dynamic";
import { useLanguage } from "@/i18n/LanguageContext";

const TimedExam = dynamic(() => import("@/components/TimedExam"), { ssr: false, loading: () => null });

export default function ExamenChronometrePage() {
  const { t } = useLanguage();

  const examSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Examen Civique Chronométré - Simulation OFII",
    "description": "Passez l'examen civique dans les conditions réelles : 40 questions en 45 minutes avec timer",
    "provider": {
      "@type": "Organization",
      "name": "ExamenCivique.info"
    }
  };

  return (
    <>
      

      <main className="py-12 quiz-page">
        <div className="container-wide">
          <header className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              {t('exam.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('exam.subtitle')}
            </p>
          </header>

          <TimedExam />
        </div>
      </main>
    </>
  );
}
