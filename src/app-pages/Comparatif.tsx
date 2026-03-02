"use client";

import Link from "next/link";
import { Scale, FileText, MessageCircle, CheckCircle2, ArrowRight, AlertTriangle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Comparatif() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quelle est la différence entre l'examen civique OFII et l'entretien de naturalisation ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'examen civique OFII est un QCM écrit de 40 questions pour obtenir une carte de séjour, tandis que l'entretien de naturalisation est un oral en préfecture pour devenir français."
        }
      },
      {
        "@type": "Question",
        "name": "Quel niveau de français pour la carte de séjour pluriannuelle ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le niveau A2 est exigé pour la carte de séjour pluriannuelle à partir de 2026."
        }
      },
      {
        "@type": "Question",
        "name": "Quel niveau de français pour la naturalisation ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le niveau B1 est requis actuellement, et un passage probable au niveau B2 est prévu en 2026."
        }
      }
    ]
  };

  return (
    <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="seo-section">
        <div className="container-narrow">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-700 rounded-full text-sm font-medium mb-6">
              <Scale className="w-4 h-4" />
              Comparatif
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Examen Civique OFII vs Entretien de Naturalisation
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beaucoup de personnes confondent ces deux épreuves. Découvrez leurs différences 
              fondamentales et les <strong>nouvelles règles 2024-2026</strong>.
            </p>
          </div>

          {/* Alert New Rules */}
          <div className="question-card p-6 mb-8 bg-amber-50 border-amber-300 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-amber-800 mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Nouvelles Règles 2024 - Horizon 2026
                </h2>
                <p className="text-amber-700 text-sm leading-relaxed">
                  La <strong>loi 2024</strong> durcit les exigences linguistiques. Les niveaux de français requis 
                  augmentent significativement pour la carte de séjour et la naturalisation.
                </p>
              </div>
            </div>
          </div>

          {/* New Rules Table */}
          <div className="question-card overflow-hidden mb-8">
            <div className="p-4 bg-primary/10 border-b border-border">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Évolution des Exigences Linguistiques
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-4 text-left font-semibold">Titre visé</th>
                    <th className="p-4 text-center font-semibold text-muted-foreground">
                      <span className="line-through">Avant 2024</span>
                    </th>
                    <th className="p-4 text-center font-semibold bg-primary/10 text-primary">
                      Nouvelle Règle (2024-2026)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-4 font-medium">
                      Carte de Séjour Pluriannuelle (CSP)
                    </td>
                    <td className="p-4 text-center text-muted-foreground">
                      <span className="line-through">Niveau A1</span>
                      <br />
                      <span className="text-xs">(souvent juste formation)</span>
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      <span className="font-bold text-primary text-lg">Niveau A2</span>
                      <br />
                      <span className="text-xs text-muted-foreground">Examen obligatoire</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">
                      Carte de Résident (10 ans)
                    </td>
                    <td className="p-4 text-center text-muted-foreground">
                      <span className="line-through">Niveau A2</span>
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      <span className="font-bold text-primary text-lg">Niveau B1</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">
                      Naturalisation Française
                    </td>
                    <td className="p-4 text-center text-muted-foreground">
                      <span className="line-through">Niveau B1</span>
                    </td>
                    <td className="p-4 text-center bg-amber-500/10">
                      <span className="font-bold text-amber-700 text-lg">Niveau B2</span>
                      <br />
                      <span className="text-xs text-amber-600">(Fortement pressenti*)</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Main Comparison Table */}
          <div className="question-card overflow-hidden mb-12">
            <div className="p-4 bg-muted border-b border-border">
              <h2 className="text-xl font-bold">Carte de Séjour vs Naturalisation</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="p-4 text-left font-semibold">Critère</th>
                    <th className="p-4 text-center font-semibold bg-primary/10">
                      <div className="flex items-center justify-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        Carte de Séjour (CSP)
                      </div>
                    </th>
                    <th className="p-4 text-center font-semibold bg-amber-500/10">
                      <div className="flex items-center justify-center gap-2">
                        <MessageCircle className="w-5 h-5 text-amber-600" />
                        Naturalisation
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-4 font-medium">Objectif</td>
                    <td className="p-4 text-center bg-primary/5">
                      <span className="font-semibold text-primary">Carte de 2 à 4 ans</span>
                    </td>
                    <td className="p-4 text-center bg-amber-500/5">
                      <span className="font-semibold text-amber-700">Devenir Français</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">
                      <span className="flex items-center gap-2">
                        Niveau Langue
                        <span className="px-2 py-0.5 bg-accent text-accent-foreground text-xs rounded-full">Important</span>
                      </span>
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      <span className="font-bold text-primary text-lg">Niveau A2</span>
                      <br />
                      <span className="text-xs text-muted-foreground">(Avant c'était A1)</span>
                    </td>
                    <td className="p-4 text-center bg-amber-500/5">
                      <span className="font-bold text-amber-700 text-lg">Niveau B2</span>
                      <br />
                      <span className="text-xs text-muted-foreground">(Probable - actuellement B1)</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Format</td>
                    <td className="p-4 text-center bg-primary/5">
                      <span className="font-semibold text-primary">QCM Écrit</span>
                      <br />
                      <span className="text-sm text-muted-foreground">40 questions sur tablette</span>
                    </td>
                    <td className="p-4 text-center bg-amber-500/5">
                      <span className="font-semibold text-amber-700">Entretien Oral</span>
                      <br />
                      <span className="text-sm text-muted-foreground">Questions ouvertes</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Preuve de langue</td>
                    <td className="p-4 text-center bg-primary/5">
                      <span className="font-semibold">Examen obligatoire</span>
                      <br />
                      <span className="text-xs text-muted-foreground">(Plus de simple attestation)</span>
                    </td>
                    <td className="p-4 text-center bg-amber-500/5">
                      <span className="font-semibold">Diplôme ou TCF/TEF</span>
                      <br />
                      <span className="text-xs text-muted-foreground">(4 compétences : Oral + Écrit)</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Test Civique</td>
                    <td className="p-4 text-center bg-primary/5">
                      <span className="font-semibold text-primary">Examen de connaissances</span>
                      <br />
                      <span className="text-xs text-muted-foreground">(Vrai test, plus juste formation)</span>
                    </td>
                    <td className="p-4 text-center bg-amber-500/5">
                      <span className="font-semibold text-amber-700">Entretien d'assimilation</span>
                      <br />
                      <span className="text-xs text-muted-foreground">(Toujours en Préfecture)</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Lieu</td>
                    <td className="p-4 text-center bg-primary/5">
                      Centre d'examen OFII
                    </td>
                    <td className="p-4 text-center bg-amber-500/5">
                      Préfecture
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">En cas d'échec</td>
                    <td className="p-4 text-center bg-primary/5">
                      <span className="font-semibold text-destructive">Refus carte pluriannuelle</span>
                      <br />
                      <span className="text-xs text-muted-foreground">(Retour à carte 1 an)</span>
                    </td>
                    <td className="p-4 text-center bg-amber-500/5">
                      <span className="font-semibold text-destructive">Ajournement ou Refus</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Coût</td>
                    <td className="p-4 text-center bg-primary/5">
                      <span className="font-semibold text-success">Gratuit</span>
                      <br />
                      <span className="text-sm text-muted-foreground">Dans le cadre du CIR</span>
                    </td>
                    <td className="p-4 text-center bg-amber-500/5">
                      55€ de timbre fiscal
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Detailed Explanations */}
          <div className="space-y-8">
            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FileText className="w-8 h-8 text-primary" />
                L'Examen Civique OFII en détail
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  L'examen civique fait partie du <strong>Contrat d'Intégration Républicaine (CIR)</strong>, 
                  obligatoire pour les étrangers primo-arrivants souhaitant s'installer durablement en France.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Passé dans les <strong>2 ans</strong> suivant la signature du CIR</li>
                  <li>Questions <strong>publiées officiellement</strong> par le Ministère de l'Intérieur</li>
                  <li>Porte sur les valeurs, institutions, droits et histoire de France</li>
                  <li><strong>Nouveau :</strong> Examen de langue A2 obligatoire (plus simple attestation)</li>
                </ul>
                <div className="not-prose mt-6 p-4 bg-primary/5 rounded-lg flex items-center gap-4">
                  <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <strong className="text-primary">Ce site vous prépare à cet examen</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Toutes nos questions proviennent de la liste officielle du Ministère.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <MessageCircle className="w-8 h-8 text-amber-600" />
                L'Entretien de Naturalisation en détail
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  L'entretien de naturalisation est une étape du parcours pour <strong>acquérir la nationalité française</strong>. 
                  C'est un entretien oral individuel avec un agent de la préfecture.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Évalue votre <strong>connaissance de la France</strong> (histoire, géographie, culture)</li>
                  <li>Teste votre <strong>maîtrise du français oral</strong> (actuellement B1, bientôt B2)</li>
                  <li>Questions sur votre <strong>parcours personnel</strong> et votre intégration</li>
                  <li>Questions d'actualité et de vie quotidienne</li>
                </ul>
                <div className="not-prose mt-6 p-4 bg-amber-500/10 rounded-lg">
                  <strong className="text-amber-700">⚠️ Attention</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    Ce site ne prépare pas directement à l'entretien de naturalisation. 
                    Cependant, les connaissances acquises pour l'examen civique vous seront utiles.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center py-8">
              <h3 className="text-xl font-bold mb-4">Vous préparez l'examen civique OFII ?</h3>
              <p className="text-muted-foreground mb-6">
                Commencez dès maintenant votre entraînement avec notre simulateur gratuit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/">
                    Commencer le QCM <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/questions">
                    Voir toutes les questions
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
