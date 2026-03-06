import QuizEngine from "@/components/QuizEngine";
import questionsNat from "@/data/questions-nat.json";

export const metadata = {
  title: "QCM Naturalisation Française 2026",
  description: "Entraînement QCM naturalisation 2026 : 40 questions, score instantané, corrections détaillées.",
  alternates: {
    canonical: "https://www.examencivique.info/qcm-naturalisation",
  },
};

export default function QcmNaturalisationPage() {
  return (
    <section className="seo-section">
      <div className="container-narrow">
        <QuizEngine
          title="QCM Naturalisation Française"
          description="40 questions ciblées pour la naturalisation. Corrigés et explications en temps réel."
          questionsData={questionsNat}
          quizKey="naturalisation"
        />
      </div>
    </section>
  );
}
