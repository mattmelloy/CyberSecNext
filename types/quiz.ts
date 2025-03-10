export interface QuizAnswer {
  text: string;
  points: number;
  feedback: string;
}

export interface QuizQuestion {
  id: number;
  category: string;
  question: string;
  answers: QuizAnswer[];
}

export interface QuizState {
  currentQuestion: number;
  answers: Record<number, string>;
  score: number;
  feedback: string[];
}