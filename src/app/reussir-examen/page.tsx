import ReussirExamenPage from "@/app-pages/ReussirExamen";

export const metadata = {
  title: "Réussir l'Examen Civique | Score Minimum, Niveau et Validité",
  description:
    "Comment réussir l'examen civique ? Score minimum de 32/40 (80%), niveau selon le titre demandé, validité illimitée. Possibilité de repasser l'examen en cas d'échec.",
  alternates: {
    canonical: "https://www.examencivique.info/reussir-examen",
  },
};

export default function Page() {
  return <ReussirExamenPage />;
}
