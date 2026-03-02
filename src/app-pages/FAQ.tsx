"use client";

import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Est-ce que l'examen civique est difficile ?",
    answer: "Non, l'examen civique n'est pas difficile si vous révisez. Toutes les questions sont publiées officiellement par le Ministère de l'Intérieur. Avec une bonne préparation (notre simulateur reproduit les conditions réelles), le taux de réussite est élevé. Il suffit d'obtenir 32 bonnes réponses sur 40, soit 80%.",
  },
  {
    question: "Le test civique est-il obligatoire pour tous ?",
    answer: "L'examen civique est obligatoire dans le cadre du Contrat d'Intégration Républicaine (CIR) pour les étrangers primo-arrivants. Certaines personnes peuvent en être dispensées : titulaires d'un diplôme français (niveau bac minimum), personnes de plus de 65 ans, ou celles ayant résidé régulièrement en France pendant plus de 10 ans.",
  },
  {
    question: "Combien coûte l'examen civique ?",
    answer: "L'examen civique est entièrement gratuit dans le cadre du Contrat d'Intégration Républicaine (CIR). Aucun frais d'inscription ni de passage n'est demandé.",
  },
  {
    question: "Peut-on passer l'examen civique en ligne ?",
    answer: "Non, l'examen civique doit être passé en présentiel dans un centre d'examen agréé par l'OFII. Il se fait sur tablette ou ordinateur dans le centre. En revanche, vous pouvez vous entraîner en ligne gratuitement sur ExamenCivique.info avec les questions officielles !",
  },
  {
    question: "Que se passe-t-il si j'échoue à l'examen ?",
    answer: "En cas d'échec (moins de 32/40), vous pouvez repasser l'examen gratuitement. L'OFII vous proposera une nouvelle date. Profitez de ce délai pour réviser davantage avec notre simulateur. Les questions étant publiées, avec de l'entraînement, la réussite est garantie.",
  },
  {
    question: "Combien de temps dure l'examen ?",
    answer: "L'examen dure 45 minutes maximum. Vous avez donc un peu plus d'une minute par question (40 questions). C'est généralement suffisant pour répondre sereinement si vous avez révisé.",
  },
  {
    question: "Comment sont choisies les 40 questions ?",
    answer: "Les 40 questions sont tirées au sort parmi la liste officielle selon des quotas précis : 11 questions sur les Principes et Valeurs, 6 sur les Institutions, 11 sur les Droits et Devoirs, 8 sur l'Histoire et la Géographie, et 4 sur la Vie en Société. Notre simulateur respecte exactement ces quotas.",
  },
  {
    question: "Quand dois-je passer l'examen civique ?",
    answer: "L'examen civique doit être passé dans les 2 ans suivant la signature du Contrat d'Intégration Républicaine (CIR). C'est une condition pour le renouvellement de votre titre de séjour pluriannuel.",
  },
  {
    question: "Les questions changent-elles chaque année ?",
    answer: "La liste des questions est mise à jour périodiquement par le Ministère de l'Intérieur. Nous mettons régulièrement à jour notre base de données pour refléter les dernières questions officielles (liste 2025).",
  },
  {
    question: "Y a-t-il des questions pièges ?",
    answer: "Il n'y a pas de \"pièges\" à proprement parler. Toutes les questions sont straightforward avec une seule réponse correcte. Cependant, certaines formulations peuvent prêter à confusion si vous n'avez pas révisé. C'est pourquoi l'entraînement est essentiel.",
  },
  {
    question: "Puis-je utiliser un dictionnaire pendant l'examen ?",
    answer: "Non, aucun document ni appareil électronique n'est autorisé pendant l'examen. Vous devez répondre aux questions sans aide extérieure. C'est pourquoi il est important de bien comprendre les questions pendant vos révisions.",
  },
  {
    question: "Comment s'inscrire à l'examen civique ?",
    answer: "L'inscription se fait automatiquement par l'OFII dans le cadre de votre parcours CIR. Vous recevrez une convocation par courrier vous indiquant la date, l'heure et le lieu de l'examen. Vous n'avez pas de démarche particulière à effectuer.",
  },
];

export default function FAQ() {
  return (
    <>
      

      <div className="seo-section">
        <div className="container-narrow">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-700 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Foire Aux Questions
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Questions Fréquentes sur l'Examen Civique
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur le test civique OFII : difficulté, 
              coût, durée, et comment se préparer efficacement.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="question-card p-6 sm:p-8 mb-12">
            <Accordion type="single" collapsible className="space-y-2">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
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

          {/* CTA */}
          <div className="text-center py-8">
            <h3 className="text-xl font-bold mb-4">Vous avez d'autres questions ?</h3>
            <p className="text-muted-foreground mb-6">
              La meilleure façon de se rassurer, c'est de s'entraîner avec les vraies questions.
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
    </>
  );
}
