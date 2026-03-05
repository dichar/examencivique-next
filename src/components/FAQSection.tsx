"use client";

import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
  includeJsonLd?: boolean;
}

export const homeFaqItems: FAQItem[] = [
  {
    question: "Qu'est-ce que l'examen civique français ?",
    answer: "L'examen civique est un test obligatoire de 40 questions QCM pour les étrangers souhaitant obtenir une carte de séjour pluriannuelle en France. Il évalue vos connaissances sur les valeurs, l'histoire, les institutions et les droits en France. Le score minimum requis est de 32/40 (80%).",
  },
  {
    question: "Combien de questions comporte l'examen civique ?",
    answer: "L'examen civique comporte exactement 40 questions à choix multiples (QCM). Ces questions sont réparties en 5 thématiques : Principes et valeurs (11), Institutions (6), Droits et devoirs (11), Histoire et géographie (8), et Vie en société (4).",
  },
  {
    question: "Quel est le score minimum pour réussir l'examen civique ?",
    answer: "Le score minimum requis pour réussir l'examen civique est de 32 bonnes réponses sur 40, soit un taux de réussite de 80%. Si vous obtenez moins de 32/40, vous pouvez repasser l'examen gratuitement.",
  },
  {
    question: "Combien de temps dure l'examen civique ?",
    answer: "L'examen civique dure 45 minutes maximum. Cela représente environ 1 minute par question. Ce temps est généralement suffisant si vous avez révisé avec notre simulateur.",
  },
  {
    question: "L'examen civique est-il gratuit ?",
    answer: "Oui, l'examen civique est entièrement gratuit dans le cadre du Contrat d'Intégration Républicaine (CIR). Aucun frais d'inscription ni de passage n'est demandé par l'OFII.",
  },
  {
    question: "Où se passe l'examen civique ?",
    answer: "L'examen civique se passe en présentiel dans un centre d'examen agréé par l'OFII. Vous recevrez une convocation par courrier indiquant la date, l'heure et le lieu exact. L'examen se fait sur tablette ou ordinateur.",
  },
  {
    question: "Qui doit passer l'examen civique ?",
    answer: "L'examen civique est obligatoire pour tous les étrangers primo-arrivants signataires du Contrat d'Intégration Républicaine (CIR). Des dispenses existent pour : les titulaires d'un diplôme français niveau bac+, les personnes de plus de 65 ans, ou celles résidant en France depuis plus de 10 ans.",
  },
  {
    question: "Que se passe-t-il si j'échoue à l'examen civique ?",
    answer: "En cas d'échec (moins de 32/40), vous pouvez repasser l'examen gratuitement. L'OFII vous proposera une nouvelle date. Nous vous recommandons de vous entraîner davantage avec notre simulateur qui utilise les questions officielles.",
  },
  {
    question: "Comment se préparer efficacement à l'examen civique ?",
    answer: "La meilleure préparation est de s'entraîner avec les questions officielles. Notre simulateur gratuit reproduit les conditions réelles de l'examen avec les 1800+ questions publiées par le Ministère de l'Intérieur, réparties selon les quotas officiels.",
  },
  {
    question: "Les questions de l'examen civique changent-elles ?",
    answer: "Les questions sont publiées officiellement par le Ministère de l'Intérieur et mises à jour périodiquement. Notre base de données est régulièrement actualisée pour refléter la liste officielle 2025-2026.",
  },
];

export default function FAQSection({ 
  items, 
  title = "Questions Fréquentes sur l'Examen Civique",
  subtitle = "Trouvez rapidement les réponses à vos questions les plus courantes",
  showCTA = true,
  includeJsonLd = true
}: FAQSectionProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="seo-section" aria-labelledby="faq-heading">
      {includeJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      
      <div className="container-narrow">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-700 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            FAQ - Foire Aux Questions
          </div>
          
          <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold mb-4">
            {title}
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </header>

        <div className="question-card p-6 sm:p-8 mb-8">
          <Accordion type="single" collapsible className="space-y-2">
            {items.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border rounded-lg px-4"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline hover:text-primary py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {showCTA && (
          <div className="text-center">
            <Link 
              href="/faq" 
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Voir toutes les questions fréquentes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
