import { ArrowRight, GraduationCap, Award, Crown, Clock, Target, CheckCircle2, FileText, MapPin, BookOpen, ExternalLink } from "lucide-react";

const modules = [
  {
    level: "Fondamental",
    title: "Carte de Séjour Pluriannuelle (CSP)",
    description: "Maîtrisez les bases essentielles de la vie en France pour une première installation durable.",
    questions: 193,
    content: "Questions officielles sur la vie quotidienne et les valeurs de base",
    public: "Candidats à la CSP",
    link: "https://qcmcivique.fr/entrainement-csp",
    color: "emerald",
    icon: GraduationCap,
    badge: "Niveau A2",
  },
  {
    level: "Intermédiaire",
    title: "Carte de Résident (CR)",
    description: "Un parcours renforcé pour ceux qui visent une résidence de longue durée (10 ans).",
    questions: 209,
    content: "Questions couvrant l'histoire, les institutions et le système politique français",
    public: "Candidats à la carte de résident",
    link: "https://qcmcivique.fr/entrainement-cr",
    color: "blue",
    icon: Award,
    badge: "Niveau B1",
  },
  {
    level: "Approfondi",
    title: "Naturalisation Française",
    description: "La préparation la plus exigeante pour devenir citoyen français, par décret ou mariage.",
    questions: 240,
    content: "Questions complexes incluant la culture générale, le patrimoine et les nuances républicaines",
    public: "Préparation intensive à l'entretien de naturalisation",
    link: "https://qcmcivique.fr/entrainement-naturalisation",
    color: "purple",
    icon: Crown,
    badge: "Niveau B2",
  },
];

const advantages = [
  {
    icon: Target,
    title: "Conditions réelles",
    description: "Testez vos connaissances dans des conditions identiques à l'examen civique.",
  },
  {
    icon: CheckCircle2,
    title: "Conformité Légale",
    description: "Plateforme 100% à jour avec le décret 2025-1345",
  },
  {
    icon: MapPin,
    title: "Centres d'Examen",
    description: "Carte interactive des 158 centres agréés en France",
  },
  {
    icon: BookOpen,
    title: "Livret Citoyen",
    description: "Accès gratuit au livret du citoyen interactif",
  },
];

export default function TrainingModulesSection() {
  const colorClasses = {
    emerald: {
      bg: "bg-emerald-50 dark:bg-emerald-950/30",
      border: "border-emerald-200 dark:border-emerald-800",
      text: "text-emerald-700 dark:text-emerald-400",
      badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
      button: "bg-emerald-600 hover:bg-emerald-700 text-white",
    },
    blue: {
      bg: "bg-blue-50 dark:bg-blue-950/30",
      border: "border-blue-200 dark:border-blue-800",
      text: "text-blue-700 dark:text-blue-400",
      badge: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    purple: {
      bg: "bg-purple-50 dark:bg-purple-950/30",
      border: "border-purple-200 dark:border-purple-800",
      text: "text-purple-700 dark:text-purple-400",
      badge: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      button: "bg-purple-600 hover:bg-purple-700 text-white",
    },
  };

  return (
    <section className="seo-section bg-gradient-to-b from-muted/50 to-background" aria-labelledby="training-heading">
      <div className="container-wide">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            Nouveau 2026
          </div>
          <h2 id="training-heading" className="text-2xl sm:text-3xl font-bold mb-4">
            Modules d'Entraînement par Niveau
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Depuis le décret 2025-1345, chaque parcours administratif exige des connaissances spécifiques. 
            Choisissez le module adapté à votre démarche.
          </p>
        </header>

        {/* Training Modules Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {modules.map((module) => {
            const colors = colorClasses[module.color as keyof typeof colorClasses];
            const IconComponent = module.icon;
            
            return (
              <article
                key={module.level}
                className={`relative p-6 rounded-2xl border-2 ${colors.bg} ${colors.border} transition-all hover:shadow-xl hover:-translate-y-1`}
              >
                {/* Level Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.badge}`}>
                    {module.level}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors.badge}`}>
                    {module.badge}
                  </span>
                </div>

                {/* Icon */}
                <IconComponent className={`w-12 h-12 ${colors.text} mb-4`} />

                {/* Title */}
                <h3 className="text-lg font-bold mb-2">{module.title}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">{module.description}</p>

                {/* Stats */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                    <span><strong>{module.questions}</strong> questions officielles</span>
                  </div>
                  <p className="text-xs text-muted-foreground pl-6">{module.content}</p>
                </div>

                {/* Public */}
                <p className="text-xs text-muted-foreground mb-4">
                  <strong>Public :</strong> {module.public}
                </p>

                {/* CTA Button */}
                <a
                  href={module.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${colors.button}`}
                >
                  Accéder au module
                  <ExternalLink className="w-4 h-4" />
                </a>
              </article>
            );
          })}
        </div>

        {/* Advantages Grid */}
        <div className="bg-card rounded-2xl border border-border p-8">
          <h3 className="text-xl font-bold text-center mb-8">
            Les avantages de la plateforme QCM Civique
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage) => {
              const IconComponent = advantage.icon;
              return (
                <div key={advantage.title} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-1">{advantage.title}</h4>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </div>
              );
            })}
          </div>

          {/* Final CTA */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              <strong className="text-primary">2 quiz gratuits</strong> pour évaluer votre niveau immédiatement
            </p>
            <a
              href="https://qcmcivique.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-lg"
            >
              Réussissez votre examen civique du premier coup
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
