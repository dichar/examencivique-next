import QuizEngine from "@/components/QuizEngine";
import questionsCr from "@/data/questions-cr.json";

export const metadata = {
  title: "QCM Carte de Résident (CR) 2026",
  description: "Entraînement QCM CR 2026 : 40 questions, score instantané, corrections détaillées.",
  alternates: {
    canonical: "https://www.examencivique.info/qcm-cr",
  },
};

export default function QcmCrPage() {
  return (
    <section className="seo-section">
      <div className="container-narrow">
        <QuizEngine
          title="QCM Carte de Résident (CR)"
          description="40 questions ciblées pour la CR. Corrigés et explications en temps réel."
          questionsData={questionsCr}
          quizKey="cr"
        />
      </div>
    </section>
  );
}
