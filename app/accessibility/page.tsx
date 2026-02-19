import { SiteHeader } from "@/components/site-header";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accessibility, Eye, MousePointer, Keyboard, Volume2, Globe } from "lucide-react";

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs />

          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">Commitment</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Accessibility Statement
            </h1>
            <p className="text-xl text-muted-foreground">
              CyberSecTools is committed to ensuring digital accessibility for people with
              disabilities. We are continually improving the user experience for everyone.
            </p>
          </header>

          {/* Commitment */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Accessibility className="h-6 w-6 text-primary" />
              Our Commitment
            </h2>
            <p className="text-muted-foreground mb-4">
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
              standards. These guidelines explain how to make web content more accessible for
              people with disabilities.
            </p>
            <Card className="p-6">
              <h3 className="font-semibold mb-3">Current Status</h3>
              <p className="text-muted-foreground mb-4">
                We have implemented the following accessibility features:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  Semantic HTML structure for screen reader compatibility
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  Keyboard navigation support throughout the site
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  Dark mode support for users with light sensitivity
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  Responsive design for various screen sizes and zoom levels
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  Clear and consistent navigation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  Alt text for images and icons
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  Sufficient color contrast ratios
                </li>
              </ul>
            </Card>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Accessibility Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <Keyboard className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Keyboard Navigation</h3>
                <p className="text-sm text-muted-foreground">
                  All interactive elements can be accessed using keyboard commands. Use Tab to
                  move between elements and Enter/Space to activate buttons and links.
                </p>
              </Card>
              <Card className="p-6">
                <Eye className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Visual Design</h3>
                <p className="text-sm text-muted-foreground">
                  We use clear typography, sufficient contrast ratios, and support dark mode
                  for users who prefer reduced brightness.
                </p>
              </Card>
              <Card className="p-6">
                <MousePointer className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Interactive Elements</h3>
                <p className="text-sm text-muted-foreground">
                  Buttons and links have visible focus indicators and sufficient click targets
                  for users with motor impairments.
                </p>
              </Card>
              <Card className="p-6">
                <Volume2 className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Screen Reader Support</h3>
                <p className="text-sm text-muted-foreground">
                  Our site is tested with popular screen readers including NVDA, JAWS, and
                  VoiceOver. We use semantic markup and ARIA labels where appropriate.
                </p>
              </Card>
            </div>
          </section>

          {/* Known Issues */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Known Issues & Limitations</h2>
            <Card className="p-6">
              <p className="text-muted-foreground mb-4">
                We are aware of the following accessibility limitations and are working to
                address them:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">⚠</span>
                  <span>
                    <strong>PDF Reports:</strong> Generated PDF reports may not be fully
                    accessible to screen readers. We recommend using the web-based results for
                    accessible content.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">⚠</span>
                  <span>
                    <strong>Third-party Tools:</strong> Links to external tools and resources
                    may not meet the same accessibility standards.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">⚠</span>
                  <span>
                    <strong>AI Advisor:</strong> The chat interface may have limitations with
                    some assistive technologies. We are working on improvements.
                  </span>
                </li>
              </ul>
            </Card>
          </section>

          {/* Technical Standards */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Globe className="h-6 w-6 text-primary" />
              Technical Standards
            </h2>
            <p className="text-muted-foreground mb-4">
              This website aims to conform to the following standards:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                WCAG 2.1 Level AA guidelines
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Section 508 of the Rehabilitation Act
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                EN 301 549 Accessibility requirements for ICT products and services
              </li>
            </ul>
          </section>

          {/* Feedback */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Feedback & Contact</h2>
            <Card className="p-6">
              <p className="text-muted-foreground mb-4">
                We welcome feedback on the accessibility of CyberSecTools. Please let us know if
                you encounter any barriers or have suggestions for improvement:
              </p>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:hello@cybersectools.com" className="text-primary hover:underline">
                    hello@cybersectools.com
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <strong>Response time:</strong> We aim to respond within 2 business days.
                </p>
              </div>
            </Card>
          </section>

          {/* Last Updated */}
          <div className="text-sm text-muted-foreground">
            <p>This statement was last updated on February 2026.</p>
            <p className="mt-2">
              We review and update this accessibility statement regularly as we improve our
              website&apos;s accessibility features.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
