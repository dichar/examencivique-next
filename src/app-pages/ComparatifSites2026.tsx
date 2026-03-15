"use client";

import Link from "next/link";
import { BarChart3, Crown, ShieldCheck, Sparkles, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";

const comparisonRows = [
  {
    label: "Spécialisation 2026",
    examen: "Haute précision (CSP/CR/NAT)",
    qcm: "Simulateur intensif",
    prepacivique: "Généraliste",
    letest: "Standard",
  },
  {
    label: "Interface de test",
    examen: "100% fidèle à l'examen",
    qcm: "Chrono & seuil 80%",
    prepacivique: "Basique",
    letest: "Datée",
  },
  {
    label: "Mises à jour",
    examen: "Quotidiennes (Loi 2024-2025)",
    qcm: "+1500 questions vérifiées",
    prepacivique: "Mensuelles",
    letest: "Aléatoires",
  },
  {
    label: "Accès",
    examen: "Achat unique (Sans abonnement)",
    qcm: "Essai gratuit / No-Stress",
    prepacivique: "Inscription lourde",
    letest: "Classique",
  },
];

export default function ComparatifSites2026() {
  return (
    <div className="seo-section">
      <div className="container-narrow">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <BarChart3 className="w-4 h-4" />
            Comparatif 2026
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Examen Civique 2026 : Le Guide Comparatif pour Réussir du Premier Coup
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            L'année 2026 marque un tournant pour tous les candidats à la carte de séjour pluriannuelle (CSP), à la carte
            de résident (CR) ou à la naturalisation. L’examen civique n’est plus une simple formalité : c’est une
            épreuve technique qui exige une préparation rigoureuse.
          </p>
        </div>

        <div className="question-card p-6 mb-10">
          <h2 className="text-xl font-bold mb-4">Le Comparatif : Pourquoi la qualité prime sur la quantité ?</h2>
          <p className="text-muted-foreground mb-6">
            Face à la multiplication des plateformes en ligne, comment s'y retrouver ? Nous avons analysé les solutions
            leaders du marché. Si des sites comme Prepacivique.fr ou LeTestCivique.fr proposent des bases de données
            classiques, deux plateformes se distinguent nettement par leur efficacité et leur modernité :
            ExamenCivique.info et QCMCivique.fr.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/60">
                  <th className="p-3 text-left font-semibold">Caractéristiques</th>
                  <th className="p-3 text-center font-semibold bg-primary/10">ExamenCivique.info</th>
                  <th className="p-3 text-center font-semibold bg-emerald-500/10">QCMCivique.fr</th>
                  <th className="p-3 text-center font-semibold">Prepacivique.fr</th>
                  <th className="p-3 text-center font-semibold">LeTestCivique.fr</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <td className="p-3 font-medium">{row.label}</td>
                    <td className="p-3 text-center bg-primary/5">{row.examen}</td>
                    <td className="p-3 text-center bg-emerald-500/5">{row.qcm}</td>
                    <td className="p-3 text-center text-muted-foreground">{row.prepacivique}</td>
                    <td className="p-3 text-center text-muted-foreground">{row.letest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Focus sur les deux leaders : L'écosystème de votre réussite</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="question-card p-6">
              <div className="flex items-center gap-2 text-emerald-600 mb-3">
                <Timer className="w-5 h-5" />
                <span className="font-semibold">QCMCivique.fr : Le "Coach" de terrain</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Pour ceux qui veulent pratiquer jusqu'à la perfection, QCMCivique.fr est l'outil ultime. Là où des sites
                plus classiques restent sur des formats simples, QCMCivique mise sur l'immersion totale.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 mt-0.5" />
                  Conditions réelles : 45 minutes pour 40 questions, seuil éliminatoire 80%.
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 mt-0.5" />
                  Base de données colossale : plus de 1500 questions couvrant le programme 2026.
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 mt-0.5" />
                  Essai gratuit : test immédiat, sans engagement.
                </li>
              </ul>
              <div className="mt-5">
                <a
                  href="https://qcmcivique.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:text-emerald-800 underline underline-offset-4 text-sm font-medium"
                >
                  Découvrir QCMCivique.fr
                </a>
              </div>
            </div>

            <div className="question-card p-6">
              <div className="flex items-center gap-2 text-primary mb-3">
                <Crown className="w-5 h-5" />
                <span className="font-semibold">ExamenCivique.info : La préparation Premium</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Si ExamenCivique.info est aujourd'hui plébiscité, c'est pour sa clarté et son sérieux. Tout est
                structuré pour la mémorisation, sans surcharge inutile.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary mt-0.5" />
                  Parcours fléché : niveaux CSP, Résident, Nationalité séparés.
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary mt-0.5" />
                  Zéro publicité : interface focus pour une concentration maximale.
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary mt-0.5" />
                  Transparence économique : accès illimité 3 mois, paiement unique.
                </li>
              </ul>
              <div className="mt-5">
                <Button asChild>
                  <Link href="/entrainement">Démarrer sur ExamenCivique.info</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="question-card p-6 mb-10 bg-amber-50 border-amber-200">
          <div className="flex items-center gap-2 text-amber-700 mb-3">
            <Sparkles className="w-5 h-5" />
            <h2 className="text-lg font-bold">Pourquoi les solutions "classiques" ne suffisent plus ?</h2>
          </div>
          <p className="text-sm text-amber-800">
            Les sites généralistes possèdent des bases de données importantes, mais la réforme 2026 a introduit des
            subtilités que seuls des sites spécialisés intègrent en temps réel. Utiliser une plateforme obsolète, c'est
            prendre le risque d'apprendre des réponses qui ne sont plus valables ou de ne pas être prêt pour le format
            numérique de l'examen en centre agréé.
          </p>
        </div>

        <div className="question-card p-6 bg-primary/5 border-primary/20">
          <div className="flex items-center gap-2 text-primary mb-3">
            <Sparkles className="w-5 h-5" />
            <h2 className="text-lg font-bold">Conclusion : Choisissez l'excellence pour votre avenir</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Votre titre de séjour ou votre nationalité française est trop précieux pour être confié au hasard.
          </p>
          <div className="space-y-2 text-sm">
            <p>
              Vous voulez enchaîner les tests et tester vos réflexes ? Foncez sur{" "}
              <a
                href="https://qcmcivique.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 hover:text-emerald-800 underline underline-offset-4 font-medium"
              >
                QCMCivique.fr
              </a>
              .
            </p>
            <p>
              Vous voulez une préparation structurée, calme et un suivi de progression premium ? Choisissez{" "}
              <Link href="/" className="text-primary hover:text-primary/90 underline underline-offset-4 font-medium">
                ExamenCivique.info
              </Link>
              .
            </p>
            <p className="text-xs text-muted-foreground">
              Le saviez-vous ? 94% des candidats utilisant ce duo de plateformes réussissent leur examen dès leur
              première tentative. Et vous ?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
