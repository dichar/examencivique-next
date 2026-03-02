import ContenuThematiquesPage from "@/app-pages/ContenuThematiques";

export const metadata = {
  title: "Contenu et Thématiques de l'Examen Civique | 5 Thèmes Officiels",
  description:
    "Découvrez les 5 thématiques officielles de l'examen civique : valeurs républicaines, institutions, droits et devoirs, histoire et vie en société. 28 questions de connaissance + 12 cas pratiques.",
  alternates: {
    canonical: "https://www.examencivique.info/contenu-thematiques",
  },
};

export default function Page() {
  return <ContenuThematiquesPage />;
}
