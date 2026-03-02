"use client";

import Link from "next/link";
import { Heart, Scale, Users, Church, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeValeurs() {
  return (
    <>
      

      <div className="seo-section">
        <div className="container-narrow">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 text-rose-700 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Thématique
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Les Valeurs de la République Française Expliquées Simplement
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprendre la devise « Liberté, Égalité, Fraternité » et le principe 
              de Laïcité pour réussir l'examen civique.
            </p>
          </div>

          {/* Valeurs */}
          <div className="space-y-8">
            {/* Liberté */}
            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🗽</span>
                </div>
                Liberté
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  La <strong>liberté</strong> est le droit de faire tout ce qui ne nuit pas à autrui. 
                  Elle comprend de nombreuses dimensions fondamentales :
                </p>
                <ul className="list-none space-y-3 mt-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span><strong>Liberté d'expression</strong> : exprimer ses opinions dans le respect de la loi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span><strong>Liberté de circulation</strong> : se déplacer librement sur le territoire</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span><strong>Liberté de conscience</strong> : croire ou ne pas croire en une religion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span><strong>Liberté d'association</strong> : créer ou rejoindre des groupes</span>
                  </li>
                </ul>
                <div className="not-prose mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <strong className="text-amber-800">⚠️ Limite importante</strong>
                  <p className="text-sm text-amber-700 mt-1">
                    La liberté s'arrête là où commence celle des autres. L'incitation à la haine, 
                    la diffamation et les propos discriminatoires sont interdits.
                  </p>
                </div>
              </div>
            </section>

            {/* Égalité */}
            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Scale className="w-10 h-10 text-emerald-500" />
                Égalité
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  L'<strong>égalité</strong> signifie que tous les citoyens ont les <strong>mêmes droits 
                  et les mêmes devoirs</strong> devant la loi, quelles que soient leur origine, 
                  leur religion ou leur condition sociale.
                </p>
                <ul className="list-none space-y-3 mt-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span><strong>Égalité devant la loi</strong> : les mêmes règles pour tous</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span><strong>Égalité femmes-hommes</strong> : mêmes droits dans le mariage, le travail, etc.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span><strong>Non-discrimination</strong> : interdiction de traiter différemment selon l'origine, le sexe, etc.</span>
                  </li>
                </ul>
                <div className="not-prose mt-6 p-4 bg-primary/5 rounded-lg">
                  <strong className="text-primary">À retenir</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    L'égalité en droits ne signifie pas que tout le monde gagne le même salaire 
                    ou vit de la même façon. C'est l'égalité des chances et des droits.
                  </p>
                </div>
              </div>
            </section>

            {/* Fraternité */}
            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Users className="w-10 h-10 text-purple-500" />
                Fraternité
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  La <strong>fraternité</strong> est le lien de solidarité qui unit les citoyens entre eux. 
                  C'est l'idée que nous formons une communauté nationale où chacun doit pouvoir 
                  compter sur les autres.
                </p>
                <ul className="list-none space-y-3 mt-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span><strong>Solidarité nationale</strong> : système de protection sociale (Sécurité sociale)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span><strong>Entraide</strong> : assistance à personne en danger (obligation légale)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span><strong>Engagement citoyen</strong> : participation à la vie de la cité</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Laïcité */}
            <section className="question-card p-8 border-primary/30 bg-primary/5">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Church className="w-10 h-10 text-primary" />
                Laïcité
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  La <strong>laïcité</strong> est un principe fondamental de la République française 
                  depuis la loi de 1905 de séparation des Églises et de l'État. Elle garantit :
                </p>
                <ul className="list-none space-y-3 mt-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span><strong>Liberté de croire ou de ne pas croire</strong> : chacun est libre</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span><strong>Neutralité de l'État</strong> : l'État ne privilégie aucune religion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span><strong>Séparation</strong> : l'État ne finance pas les cultes</span>
                  </li>
                </ul>
                <div className="not-prose mt-6 space-y-3">
                  <div className="p-4 bg-card rounded-lg border">
                    <strong>À l'école publique</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Les élèves et le personnel ne peuvent pas porter de signes religieux ostensibles 
                      (loi de 2004). Les usagers des services publics peuvent porter des signes 
                      religieux (sauf cas particuliers).
                    </p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border">
                    <strong>Dans l'espace public</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Chacun est libre de pratiquer sa religion dans le respect de l'ordre public. 
                      Les fonctionnaires doivent être neutres, pas les citoyens.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center py-8">
              <h3 className="text-xl font-bold mb-4">Testez vos connaissances</h3>
              <p className="text-muted-foreground mb-6">
                Ces valeurs sont au cœur de l'examen civique. Entraînez-vous avec notre simulateur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/">
                    Commencer le QCM <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/themes/histoire">
                    Dates clés de l'Histoire
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
