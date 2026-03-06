import Link from "next/link";

export const metadata = {
  title: "Erreurs Fréquentes Examen Civique 2026 OFII + Astuces Réussite 32/40",
  description:
    "10 erreurs à éviter examen civique OFII 2026 : pièges laïcité, temps 45 min, réponses vagues. Corrections + QCM pour score 32/40.",
  alternates: {
    canonical: "https://www.examencivique.info/erreurs-frequentes-examen-civique-ofii",
  },
};

export default function ErreursFrequentesExamenCiviqueOfiiPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Erreurs Fréquentes Examen Civique 2026 OFII + Astuces Réussite 32/40",
    "description": "Top erreurs à éviter et conseils pour réussir l'examen civique 2026.",
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Erreurs Courantes Examen Civique OFII 2026</h1>
          <p className="text-lg text-muted-foreground">
            Taux d'échec souvent lié à la préparation. Voici les 10 erreurs n°1 et leurs corrections.
          </p>
        </header>

        <section className="question-card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Top 10 erreurs + solutions</h2>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>
              <strong>Ne pas arriver 30 min avant</strong> → risque de refus d'accès.
            </li>
            <li>
              <strong>Oublier la pièce d'identité</strong> → examen impossible.
            </li>
            <li>
              <strong>Mauvaise gestion des 45 min</strong> → viser 1 min/question.
            </li>
            <li>
              <strong>Voile à l'école autorisé</strong> → Faux (laïcité).
            </li>
            <li>
              <strong>Marianne religieuse</strong> → Faux (symbole de la République).
            </li>
            <li>
              <strong>Vote dès 16 ans</strong> → Faux (18 ans).
            </li>
            <li>
              <strong>Service militaire obligatoire</strong> → Faux (JDC).
            </li>
            <li>
              <strong>Pas de relecture</strong> → garder 5 min pour vérifier.
            </li>
            <li>
              <strong>Réponses vagues</strong> → choisir la réponse la plus précise.
            </li>
            <li>
              <strong>Panique sur mises en situation</strong> → relire l'énoncé 2 fois.
            </li>
          </ol>
        </section>

        <section className="question-card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Astuces rapides pour 32/40</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Commencer par les questions sûres.</li>
            <li>Éviter les hésitations longues sur une seule question.</li>
            <li>Réviser les 5 thématiques en priorité.</li>
            <li>Faire au moins 3 QCM chronométrés avant le jour J.</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            Liens utiles :{" "}
            <Link href="/guide-deroulement-examen-civique-2026" className="underline underline-offset-2">
              déroulement complet
            </Link>{" "}
            ·{" "}
            <Link href="/questions" className="underline underline-offset-2">
              questions officielles
            </Link>
          </p>
        </section>

        <div className="text-center">
          <Link
            href="/examen-chronometre?start=1"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors"
          >
            Simulateur chronométré 45 min
          </Link>
        </div>
      </div>
    </section>
  );
}
