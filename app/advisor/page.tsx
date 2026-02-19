"use client"

import { useState, useRef, useEffect } from 'react';
import { Send, AlertTriangle, ShieldCheck, User, Lightbulb } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { SiteHeader } from "@/components/site-header";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SUGGESTED_QUESTIONS = [
  {
    category: "Getting Started",
    questions: [
      "What are the first 3 things I should do to improve my business security?",
      "What is the Essential Eight and do I need to follow it?",
      "How do I create a security policy for my small business?",
    ],
  },
  {
    category: "Phishing & Email",
    questions: [
      "How can I protect my business from phishing attacks?",
      "What should I do if an employee clicks a suspicious link?",
      "How do I train my staff to spot phishing emails?",
    ],
  },
  {
    category: "Passwords & Access",
    questions: [
      "Should I use a password manager for my business?",
      "What is multi-factor authentication and why do I need it?",
      "How do I handle employee access when someone leaves?",
    ],
  },
  {
    category: "Data & Backups",
    questions: [
      "What's the best backup strategy for a small business?",
      "How do I protect sensitive customer data?",
      "What should I do if we get hit by ransomware?",
    ],
  },
];

export default function Advisor() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/advisor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          question: userMessage,
          history: messages  // Send conversation history for context
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to get response');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error: any) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to get response. Please try again.",
        variant: "destructive",
      });
      // Remove the user's message if we couldn't get a response
      setMessages(prev => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/60">
      <SiteHeader />
      
      <div className="flex min-h-[calc(100vh-64px)]">
        <div className="flex-1 max-w-4xl mx-auto px-4 py-6">
          <Breadcrumbs />
          {/* Warning banner */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-amber-900">
                  This chat provides general guidance only. Do not share any sensitive or personally
                  identifiable information. For urgent incidents, contact your IT provider or the
                  Australian Cyber Security Centre.
                </p>
              </div>
            </div>
          </div>

          {/* Chat container */}
          <div className="bg-card rounded-lg shadow-lg mb-4 border">
            <div className="p-4 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">
                Cybersecurity Advisor
              </h2>
              <p className="text-sm text-muted-foreground">
                Get expert guidance on cybersecurity best practices and implementation
              </p>
            </div>

            <div className="h-[calc(100vh-380px)] overflow-y-auto p-4">
               {messages.length === 0 ? (
                 <div className="text-center text-muted-foreground mt-4">
                   <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-primary" />
                   <p className="text-lg font-medium mb-2">
                     How can I help secure your business today?
                   </p>
                   <p className="text-sm mb-6">
                     Ask about security best practices, threat prevention, or specific security concerns
                   </p>
                   
                   {/* Suggested Questions */}
                   <div className="text-left max-w-2xl mx-auto">
                     <div className="flex items-center gap-2 mb-4 justify-center">
                       <Lightbulb className="w-4 h-4 text-primary" />
                       <span className="text-sm font-medium text-foreground">Suggested questions</span>
                     </div>
                     <div className="space-y-4">
                       {SUGGESTED_QUESTIONS.map((category) => (
                         <div key={category.category}>
                           <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                             {category.category}
                           </p>
                           <div className="flex flex-wrap gap-2">
                             {category.questions.map((question, idx) => (
                               <Button
                                 key={idx}
                                 variant="outline"
                                 size="sm"
                                 className="text-xs h-auto py-2 px-3 text-left"
                                 onClick={() => {
                                   setInput(question);
                                   document.querySelector<HTMLInputElement>('input[type="text"]')?.focus();
                                 }}
                               >
                                 {question}
                               </Button>
                             ))}
                           </div>
                         </div>
                       ))}
                     </div>
                   </div>
                 </div>
               ) : (
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex items-start ${
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`flex items-start space-x-2 max-w-[80%] ${
                          message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.role === 'user'
                              ? 'bg-primary/10'
                              : 'bg-secondary'
                          }`}
                        >
                          {message.role === 'user' ? (
                            <User className="w-5 h-5 text-primary" />
                          ) : (
                            <ShieldCheck className="w-5 h-5 text-primary" />
                          )}
                        </div>
                        <div
                          className={`rounded-lg px-4 py-2 ${
                            message.role === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-foreground'
                          }`}
                        >
                          <ReactMarkdown className="prose dark:prose-invert max-w-none">
                            {message.content}
                          </ReactMarkdown>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                      </div>
                      <div className="bg-muted rounded-lg px-4 py-2">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* Input form */}
            <div className="border-t border-border p-4">
              <form onSubmit={handleSubmit} className="flex space-x-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask your cybersecurity question..."
                  className="flex-1 rounded-lg border border-border px-4 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className={`px-4 py-2 rounded-lg flex items-center transition-colors duration-200 ${
                    !input.trim() || isLoading
                      ? 'bg-muted text-muted-foreground cursor-not-allowed'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
