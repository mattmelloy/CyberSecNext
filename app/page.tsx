import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, FileCheck, Users, Brain, AlertOctagon, DollarSign, Target } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/data/faq";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative py-20 px-4 bg-cover bg-center min-h-[600px] flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2574&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 text-white">
              Small Business Cyber Security Assessment <span className="text-blue-200"><br></br>Easy and Free</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Free cybersecurity assessment tools designed specifically for small businesses.
              Protect your business from hackers and cyber attacks with free and easy to understand IT security advice.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="text-lg bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors"
              >
                <Link href="/assessment">Start Assessment</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="text-lg bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors"
              >
                <Link href="/advisor">Ask Security Advisor</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="text-lg bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors"
              >
                <Link href="/free-security-tools">Free Security Tools</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">The Growing Cyber Threat Landscape</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full mb-4 mx-auto">
                <AlertOctagon className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center mb-2">87,400</div>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Reported cybersecurity incidents in Australia during FY24
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full mb-4 mx-auto">
                <DollarSign className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center mb-2">$49,600</div>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Average loss per cybersecurity incident for small businesses
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full mb-4 mx-auto">
                <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center mb-2">84%</div>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Of cyber incidents were caused by phishing attacks
              </p>
            </div>
          </div>
          <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
            Source: <a href="https://www.cyber.gov.au/about-us/view-all-content/reports-and-statistics/annual-cyber-threat-report-2023-2024" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline">Australian Cyber Security Centre Annual Cyber Threat Report 2023-2024</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Comprehensive Security Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
            <Link href="/assessment" className="block">
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <Shield className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Security Assessment</h3>
                <p className="text-muted-foreground">
                  Quick evaluation to assess your current security posture
                </p>
              </Card>
            </Link>
            <Link href="/advisor" className="block">
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <Brain className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Security Advisor</h3>
                <p className="text-muted-foreground">
                  Get expert answers to your cybersecurity questions
                </p>
              </Card>
            </Link>
            <Link href="/free-security-tools" className="block">
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <FileCheck className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Free Security Tools</h3>
                <p className="text-muted-foreground">
                  Access our curated collection of free cybersecurity tools
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>{faq.answer.text}</p>
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
                      <p className="font-semibold text-blue-700 dark:text-blue-300">Advice:</p>
                      <p className="text-blue-600 dark:text-blue-200">{faq.answer.advice}</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
                      <p className="font-semibold text-green-700 dark:text-green-300">Recommendation:</p>
                      <p className="text-green-600 dark:text-green-200">{faq.answer.recommendation}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              This page has been designed and built by IT professionals as a service to assist small businesses with improving cybersecurity. This is our passion, and this tool has been designed to help people minimize the risk of cybersecurity compromise.
            </p>
            <p>
              We believe that every small business deserves access to quality cybersecurity guidance, regardless of their budget or technical expertise. Our mission is to demystify cybersecurity and provide practical, actionable advice that can be implemented by businesses of all sizes.
            </p>
            <p>
              Through our free assessment tools and educational resources, we aim to raise awareness about cyber threats and empower business owners to take proactive steps to protect their valuable data, customer information, and business operations from increasingly sophisticated cyber attacks.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}