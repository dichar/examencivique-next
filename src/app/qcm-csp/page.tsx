import QuizEngine from "@/components/QuizEngine";
import questionsCsp from "@/data/questions-csp.json";

export const metadata = {
  title: "QCM Carte de Séjour Pluriannuelle (CSP) 2026",
  description: "Entraînement QCM CSP 2026 : 40 questions, score instantané, corrections détaillées.",
  alternates: {
    canonical: "https://www.examencivique.info/qcm-csp",
  },
};

export default function QcmCspPage() {
  return (
    <section className="seo-section">
      <div className="container-narrow">
        <QuizEngine
          title="QCM Carte de Séjour Pluriannuelle (CSP)"
          description="40 questions ciblées pour la CSP. Corrigés et explications en temps réel."
          questionsData={questionsCsp}
          quizKey="csp"
        />
      </div>
    </section>
  );
}
