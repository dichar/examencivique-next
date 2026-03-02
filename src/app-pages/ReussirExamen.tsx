"use client";

import Link from "next/link";
import { Trophy, Target, Shield, Clock, CheckCircle2, XCircle, ArrowRight, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ReussirExamen() {
  return (
    <>
      

      <div className="seo-section">
        <div className="container-narrow">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 text-success rounded-full text-sm font-medium mb-6">
              <Trophy className="w-4 h-4" />
              Conditions de réussite
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Réussir l'examen civique
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur le score minimum, le niveau de difficulté 
              et la validité de votre attestation.
            </p>
          </div>

          {/* Key Info Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <div className="question-card p-6 text-center">
              <Target className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-1">32/40 minimum</h3>
              <p className="text-sm text-muted-foreground">
                Score requis pour réussir
              </p>
            </div>
            <div className="question-card p-6 text-center">
              <Trophy className="w-10 h-10 text-amber-500 mx-auto mb-3" />
              <h3 className="font-bold mb-1">80% de réussite</h3>
              <p className="text-sm text-muted-foreground">
                Taux de bonnes réponses
              </p>
            </div>
            <div className="question-card p-6 text-center">
              <Shield className="w-10 h-10 text-success mx-auto mb-3" />
              <h3 className="font-bold mb-1">Validité illimitée</h3>
              <p className="text-sm text-muted-foreground">
                Pas de date d'expiration
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</span>
                Niveau de difficulté
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Le niveau de difficulté de l'examen peut varier selon le <strong>type de titre de séjour</strong> que vous demandez :
                </p>
                <div className="not-prose grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-primary mb-2">Carte de séjour pluriannuelle</h4>
                    <p className="text-sm text-muted-foreground">
                      Examen portant sur les connaissances de base des valeurs et institutions françaises.
                    </p>
                  </div>
                  <div className="p-4 bg-amber-500/5 rounded-lg border border-amber-500/20">
                    <h4 className="font-semibold text-amber-700 mb-2">Carte de résident</h4>
                    <p className="text-sm text-muted-foreground">
                      Examen pouvant inclure des questions plus approfondies sur la vie en France.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</span>
                Conditions de réussite
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pour obtenir votre attestation de réussite, vous devez atteindre le score minimum suivant :
                </p>
                <div className="not-prose grid sm:grid-cols-2 gap-4 my-6">
                  <div className="p-6 bg-success/10 rounded-lg border border-success/20 text-center">
                    <CheckCircle2 className="w-10 h-10 text-success mx-auto mb-3" />
                    <h4 className="font-bold text-2xl text-success">32 à 40</h4>
                    <p className="text-success font-medium">Réussite</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Vous obtenez votre attestation et validez cette étape.
                    </p>
                  </div>
                  <div className="p-6 bg-destructive/10 rounded-lg border border-destructive/20 text-center">
                    <XCircle className="w-10 h-10 text-destructive mx-auto mb-3" />
                    <h4 className="font-bold text-2xl text-destructive">Moins de 32</h4>
                    <p className="text-destructive font-medium">Échec</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Vous pouvez repasser l'examen autant de fois que nécessaire.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">3</span>
                Validité de l'attestation
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Bonne nouvelle : <strong>l'attestation de réussite n'a pas de durée de validité limitée</strong>. 
                  Une fois obtenue, elle reste valable indéfiniment.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Cela signifie que vous pouvez l'utiliser pour vos démarches administratives 
                  sans craindre qu'elle expire avant le traitement de votre dossier.
                </p>
              </div>
            </section>

            <section className="question-card p-8 border-amber-500/50 bg-amber-50/50">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
                <RefreshCw className="w-6 h-6 text-amber-600" />
                En cas d'échec
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Pas de panique !</strong> L'examen civique peut être repassé 
                  <strong> autant de fois que nécessaire</strong> jusqu'à obtention du score requis.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Prenez le temps de bien réviser entre chaque tentative</li>
                  <li>Utilisez notre simulateur pour vous entraîner sur les questions officielles</li>
                  <li>Identifiez les thématiques où vous avez le plus de difficultés</li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center py-8">
              <h3 className="text-xl font-bold mb-4">Maximisez vos chances de réussite</h3>
              <p className="text-muted-foreground mb-6">
                Entraînez-vous avec les questions officielles pour être prêt le jour J.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/">
                    Commencer l'entraînement <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/quand-passer-examen">
                    Quand passer l'examen ?
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
