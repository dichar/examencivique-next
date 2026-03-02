import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrainingModulesSection from "@/components/TrainingModulesSection";
import { ArrowRight, FileText, Target } from "lucide-react";

export default function ModulesEntrainement() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Modules d'Entraînement Examen Civique 2026 par Niveau",
    "description": "Découvrez les 3 parcours d'entraînement exclusifs pour l'examen civique : CSP, Carte Résident et Naturalisation. Conforme au décret 2025-1345.",
    "author": {
      "@type": "Organization",
      "name": "ExamenCivique.info"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ExamenCivique.info",
      "url": "https://www.examencivique.info"
    },
    "datePublished": "2026-01-28",
    "dateModified": "2026-01-28"
  };

  return (
    <>
      

      <Breadcrumbs />
      
      <div className="bg-gradient-to-b from-primary via-primary to-primary/90 text-primary-foreground py-12">
        <div className="container-wide">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Modules d'Entraînement par Niveau
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Depuis le décret 2025-1345, chaque parcours administratif exige des connaissances spécifiques.
            Choisissez le module adapté à votre démarche : CSP, Carte Résident ou Naturalisation.
          </p>
        </div>
      </div>

      <main className="py-0">
        <TrainingModulesSection />

        {/* Related Links */}
        <section className="seo-section bg-muted/30">
          <div className="container-wide">
            <h2 className="text-2xl font-bold text-center mb-8">
              Ressources complémentaires
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/questions"
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <FileText className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  Toutes les Questions
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Consultez la liste complète des 140+ questions officielles
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                  Voir les questions <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                href="/examen-chronometre"
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <Target className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  Examen Chronométré
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Testez-vous dans les conditions réelles : 40 questions en 45 minutes
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                  Lancer l'examen <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                href="/blog/nouveaux-modules-entrainement-examen-civique-2026"
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <FileText className="w-10 h-10 text-emerald-500 mb-4" />
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  Article Complet
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Découvrez notre guide détaillé sur les nouveaux modules 2026
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                  Lire l'article <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
