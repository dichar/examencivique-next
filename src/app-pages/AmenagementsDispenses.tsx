"use client";

import Link from "next/link";
import { 
  Accessibility, 
  FileText, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  Heart,
  ClipboardCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AmenagementsDispenses() {
  return (
    <>
      

      <div className="seo-section">
        <div className="container-narrow">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-700 rounded-full text-sm font-medium mb-6">
              <Accessibility className="w-4 h-4" />
              Accessibilité
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Aménagements et dispenses de l'examen civique
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des aménagements ou dispenses peuvent être accordés aux personnes dont le handicap 
              ou l'état de santé le justifie.
            </p>
          </div>

          {/* Key Info */}
          <div className="question-card p-8 text-center mb-12 border-purple-500/30 bg-purple-50/50">
            <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-3">Principe d'accessibilité</h2>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              L'examen civique prévoit des <strong>aménagements spécifiques</strong> pour garantir 
              l'égalité des chances à toutes les personnes, quelle que soit leur situation.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</span>
                Qui peut bénéficier d'aménagements ?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Les aménagements ou dispenses peuvent être accordés aux personnes dont :
                </p>
                <div className="not-prose space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-purple-500/5 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Le handicap le justifie</p>
                      <p className="text-sm text-muted-foreground">
                        Handicap physique, sensoriel, cognitif ou psychique affectant la capacité à passer l'examen
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-purple-500/5 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">L'état de santé le justifie</p>
                      <p className="text-sm text-muted-foreground">
                        Maladie chronique, trouble de santé temporaire ou permanent impactant les conditions de passage
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FileText className="w-8 h-8 text-primary" />
                Le certificat médical obligatoire
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pour bénéficier d'un aménagement ou d'une dispense, <strong>un certificat médical est obligatoire</strong>. 
                  Ce certificat doit :
                </p>
                <div className="not-prose space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
                    <ClipboardCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Attester de la nécessité d'aménagements</p>
                      <p className="text-sm text-muted-foreground">
                        Le médecin doit confirmer que votre situation nécessite des conditions particulières
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border-l-4 border-amber-500">
                    <ClipboardCheck className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Décrire les aménagements recommandés</p>
                      <p className="text-sm text-muted-foreground">
                        Le certificat doit préciser les adaptations nécessaires (temps supplémentaire, assistance, etc.)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border-l-4 border-destructive">
                    <ClipboardCheck className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Ou indiquer l'impossibilité de passer l'épreuve</p>
                      <p className="text-sm text-muted-foreground">
                        Dans certains cas, le médecin peut attester que vous ne pouvez pas passer l'examen (dispense)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</span>
                Types d'aménagements possibles
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Selon votre situation, différents aménagements peuvent être proposés :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Temps supplémentaire</strong> pour compléter l'examen</li>
                  <li><strong>Assistance d'un tiers</strong> pour la lecture ou la manipulation</li>
                  <li><strong>Matériel adapté</strong> (écran agrandi, clavier adapté, etc.)</li>
                  <li><strong>Pauses autorisées</strong> pendant l'épreuve</li>
                  <li><strong>Local séparé</strong> pour passer l'examen dans des conditions calmes</li>
                </ul>
              </div>
            </section>

            <section className="question-card p-8 border-amber-500/50 bg-amber-50/50">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600" />
                Démarches à suivre
              </h2>
              <div className="prose prose-lg max-w-none">
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    <strong>Consultez votre médecin</strong> pour obtenir un certificat médical détaillé
                  </li>
                  <li>
                    <strong>Contactez le centre d'examen</strong> pour signaler votre situation et transmettre le certificat
                  </li>
                  <li>
                    <strong>Attendez la confirmation</strong> des aménagements accordés avant de vous présenter à l'examen
                  </li>
                </ol>
                <p className="mt-4 text-muted-foreground">
                  ⚠️ Effectuez ces démarches <strong>bien à l'avance</strong> pour laisser le temps au centre d'organiser les aménagements.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center py-8">
              <h3 className="text-xl font-bold mb-4">Besoin d'autres informations ?</h3>
              <p className="text-muted-foreground mb-6">
                Consultez notre FAQ ou commencez votre préparation à l'examen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/">
                    Commencer l'entraînement <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/faq">
                    Consulter la FAQ
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
