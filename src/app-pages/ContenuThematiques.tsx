"use client";

import Link from "next/link";
import { BookOpen, FileText, Users, Landmark, Globe, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContenuThematiques() {
  const thematiques = [
    {
      icon: Heart,
      title: "Principes et valeurs de la République française",
      description: "Liberté, égalité, fraternité, laïcité, symboles de la République",
      color: "text-primary",
      bg: "bg-primary/5"
    },
    {
      icon: Landmark,
      title: "Système institutionnel et politique",
      description: "Président, gouvernement, Parlement, collectivités territoriales",
      color: "text-amber-600",
      bg: "bg-amber-500/5"
    },
    {
      icon: Users,
      title: "Droits et devoirs en France",
      description: "Droits fondamentaux, obligations légales, citoyenneté",
      color: "text-emerald-600",
      bg: "bg-emerald-500/5"
    },
    {
      icon: Globe,
      title: "Histoire, géographie et culture françaises",
      description: "Événements historiques, patrimoine, géographie du territoire",
      color: "text-purple-600",
      bg: "bg-purple-500/5"
    },
    {
      icon: Heart,
      title: "Vivre dans la société française",
      description: "Vie quotidienne, accès aux services, intégration sociale",
      color: "text-rose-600",
      bg: "bg-rose-500/5"
    }
  ];

  return (
    <>
      

      <div className="seo-section">
        <div className="container-narrow">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Programme officiel
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Contenu et thématiques de l'examen civique
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              L'examen civique couvre 5 grandes thématiques issues de la formation civique obligatoire.
            </p>
          </div>

          {/* Types de questions */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="question-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">28 questions</h2>
                  <p className="text-muted-foreground">de connaissance</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Questions portant sur les savoirs théoriques : valeurs, institutions, histoire, géographie...
              </p>
            </div>

            <div className="question-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">12 questions</h2>
                  <p className="text-muted-foreground">de mise en situation</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Cas pratiques évaluant votre capacité à appliquer les connaissances dans des situations concrètes.
              </p>
            </div>
          </div>

          {/* Thématiques */}
          <section className="space-y-4 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Les 5 thématiques officielles</h2>
            
            {thematiques.map((theme, index) => (
              <div key={index} className={`question-card p-6 ${theme.bg}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full ${theme.bg} flex items-center justify-center flex-shrink-0`}>
                    <theme.icon className={`w-5 h-5 ${theme.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{theme.title}</h3>
                    <p className="text-muted-foreground">{theme.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Répartition */}
          <section className="question-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Répartition des questions par thème</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                <span className="font-medium">Principes et valeurs de la République</span>
                <span className="text-primary font-bold">11 questions</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-amber-500/5 rounded-lg">
                <span className="font-medium">Système institutionnel et politique</span>
                <span className="text-amber-700 font-bold">6 questions</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-emerald-500/5 rounded-lg">
                <span className="font-medium">Droits et devoirs du citoyen</span>
                <span className="text-emerald-700 font-bold">11 questions</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-purple-500/5 rounded-lg">
                <span className="font-medium">Histoire, géographie et culture</span>
                <span className="text-purple-700 font-bold">8 questions</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-rose-500/5 rounded-lg">
                <span className="font-medium">Vivre dans la société française</span>
                <span className="text-rose-700 font-bold">4 questions</span>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center py-8">
            <h3 className="text-xl font-bold mb-4">Prêt à vous entraîner ?</h3>
            <p className="text-muted-foreground mb-6">
              Testez vos connaissances sur chaque thématique avec notre simulateur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/">
                  Commencer l'entraînement <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/reussir-examen">
                  Conditions de réussite
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
