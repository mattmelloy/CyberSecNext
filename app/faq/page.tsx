"use client";

import { SiteHeader } from "@/components/site-header";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/data/faq";
import { ShieldCheck, HelpCircle, BookOpen, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Additional FAQs not in the main data file
const additionalFaqs = [
  {
    question: "How long does the security assessment take?",
    answer: {
      text: "Most users complete the assessment in 10-15 minutes. You can pause and resume later if needed—your progress is automatically saved.",
      advice: "Take your time to answer accurately. The more accurate your answers, the more useful your personalized action plan will be.",
      recommendation: "Set aside 15-20 minutes in a quiet environment to focus on the assessment."
    }
  },
  {
    question: "Is my assessment data stored or shared?",
    answer: {
      text: "No. Your assessment answers are stored only in your browser's local storage. We don't collect, store, or transmit your responses to any server.",
      advice: "Your privacy is important to us. The assessment works entirely in your browser, and you can clear your data at any time by clicking 'Start Over'.",
      recommendation: "For sensitive environments, you can use the assessment in a private/incognito browser window."
    }
  },
  {
    question: "What should I do after completing the assessment?",
    answer: {
      text: "Review your results, download the PDF report, and start working through your 30-day action items first.",
      advice: "Focus on the highest-risk areas identified in your results. Use the Security Guide and Advisor chat for detailed implementation guidance.",
      recommendation: "Schedule a calendar reminder to reassess in 3-6 months to track your progress."
    }
  },
  {
    question: "How often should I reassess my security?",
    answer: {
      text: "We recommend reassessing every 3-6 months, or whenever there are significant changes to your business (new staff, new systems, etc.).",
      advice: "Cyber threats evolve constantly, and so does your business. Regular assessments help you stay ahead of new risks.",
      recommendation: "Set a recurring calendar reminder for quarterly security reviews."
    }
  },
  {
    question: "Can I share my assessment results with my IT provider?",
    answer: {
      text: "Yes! Download the PDF report and share it with your IT support, managed service provider, or security consultant.",
      advice: "The report includes detailed findings and recommendations that can help your IT provider prioritize security improvements.",
      recommendation: "Bring the PDF to your next IT review meeting for a productive discussion."
    }
  },
  {
    question: "What is the Essential Eight?",
    answer: {
      text: "The Essential Eight is a set of eight mitigation strategies recommended by the Australian Cyber Security Centre (ACSC) as a baseline for protecting organizations.",
      advice: "The eight strategies cover: application control, patching applications, configuring Microsoft Office, user application hardening, restricting admin privileges, patching operating systems, multi-factor authentication, and regular backups.",
      recommendation: "Visit the ACSC website for detailed implementation guides for each strategy."
    }
  }
];

// Combine all FAQs
const allFaqs = [...faqData, ...additionalFaqs];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs />
          
          <header className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-semibold mb-3">Frequently Asked Questions</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about cybersecurity for Australian small businesses.
              Can&apos;t find what you&apos;re looking for? <Link href="/contact" className="text-primary hover:underline">Contact us</Link> or <Link href="/advisor" className="text-primary hover:underline">ask the advisor</Link>.
            </p>
          </header>

          {/* Quick Links */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <Link href="/assessment" className="block">
              <Card className="p-4 h-full hover:shadow-md transition-shadow">
                <ShieldCheck className="h-6 w-6 text-primary mb-2" />
                <h3 className="font-semibold">Take the Assessment</h3>
                <p className="text-sm text-muted-foreground">Get your personalized security action plan</p>
              </Card>
            </Link>
            <Link href="/security-tips" className="block">
              <Card className="p-4 h-full hover:shadow-md transition-shadow">
                <BookOpen className="h-6 w-6 text-primary mb-2" />
                <h3 className="font-semibold">Security Guide</h3>
                <p className="text-sm text-muted-foreground">Learn best practices for your business</p>
              </Card>
            </Link>
            <Link href="/advisor" className="block">
              <Card className="p-4 h-full hover:shadow-md transition-shadow">
                <MessageSquare className="h-6 w-6 text-primary mb-2" />
                <h3 className="font-semibold">Ask the Advisor</h3>
                <p className="text-sm text-muted-foreground">Get answers to specific questions</p>
              </Card>
            </Link>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Badge variant="secondary">General</Badge>
                About the Assessment & Tools
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {allFaqs.slice(-6).map((faq, index) => (
                  <AccordionItem key={`general-${index}`} value={`general-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-sm text-muted-foreground">
                        <p>{faq.answer.text}</p>
                        <div className="rounded-lg border bg-muted/40 p-3">
                          <p className="font-semibold text-foreground">Advice</p>
                          <p>{faq.answer.advice}</p>
                        </div>
                        <div className="rounded-lg border bg-muted/40 p-3">
                          <p className="font-semibold text-foreground">Recommendation</p>
                          <p>{faq.answer.recommendation}</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Badge variant="secondary">Security</Badge>
                Cybersecurity Topics
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {allFaqs.slice(0, 6).map((faq, index) => (
                  <AccordionItem key={`security-${index}`} value={`security-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-sm text-muted-foreground">
                        <p>{faq.answer.text}</p>
                        <div className="rounded-lg border bg-muted/40 p-3">
                          <p className="font-semibold text-foreground">Advice</p>
                          <p>{faq.answer.advice}</p>
                        </div>
                        <div className="rounded-lg border bg-muted/40 p-3">
                          <p className="font-semibold text-foreground">Recommendation</p>
                          <p>{faq.answer.recommendation}</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Badge variant="secondary">More</Badge>
                Additional Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {allFaqs.slice(6, -6).map((faq, index) => (
                  <AccordionItem key={`more-${index}`} value={`more-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-sm text-muted-foreground">
                        <p>{faq.answer.text}</p>
                        <div className="rounded-lg border bg-muted/40 p-3">
                          <p className="font-semibold text-foreground">Advice</p>
                          <p>{faq.answer.advice}</p>
                        </div>
                        <div className="rounded-lg border bg-muted/40 p-3">
                          <p className="font-semibold text-foreground">Recommendation</p>
                          <p>{faq.answer.recommendation}</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center p-6 rounded-lg border bg-muted/40">
            <h3 className="text-lg font-semibold mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              Our AI advisor can help answer specific questions about your cybersecurity needs.
            </p>
            <Button asChild>
              <Link href="/advisor">Ask the Advisor</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
