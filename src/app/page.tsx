import IndexPage from "@/app-pages/Index";

export const metadata = {
  title: "Examen Civique 2026 : Test et 40 Questions Officielles (Gratuit)",
  description:
    "Entraînez-vous avec le simulateur gratuit pour l'examen civique 2026. 40 questions officielles de l'OFII et téléchargement du livret citoyen PDF.",
  keywords: [
    "examen civique",
    "préparation examen civique",
    "test ofii",
    "qcm examen civique",
    "questions examen civique",
    "contrat intégration républicaine",
    "carte de séjour",
    "naturalisation",
    "test civique gratuit",
    "examen civique 2026",
  ],
  alternates: {
    canonical: "https://www.examencivique.info",
  },
  openGraph: {
    title: "Examen Civique 2026 : Test QCM Gratuit",
    description: "Simulateur gratuit avec 40 questions officielles OFII. Score 32/40 requis.",
    url: "https://www.examencivique.info",
  },
  twitter: {
    title: "Examen Civique 2026 : Test QCM Gratuit",
    description: "Simulateur gratuit avec 40 questions officielles OFII.",
  },
};

export default function Page() {
  return <IndexPage />;
}
