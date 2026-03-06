import Link from "next/link";

export const metadata = {
  title: "CSP vs CR 2026 : Examen Civique Obligatoire – Différences Score/Durée",
  description:
    "Carte séjour pluriannuelle CSP (4 ans) vs Carte Résident CR (10 ans) : examen civique 2026 obligatoire, mêmes 40 QCM 32/40. Tableau comparatif.",
  alternates: {
    canonical: "https://www.examencivique.info/csp-cr-examen-civique-2026-comparatif",
  },
};

export default function CspCrExamenCiviqueComparatif2026Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "CSP vs CR 2026 : Examen Civique Obligatoire – Différences Score/Durée",
    "description": "Comparatif CSP vs CR : format, durée et exigences de l'examen civique 2026.",
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">CSP vs CR : Examen Civique 2026 Obligatoire</h1>
          <p className="text-lg text-muted-foreground">
            Depuis le 01/01/2026, la 1ère demande CSP (4 ans) et CR (10 ans) implique formation 24h + examen civique.
            Pas obligatoire pour le renouvellement d'un ancien titre.
          </p>
        </header>

        <section className="question-card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Tableau comparatif CSP vs CR</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3 border-b border-border">Critère</th>
                  <th className="text-left p-3 border-b border-border">CSP (4 ans)</th>
                  <th className="text-left p-3 border-b border-border">CR (10 ans)</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="p-3">Français requis</td>
                  <td className="p-3">A2 minimum</td>
                  <td className="p-3">A2 minimum</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Examen civique</td>
                  <td className="p-3">40 QCM, 32/40</td>
                  <td className="p-3">40 QCM, 32/40</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Durée examen</td>
                  <td className="p-3">45 min chrono</td>
                  <td className="p-3">45 min chrono</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Formation préalable</td>
                  <td className="p-3">24h obligatoire</td>
                  <td className="p-3">24h obligatoire</td>
                </tr>
                <tr>
                  <td className="p-3">Pièces jour J</td>
                  <td className="p-3">ID + convocation</td>
                  <td className="p-3">ID + convocation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Source officielle :{" "}
            <a
              href="https://www.service-public.fr/particuliers/vosdroits/F39530"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              Service-public.fr (CSP/CR)
            </a>
          </p>
        </section>

        <section className="question-card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Processus global</h2>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Dossier à la préfecture</li>
            <li>Convocation OFII pour la formation civique 24h</li>
            <li>Examen civique (40 QCM, 45 min)</li>
            <li>Attestation et suite de la procédure</li>
          </ol>
          <p className="text-sm text-muted-foreground mt-4">
            Compléter avec :{" "}
            <Link href="/guide-deroulement-examen-civique-2026" className="underline underline-offset-2">
              déroulement détaillé
            </Link>{" "}
            ·{" "}
            <Link href="/questions" className="underline underline-offset-2">
              questions officielles
            </Link>{" "}
            ·{" "}
            <Link href="/examen-civique-naturalisation-2026" className="underline underline-offset-2">
              naturalisation
            </Link>
          </p>
        </section>

        <div className="text-center">
          <Link
            href="/examen-chronometre?start=1"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors"
          >
            Simulateur CSP/CR identique (40 questions)
          </Link>
        </div>
      </div>
    </section>
  );
}
