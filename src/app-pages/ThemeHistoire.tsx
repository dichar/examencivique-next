"use client";

import Link from "next/link";
import { History, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const historicalDates = [
  {
    year: "1789",
    event: "Révolution française",
    details: "Prise de la Bastille (14 juillet). Déclaration des Droits de l'Homme et du Citoyen.",
    importance: "Naissance des idéaux républicains : Liberté, Égalité, Fraternité"
  },
  {
    year: "1792",
    event: "Proclamation de la République",
    details: "Abolition de la royauté et instauration de la Première République.",
    importance: "La France devient officiellement une république"
  },
  {
    year: "1793",
    event: "Exécution de Louis XVI",
    details: "Le roi Louis XVI est guillotiné le 21 janvier.",
    importance: "Rupture définitive avec la monarchie absolue"
  },
  {
    year: "1804",
    event: "Napoléon Ier empereur",
    details: "Napoléon Bonaparte devient empereur des Français.",
    importance: "Code civil, réformes administratives durables"
  },
  {
    year: "1905",
    event: "Loi de séparation des Églises et de l'État",
    details: "La France devient officiellement laïque.",
    importance: "Fondement de la laïcité française"
  },
  {
    year: "1914-1918",
    event: "Première Guerre mondiale",
    details: "Conflit majeur. Armistice le 11 novembre 1918.",
    importance: "1,4 million de morts français. Fête nationale le 11 novembre"
  },
  {
    year: "1939-1945",
    event: "Seconde Guerre mondiale",
    details: "Occupation allemande, Résistance, Libération.",
    importance: "Mémoire de la Shoah, Appel du 18 juin de de Gaulle"
  },
  {
    year: "1940",
    event: "Appel du 18 juin",
    details: "Le général de Gaulle appelle à la résistance depuis Londres (BBC).",
    importance: "Symbole de la résistance française"
  },
  {
    year: "1944",
    event: "Droit de vote des femmes",
    details: "Les femmes obtiennent enfin le droit de vote et d'éligibilité.",
    importance: "Égalité civique entre hommes et femmes"
  },
  {
    year: "1944",
    event: "Débarquement en Normandie",
    details: "Le 6 juin 1944 (D-Day), les Alliés débarquent en Normandie.",
    importance: "Tournant de la Seconde Guerre mondiale"
  },
  {
    year: "1945",
    event: "Fin de la Seconde Guerre mondiale",
    details: "Capitulation allemande le 8 mai 1945.",
    importance: "Jour férié : fête de la Victoire"
  },
  {
    year: "1945",
    event: "Création de l'ONU",
    details: "L'Organisation des Nations Unies est créée.",
    importance: "Maintien de la paix internationale"
  },
  {
    year: "1958",
    event: "Ve République",
    details: "Nouvelle Constitution. Charles de Gaulle premier président.",
    importance: "Régime politique actuel de la France"
  },
  {
    year: "1962",
    event: "Élection du président au suffrage universel",
    details: "Réforme constitutionnelle voulue par de Gaulle.",
    importance: "Les Français élisent directement leur président"
  },
  {
    year: "1981",
    event: "Abolition de la peine de mort",
    details: "Loi Badinter sous la présidence de François Mitterrand.",
    importance: "Principe inscrit dans la Constitution"
  },
  {
    year: "2002",
    event: "Passage à l'euro",
    details: "L'euro remplace le franc français.",
    importance: "Monnaie commune européenne"
  },
  {
    year: "2013",
    event: "Mariage pour tous",
    details: "Le mariage est ouvert aux couples de même sexe.",
    importance: "Égalité des droits"
  }
];

export default function ThemeHistoire() {
  return (
    <>
      

      <div className="seo-section">
        <div className="container-narrow">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-700 rounded-full text-sm font-medium mb-6">
              <History className="w-4 h-4" />
              Thématique
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Les Dates Clés de l'Histoire de France
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les événements historiques essentiels à connaître pour réussir 
              l'examen civique. Une chronologie illustrée et expliquée.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />
            
            <div className="space-y-6">
              {historicalDates.map((item, index) => (
                <div 
                  key={index} 
                  className="question-card p-6 sm:pl-20 relative animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Year badge - positioned on the line */}
                  <div className="hidden sm:flex absolute left-0 top-6 w-16 h-16 rounded-full bg-primary text-primary-foreground items-center justify-center font-bold text-sm z-10">
                    {item.year}
                  </div>
                  
                  {/* Content */}
                  <div className="sm:hidden mb-3">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                      <Calendar className="w-4 h-4" />
                      {item.year}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2">{item.event}</h3>
                  <p className="text-muted-foreground mb-3">{item.details}</p>
                  <div className="p-3 bg-primary/5 rounded-lg text-sm">
                    <strong className="text-primary">Importance :</strong>{" "}
                    <span className="text-muted-foreground">{item.importance}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key dates summary */}
          <section className="mt-12 question-card p-8 bg-amber-50/50 border-amber-200">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-amber-600" />
              Dates à retenir absolument
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2 text-sm">
                <p><strong className="text-primary">1789</strong> — Révolution française</p>
                <p><strong className="text-primary">1905</strong> — Loi de laïcité</p>
                <p><strong className="text-primary">1944</strong> — Vote des femmes</p>
                <p><strong className="text-primary">1958</strong> — Ve République</p>
              </div>
              <div className="space-y-2 text-sm">
                <p><strong className="text-primary">1962</strong> — Élection du président au suffrage universel</p>
                <p><strong className="text-primary">1981</strong> — Abolition peine de mort</p>
                <p><strong className="text-primary">2002</strong> — Passage à l'euro</p>
                <p><strong className="text-primary">18 juin 1940</strong> — Appel de de Gaulle</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center py-8">
            <h3 className="text-xl font-bold mb-4">Testez vos connaissances</h3>
            <p className="text-muted-foreground mb-6">
              Ces dates sont fréquemment posées à l'examen. Entraînez-vous !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/">
                  Commencer le QCM <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/themes/valeurs">
                  Valeurs de la République
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
