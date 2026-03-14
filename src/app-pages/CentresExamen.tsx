"use client";

import Link from "next/link";
import { MapPin, Building2, ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CentresExamen() {
  return (
    <>
      

      <div className="seo-section">
        <div className="container-narrow">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Trouver un centre
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Centres d'Examen Civique
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              L'examen civique se passe dans l'un des <strong>158 centres agréés</strong> par les 
              Chambres de Commerce et d'Industrie (CCI), répartis sur l'ensemble du territoire français.
            </p>
          </div>

          {/* Main CTA */}
          <div className="question-card p-8 text-center mb-12 border-primary/30 bg-primary/5">
            <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-3">Trouvez votre centre d'examen</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Accédez à la liste complète des centres agréés et trouvez celui le plus proche de chez vous 
              pour vous inscrire à l'examen civique.
            </p>
            <Button asChild size="lg" className="text-base">
              <a href="https://qcmcivique.fr/centres" target="_blank" rel="noopener noreferrer">
                Trouver un centre d'examen civique près de chez vous
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</span>
                Où passer l'examen civique ?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  L'examen civique obligatoire <strong>ne peut être passé que dans un centre agréé</strong> par 
                  les Chambres de Commerce et d'Industrie (CCI). Ces centres sont répartis dans toute la France 
                  métropolitaine et outre-mer.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Chaque centre dispose du matériel informatique nécessaire (tablettes ou ordinateurs) pour 
                  administrer l'examen dans des conditions optimales.
                </p>
              </div>
            </section>

            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</span>
                Comment s'inscrire ?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Les modalités d'inscription varient selon les centres. Voici les étapes générales :
                </p>
                <div className="not-prose space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Consulter les disponibilités</p>
                      <p className="text-sm text-muted-foreground">Vérifiez les créneaux disponibles auprès du centre choisi</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Préparer vos documents</p>
                      <p className="text-sm text-muted-foreground">Pièce d'identité valide et convocation si applicable</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Confirmer votre inscription</p>
                      <p className="text-sm text-muted-foreground">Suivez les instructions du centre pour finaliser l'inscription</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="question-card p-8 border-amber-500/50 bg-amber-50/50">
              <h2 className="text-xl font-bold mb-3">💡 Conseil pratique</h2>
              <p className="text-muted-foreground">
                Nous vous recommandons de <strong>vérifier les disponibilités à l'avance</strong> et de vous 
                inscrire plusieurs semaines avant la date limite de dépôt de votre dossier de titre de séjour. 
                Certains centres peuvent avoir des délais d'attente importants.
              </p>
            </section>

            {/* CTA */}
            <div className="text-center py-8">
              <h3 className="text-xl font-bold mb-4">Préparez-vous avant l'examen</h3>
              <p className="text-muted-foreground mb-6">
                Entraînez-vous avec 2 quiz gratuits, puis le Pack Réussite (3 mois) pour maximiser vos chances.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/">
                    Commencer l'entraînement <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/quest-ce-que-examen-civique">
                    En savoir plus sur l'examen
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
