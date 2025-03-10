"use client"

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { quizQuestions } from "@/data/questions";
import { QuizState } from "@/types/quiz";
import { Shield, AlertTriangle, CheckCircle, Download } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { format } from "date-fns";
import jsPDF from "jspdf";
import { ScorePieChart } from "@/components/score-pie-chart";

interface FeedbackItem {
  questionId: number;
  feedback: string;
  selectedAnswerIndex: string;
}

export default function Assessment() {
  const [quizState, setQuizState] = useState<QuizState & { feedbackItems: FeedbackItem[] }>({
    currentQuestion: 0,
    answers: {},
    score: 0,
    feedback: [],
    feedbackItems: [],
  });
  const [assessmentDate] = useState(new Date());
  const resultsRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  const { toast } = useToast();
  const currentQuestion = quizQuestions[quizState.currentQuestion];
  const progress = ((quizState.currentQuestion + 1) / quizQuestions.length) * 100;

  const maxPossibleScore = quizQuestions.reduce((total, question) => {
    const maxPoints = Math.max(...question.answers.map(answer => answer.points));
    return total + maxPoints;
  }, 0);

  const handleAnswer = (value: string) => {
    const answer = currentQuestion.answers[parseInt(value)];
    const isLastQuestion = quizState.currentQuestion === quizQuestions.length - 1;

    setQuizState((prev) => {
      const newState = {
        ...prev,
        answers: { ...prev.answers, [currentQuestion.id]: value },
        score: prev.score + answer.points,
        feedback: [...prev.feedback, answer.feedback],
        feedbackItems: [...prev.feedbackItems, { 
          questionId: currentQuestion.id, 
          feedback: answer.feedback,
          selectedAnswerIndex: value
        }],
      };

      if (!isLastQuestion) {
        newState.currentQuestion = prev.currentQuestion + 1;
      }

      return newState;
    });
  };

  const handlePrevious = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1,
      }));
    }
  };

  const getScoreCategory = (score: number) => {
    const percentage = (score / maxPossibleScore) * 100;
    
    if (percentage >= 80) {
      return {
        category: "Excellent",
        description: "Your organization demonstrates strong cybersecurity practices. Keep up the great work and stay vigilant against emerging threats.",
        icon: CheckCircle,
        color: "text-green-500",
        bgColor: "bg-green-50",
        borderColor: "border-green-200"
      };
    } else if (percentage >= 60) {
      return {
        category: "Good",
        description: "Your security posture is good but has room for improvement. Focus on addressing the recommendations below to strengthen your defenses.",
        icon: Shield,
        color: "text-blue-500",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
      };
    } else {
      return {
        category: "Needs Improvement",
        description: "Your organization is at risk and needs significant security improvements. Prioritize implementing the recommendations below to protect your business.",
        icon: AlertTriangle,
        color: "text-red-500",
        bgColor: "bg-red-50",
        borderColor: "border-red-200"
      };
    }
  };

  const generatePDF = async () => {
    if (!resultsRef.current) return;

    try {
      toast({
        title: "Generating PDF",
        description: "Please wait while we prepare your report...",
      });

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 20;
      const contentWidth = pageWidth - (margin * 2);
      const footerHeight = 20;
      const maxContentHeight = pageHeight - footerHeight - margin;
      
      const addFooter = (pageNumber: number) => {
        const totalPages = pdf.getNumberOfPages();
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(10);
        pdf.setTextColor(128, 128, 128);
        
        pdf.setDrawColor(200, 200, 200);
        pdf.line(margin, pageHeight - footerHeight, pageWidth - margin, pageHeight - footerHeight);
        
        pdf.text(
          `Page ${pageNumber} of ${totalPages}`,
          pageWidth - margin,
          pageHeight - (footerHeight / 2),
          { align: "right" }
        );
        
        pdf.text(
          "cybersectools.com",
          margin,
          pageHeight - (footerHeight / 2)
        );
      };

      pdf.setFillColor(245, 245, 245);
      pdf.rect(0, 0, pageWidth, 40, 'F');
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(24);
      pdf.setTextColor(33, 33, 33);
      pdf.text("Cybersecurity Assessment Report", margin, 25);

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(12);
      pdf.setTextColor(100, 100, 100);
      pdf.text(`Assessment Date: ${format(assessmentDate, 'PPP')}`, margin, 45);

      const scorePercentage = Math.round((quizState.score / maxPossibleScore) * 100);
      const scoreInfo = getScoreCategory(quizState.score);
      
      pdf.setFillColor(scorePercentage >= 80 ? 220 : scorePercentage >= 60 ? 230 : 254, 
                      scorePercentage >= 80 ? 252 : scorePercentage >= 60 ? 242 : 226, 
                      scorePercentage >= 80 ? 231 : scorePercentage >= 60 ? 248 : 226);
      pdf.rect(margin, 60, contentWidth, 30, 'F');
      
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(16);
      pdf.setTextColor(33, 33, 33);
      pdf.text(`Score: ${scorePercentage}% - ${scoreInfo.category}`, margin + 5, 75);
      
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(11);
      pdf.setTextColor(66, 66, 66);
      const descriptionLines = pdf.splitTextToSize(scoreInfo.description, contentWidth - 10);
      pdf.text(descriptionLines, margin + 5, 83);

      let yPosition = 105;
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(14);
      pdf.setTextColor(33, 33, 33);
      pdf.text("Detailed Recommendations", margin, yPosition);
      yPosition += 10;

      quizState.feedbackItems.forEach((item, index) => {
        const question = getQuestionById(item.questionId);
        const selectedAnswer = question?.answers[parseInt(item.selectedAnswerIndex)];

        if (yPosition > maxContentHeight) {
          addFooter(pdf.getNumberOfPages());
          pdf.addPage();
          yPosition = margin + 10;
        }

        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(12);
        pdf.setTextColor(33, 33, 33);
        pdf.text(`${index + 1}. ${question?.category}`, margin, yPosition);
        yPosition += 7;

        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(11);
        pdf.setTextColor(66, 66, 66);
        const questionLines = pdf.splitTextToSize(`Question: ${question?.question}`, contentWidth - 10);
        pdf.text(questionLines, margin, yPosition);
        yPosition += (questionLines.length * 6);

        pdf.setFont("helvetica", "italic");
        const answerLines = pdf.splitTextToSize(`Answer: ${selectedAnswer?.text}`, contentWidth - 10);
        pdf.text(answerLines, margin, yPosition);
        yPosition += (answerLines.length * 6);

        pdf.setFont("helvetica", "normal");
        pdf.setTextColor(71, 85, 105);
        const recommendationLines = pdf.splitTextToSize(item.feedback, contentWidth - 10);
        pdf.text(recommendationLines, margin, yPosition);
        yPosition += (recommendationLines.length * 6) + 10;
      });

      addFooter(pdf.getNumberOfPages());

      pdf.save(`cybersecurity-assessment-${format(assessmentDate, 'yyyy-MM-dd')}.pdf`);

      toast({
        title: "PDF Generated",
        description: "Your assessment report has been downloaded.",
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  const isComplete = quizState.currentQuestion === quizQuestions.length - 1 && 
                     quizState.answers[currentQuestion.id];

  const scoreInfo = getScoreCategory(quizState.score);
  const ScoreIcon = scoreInfo.icon;

  const getQuestionById = (id: number) => {
    return quizQuestions.find(q => q.id === id);
  };

  const scorePercentage = Math.round((quizState.score / maxPossibleScore) * 100);

  const formatFeedback = (feedback: string) => {
    return feedback.split('\n').map((line, i) => (
      <p key={i} className="mb-2 last:mb-0">{line}</p>
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="p-6">
            {!isComplete ? (
              <>
                <div className="mb-8">
                  <h1 className="text-2xl font-bold mb-2">Security Assessment</h1>
                  <Progress value={progress} className="h-2" />
                  <p className="text-sm text-muted-foreground mt-2">
                    Question {quizState.currentQuestion + 1} of {quizQuestions.length}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="mb-4">
                    <span className="inline-block px-2 py-1 bg-primary/10 text-primary rounded text-sm mb-2">
                      {currentQuestion.category}
                    </span>
                    <h2 className="text-xl">{currentQuestion.question}</h2>
                  </div>
                  <RadioGroup
                    key={currentQuestion.id}
                    value={quizState.answers[currentQuestion.id]}
                    onValueChange={handleAnswer}
                    className="space-y-4"
                  >
                    {currentQuestion.answers.map((answer, index) => (
                      <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50">
                        <RadioGroupItem value={index.toString()} id={`answer-${currentQuestion.id}-${index}`} />
                        <Label htmlFor={`answer-${currentQuestion.id}-${index}`} className="flex-1 cursor-pointer">
                          {answer.text}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={quizState.currentQuestion === 0}
                  >
                    Previous
                  </Button>
                  {quizState.currentQuestion === quizQuestions.length - 1 && quizState.answers[currentQuestion.id] && (
                    <Button onClick={() => setQuizState(prev => ({ ...prev }))}>
                      Finish
                    </Button>
                  )}
                </div>
              </>
            ) : (
              <div>
                <div className="flex justify-end mb-4">
                  <Button
                    onClick={generatePDF}
                    className="flex items-center gap-2"
                    variant="outline"
                  >
                    <Download className="w-4 h-4" />
                    Download Report
                  </Button>
                </div>

                <div ref={resultsRef}>
                  <div className={`text-center mb-6 p-6 rounded-lg ${scoreInfo.bgColor} ${scoreInfo.borderColor} border`}>
                    <div className="flex justify-center mb-4" ref={chartRef}>
                      <div className="relative">
                        <ScorePieChart score={scorePercentage} size={140} />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-3xl font-bold">{scorePercentage}%</p>
                        </div>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{scoreInfo.category}</h2>
                    <p className="text-muted-foreground whitespace-pre-line">{scoreInfo.description}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      Assessment Date: {format(assessmentDate, 'PPP')}
                    </p>
                  </div>
                  
                  <div className="text-left mt-8">
                    <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
                    <div className="space-y-4">
                      {quizState.feedbackItems.map((item, index) => {
                        const question = getQuestionById(item.questionId);
                        const selectedAnswer = question?.answers[parseInt(item.selectedAnswerIndex)];
                        return (
                          <div key={index} className="p-4 bg-muted rounded-lg border border-border">
                            <h4 className="font-semibold mb-2 text-primary">
                              {question?.category}
                            </h4>
                            <div className="mb-3 text-sm">
                              <p className="font-medium text-primary/80 mb-1">Question:</p>
                              <p className="mb-2">{question?.question}</p>
                              <p className="font-medium text-primary/80 mb-1">Your Answer:</p>
                              <p className="mb-2">{selectedAnswer?.text}</p>
                            </div>
                            <div className="text-sm bg-background p-3 rounded">
                              <p className="font-medium text-primary/80 mb-1">Recommendation:</p>
                              <div className="text-muted-foreground whitespace-pre-line">
                                {formatFeedback(item.feedback)}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-8">
                  <Button 
                    onClick={() => setQuizState({
                      currentQuestion: 0,
                      answers: {},
                      score: 0,
                      feedback: [],
                      feedbackItems: [],
                    })}
                  >
                    Start Over
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}