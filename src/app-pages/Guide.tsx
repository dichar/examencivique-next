"use client";

import Link from "next/link";
import { 
  Tablet, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  HelpCircle,
  Target,
  BookOpen,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Guide() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment réussir l'examen civique OFII",
    "description": "Guide complet pour préparer et réussir l'examen civique du contrat d'intégration républicaine",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Réviser les questions officielles",
        "text": "Étudiez les 1800+ questions publiées par le Ministère de l'Intérieur"
      },
      {
        "@type": "HowToStep",
        "name": "S'entraîner avec le simulateur",
        "text": "Pratiquez avec 2 quiz gratuits, puis le Pack Réussite pour mémoriser les réponses"
      },
      {
        "@type": "HowToStep",
        "name": "Passer l'examen",
        "text": "Répondez aux 40 questions en 45 minutes et obtenez 32/40 minimum"
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <div className="seo-section">
        <div className="container-narrow">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 text-amber-700 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Guide pratique
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Comment se passe l'Examen Civique OFII ?
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Durée, format sur tablette, score minimum et conseils pour réussir. 
              Tout ce que vous devez savoir avant le jour J.
            </p>
          </div>

          {/* Key Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="question-card p-6 text-center">
              <Tablet className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-1">Sur tablette</h3>
              <p className="text-sm text-muted-foreground">
                Examen informatisé dans un centre agréé
              </p>
            </div>
            <div className="question-card p-6 text-center">
              <Clock className="w-10 h-10 text-amber-500 mx-auto mb-3" />
              <h3 className="font-bold mb-1">45 minutes</h3>
              <p className="text-sm text-muted-foreground">
                Durée maximale pour répondre
              </p>
            </div>
            <div className="question-card p-6 text-center">
              <Target className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
              <h3 className="font-bold mb-1">40 questions</h3>
              <p className="text-sm text-muted-foreground">
                QCM à 4 réponses possibles
              </p>
            </div>
            <div className="question-card p-6 text-center">
              <CheckCircle2 className="w-10 h-10 text-success mx-auto mb-3" />
              <h3 className="font-bold mb-1">32/40 minimum</h3>
              <p className="text-sm text-muted-foreground">
                80% de bonnes réponses requis
              </p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</span>
                Le matériel utilisé
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  L'examen civique se déroule <strong>sur tablette ou ordinateur</strong> dans 
                  un centre d'examen agréé par l'OFII (Office Français de l'Immigration et de l'Intégration). 
                  Vous n'avez besoin d'apporter aucun matériel particulier, tout est fourni sur place.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  L'interface est simple et intuitive : chaque question s'affiche avec 4 propositions 
                  de réponse. Vous sélectionnez votre réponse en touchant l'écran ou en cliquant.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</span>
                La règle des 32/40 (80%)
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Pour réussir l'examen, vous devez obtenir <strong>au minimum 32 bonnes réponses sur 40</strong>, 
                  ce qui correspond à un taux de réussite de <strong>80%</strong>.
                </p>
                <div className="not-prose grid sm:grid-cols-2 gap-4 my-6">
                  <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                    <CheckCircle2 className="w-6 h-6 text-success mb-2" />
                    <h4 className="font-semibold text-success">Réussite : 32 à 40</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Vous validez l'examen et pouvez continuer votre parcours d'intégration
                    </p>
                  </div>
                  <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                    <XCircle className="w-6 h-6 text-destructive mb-2" />
                    <h4 className="font-semibold text-destructive">Échec : moins de 32</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Vous devrez repasser l'examen (voir section rattrapage)
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">3</span>
                Les thématiques de l'examen
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Les 40 questions sont réparties selon 5 thématiques officielles, avec un quota précis pour chaque :
                </p>
                <div className="not-prose space-y-3">
                  <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                    <span className="font-medium">Principes et valeurs de la République</span>
                    <span className="text-primary font-bold">11 questions</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-amber-500/5 rounded-lg">
                    <span className="font-medium">Système institutionnel et politique français</span>
                    <span className="text-amber-700 font-bold">6 questions</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-emerald-500/5 rounded-lg">
                    <span className="font-medium">Droits et devoirs du citoyen</span>
                    <span className="text-emerald-700 font-bold">11 questions</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-purple-500/5 rounded-lg">
                    <span className="font-medium">Histoire, géographie et culture françaises</span>
                    <span className="text-purple-700 font-bold">8 questions</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-rose-500/5 rounded-lg">
                    <span className="font-medium">Vivre dans la société française</span>
                    <span className="text-rose-700 font-bold">4 questions</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 - Échec */}
            <section className="question-card p-8 border-amber-500/50 bg-amber-50/50">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-amber-500" />
                Que faire en cas d'échec ?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Pas de panique !</strong> En cas d'échec à l'examen civique, vous avez la possibilité 
                  de le repasser. Voici ce qu'il faut savoir :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Vous pouvez <strong>repasser l'examen gratuitement</strong> dans le cadre du CIR</li>
                  <li>Un nouveau rendez-vous vous sera proposé par l'OFII</li>
                  <li>Profitez de ce délai pour <strong>réviser davantage</strong> avec notre simulateur</li>
                  <li>Les questions étant publiées officiellement, vous connaissez exactement le contenu</li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center py-8">
              <h3 className="text-xl font-bold mb-4">Prêt à vous entraîner ?</h3>
              <p className="text-muted-foreground mb-6">
                Notre simulateur reproduit les conditions exactes de l'examen avec les questions officielles.
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
