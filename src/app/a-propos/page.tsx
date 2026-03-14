import AboutPage from "@/app-pages/About";

export const metadata = {
  title: "À Propos | ExamenCivique.info - Préparation au Test Civique OFII",
  description:
    "ExamenCivique.info est un site d'entraînement avec 2 quiz gratuits, puis Pack Réussite (3 mois). Questions 100% officielles du Ministère de l'Intérieur. Découvrez notre mission.",
  keywords: [
    "à propos examen civique",
    "simulateur examen civique",
    "questions officielles ofii",
    "préparation test civique",
    "ExamenCivique.info",
  ],
  alternates: {
    canonical: "https://www.examencivique.info/a-propos",
  },
};

export default function Page() {
  return <AboutPage />;
}
