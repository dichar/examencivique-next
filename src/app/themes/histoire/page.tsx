import ThemeHistoirePage from "@/app-pages/ThemeHistoire";

export const metadata = {
  title: "Dates Clés de l'Histoire de France | Examen Civique OFII 2025",
  description:
    "Les dates essentielles de l'histoire de France à connaître pour l'examen civique : 1789, 1905, 1944, 1958, 1981... Chronologie complète avec explications.",
  alternates: {
    canonical: "https://www.examencivique.info/themes/histoire",
  },
};

export default function Page() {
  return <ThemeHistoirePage />;
}
