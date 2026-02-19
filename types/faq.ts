export interface FAQAnswer {
  text: string;
  advice: string;
  recommendation: string;
}

export interface FAQ {
  question: string;
  answer: FAQAnswer;
}