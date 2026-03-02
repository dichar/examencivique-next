import { CheckCircle2 } from "lucide-react";

interface AnswerBlockProps {
  question: string;
  answer: string;
  highlighted?: boolean;
}

/**
 * Composant optimisé AEO (Answer Engine Optimization)
 * Affiche une question avec une réponse courte et directe
 * Idéal pour les featured snippets et les moteurs de réponse IA
 */
export default function AnswerBlock({ question, answer, highlighted = false }: AnswerBlockProps) {
  return (
    <div 
      className={`p-6 rounded-xl border ${
        highlighted 
          ? "bg-primary/5 border-primary/30" 
          : "bg-card border-border"
      }`}
    >
      <h3 className="font-bold text-lg mb-3 flex items-start gap-2">
        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        {question}
      </h3>
      <p className="text-muted-foreground leading-relaxed pl-7">
        {answer}
      </p>
    </div>
  );
}

// Réponses courtes pré-formatées pour AEO
export const keyAnswers = [
  {
    question: "Quel est le score minimum pour réussir l'examen civique ?",
    answer: "Le score minimum requis est de 32 bonnes réponses sur 40, soit 80%. L'examen comporte 40 questions QCM à choix multiples, et vous disposez de 45 minutes pour les compléter.",
  },
  {
    question: "Combien de questions comporte l'examen civique ?",
    answer: "L'examen civique comporte 40 questions réparties en 5 thématiques : Principes et valeurs (11), Institutions (6), Droits et devoirs (11), Histoire et géographie (8), Vie en société (4).",
  },
  {
    question: "L'examen civique est-il obligatoire ?",
    answer: "Oui, l'examen civique est obligatoire pour tous les étrangers signataires du Contrat d'Intégration Républicaine (CIR) souhaitant obtenir une carte de séjour pluriannuelle en France.",
  },
  {
    question: "Où passer l'examen civique ?",
    answer: "L'examen civique se passe dans un centre d'examen agréé par l'OFII. Vous recevez une convocation par courrier indiquant le lieu, la date et l'heure. L'examen se fait sur tablette ou ordinateur.",
  },
  {
    question: "Que faire en cas d'échec à l'examen civique ?",
    answer: "En cas d'échec (moins de 32/40), vous pouvez repasser l'examen gratuitement. L'OFII vous proposera une nouvelle date. Profitez de ce délai pour réviser avec les questions officielles.",
  },
];
