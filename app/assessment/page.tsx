"use client"

import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { quizQuestions } from "@/data/questions";
import { QuizState } from "@/types/quiz";
import { ShieldCheck, AlertTriangle, CheckCircle, Download, RotateCcw } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { format } from "date-fns";
import jsPDF from "jspdf";
import { ScorePieChart } from "@/components/score-pie-chart";

const STORAGE_KEY = "cybersec-assessment-progress";

interface FeedbackItem {
  questionId: number;
  feedback: string;
  selectedAnswerIndex: string;
}

interface CategoryScore {
  name: string;
  score: number;
  maxScore: number;
  percentage: number;
}

export default function Assessment() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: {},
  });
  const [showResults, setShowResults] = useState(false);
  const [assessmentDate, setAssessmentDate] = useState<Date | null>(null);
  const [showResumeDialog, setShowResumeDialog] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  const { toast } = useToast();

  // Load saved progress on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEY);
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        if (parsed.answers && Object.keys(parsed.answers).length > 0) {
          setShowResumeDialog(true);
        }
      } catch (e) {
        console.error("Failed to parse saved progress:", e);
      }
    }
    setHasHydrated(true);
  }, []);

  // Save progress whenever quizState changes
  useEffect(() => {
    if (hasHydrated && Object.keys(quizState.answers).length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        currentQuestion: quizState.currentQuestion,
        answers: quizState.answers,
        savedAt: new Date().toISOString(),
      }));
    }
  }, [quizState, hasHydrated]);

  const resumeSavedProgress = useCallback(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEY);
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        setQuizState({
          currentQuestion: parsed.currentQuestion || 0,
          answers: parsed.answers || {},
        });
        if (parsed.savedAt) {
          setAssessmentDate(new Date(parsed.savedAt));
        }
        toast({
          title: "Progress restored",
          description: "Your previous answers have been loaded.",
        });
      } catch (e) {
        console.error("Failed to restore progress:", e);
      }
    }
    setShowResumeDialog(false);
  }, [toast]);

  const startFresh = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setQuizState({ currentQuestion: 0, answers: {} });
    setAssessmentDate(new Date());
    setShowResumeDialog(false);
  }, []);

  const clearSavedProgress = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    toast({
      title: "Progress cleared",
      description: "Your saved assessment progress has been removed.",
    });
  }, [toast]);
  const currentQuestion = quizQuestions[quizState.currentQuestion];
  const progress = ((quizState.currentQuestion + 1) / quizQuestions.length) * 100;
  const answeredCount = Object.keys(quizState.answers).length;

  const maxPossibleScore = quizQuestions.reduce((total, question) => {
    const maxPoints = Math.max(...question.answers.map(answer => answer.points));
    return total + maxPoints;
  }, 0);

  const score = quizQuestions.reduce((total, question) => {
    const selected = quizState.answers[question.id];
    if (selected === undefined) return total;
    const answer = question.answers[parseInt(selected)];
    return total + answer.points;
  }, 0);

  const feedbackItems: FeedbackItem[] = quizQuestions
    .filter((question) => quizState.answers[question.id] !== undefined)
    .map((question) => {
      const selectedAnswerIndex = quizState.answers[question.id];
      const selectedAnswer = question.answers[parseInt(selectedAnswerIndex)];
      return {
        questionId: question.id,
        feedback: selectedAnswer.feedback,
        selectedAnswerIndex,
      };
    });

  const categoryScores = quizQuestions.reduce<Record<string, CategoryScore>>((acc, question) => {
    const maxPoints = Math.max(...question.answers.map(answer => answer.points));
    const selected = quizState.answers[question.id];
    const earnedPoints = selected === undefined ? 0 : question.answers[parseInt(selected)].points;

    if (!acc[question.category]) {
      acc[question.category] = {
        name: question.category,
        score: 0,
        maxScore: 0,
        percentage: 0,
      };
    }

    acc[question.category].score += earnedPoints;
    acc[question.category].maxScore += maxPoints;
    acc[question.category].percentage = Math.round(
      (acc[question.category].score / acc[question.category].maxScore) * 100
    );

    return acc;
  }, {});

  const categoryList = Object.values(categoryScores).sort((a, b) => a.percentage - b.percentage);
  const topCategories = categoryList.slice(0, 5);

  const actionBuckets = [
    {
      title: "Next 30 days",
      description: "Fix the highest-risk gaps first.",
      categories: categoryList.filter((item) => item.percentage < 60).slice(0, 4),
    },
    {
      title: "Next 90 days",
      description: "Build consistent, repeatable controls.",
      categories: categoryList.filter((item) => item.percentage >= 60 && item.percentage < 80).slice(0, 4),
    },
    {
      title: "Maintain",
      description: "Keep these areas strong and review quarterly.",
      categories: categoryList.filter((item) => item.percentage >= 80).slice(0, 4),
    },
  ];

  const categoryGuidance: Record<string, { focus: string; actions: string[] }> = {
    "Software Updates": {
      focus: "Reduce exposure to known vulnerabilities.",
      actions: [
        "Enable automatic OS and app updates across all devices.",
        "Schedule monthly checks for devices that miss updates.",
        "Remove unused software to reduce attack surface.",
      ],
    },
    "User Authentication": {
      focus: "Harden passwords and login hygiene.",
      actions: [
        "Adopt a password manager for all staff.",
        "Eliminate shared credentials for business accounts.",
        "Set minimum password length and reuse rules.",
      ],
    },
    "Multi-Factor Authentication (MFA)": {
      focus: "Block account takeover with a second factor.",
      actions: [
        "Turn on MFA for email, banking, and admin logins.",
        "Prefer authenticator apps over SMS where possible.",
        "Store backup codes securely in a password manager.",
      ],
    },
    "Backing Up Your Data": {
      focus: "Ensure you can recover quickly after incidents.",
      actions: [
        "Use the 3-2-1 backup rule with offsite copies.",
        "Automate backups for key systems and cloud data.",
        "Test a restore every quarter and log the result.",
      ],
    },
    "Cyber Security Training": {
      focus: "Lower human risk from phishing and scams.",
      actions: [
        "Run short training every 6–12 months.",
        "Send simulated phishing and coach outcomes.",
        "Document simple reporting steps for staff.",
      ],
    },
    "Controlling Access to Information": {
      focus: "Limit access to only what staff need.",
      actions: [
        "Adopt role-based access controls for systems.",
        "Review access when staff join/leave roles.",
        "Remove access for former staff immediately.",
      ],
    },
    "Managing Applications": {
      focus: "Prevent risky or unapproved software use.",
      actions: [
        "Create a list of approved business apps.",
        "Remove unknown or unused software quarterly.",
        "Limit install rights to admins only.",
      ],
    },
    "Email Safety": {
      focus: "Reduce phishing and business email compromise.",
      actions: [
        "Enable advanced spam filtering for mail providers.",
        "Train staff to verify payment requests out-of-band.",
        "Set a rule to report suspicious emails immediately.",
      ],
    },
    "Network Safety": {
      focus: "Protect office networks and Wi-Fi access.",
      actions: [
        "Use WPA2/WPA3 and strong Wi-Fi passwords.",
        "Set up a guest network for visitors.",
        "Update router firmware quarterly.",
      ],
    },
    "Device Safety": {
      focus: "Secure laptops, phones, and tablets.",
      actions: [
        "Require device lock + auto-lock after 5 minutes.",
        "Enable full-disk encryption on all devices.",
        "Turn on remote wipe for mobile devices.",
      ],
    },
    "Device Protection": {
      focus: "Keep endpoints resilient against malware.",
      actions: [
        "Enable built-in antivirus with real-time scanning.",
        "Schedule weekly scans and review alerts.",
        "Install security updates outside business hours.",
      ],
    },
    "Company Policies": {
      focus: "Set clear expectations for staff behavior.",
      actions: [
        "Document acceptable use and data handling rules.",
        "Confirm staff have read the policy annually.",
        "Review policies after incidents or major changes.",
      ],
    },
    "Handling Problems": {
      focus: "Be ready to respond to incidents fast.",
      actions: [
        "Create a simple incident response checklist.",
        "Define who to contact internally and externally.",
        "Practice one tabletop scenario per year.",
      ],
    },
  };

  const feedbackGroups = quizQuestions.reduce<Record<string, { category: string; items: Array<{ question: string; answer: string; feedback: string }> }>>(
    (acc, question) => {
      const selected = quizState.answers[question.id];
      if (selected === undefined) return acc;

      const selectedAnswer = question.answers[parseInt(selected)];
      if (!acc[question.category]) {
        acc[question.category] = { category: question.category, items: [] };
      }
      acc[question.category].items.push({
        question: question.question,
        answer: selectedAnswer.text,
        feedback: selectedAnswer.feedback,
      });
      return acc;
    },
    {}
  );

  const feedbackGroupList = Object.values(feedbackGroups);

  const handleAnswer = (value: string) => {
    const isLastQuestion = quizState.currentQuestion === quizQuestions.length - 1;

    // Set assessment date on first answer
    if (Object.keys(quizState.answers).length === 0 && !assessmentDate) {
      setAssessmentDate(new Date());
    }

    setQuizState((prev) => {
      return {
        ...prev,
        answers: { ...prev.answers, [currentQuestion.id]: value },
        currentQuestion: isLastQuestion ? prev.currentQuestion : prev.currentQuestion + 1,
      };
    });

    if (isLastQuestion) {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1,
      }));
      setShowResults(false);
    }
  };

  const getScoreCategory = (score: number) => {
    const percentage = (score / maxPossibleScore) * 100;
    
    if (percentage >= 80) {
      return {
        category: "Excellent",
        description: "Your organization demonstrates strong cybersecurity practices. Keep up the great work and stay vigilant against emerging threats.",
        icon: CheckCircle,
        color: "text-green-500 dark:text-green-400",
        bgColor: "bg-green-50 dark:bg-green-900/20",
        borderColor: "border-green-200 dark:border-green-900"
      };
    } else if (percentage >= 60) {
      return {
        category: "Good",
        description: "Your security posture is good but has room for improvement. Focus on addressing the recommendations below to strengthen your defenses.",
        icon: ShieldCheck,
        color: "text-blue-500 dark:text-blue-400",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
        borderColor: "border-blue-200 dark:border-blue-900"
      };
    } else {
      return {
        category: "Needs Improvement",
        description: "Your organization is at risk and needs significant security improvements. Prioritize implementing the recommendations below to protect your business.",
        icon: AlertTriangle,
        color: "text-red-500 dark:text-red-400",
        bgColor: "bg-red-50 dark:bg-red-900/20",
        borderColor: "border-red-200 dark:border-red-900"
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

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const margin = 20;
    const footerHeight = 20;
    const headerHeight = 30;
    const contentStartY = headerHeight + 15;
    const contentWidth = pageWidth - margin * 2;
    const lineHeight = 6; // Height per text line

    // We'll keep track of our current writing position (y).
    let yPosition = contentStartY;

    // 1) Header
    const addHeader = () => {
      pdf.setFillColor(30, 144, 255); // Blue background
      pdf.rect(0, 0, pageWidth, headerHeight, "F");
      pdf.setTextColor(255, 255, 255);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(20);
      pdf.text("Cybersecurity Assessment Report", pageWidth / 2, headerHeight / 2 + 5, {
        align: "center",
      });
    
      // After drawing the header, reset the font/style for normal body text
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(12);
      pdf.setTextColor(33, 33, 33);
    };

    // 2) Footer
    const addFooter = (pageNumber: number) => {
      const totalPages = pdf.getNumberOfPages();
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);
      pdf.setTextColor(128, 128, 128);

      // Divider line
      pdf.setDrawColor(200, 200, 200);
      pdf.line(margin, pageHeight - footerHeight, pageWidth - margin, pageHeight - footerHeight);

      // Page numbering
      pdf.text(`Page ${pageNumber} of ${totalPages}`, pageWidth - margin, pageHeight - footerHeight / 2, {
        align: "right",
      });

      // Website
      pdf.text("cybersectools.com", margin, pageHeight - footerHeight / 2);
    };

    // 3) Pagination helper (line-by-line)
    const checkAndAddPage = () => {
      // If we exceed the usable space, add a page and reset yPosition
      if (yPosition > pageHeight - footerHeight - margin) {
        addFooter(pdf.getNumberOfPages());
        pdf.addPage();
        addHeader();
        yPosition = contentStartY;
      }
    };

    // Initialize first page
    addHeader();

    // ---------------------------
    // Helper to print an array of lines line-by-line with pagination
    // ---------------------------
    const printLines = (lines: string[]) => {
      lines.forEach((line) => {
        checkAndAddPage();
        pdf.text(line, margin, yPosition);
        yPosition += lineHeight;
      });
    };

    // ---------------------------
    // Assessment Date
    // ---------------------------
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(12);
    pdf.setTextColor(100, 100, 100);

    checkAndAddPage();
    pdf.text(`Assessment Date: ${format(assessmentDate || new Date(), "PPP")}`, margin, yPosition);
    yPosition += lineHeight + 4; // Add a small gap after the date

    // ---------------------------
    // Score Section
    // ---------------------------
    const scorePercentage = Math.round((score / maxPossibleScore) * 100);
    const scoreInfo = getScoreCategory(score);
    
    // 1) Prepare texts
    const scoreTitle = `Score: ${scorePercentage}% - ${scoreInfo.category}`;
    const boxColor = scorePercentage >= 80
      ? [220, 252, 231]  // green-ish
      : scorePercentage >= 60
        ? [230, 242, 248] // blue-ish
        : [254, 226, 226]; // red-ish
    
    // 2) Split text into lines
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(16);
    pdf.setTextColor(33, 33, 33);
    const scoreTitleLines = pdf.splitTextToSize(scoreTitle, contentWidth - 10);
    const scoreTitleHeight = scoreTitleLines.length * lineHeight;
    
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);
    pdf.setTextColor(66, 66, 66);
    const descriptionLines = pdf.splitTextToSize(scoreInfo.description, contentWidth - 10);
    const descriptionHeight = descriptionLines.length * lineHeight;
    
    // 3) Calculate total box height
    const boxPadding = 10;
    const totalBoxHeight = scoreTitleHeight + descriptionHeight + boxPadding * 2;
    
    // 4) Check pagination before drawing
    checkAndAddPage();
    if (yPosition + totalBoxHeight > pageHeight - footerHeight - margin) {
      addFooter(pdf.getNumberOfPages());
      pdf.addPage();
      addHeader();
      yPosition = contentStartY;
    }
    
    // 5) Draw background rectangle - Fix the color spread issue
    pdf.setFillColor(boxColor[0], boxColor[1], boxColor[2]);
    pdf.rect(margin, yPosition, contentWidth, totalBoxHeight, "F");
    
    // 6) Render the Score Title (bold)
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(16);
    pdf.setTextColor(33, 33, 33);
    let textY = yPosition + boxPadding;
    scoreTitleLines.forEach((line: string) => {
      pdf.text(line, margin + 5, textY);
      textY += lineHeight;
    });
    
    // 7) Render the Description (normal)
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);
    pdf.setTextColor(66, 66, 66);
    descriptionLines.forEach((line: string) => {
      pdf.text(line, margin + 5, textY);
      textY += lineHeight;
    });
    
    // 8) Update yPosition to move below the box
    yPosition += totalBoxHeight + 10;

    // ---------------------------
    // Recommendations Title
    // ---------------------------
    checkAndAddPage();
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(14);
    pdf.setTextColor(33, 33, 33);
    pdf.text("Detailed Recommendations", margin, yPosition);
    yPosition += lineHeight + 4;

    // ---------------------------
    // Feedback Items: line-by-line approach
    // ---------------------------
    feedbackItems.forEach((item, index) => {
      const question = getQuestionById(item.questionId);
      const selectedAnswer = question?.answers[parseInt(item.selectedAnswerIndex)];

      // 1) Category line
      checkAndAddPage();
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
      pdf.setTextColor(33, 33, 33);
      pdf.text(`${index + 1}. ${question?.category}`, margin, yPosition);
      yPosition += lineHeight;

      // 2) Question text
      const questionLines = pdf.splitTextToSize(
        `Question: ${question?.question}`,
        contentWidth
      );
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(11);
      pdf.setTextColor(33, 33, 33);
      printLines(questionLines);

      // Optional spacing
      yPosition += 2;

      // 3) Answer text (italic)
      const answerLines = pdf.splitTextToSize(
        `Answer: ${selectedAnswer?.text}`,
        contentWidth
      );
      pdf.setFont("helvetica", "italic");
      printLines(answerLines);

      yPosition += 2;

      // 4) Recommendation/Feedback text
      const recommendationLines = pdf.splitTextToSize(item.feedback, contentWidth);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(11);
      // Slightly different color for emphasis
      pdf.setTextColor(71, 85, 105);
      printLines(recommendationLines);

      // 5) Divider line
      yPosition += 4;
      pdf.setDrawColor(200, 200, 200);
      checkAndAddPage();
      pdf.line(margin, yPosition, pageWidth - margin, yPosition);
      yPosition += 6;

      // Reset color for next block
      pdf.setTextColor(33, 33, 33);
    });

    // Footer on the last page
    addFooter(pdf.getNumberOfPages());

    // Finally, save the PDF
    pdf.save(`cybersecurity-assessment-${format(assessmentDate || new Date(), "yyyy-MM-dd")}.pdf`);

    toast({
      title: "PDF Generated",
      description: "Your assessment report has been downloaded.",
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    toast({
      title: "Error",
      description: "Failed to generate PDF. Please try again.",
      variant: "destructive",
    });
  }
};

  const isComplete = showResults && answeredCount === quizQuestions.length;

  const scoreInfo = getScoreCategory(score);
  const ScoreIcon = scoreInfo.icon;

  const getQuestionById = (id: number) => {
    return quizQuestions.find(q => q.id === id);
  };

  const scorePercentage = Math.round((score / maxPossibleScore) * 100);

  const summarizeFeedback = (feedback: string) => {
    return feedback.split("\n\n")[0];
  };

  const formatFeedback = (feedback: string) => {
    return feedback.split('\n').map((line, i) => (
      <p key={i} className="mb-2 last:mb-0">{line}</p>
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      {/* Resume Progress Dialog */}
      <AlertDialog open={showResumeDialog} onOpenChange={setShowResumeDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Resume your assessment?</AlertDialogTitle>
            <AlertDialogDescription>
              We found a previous assessment in progress. Would you like to continue where you left off, or start fresh?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={startFresh}>Start Fresh</AlertDialogCancel>
            <AlertDialogAction onClick={resumeSavedProgress}>Resume</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs />
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

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={quizState.currentQuestion === 0}
                  >
                    Previous
                  </Button>
                  {answeredCount === quizQuestions.length && (
                    <Button
                      variant="secondary"
                      onClick={() => setShowResults(true)}
                    >
                      View results
                    </Button>
                  )}
                </div>
              </>
            ) : (
              <div ref={resultsRef}>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <Button
                    variant="ghost"
                    onClick={() => setShowResults(false)}
                  >
                    Review answers
                  </Button>
                  <Button
                    onClick={generatePDF}
                    className="flex items-center gap-2"
                    variant="outline"
                  >
                    <Download className="w-4 h-4" />
                    Download Report
                  </Button>
                </div>

                <div className={`text-center mb-6 p-6 rounded-lg border ${scoreInfo.bgColor} ${scoreInfo.borderColor}`}>
                  <div className="flex justify-center mb-4" ref={chartRef}>
                    <div className="relative">
                      <ScorePieChart score={scorePercentage} size={140} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-3xl font-bold">{scorePercentage}%</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <ScoreIcon className={`h-6 w-6 ${scoreInfo.color}`} />
                    <h2 className={`text-2xl font-bold ${scoreInfo.color}`}>{scoreInfo.category}</h2>
                  </div>
                  <p className="text-muted-foreground">{scoreInfo.description}</p>
                  <p className="text-sm text-muted-foreground mt-4">
                    Assessment Date: {format(assessmentDate || new Date(), 'PPP')}
                  </p>
                </div>

                <div className="text-left mt-10 space-y-10">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Action plan</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Focus on the biggest risks first, then build steady improvements.
                    </p>
                    <div className="grid gap-4 md:grid-cols-3">
                      {actionBuckets.map((bucket) => (
                        <Card key={bucket.title} className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{bucket.title}</h4>
                            <Badge variant="secondary">{bucket.categories.length}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            {bucket.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {bucket.categories.length ? (
                              bucket.categories.map((category) => (
                                <Badge key={category.name} variant="outline">
                                  {category.name}
                                </Badge>
                              ))
                            ) : (
                              <span className="text-xs text-muted-foreground">
                                No items in this bucket yet.
                              </span>
                            )}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Priority focus areas</h3>
                    <div className="space-y-4">
                      {topCategories.map((category) => (
                        <div key={category.name} className="rounded-lg border p-4 bg-background">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold">{category.name}</h4>
                            <span className="text-sm text-muted-foreground">{category.percentage}%</span>
                          </div>
                          <Progress value={category.percentage} className="h-2 mt-2" />
                          <p className="text-sm text-muted-foreground mt-3">
                            {categoryGuidance[category.name]?.focus}
                          </p>
                          <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                            {(categoryGuidance[category.name]?.actions || []).map((action) => (
                              <li key={action} className="flex items-start gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                                <span>{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Full guidance by category</h3>
                    <Accordion type="multiple" className="w-full space-y-2">
                      {feedbackGroupList.map((group) => (
                        <AccordionItem key={group.category} value={group.category}>
                          <AccordionTrigger>{group.category}</AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <div className="rounded-md border bg-muted/40 p-3">
                                <p className="text-sm text-muted-foreground">
                                  {categoryGuidance[group.category]?.focus}
                                </p>
                                <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                                  {(categoryGuidance[group.category]?.actions || []).map((action) => (
                                    <li key={action} className="flex items-start gap-2">
                                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                                      <span>{action}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              {group.items.map((item, itemIndex) => (
                                <div key={`${group.category}-${itemIndex}`} className="rounded-lg border bg-background p-3">
                                  <p className="text-sm font-medium text-primary mb-1">Question</p>
                                  <p className="text-sm mb-2">{item.question}</p>
                                  <p className="text-sm font-medium text-primary mb-1">Your answer</p>
                                  <p className="text-sm mb-2">{item.answer}</p>
                                  <p className="text-sm font-medium text-primary mb-1">Quick guidance</p>
                                  <p className="text-sm text-muted-foreground">{summarizeFeedback(item.feedback)}</p>
                                  <details className="mt-3 text-sm text-muted-foreground">
                                    <summary className="cursor-pointer font-medium text-primary">
                                      View full guidance
                                    </summary>
                                    <div className="mt-2">{formatFeedback(item.feedback)}</div>
                                  </details>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>

                <div className="flex justify-center mt-8 gap-3">
                  <Button 
                    variant="outline"
                    onClick={() => {
                      clearSavedProgress();
                      setQuizState({
                        currentQuestion: 0,
                        answers: {},
                      });
                      setAssessmentDate(null);
                      setShowResults(false);
                    }}
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
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
