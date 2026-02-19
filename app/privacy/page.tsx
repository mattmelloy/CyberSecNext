import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Privacy",
  description: "Privacy policy for CyberSecTools",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <header>
            <p className="text-sm font-semibold text-primary">Privacy</p>
            <h1 className="text-3xl font-semibold mt-2">Your privacy matters</h1>
            <p className="mt-3 text-muted-foreground">
              We aim to keep this service simple, transparent, and aligned to Australian
              privacy expectations.
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">What we collect</h2>
            <p className="text-muted-foreground">
              We do not require an account to use the assessment. We collect basic
              analytics to understand usage and improve the service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Assessment data</h2>
            <p className="text-muted-foreground">
              Assessment responses are processed in your browser to generate results.
              We do not store your answers on our servers by default.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Advisor chat</h2>
            <p className="text-muted-foreground">
              Questions submitted to the advisor are sent to our AI provider to generate
              a response. Do not share sensitive or personally identifiable information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Analytics and cookies</h2>
            <p className="text-muted-foreground">
              We use analytics to understand traffic and improve the experience. These
              tools may use cookies or similar technologies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="text-muted-foreground">
              For privacy questions, contact us at{" "}
              <a className="text-primary hover:underline" href="mailto:hello@cybersectools.com">
                hello@cybersectools.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
