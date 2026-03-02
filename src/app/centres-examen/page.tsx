import CentresExamenPage from "@/app-pages/CentresExamen";

export const metadata = {
  title: "Centres d'Examen Civique en France | 158 Centres Agréés CCI",
  description:
    "Trouvez un centre d'examen civique près de chez vous parmi les 158 centres agréés par les CCI en France. Liste officielle, inscription et modalités pratiques.",
  alternates: {
    canonical: "https://www.examencivique.info/centres-examen",
  },
};

export default function Page() {
  return <CentresExamenPage />;
}
