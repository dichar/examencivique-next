"use client";

import Link from "next/link";
import { Shield, ExternalLink, Heart, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Force rebuild
export default function About() {
  return (
    <>
      <div className="seo-section">
        <div className="container-narrow">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground mx-auto mb-6">
              <Shield className="w-8 h-8" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              À Propos d'ExamenCivique.info
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un outil d'entraînement avec <strong>2 quiz gratuits</strong> pour vous aider à réussir l'examen civique 
              du Contrat d'Intégration Républicaine.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Heart className="w-6 h-6 text-rose-500" />
                Notre Mission
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  ExamenCivique.info a été créé pour aider les personnes préparant l'examen civique 
                  français à s'entraîner efficacement. Nous offrons <strong>2 quiz gratuits</strong> pour tester la
                  plateforme, puis un accès complet via le Pack Réussite (3 mois).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nous croyons que l'intégration passe par la connaissance et la compréhension 
                  des valeurs, de l'histoire et du fonctionnement de la France. C'est pourquoi 
                  nous fournissons non seulement les questions et réponses, mais aussi des 
                  <strong> explications détaillées</strong> pour chaque question.
                </p>
              </div>
            </section>

            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-primary" />
                Source des Questions
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Toutes les questions de notre simulateur proviennent à 100% du 
                  Ministère de l'Intérieur.</strong> Nous utilisons la liste officielle des questions 
                  publiée par les autorités françaises.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Vous pouvez consulter la source officielle directement sur le site du gouvernement :
                </p>
                <div className="not-prose mt-4">
                  <a
                    href="https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-cr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="font-medium">Liste officielle des questions - Ministère de l'Intérieur</span>
                  </a>
                </div>
              </div>
            </section>

            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-amber-500" />
                Avertissement
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  ExamenCivique.info est un <strong>site d'entraînement non officiel</strong>. 
                  Nous ne sommes pas affiliés au gouvernement français, à l'OFII, ni à aucune 
                  administration publique.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ce site est fourni à titre purement éducatif. Nous nous efforçons de maintenir 
                  les informations à jour, mais nous vous encourageons à consulter les sources 
                  officielles pour toute question administrative.
                </p>
              </div>
            </section>

            <section className="question-card p-8 bg-primary/5 border-primary/20">
              <h2 className="text-2xl font-bold mb-4">Fonctionnement du Simulateur</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Notre simulateur reproduit les conditions réelles de l'examen :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li><strong>40 questions</strong> tirées au sort selon les quotas officiels</li>
                  <li><strong>5 thématiques</strong> réparties comme le vrai examen</li>
                  <li><strong>Questions différentes</strong> à chaque actualisation de page</li>
                  <li><strong>Explications détaillées</strong> pour chaque réponse</li>
                  <li><strong>Score final</strong> avec indication de réussite ou non</li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center py-8">
              <h3 className="text-xl font-bold mb-4">Prêt à commencer ?</h3>
              <p className="text-muted-foreground mb-6">
                Lancez-vous dans un entraînement complet avec 2 quiz gratuits, puis le Pack Réussite (3 mois).
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
