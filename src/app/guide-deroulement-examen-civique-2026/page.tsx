import Link from "next/link";
import AnswerBlock from "@/components/AnswerBlock";

export const metadata = {
  title: "Déroulement Examen Civique 2026 OFII : Étapes, Durée 45 min, Score 32/40",
  description:
    "Examen civique 2026 : après formation 24h, 40 QCM tablette (28 connaissances/12 situations), 45 min max, 32 bonnes réponses. Guide complet OFII.",
  alternates: {
    canonical: "https://www.examencivique.info/guide-deroulement-examen-civique-2026",
  },
};

export default function GuideDeroulementExamenCivique2026Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Déroulement Examen Civique 2026 OFII : Étapes, Durée 45 min, Score 32/40",
    "description":
      "Guide complet sur le déroulement de l'examen civique 2026 OFII : étapes, durée, format et score requis.",
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
            Guide Déroulement Examen Civique 2026 OFII
          </h1>
          <p className="text-lg text-muted-foreground">
            Obligatoire depuis le 1er janvier 2026 pour CSP (4 ans), CR (10 ans) et naturalisation française. L'examen
            civique suit la formation civique de 24h.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/examen-chronometre?start=1"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Passer le simulateur 40 questions (45 min)
            </Link>
            <Link
              href="#checklist-jour-j"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors"
            >
              PDF checklist jour J
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Formation civique 24h :{" "}
            <a
              href="https://formation-civique.interieur.gouv.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              formation-civique.interieur.gouv.fr
            </a>
          </p>
        </header>

        <div className="space-y-8">
          <section className="question-card p-8">
            <h2 className="text-2xl font-bold mb-4">Les 6 étapes précises du jour J</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                <strong>Convocation OFII</strong> : reçue 2 à 4 semaines après la formation 24h.
              </li>
              <li>
                <strong>Arrivée</strong> : 30 minutes avant l'horaire indiqué, pièce d'identité obligatoire.
              </li>
              <li>
                <strong>Installation</strong> : salle surveillée, tablette/ordinateur individuel fourni.
              </li>
              <li>
                <strong>Examen</strong> : 40 QCM aléatoires (28 connaissances + 12 mises en situation).
                <strong> Chrono 45 minutes</strong>.
              </li>
              <li>
                <strong>Résultat immédiat</strong> : affiché à l'écran. Score minimum{" "}
                <strong>32/40 (80%)</strong>.
              </li>
              <li>
                <strong>Attestation</strong> : délivrée sur place si réussite. Échec → repassage après 1 mois maximum.
              </li>
            </ol>
          </section>

          <section className="question-card p-8">
            <h2 className="text-2xl font-bold mb-4">Format exact de l'examen (40 questions)</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong>Durée maximum</strong> : 45 minutes (chrono strict).
              </li>
              <li>
                <strong>Support</strong> : tablette tactile ou ordinateur (pas papier).
              </li>
              <li>
                <strong>Questions</strong> : 40 QCM à choix multiple (1 seule bonne réponse).
              </li>
              <li>
                <strong>Types</strong> : 28 questions connaissances + 12 mises en situation.
              </li>
              <li>
                <strong>Score validant</strong> : 32/40 minimum. Pas de demi-point.
              </li>
              <li>
                <strong>Langue</strong> : Français (niveau A2 minimum requis).
              </li>
            </ul>
          </section>

          <section className="question-card p-8">
            <h2 className="text-2xl font-bold mb-4">Les 5 thématiques officielles</h2>
            <p className="text-muted-foreground mb-4">
              Questions tirées du{" "}
              <Link href="/livret-citoyen-2026-pdf" className="underline underline-offset-2">
                Livret du Citoyen 2026
              </Link>{" "}
              :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong>Valeurs de la République</strong> : laïcité, liberté, égalité, fraternité.
              </li>
              <li>
                <strong>Institutions</strong> : France, UE, Préfecture, OFII.
              </li>
              <li>
                <strong>Droits et devoirs</strong> : citoyenneté, élections, service national.
              </li>
              <li>
                <strong>Histoire / culture / géographie</strong> : révolutions, symboles, régions.
              </li>
              <li>
                <strong>Vie en société</strong> : école, santé, travail, solidarité.
              </li>
            </ul>
          </section>

          <section className="question-card p-8">
            <h2 className="text-2xl font-bold mb-4">Exemples QCM (format officiel)</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <AnswerBlock
                question="En France, le voile est-il autorisé à l'école publique ?"
                answer="Non. La laïcité impose la neutralité dans les établissements publics."
                highlighted
              />
              <AnswerBlock
                question="Quel est le score minimum pour réussir ?"
                answer="32 bonnes réponses sur 40, soit 80%."
              />
            </div>
          </section>

          <section id="checklist-jour-j" className="question-card p-8">
            <h2 className="text-2xl font-bold mb-4">Checklist jour J (PDF)</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Convocation OFII imprimée ou sur téléphone</li>
              <li>Pièce d'identité valide</li>
              <li>Arriver 30 minutes avant</li>
              <li>Lire chaque question jusqu'au bout</li>
              <li>Garder 5 minutes pour relire</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              Besoin d'aide ?{" "}
              <Link href="/questions" className="underline underline-offset-2">
                Liste officielle des questions
              </Link>{" "}
              ou{" "}
              <Link href="/blog/erreurs-frequentes-examen-civique" className="underline underline-offset-2">
                erreurs fréquentes à éviter
              </Link>
              .
            </p>
          </section>

          <div className="text-center">
            <Link
              href="/examen-chronometre?start=1"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors"
            >
              Démarrer le simulateur 40 questions
            </Link>
            <p className="text-xs text-muted-foreground mt-4">
              Informations basées sur{" "}
              <a
                href="https://formation-civique.interieur.gouv.fr/examen-civique/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                Ministère de l'Intérieur
              </a>{" "}
              et{" "}
              <a
                href="https://www.service-public.fr/particuliers/vosdroits/F39426"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                Service-public.fr
              </a>{" "}
              — vérifié mars 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
