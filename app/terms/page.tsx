import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Terms",
  description: "Terms of use for CyberSecTest",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <header>
            <p className="text-sm font-semibold text-primary">Terms</p>
            <h1 className="text-3xl font-semibold mt-2">Terms of use</h1>
            <p className="mt-3 text-muted-foreground">
              By using this site, you agree to the following terms.
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">General guidance only</h2>
            <p className="text-muted-foreground">
              Content on this site is provided for general information and education.
              It is not legal, financial, or professional advice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">No warranty</h2>
            <p className="text-muted-foreground">
              We provide the service as-is and make no guarantees about outcomes.
              Your security posture depends on implementation and context.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Responsible use</h2>
            <p className="text-muted-foreground">
              You agree not to use this site for illegal activity or to seek guidance
              that could harm others or compromise systems.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Changes</h2>
            <p className="text-muted-foreground">
              We may update these terms as the service evolves. Continued use means
              you accept the updated terms.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
