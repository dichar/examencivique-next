import questionsData from '@/data/questions.json';

export interface Question {
  id: number;
  theme: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const allQuestions: Question[] = questionsData as Question[];

export const themeQuotas: Record<string, number> = {
  "Principes et valeurs de la République": 11,
  "Système institutionnel et politique français": 6,
  "Droits et devoirs du citoyen": 11,
  "Histoire, géographie et culture françaises": 8,
  "Vivre dans la société française": 4,
};

export const themeColors: Record<string, { bg: string; text: string; border: string }> = {
  "Principes et valeurs de la République": {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/30",
  },
  "Système institutionnel et politique français": {
    bg: "bg-amber-500/10",
    text: "text-amber-700",
    border: "border-amber-500/30",
  },
  "Droits et devoirs du citoyen": {
    bg: "bg-emerald-500/10",
    text: "text-emerald-700",
    border: "border-emerald-500/30",
  },
  "Histoire, géographie et culture françaises": {
    bg: "bg-purple-500/10",
    text: "text-purple-700",
    border: "border-purple-500/30",
  },
  "Vivre dans la société française": {
    bg: "bg-rose-500/10",
    text: "text-rose-700",
    border: "border-rose-500/30",
  },
};

export const themeShortNames: Record<string, string> = {
  "Principes et valeurs de la République": "Principes & Valeurs",
  "Système institutionnel et politique français": "Institutions",
  "Droits et devoirs du citoyen": "Droits & Devoirs",
  "Histoire, géographie et culture françaises": "Histoire & Culture",
  "Vivre dans la société française": "Vie en Société",
};

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function selectExamQuestions(): Question[] {
  const selectedQuestions: Question[] = [];
  
  // Group questions by theme
  const questionsByTheme: Record<string, Question[]> = {};
  
  for (const question of allQuestions) {
    if (!questionsByTheme[question.theme]) {
      questionsByTheme[question.theme] = [];
    }
    questionsByTheme[question.theme].push(question);
  }
  
  // Select questions according to quotas
  for (const [theme, quota] of Object.entries(themeQuotas)) {
    const themeQuestions = questionsByTheme[theme] || [];
    const shuffled = shuffleArray(themeQuestions);
    const selected = shuffled.slice(0, quota);
    selectedQuestions.push(...selected);
  }
  
  // Final shuffle to mix themes + shuffle options for each question
  return shuffleArray(selectedQuestions).map((question) => ({
    ...question,
    options: shuffleArray(question.options),
  }));
}

export function getQuestionsByTheme(): Record<string, Question[]> {
  const grouped: Record<string, Question[]> = {};
  
  for (const question of allQuestions) {
    if (!grouped[question.theme]) {
      grouped[question.theme] = [];
    }
    grouped[question.theme].push(question);
  }
  
  return grouped;
}

export const PASSING_SCORE = 32;
export const TOTAL_QUESTIONS = 40;
export const EXAM_DURATION_MINUTES = 45;
