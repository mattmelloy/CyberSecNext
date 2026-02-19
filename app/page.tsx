import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Users,
  Star,
} from "lucide-react";
import {
  ClipboardCheck,
  ReportChart,
  ShieldProtected,
  MagnifyingGlass,
  BookShield,
  ChatAdvisor,
  Toolbox,
} from "@/components/illustrations";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section with Image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(15,76,92,0.15),_transparent_70%)]" />
        <div className="absolute -bottom-28 left-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(243,162,58,0.2),_transparent_70%)]" />
        
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Hero Content */}
            <div className="order-2 lg:order-1">
              <Badge variant="secondary" className="mb-4">
                Aligned to the ACSC Annual Cyber Threat Report 2024-25
              </Badge>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Protect your business without the complexity
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                Take a 10-minute assessment and get a clear, practical action plan. 
                Built around real-world risks and guidance that non-technical teams can use.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/assessment">
                    Start free assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/security-tips">Learn more</Link>
                </Button>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Free and no sign-up
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Private by default
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  AU-focused guidance
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
                  alt="Small business owner working confidently on their cyber security"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              {/* Floating card */}
              <Card className="absolute -bottom-6 -left-6 p-4 shadow-lg bg-background/95 backdrop-blur hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">ACSC Aligned</p>
                    <p className="text-xs text-muted-foreground">Essential Eight ready</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-primary mb-2">Trusted by Australian small businesses</p>
            <h2 className="text-2xl font-semibold">Making cyber security accessible</h2>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            <Card className="p-6 text-center border-0 shadow-sm">
              <div className="text-3xl font-bold text-primary">$56,600</div>
              <p className="mt-1 text-sm text-muted-foreground">Avg. cost per cyber incident (small business)</p>
            </Card>
            <Card className="p-6 text-center border-0 shadow-sm">
              <div className="text-3xl font-bold text-primary">13</div>
              <p className="mt-1 text-sm text-muted-foreground">Security areas assessed</p>
            </Card>
            <Card className="p-6 text-center border-0 shadow-sm">
              <div className="flex items-center justify-center gap-1">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-3xl font-bold text-primary">12</span>
                <span className="text-lg text-muted-foreground">min</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Average completion time</p>
            </Card>
            <Card className="p-6 text-center border-0 shadow-sm">
              <div className="flex items-center justify-center gap-1">
                <Star className="h-5 w-5 text-accent fill-accent" />
                <span className="text-3xl font-bold text-primary">4.8</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">User satisfaction</p>
            </Card>
          </div>

          {/* Testimonial */}
          <Card className="mt-10 max-w-2xl mx-auto p-6 border-0 shadow-sm bg-background">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3 shrink-0">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground italic">
                  "This helped me understand exactly what to do. Finally, cyber security advice that makes sense for a small business."
                </p>
                <p className="mt-3 text-sm font-semibold">— Sarah M., Cafe Owner</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary mb-2">How it works</p>
            <h2 className="text-3xl font-semibold">Get clarity in three steps</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Designed for busy owners and operators. No jargon, just the actions that matter.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="relative inline-block mb-6">
                <div className="w-40 h-40 mx-auto rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center group-hover:from-primary/10 group-hover:to-accent/10 transition-colors">
                  <ClipboardCheck className="w-28 h-28" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center font-bold text-sm">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold">Answer questions</h3>
              <p className="mt-2 text-muted-foreground">
                Practical questions about your staff, systems, and processes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="relative inline-block mb-6">
                <div className="w-40 h-40 mx-auto rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center group-hover:from-primary/10 group-hover:to-accent/10 transition-colors">
                  <ReportChart className="w-28 h-28" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center font-bold text-sm">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold">Get your action plan</h3>
              <p className="mt-2 text-muted-foreground">
                A clear score with a prioritized 30/90-day roadmap.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="relative inline-block mb-6">
                <div className="w-40 h-40 mx-auto rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center group-hover:from-primary/10 group-hover:to-accent/10 transition-colors">
                  <ShieldProtected className="w-28 h-28" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-background flex items-center justify-center font-bold text-sm">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold">Take action</h3>
              <p className="mt-2 text-muted-foreground">
                Use the advisor, guides, and tools to close gaps quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary mb-2">What you can do here</p>
            <h2 className="text-3xl font-semibold">Everything you need to improve your security</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Each section is designed to turn risks into concrete next steps.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Assessment */}
            <Card className="p-6 group hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 shrink-0 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                  <MagnifyingGlass className="w-14 h-14" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Security Assessment</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Diagnose your current posture and pinpoint the biggest gaps with our comprehensive questionnaire.
                  </p>
                  <Button asChild variant="link" className="mt-3 p-0 h-auto text-primary">
                    <Link href="/assessment">
                      Start assessment <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Guide */}
            <Card className="p-6 group hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 shrink-0 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                  <BookShield className="w-14 h-14" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Security Guide</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Easy-to-follow guidance for staff, devices, and data protection.
                  </p>
                  <Button asChild variant="link" className="mt-3 p-0 h-auto text-primary">
                    <Link href="/security-tips">
                      Read guide <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Advisor */}
            <Card className="p-6 group hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 shrink-0 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                  <ChatAdvisor className="w-14 h-14" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">AI Security Advisor</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Ask questions and get clear, practical responses tailored to small businesses.
                  </p>
                  <Button asChild variant="link" className="mt-3 p-0 h-auto text-primary">
                    <Link href="/advisor">
                      Chat now <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Tools */}
            <Card className="p-6 group hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 shrink-0 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                  <Toolbox className="w-14 h-14" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Free Tools & Checklists</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Curated free tools to improve protection quickly and effectively.
                  </p>
                  <Button asChild variant="link" className="mt-3 p-0 h-auto text-primary">
                    <Link href="/free-security-tools">
                      Browse tools <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-background"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-background sm:text-4xl">
            Ready to secure your business?
          </h2>
          <p className="mt-4 text-lg text-background/80 max-w-xl mx-auto">
            Take the free 10-minute assessment and get your personalised action plan today.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90">
              <Link href="/assessment">
                Start Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-background/60">
            No sign-up required • 100% private • Australian-focused
          </p>
        </div>
      </section>
    </main>
  );
}
