import EntrainementPage from "@/app-pages/Entrainement";

export const metadata = {
  title: "Examen civique 2026 gratuit QCM : Entraînement en Conditions Réelles",
  description:
    "Examen civique 2026 gratuit QCM : 40 questions officielles, 45 minutes, score minimum 32/40. Entraînement en conditions réelles.",
  keywords: [
    "entrainement examen civique",
    "examen civique 2026 gratuit QCM",
    "test civique gratuit",
    "simulateur examen civique",
    "qcm examen civique",
    "conditions réelles examen civique",
  ],
  alternates: {
    canonical: "https://www.examencivique.info/entrainement",
  },
  openGraph: {
    title: "Examen civique 2026 gratuit QCM : Entraînement",
    description:
      "Testez vos connaissances en conditions réelles : 40 questions en 45 minutes.",
    url: "https://www.examencivique.info/entrainement",
  },
  twitter: {
    title: "Examen civique 2026 gratuit QCM",
    description: "40 questions officielles, 45 minutes, score minimum 32/40.",
  },
};

export default function Page() {
  return <EntrainementPage />;
}
