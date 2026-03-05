import { Suspense } from "react";
import BlogPage from "@/app-pages/Blog";

export const metadata = {
  title: "Blog Examen Civique - Articles et Guides | ExamenCivique.info",
  description:
    "Articles, guides et conseils pour réussir l'examen civique français. Préparation, valeurs, histoire, institutions.",
  keywords: [
    "blog examen civique",
    "guides examen civique",
    "conseils ofii",
    "valeurs république",
    "histoire france",
    "institutions françaises",
  ],
  alternates: {
    canonical: "https://www.examencivique.info/blog",
  },
};

export default function Page() {
  return (
    <Suspense>
      <BlogPage />
    </Suspense>
  );
}
