"use client";

import Link from "next/link";
import FAQSection, { homeFaqItems } from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import AnswerBlock, { keyAnswers } from "@/components/AnswerBlock";
import TrainingModulesSection from "@/components/TrainingModulesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import {
  Shield,
  FileText,
  BookOpen,
  Scale,
  ArrowRight,
  CheckCircle2,
  Target,
  Clock,
  Award,
  Users,
  Tablet,
  GraduationCap,
} from "lucide-react";

export default function Index() {
  // Schema.org structured data
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Examen Civique - Simulateur QCM Gratuit",
    description:
      "Examen civique 2026 gratuit QCM : entraînement en conditions réelles avec questions officielles du Ministère de l'Intérieur",
    url: "https://www.examencivique.info",
    applicationCategory: "EducationalApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1250",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "ExamenCivique.info",
    url: "https://www.examencivique.info",
    description: "Plateforme de préparation à l'examen civique français",
    sameAs: [
      "https://www.facebook.com/qcmcivique",
      "https://twitter.com/qcmcivique",
      "https://www.instagram.com/qcmcivique",
      "https://www.youtube.com/@qcmcivique",
      "https://www.linkedin.com/company/qcmcivique",
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comment réussir l'examen civique français",
    description:
      "Guide étape par étape pour préparer et réussir l'examen civique du Contrat d'Intégration Républicaine",
    step: [
      {
        "@type": "HowToStep",
        name: "Comprendre le format de l'examen",
        text: "L'examen civique comporte 40 questions QCM. Vous devez obtenir 32/40 minimum (80%) en 45 minutes.",
      },
      {
        "@type": "HowToStep",
        name: "Réviser les 5 thématiques officielles",
        text: "Étudiez les Principes et valeurs, Institutions, Droits et devoirs, Histoire et géographie, Vie en société.",
      },
      {
        "@type": "HowToStep",
        name: "S'entraîner avec le simulateur",
        text: "Utilisez notre simulateur gratuit avec les questions officielles du Ministère de l'Intérieur.",
      },
      {
        "@type": "HowToStep",
        name: "Passer l'examen le jour J",
        text: "Présentez-vous au centre d'examen OFII avec votre convocation et pièce d'identité.",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* HERO SECTION - Primary H1 and CTA */}
      <header className="bg-gradient-to-b from-primary via-primary to-primary/90 text-primary-foreground py-12 sm:py-16">
        <div className="container-wide text-center">
          {/* Official Badge - AEO Optimized */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm sm:text-base font-semibold mb-8 animate-fade-in border border-white/30 shadow-lg">
            <Shield className="w-5 h-5" />
            <span>Questions 100% officielles du Ministère de l'Intérieur</span>
          </div>

          {/* H1 - Single, keyword-rich */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance animate-fade-in">
            Préparation Examen Civique 2026 : Test QCM <span className="text-amber-300">Gratuit</span>
          </h1>

          {/* AEO-optimized intro paragraph - direct answer format */}
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-in">
            L'examen civique est un test obligatoire de <strong>40 questions QCM</strong> pour obtenir votre carte de
            séjour en France. Score minimum : <strong>32/40 (80%)</strong>. Exercez-vous à l'examen civique en situation réelle.
          </p>

          {/* Primary CTA Button */}
          <div className="animate-fade-in">
            <a
              href="/entrainement"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              aria-label="Commencer le test gratuit de l'examen civique"
            >
              <Target className="w-6 h-6" />
              Commencer le test gratuit
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Key Stats - Quick Facts for AEO */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Target className="w-6 h-6 mx-auto mb-2" />
              <span className="block text-3xl font-bold">40</span>
              <span className="text-sm text-white/80">Questions QCM</span>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <CheckCircle2 className="w-6 h-6 mx-auto mb-2" />
              <span className="block text-3xl font-bold">32/40</span>
              <span className="text-sm text-white/80">Score minimum</span>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Clock className="w-6 h-6 mx-auto mb-2" />
              <span className="block text-3xl font-bold">45</span>
              <span className="text-sm text-white/80">Minutes</span>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Award className="w-6 h-6 mx-auto mb-2" />
              <span className="block text-3xl font-bold">1800+</span>
              <span className="text-sm text-white/80">Questions officielles</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* TRAINING MODULES SECTION - Right after hero */}
        <TrainingModulesSection />

        <TestimonialsSection />

        {/* TRAINING CTA SECTION */}
        <section className="seo-section bg-gradient-to-b from-background to-muted/30" aria-labelledby="quiz-heading">
          <div className="container-wide text-center">
            <h2 id="quiz-heading" className="text-2xl sm:text-3xl font-bold mb-4">
              Préparez-vous à l'examen civique comme si vous y étiez.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Testez vos connaissances dans des conditions identiques à l'examen civique.
            </p>
            <a
              href="/entrainement"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-lg"
            >
              Commencer le test gratuit
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* KEY ANSWERS SECTION - AEO Optimized */}
        <section className="seo-section bg-card border-y border-border" aria-labelledby="answers-heading">
          <div className="container-narrow">
            <header className="text-center mb-12">
              <h2 id="answers-heading" className="text-2xl sm:text-3xl font-bold mb-4">
                Tout savoir sur l'examen civique en bref
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Réponses directes aux questions les plus posées sur le test civique OFII
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-4">
              {keyAnswers.slice(0, 4).map((item, index) => (
                <AnswerBlock key={index} question={item.question} answer={item.answer} highlighted={index === 0} />
              ))}
            </div>
          </div>
        </section>

        {/* GUIDES SECTION */}
        <section className="seo-section" aria-labelledby="guides-heading">
          <div className="container-wide">
            <header className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <GraduationCap className="w-4 h-4" />
                Guides d'étude
              </div>
              <h2 id="guides-heading" className="text-2xl sm:text-3xl font-bold mb-4">
                Comment se préparer à l'examen civique ?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nos ressources complètes pour maximiser vos chances de réussite
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <article className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <FileText className="w-10 h-10 text-primary mb-4" aria-hidden="true" />
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  <Link href="/questions">Liste complète des questions 2025</Link>
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  1800+ questions officielles avec réponses organisées par les 5 thématiques
                </p>
                <Link href="/questions" className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                  Consulter <ArrowRight className="w-4 h-4" />
                </Link>
              </article>

              <article className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <BookOpen className="w-10 h-10 text-amber-500 mb-4" aria-hidden="true" />
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  <Link href="/guide">Guide du déroulement de l'examen</Link>
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Durée, format sur tablette, score minimum et conseils pour le jour J
                </p>
                <Link href="/guide" className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                  Lire le guide <ArrowRight className="w-4 h-4" />
                </Link>
              </article>

              <article className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <Scale className="w-10 h-10 text-emerald-500 mb-4" aria-hidden="true" />
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  <Link href="/comparatif">OFII vs Naturalisation : les différences</Link>
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Examen civique QCM ou entretien préfecture ? Comparez les deux parcours
                </p>
                <Link href="/comparatif" className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                  Comparer <ArrowRight className="w-4 h-4" />
                </Link>
              </article>

              <article className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <Shield className="w-10 h-10 text-rose-500 mb-4" aria-hidden="true" />
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  <Link href="/themes/valeurs">Valeurs de la République expliquées</Link>
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Liberté, Égalité, Fraternité, Laïcité : comprendre les principes fondamentaux
                </p>
                <Link href="/themes/valeurs" className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                  Découvrir <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="seo-section bg-muted/30" aria-labelledby="how-heading">
          <div className="container-narrow">
            <header className="text-center mb-12">
              <h2 id="how-heading" className="text-2xl sm:text-3xl font-bold mb-4">
                Comment se déroule l'examen civique ?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Le test civique OFII se passe en présentiel dans un centre agréé
              </p>
            </header>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <Tablet className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Sur tablette</h3>
                <p className="text-sm text-muted-foreground">Examen informatisé dans un centre OFII agréé</p>
              </div>

              <div className="text-center p-6 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <Target className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">40 questions QCM</h3>
                <p className="text-sm text-muted-foreground">Réparties en 5 thématiques officielles</p>
              </div>

              <div className="text-center p-6 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <Clock className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">45 minutes</h3>
                <p className="text-sm text-muted-foreground">Temps maximum pour compléter le test</p>
              </div>

              <div className="text-center p-6 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <CheckCircle2 className="w-8 h-8 text-success mx-auto mb-3" />
                <h3 className="font-semibold mb-2">32/40 pour réussir</h3>
                <p className="text-sm text-muted-foreground">Score minimum de 80% requis</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO SECTION - AEO Optimized */}
        <section className="seo-section" aria-labelledby="who-heading">
          <div className="container-narrow">
            <header className="text-center mb-12">
              <h2 id="who-heading" className="text-2xl sm:text-3xl font-bold mb-4">
                Qui doit passer l'examen civique ?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                L'examen civique est obligatoire dans le cadre du Contrat d'Intégration Républicaine (CIR)
              </p>
            </header>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-card rounded-xl border border-border">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Carte de séjour pluriannuelle</h3>
                <p className="text-sm text-muted-foreground">
                  Étrangers primo-arrivants souhaitant renouveler leur titre de séjour après le CIR.
                  <strong className="block mt-2 text-amber-600">Niveau A2 requis (nouveau 2026)</strong>
                </p>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border">
                <Award className="w-8 h-8 text-emerald-500 mb-4" />
                <h3 className="font-semibold mb-2">Carte de résident (10 ans)</h3>
                <p className="text-sm text-muted-foreground">
                  Demandeurs de la carte de résident longue durée en France.
                  <strong className="block mt-2 text-amber-600">Niveau B1 requis</strong>
                </p>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border">
                <GraduationCap className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="font-semibold mb-2">Naturalisation</h3>
                <p className="text-sm text-muted-foreground">
                  Candidats à l'acquisition de la nationalité française.
                  <strong className="block mt-2 text-amber-600">Niveau B2 (probable 2026)</strong>
                </p>
              </div>
            </div>

            <aside className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-xl">
              <h3 className="font-bold text-amber-800 mb-2">Cas de dispense</h3>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Titulaires d'un diplôme français niveau baccalauréat ou supérieur</li>
                <li>• Personnes âgées de plus de 65 ans</li>
                <li>• Résidents réguliers en France depuis plus de 10 ans</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* SEO CONTENT SECTION - 500+ words */}
        <section className="seo-section bg-card border-y border-border" aria-labelledby="seo-content-heading">
          <div className="container-narrow">
            <header className="text-center mb-10">
              <h2 id="seo-content-heading" className="text-2xl sm:text-3xl font-bold mb-4">
                Tout comprendre sur l'examen civique français
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Guide complet pour réussir votre test civique OFII en 2025
              </p>
            </header>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <article>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Qu'est-ce que l'examen civique ?</h3>
                  <p className="leading-relaxed">
                    L'examen civique, également appelé test civique OFII, est une épreuve obligatoire pour tous les
                    étrangers souhaitant obtenir leur carte de séjour pluriannuelle en France. Instauré dans le cadre du
                    Contrat d'Intégration Républicaine (CIR), cet examen évalue vos connaissances sur les valeurs,
                    l'histoire et les institutions françaises. Le test se compose de
                    <strong> 40 questions à choix multiples (QCM)</strong> tirées d'une base officielle établie par le
                    Ministère de l'Intérieur.
                  </p>
                  <p className="leading-relaxed mt-3">
                    Pour réussir, vous devez obtenir un score minimum de <strong>32 bonnes réponses sur 40</strong>,
                    soit 80% de réussite. L'examen se déroule sur tablette dans un centre OFII agréé et dure 45 minutes
                    maximum. Les questions couvrent cinq thématiques principales : les principes et valeurs de la
                    République, les institutions françaises, les droits et devoirs des citoyens, l'histoire et la
                    géographie de France, ainsi que la vie quotidienne en société française.
                  </p>
                </article>

                <article>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Comment bien se préparer ?</h3>
                  <p className="leading-relaxed">
                    La préparation à l'examen civique nécessite une révision méthodique des 1800+ questions officielles
                    publiées par le Ministère de l'Intérieur. Notre simulateur gratuit reproduit les conditions réelles
                    de l'examen avec des questions aléatoires à chaque session. Nous vous recommandons de vous entraîner
                    régulièrement, idéalement 15 à 20 minutes par jour, pendant les deux semaines précédant votre
                    convocation.
                  </p>
                  <p className="leading-relaxed mt-3">
                    Les thèmes les plus importants à maîtriser sont la <strong>laïcité</strong>, la{" "}
                    <strong>devise française</strong>
                    (Liberté, Égalité, Fraternité), les <strong>symboles de la République</strong> (Marianne, drapeau
                    tricolore, La Marseillaise), ainsi que les grandes dates de l'histoire de France comme la Révolution
                    de 1789, la Déclaration des droits de l'homme, et les guerres mondiales. Apprenez également les
                    institutions clés : le Président de la République, l'Assemblée nationale, le Sénat et le Conseil
                    constitutionnel.
                  </p>
                </article>
              </div>

              <div className="grid md:grid-cols-2 gap-8 pt-4">
                <article>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Le jour de l'examen</h3>
                  <p className="leading-relaxed">
                    Le jour de votre examen civique, présentez-vous au centre OFII indiqué sur votre convocation avec
                    une pièce d'identité valide. L'épreuve se déroule dans une salle équipée de tablettes numériques.
                    Avant de commencer, un tutoriel vous explique le fonctionnement de l'interface. Prenez le temps de
                    bien lire chaque question et les quatre propositions de réponse avant de valider votre choix.
                  </p>
                  <p className="leading-relaxed mt-3">
                    Conseil pratique : commencez par les questions dont vous êtes certain de la réponse, puis revenez
                    sur les plus difficiles. Le chronomètre de 45 minutes est généralement suffisant si vous avez bien
                    révisé. En cas d'échec, vous pouvez repasser l'examen une seconde fois gratuitement. Au-delà, des
                    frais peuvent s'appliquer.
                  </p>
                </article>

                <article>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Nouveautés 2025-2026</h3>
                  <p className="leading-relaxed">
                    Les conditions de l'examen civique évoluent. À partir de 2026, le niveau de langue française requis
                    pour la carte de séjour pluriannuelle passera du niveau A1 au <strong>niveau A2</strong>. Pour la
                    carte de résident de 10 ans, le niveau B1 oral et écrit sera exigé. Les candidats à la
                    naturalisation devront probablement justifier d'un niveau B2.
                  </p>
                  <p className="leading-relaxed mt-3">
                    Ces changements renforcent l'importance d'une bonne préparation. Notre plateforme est régulièrement
                    mise à jour pour refléter les dernières questions officielles du Ministère de l'Intérieur. Utilisez
                    notre simulateur pour vous familiariser avec le format QCM et acquérir les réflexes nécessaires le
                    jour J. L'entraînement est
                    <strong> 100% gratuit et illimité</strong>.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>


        {/* BLOG / NEWS SECTION */}
        <BlogSection />

        {/* FAQ SECTION - AEO Critical */}
        <FAQSection
          items={homeFaqItems.slice(0, 6)}
          title="Questions fréquentes sur l'examen civique"
          subtitle="Trouvez rapidement les réponses aux questions les plus posées"
          showCTA={true}
          includeJsonLd={true}
        />

        {/* FINAL CTA SECTION */}
        <section className="seo-section bg-primary text-primary-foreground" aria-labelledby="cta-heading">
          <div className="container-narrow text-center">
            <h2 id="cta-heading" className="text-2xl sm:text-3xl font-bold mb-4">
              Mettez-vous en condition réelle pour réussir l'examen civique
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Notre simulateur gratuit utilise les questions officielles du Ministère de l'Intérieur. Entraînez-vous
              autant de fois que nécessaire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/entrainement"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-white/90 transition-colors"
              >
                <Target className="w-5 h-5" />
                Commencer le test gratuit
              </a>
              <Link
                href="/questions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-medium rounded-xl hover:bg-white/20 transition-colors"
              >
                <FileText className="w-5 h-5" />
                Voir toutes les questions
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
