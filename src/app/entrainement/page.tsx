import EntrainementPage from "@/app-pages/Entrainement";

export const metadata = {
  title: "Examen civique 2026 : Entraînement QCM (2 quiz gratuits)",
  description:
    "Examen civique 2026 : 2 quiz gratuits pour tester, puis Pack Réussite (3 mois). 40 questions officielles, 45 minutes, score minimum 32/40. Entraînement en conditions réelles.",
  keywords: [
    "entrainement examen civique",
    "examen civique 2026 quiz gratuits",
    "test civique",
    "2 quiz gratuits",
    "simulateur examen civique",
    "qcm examen civique",
    "conditions réelles examen civique",
  ],
  alternates: {
    canonical: "https://www.examencivique.info/entrainement",
  },
  openGraph: {
    title: "Examen civique 2026 : Entraînement QCM (2 quiz gratuits)",
    description:
      "Testez vos connaissances en conditions réelles : 40 questions en 45 minutes. 2 quiz gratuits puis pack 3 mois.",
    url: "https://www.examencivique.info/entrainement",
  },
  twitter: {
    title: "Examen civique 2026 : Entraînement QCM (2 quiz gratuits)",
    description: "40 questions officielles, 45 minutes, score minimum 32/40. 2 quiz gratuits puis pack 3 mois.",
  },
};

export default function Page() {
  return <EntrainementPage />;
}
