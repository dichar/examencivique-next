import Link from "next/link";
import AnswerBlock from "@/components/AnswerBlock";

export const metadata = {
  title: "Examen Civique Naturalisation Française 2026 : 40 Questions + Conseils",
  description:
    "Préparez examen civique naturalisation 2026 : 40 QCM OFII obligatoires, score 32/40, pièges laïcité/symboles. Simulateur + guide.",
  alternates: {
    canonical: "https://www.examencivique.info/examen-civique-naturalisation-2026",
  },
};

export default function ExamenCiviqueNaturalisation2026Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Examen Civique Naturalisation Française 2026 : 40 Questions + Conseils",
    "description":
      "Guide pratique de l'examen civique 2026 pour la naturalisation : format, pièges fréquents et conseils.",
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
            Examen Civique Naturalisation Française 2026
          </h1>
          <p className="text-lg text-muted-foreground">
            Condition obligatoire pour devenir citoyen français, avec entretien oral d'intégration républicaine.
            Niveau B1 français + réussite examen civique : <strong>32/40 minimum</strong>.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/examen-chronometre?start=1"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Test 40 questions naturalisation
            </Link>
            <Link
              href="#checklist-naturalisation"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors"
            >
              Checklist naturalisation
            </Link>
          </div>
        </header>

        <div className="space-y-8">
          <section className="question-card p-8">
            <h2 className="text-2xl font-bold mb-4">Spécificités naturalisation (vs CSP/CR)</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Questions plus pointues sur Vème République, Europe, Histoire contemporaine.</li>
              <li>Pièges fréquents : laïcité stricte, symboles nationaux, égalité femmes-hommes.</li>
              <li>Calendrier : examen OFII après dépôt du dossier préfecture (3 à 6 mois d'attente).</li>
              <li>Même format : 40 QCM, 45 min, 32/40, tablette OFII.</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              Références officielles :{" "}
              <a
                href="https://www.service-public.fr/particuliers/vosdroits/F39426"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                Service-public.fr (Naturalisation)
              </a>
            </p>
          </section>

          <section className="question-card p-8">
            <h2 className="text-2xl font-bold mb-4">5 pièges classiques naturalisation</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 border-b border-border">Piège</th>
                    <th className="text-left p-3 border-b border-border">Faux</th>
                    <th className="text-left p-3 border-b border-border">Vrai</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="p-3">Voile à l'école</td>
                    <td className="p-3">Autorisé</td>
                    <td className="p-3">Interdit (laïcité)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Marianne</td>
                    <td className="p-3">Figure religieuse</td>
                    <td className="p-3">Symbolique République</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Prière en public</td>
                    <td className="p-3">Où on veut</td>
                    <td className="p-3">Libre, mais sans ostentation</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Égalité</td>
                    <td className="p-3">Complémentarité H/F</td>
                    <td className="p-3">Égalité stricte</td>
                  </tr>
                  <tr>
                    <td className="p-3">Votes</td>
                    <td className="p-3">16 ans</td>
                    <td className="p-3">18 ans</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <AnswerBlock
                question="À quel âge vote-t-on en France ?"
                answer="18 ans."
                highlighted
              />
              <AnswerBlock
                question="Marianne est-elle une figure religieuse ?"
                answer="Non. Marianne symbolise la République française."
              />
            </div>
          </section>

          <section id="checklist-naturalisation" className="question-card p-8">
            <h2 className="text-2xl font-bold mb-4">Checklist naturalisation</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Réviser les 5 thématiques (livret du citoyen)</li>
              <li>S'entraîner sur 40 QCM chronométrés</li>
              <li>Maîtriser laïcité et symboles républicains</li>
              <li>Préparer l'entretien oral d'intégration</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              Ressources utiles :{" "}
              <Link href="/questions" className="underline underline-offset-2">
                liste des questions officielles
              </Link>{" "}
              ·{" "}
              <Link href="/csp-cr-examen-civique-2026-comparatif" className="underline underline-offset-2">
                comparatif CSP/CR
              </Link>{" "}
              ·{" "}
              <Link href="/livret-citoyen-2026-pdf" className="underline underline-offset-2">
                livret du citoyen
              </Link>
            </p>
          </section>

          <div className="text-center">
            <Link
              href="/examen-chronometre?start=1"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors"
            >
              S'entraîner aux 40 questions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
