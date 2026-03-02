import ComparatifPage from "@/app-pages/Comparatif";

export const metadata = {
  title: "Examen Civique OFII vs Entretien Naturalisation : Quelles Différences ?",
  description:
    "Comprendre la différence entre le test civique OFII (QCM écrit pour carte de séjour) et l'entretien de naturalisation (oral pour devenir français). Nouvelles règles 2024-2026 incluses.",
  keywords: [
    "différence test ofii et naturalisation",
    "questions préfecture vs ofii",
    "examen carte résident",
    "entretien naturalisation préfecture",
    "test civique vs entretien",
    "niveau A2 carte séjour",
    "niveau B2 naturalisation",
  ],
  alternates: {
    canonical: "https://www.examencivique.info/comparatif",
  },
};

export default function Page() {
  return <ComparatifPage />;
}
