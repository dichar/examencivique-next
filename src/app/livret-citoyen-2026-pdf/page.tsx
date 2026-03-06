import Link from "next/link";
import AnswerBlock from "@/components/AnswerBlock";

export const metadata = {
  title: "Livret du Citoyen 2026 : Résumé Complet + PDF Téléchargeable Gratuit",
  description:
    "Livret Citoyen examen civique 2026 : résumé 5 thématiques, questions QCM extraites, PDF officiel téléchargeable pour préparation OFII.",
  alternates: {
    canonical: "https://www.examencivique.info/livret-citoyen-2026-pdf",
  },
};

export default function LivretCitoyen2026PdfPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Livret du Citoyen 2026 : Résumé Complet + PDF Téléchargeable Gratuit",
    "description":
      "Résumé du livret du citoyen 2026 et lien vers le PDF officiel pour préparer l'examen civique.",
    "author": {
      "@type": "Organization",
      "name": "ExamenCivique.info",
    },
    "publisher": {
      "@type": "Organization",
      "name": "ExamenCivique.info",
    },
  };

  return (
    <section className="seo-section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="container-narrow">
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Livret du Citoyen 2026 – Base Examen Civique
          </h1>
          <p className="text-lg text-muted-foreground">
            Document officiel de référence pour l'examen civique. Il couvre les 5 thématiques des 40 QCM.
          </p>
          <div className="mt-6">
            <a
              href="https://www.interieur.gouv.fr/Media/Immigration/Files/Le-livret-du-citoyen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Télécharger le PDF officiel
            </a>
          </div>
        </header>

        <section className="question-card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Résumé des 5 thématiques + exemples QCM</h2>

          <div className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">1. Valeurs de la République</h3>
              <p>Déclaration de 1789, laïcité, liberté d'expression.</p>
              <div className="mt-3">
                <AnswerBlock
                  question="La liberté signifie-t-elle faire tout ce qu'on veut ?"
                  answer="Non. La liberté s'exerce dans le respect de la loi et des autres."
                  highlighted
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">2. Institutions</h3>
              <p>Président, Assemblée nationale, Sénat, Union européenne.</p>
              <div className="mt-3">
                <AnswerBlock
                  question="Combien de députés compte l'Assemblée nationale ?"
                  answer="577."
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">3. Droits et devoirs</h3>
              <p>Vote à 18 ans, impôts, jury d'assises, JDC.</p>
              <div className="mt-3">
                <AnswerBlock
                  question="Le service national aujourd'hui, c'est quoi ?"
                  answer="La Journée Défense et Citoyenneté (JDC)."
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">4. Histoire / culture / géographie</h3>
              <p>Révolution française, symboles républicains, grandes régions.</p>
              <div className="mt-3">
                <AnswerBlock
                  question="Quelle est la devise de la République ?"
                  answer="Liberté, Égalité, Fraternité."
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">5. Vie en société</h3>
              <p>École, santé, travail, solidarité, égalité femmes-hommes.</p>
              <div className="mt-3">
                <AnswerBlock
                  question="La scolarité est-elle obligatoire en France ?"
                  answer="Oui, l'instruction est obligatoire de 3 à 16 ans."
                />
              </div>
            </div>
          </div>
        </section>

        <div className="text-center">
          <Link
            href="/examen-chronometre?start=1"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors"
          >
            QCM basés sur le livret du citoyen
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            Aller plus loin :{" "}
            <Link href="/themes/valeurs" className="underline underline-offset-2">
              valeurs de la République
            </Link>{" "}
            ·{" "}
            <Link href="/themes/histoire" className="underline underline-offset-2">
              dates clés de l'Histoire
            </Link>{" "}
            ·{" "}
            <Link href="/questions" className="underline underline-offset-2">
              questions officielles
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
