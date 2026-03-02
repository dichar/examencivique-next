import AmenagementsDispensesPage from "@/app-pages/AmenagementsDispenses";

export const metadata = {
  title: "Aménagements et Dispenses de l'Examen Civique | Handicap et Santé",
  description:
    "Aménagements et dispenses possibles pour l'examen civique en cas de handicap ou problème de santé. Certificat médical obligatoire. Procédures et conditions.",
  alternates: {
    canonical: "https://www.examencivique.info/amenagements-dispenses",
  },
};

export default function Page() {
  return <AmenagementsDispensesPage />;
}
