import ExamenChronometrePage from "@/app-pages/ExamenChronometrePage";

export const metadata = {
  title: "Examen Civique Chronométré - 45 min Timer | Test OFII",
  description:
    "Passez l'examen civique en conditions réelles : 40 questions, 45 minutes chrono. 2 quiz gratuits puis Pack Réussite (3 mois).",
  keywords: [
    "examen civique chronométré",
    "test ofii 45 minutes",
    "simulateur examen civique",
    "qcm civique chronometre",
    "entraînement examen civique",
  ],
  alternates: {
    canonical: "https://www.examencivique.info/examen-chronometre",
  },
  openGraph: {
    title: "Examen Civique Chronométré - 45 min Timer",
    description:
      "Passez l'examen civique en conditions réelles : 40 questions, 45 minutes chrono. 2 quiz gratuits puis pack 3 mois.",
    url: "https://www.examencivique.info/examen-chronometre",
  },
  twitter: {
    title: "Examen Civique Chronométré - 45 min",
    description: "40 questions officielles, 45 minutes, score minimum 32/40. 2 quiz gratuits puis pack 3 mois.",
  },
};

export default function Page() {
  return <ExamenChronometrePage />;
}
