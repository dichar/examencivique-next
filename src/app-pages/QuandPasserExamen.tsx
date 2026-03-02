"use client";

import Link from "next/link";
import { Calendar, FileCheck, AlertTriangle, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function QuandPasserExamen() {
  return (
    <>
      

      <div className="seo-section">
        <div className="container-narrow">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 text-amber-700 rounded-full text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              Planification
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Quand passer l'examen civique ?
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Planifiez votre examen civique au bon moment pour éviter tout retard 
              dans vos démarches de titre de séjour.
            </p>
          </div>

          {/* Key Point */}
          <div className="question-card p-8 text-center mb-12 border-primary/30 bg-primary/5">
            <FileCheck className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-3">Point essentiel</h2>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              L'examen civique doit être passé <strong>avant le dépôt</strong> de votre demande 
              de titre de séjour. L'attestation de réussite est <strong>obligatoire</strong> pour 
              constituer votre dossier.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</span>
                Le bon moment pour l'examen
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Voici ce que vous devez savoir sur le timing de l'examen civique :
                </p>
                <div className="not-prose space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">L'examen doit être passé AVANT le dépôt</p>
                      <p className="text-sm text-muted-foreground">
                        Vous ne pouvez pas déposer votre demande de titre de séjour sans l'attestation de réussite.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">L'attestation est une pièce obligatoire</p>
                      <p className="text-sm text-muted-foreground">
                        Elle fait partie des documents requis pour le dépôt de votre dossier.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Validité illimitée</p>
                      <p className="text-sm text-muted-foreground">
                        Une fois obtenue, l'attestation reste valable sans limite de temps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="question-card p-8 border-amber-500/50 bg-amber-50/50">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
                Conseil important : Anticipez !
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Il est <strong>fortement recommandé d'anticiper</strong> votre inscription à l'examen 
                  pour éviter les retards administratifs :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Les centres d'examen peuvent avoir des <strong>délais d'attente</strong> de plusieurs semaines</li>
                  <li>En cas d'échec, vous aurez besoin de temps pour <strong>repasser l'examen</strong></li>
                  <li>Certaines périodes (rentrée, fin d'année) sont <strong>plus chargées</strong></li>
                  <li>Prévoyez une <strong>marge de sécurité</strong> d'au moins 2 à 3 mois avant votre date limite</li>
                </ul>
              </div>
            </section>

            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Clock className="w-8 h-8 text-primary" />
                Planning recommandé
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                  <div>
                    <p className="font-medium">3 mois avant le dépôt</p>
                    <p className="text-sm text-muted-foreground">Commencez à réviser et à vous entraîner</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                  <div>
                    <p className="font-medium">2 mois avant le dépôt</p>
                    <p className="text-sm text-muted-foreground">Inscrivez-vous dans un centre d'examen</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                  <div>
                    <p className="font-medium">1 mois avant le dépôt</p>
                    <p className="text-sm text-muted-foreground">Passez l'examen (marge pour un éventuel rattrapage)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center py-8">
              <h3 className="text-xl font-bold mb-4">Commencez à vous préparer dès maintenant</h3>
              <p className="text-muted-foreground mb-6">
                Plus vous commencez tôt, plus vous serez serein le jour de l'examen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/preparation-inscription">
                    Comment se préparer <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/centres-examen">
                    Trouver un centre
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
