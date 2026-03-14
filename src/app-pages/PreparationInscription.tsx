"use client";

import Link from "next/link";
import { 
  GraduationCap, 
  BookOpen, 
  FileText, 
  CheckCircle2, 
  ExternalLink, 
  ArrowRight,
  ClipboardList,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PreparationInscription() {
  const ressources = [
    {
      icon: BookOpen,
      title: "Programme officiel",
      description: "Le contenu complet des 5 thématiques de l'examen civique"
    },
    {
      icon: FileText,
      title: "Fiches de révision",
      description: "Fiches synthétiques par thématique ou par journée de révision"
    },
    {
      icon: ClipboardList,
      title: "Plus de 800 questions",
      description: "Banque de questions d'entraînement pour pratiquer"
    },
    {
      icon: CheckCircle2,
      title: "Questions officielles",
      description: "La liste officielle des questions de connaissance (CSP et CR)"
    },
    {
      icon: GraduationCap,
      title: "Modalités d'inscription",
      description: "Toutes les informations pour s'inscrire à l'examen"
    },
    {
      icon: MapPin,
      title: "Liste des centres",
      description: "Les 158 centres agréés sur tout le territoire français"
    }
  ];

  return (
    <>
      

      <div className="seo-section">
        <div className="container-narrow">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-700 rounded-full text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              Préparation
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Se préparer à l'examen civique
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Toutes les ressources et conseils pour bien préparer votre examen civique 
              et maximiser vos chances de réussite.
            </p>
          </div>

          {/* Main CTA - QCM Civique */}
          <div className="question-card p-8 text-center mb-12 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
            <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-3">Ressource recommandée</h2>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-6">
              <strong>www.qcmcivique.fr</strong> est le site de référence pour préparer 
              l'examen civique avec toutes les ressources officielles.
            </p>
            <Button asChild size="lg" className="text-base">
              <a href="https://www.qcmcivique.fr" target="_blank" rel="noopener noreferrer">
                Accéder à QCM Civique
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          {/* Ressources disponibles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Ce que vous trouverez</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ressources.map((ressource, index) => (
                <div key={index} className="question-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ressource.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{ressource.title}</h3>
                      <p className="text-sm text-muted-foreground">{ressource.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Content */}
          <div className="space-y-8">
            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</span>
                Étudier le programme officiel
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Commencez par bien comprendre les <strong>5 thématiques officielles</strong> de l'examen :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Principes et valeurs de la République française</li>
                  <li>Système institutionnel et politique</li>
                  <li>Droits et devoirs en France</li>
                  <li>Histoire, géographie et culture françaises</li>
                  <li>Vivre dans la société française</li>
                </ul>
              </div>
            </section>

            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</span>
                S'entraîner régulièrement
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  La clé de la réussite est de <strong>pratiquer régulièrement</strong> avec les questions officielles :
                </p>
                <div className="not-prose space-y-3 mt-4">
                  <div className="flex items-start gap-3 p-4 bg-emerald-500/5 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Faites des sessions d'entraînement de <strong>15-20 minutes par jour</strong>
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-emerald-500/5 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Identifiez les thématiques où vous avez <strong>le plus de difficultés</strong>
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-emerald-500/5 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Testez-vous en <strong>conditions réelles</strong> avec des examens chronométrés
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="question-card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">3</span>
                S'inscrire à l'examen
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Une fois que vous vous sentez prêt, inscrivez-vous dans un centre d'examen agréé :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Consultez la <strong>liste des 158 centres</strong> sur le territoire</li>
                  <li>Choisissez un centre <strong>proche de chez vous</strong></li>
                  <li>Vérifiez les <strong>disponibilités</strong> et les modalités d'inscription</li>
                  <li>Prévoyez une <strong>marge de temps</strong> en cas de besoin de rattrapage</li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center py-8">
              <h3 className="text-xl font-bold mb-4">Commencez votre entraînement</h3>
              <p className="text-muted-foreground mb-6">
                Testez vos connaissances dès maintenant avec 2 quiz gratuits, puis le Pack Réussite (3 mois).
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/">
                    Commencer le QCM <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/amenagements-dispenses">
                    Aménagements et dispenses
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
