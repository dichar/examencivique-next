import QuandPasserExamenPage from "@/app-pages/QuandPasserExamen";

export const metadata = {
  title: "Quand Passer l'Examen Civique ? | Délais et Planification",
  description:
    "Quand faut-il passer l'examen civique ? Avant le dépôt de votre demande de titre de séjour. Anticipez pour éviter les retards administratifs. Conseils de planification.",
  alternates: {
    canonical: "https://www.examencivique.info/quand-passer-examen",
  },
};

export default function Page() {
  return <QuandPasserExamenPage />;
}
