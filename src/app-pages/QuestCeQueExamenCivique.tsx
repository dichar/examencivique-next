"use client";

import Link from "next/link";
import { HelpCircle, Target, Clock, CheckCircle2, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function QuestCeQueExamenCivique() {
  return (
    <>
      

      <div className="seo-section">
        <div className="container-narrow">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Comprendre l'examen
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Qu'est-ce que l'examen civique ?
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              L'examen civique est une épreuve obligatoire pour les personnes souhaitant obtenir 
              une carte de séjour pluriannuelle ou une carte de résident en France.
            </p>
          </div>

          {/* Key Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="question-card p-6 text-center">
              <Target className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-1">40 questions</h3>
              <p className="text-sm text-muted-foreground">
                Format QCM
              </p>
            </div>
            <div className="question-card p-6 text-center">
              <Clock className="w-10 h-10 text-amber-500 mx-auto mb-3" />
              <h3 className="font-bold mb-1">45 minutes</h3>
              <p className="text-sm text-muted-foreground">
                Durée de l'épreuve
              </p>
            </div>
            <div className="question-card p-6 text-center">
              <CheckCircle2 className="w-10 h-10 text-success mx-auto mb-3" />
              <h3 className="font-bold mb-1">1 réponse</h3>
              <p className="text-sm text-muted-foreground">
                Par question
              </p>
            </div>
            <div className="question-card p-6 text-center">
              <BookOpen className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
              <h3 className="font-bold mb-1">En français</h3>
              <p className="text-sm text-muted-foreground">
                Langue de l'examen
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</span>
                Objectif de l'examen
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  L'examen civique a pour but d'évaluer votre connaissance des éléments fondamentaux 
                  de la vie en France. Il porte sur :
                </p>
                <div className="not-prose space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Les principes et valeurs de la République française</p>
                      <p className="text-sm text-muted-foreground">Liberté, égalité, fraternité, laïcité...</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Le fonctionnement des institutions</p>
                      <p className="text-sm text-muted-foreground">Président, gouvernement, Parlement, collectivités...</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">La vie en société en France</p>
                      <p className="text-sm text-muted-foreground">Droits, devoirs, culture, histoire...</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</span>
                Format de l'examen
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  L'examen civique se présente sous forme d'un questionnaire à choix multiples (QCM) 
                  avec les caractéristiques suivantes :
                </p>
                <ul className="list-none space-y-3 pl-0">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    <strong>40 questions</strong> au total
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    <strong>45 minutes</strong> pour compléter l'épreuve
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    <strong>Une seule bonne réponse</strong> par question
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    L'examen est réalisé <strong>en langue française</strong>
                  </li>
                </ul>
              </div>
            </section>

            <section className="question-card p-8 border-emerald-500/50 bg-emerald-50/50">
              <h2 className="text-xl font-bold mb-3">✅ Bon à savoir</h2>
              <p className="text-muted-foreground">
                L'examen se déroule sur tablette ou ordinateur dans un centre agréé. 
                Vous n'avez pas besoin d'apporter de matériel particulier, tout est fourni sur place.
              </p>
            </section>

            {/* CTA */}
            <div className="text-center py-8">
              <h3 className="text-xl font-bold mb-4">Découvrez le contenu de l'examen</h3>
              <p className="text-muted-foreground mb-6">
                Consultez les thématiques officielles et les types de questions posées.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contenu-thematiques">
                    Voir les thématiques <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/">
                    S'entraîner maintenant
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
