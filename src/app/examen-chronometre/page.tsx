import ExamenChronometrePage from "@/app-pages/ExamenChronometrePage";

export const metadata = {
  title: "Examen Civique Chronométré - 45 min Timer | Test OFII",
  description:
    "Passez l'examen civique en conditions réelles : 40 questions, 45 minutes chrono. Simulateur officiel gratuit avec timer.",
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
};

export default function Page() {
  return <ExamenChronometrePage />;
}
