"use client";

import { SiteHeader } from "@/components/site-header";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  AlertTriangle,
  Phone,
  Shield,
  HardDrive,
  Users,
  FileText,
  Clock,
  CheckCircle,
  Download,
  Copy,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

const immediateActions = [
  {
    id: "disconnect",
    title: "Disconnect affected devices",
    description: "Unplug network cables and disable Wi-Fi on affected devices",
  },
  {
    id: "isolate",
    title: "Isolate the network segment",
    description: "If possible, isolate the affected network segment from the rest of the network",
  },
  {
    id: "preserve",
    title: "Preserve evidence",
    description: "Do not shut down devices - this preserves forensic evidence",
  },
  {
    id: "document",
    title: "Document the incident",
    description: "Take photos/screenshots of error messages, ransom notes, and affected systems",
  },
  {
    id: "stop-spread",
    title: "Stop the spread",
    description: "Disable shared drives and file sync services to prevent further encryption",
  },
];

const notificationContacts = [
  {
    name: "Australian Cyber Security Centre (ACSC)",
    phone: "1300 CYBER1 (1300 292 371)",
    website: "https://www.cyber.gov.au",
    when: "All cyber incidents - 24/7",
  },
  {
    name: "Australian Federal Police",
    phone: "131 AFP (131 237)",
    website: "https://www.afp.gov.au",
    when: "For criminal investigation",
  },
  {
    name: "Office of the Australian Information Commissioner",
    phone: "1300 363 992",
    website: "https://www.oaic.gov.au",
    when: "If personal data may be breached (mandatory notification)",
  },
  {
    name: "Your IT Provider",
    phone: "[Add your IT contact]",
    website: "",
    when: "For technical support and recovery",
  },
  {
    name: "Cyber Insurance Provider",
    phone: "[Add your insurer contact]",
    website: "",
    when: "If you have cyber insurance coverage",
  },
  {
    name: "Legal Counsel",
    phone: "[Add your legal contact]",
    website: "",
    when: "For legal and compliance guidance",
  },
];

const recoverySteps = [
  {
    phase: "Assessment",
    steps: [
      "Identify the scope of affected systems and data",
      "Determine the type of incident (ransomware, data breach, etc.)",
      "Assess whether sensitive/customer data was accessed or exfiltrated",
      "Document timeline of events",
    ],
  },
  {
    phase: "Containment",
    steps: [
      "Remove malicious files and accounts",
      "Reset all passwords (prioritise admin and service accounts)",
      "Block known malicious IPs and domains",
      "Revoke compromised access tokens and certificates",
    ],
  },
  {
    phase: "Eradication",
    steps: [
      "Rebuild affected systems from clean media",
      "Apply all security patches before reconnecting to network",
      "Update antivirus/EDR signatures",
      "Remove any backdoors or persistence mechanisms",
    ],
  },
  {
    phase: "Recovery",
    steps: [
      "Restore data from verified clean backups",
      "Verify integrity of restored data",
      "Monitor for signs of reinfection",
      "Gradually reconnect systems to the network",
    ],
  },
  {
    phase: "Post-Incident",
    steps: [
      "Conduct lessons learned review",
      "Update security policies and procedures",
      "Implement additional controls identified during review",
      "Schedule follow-up security assessment",
    ],
  },
];

const essentialDocuments = [
  {
    title: "Incident Log Template",
    description: "Document all actions, decisions, and communications during the incident",
  },
  {
    title: "Communication Plan",
    description: "Templates for notifying staff, customers, and regulators",
  },
  {
    title: "System Inventory",
    description: "List of all systems, their criticality, and backup status",
  },
  {
    title: "Contact Directory",
    description: "Emergency contacts for IT, legal, insurance, and authorities",
  },
];

export default function IncidentResponsePage() {
  const { toast } = useToast();

  const handleCopyChecklist = () => {
    const checklistText = `
INCIDENT RESPONSE CHECKLIST

IMMEDIATE ACTIONS:
${immediateActions.map((a, i) => `${i + 1}. [ ] ${a.title} - ${a.description}`).join("\n")}

KEY CONTACTS:
${notificationContacts.map((c) => `• ${c.name}: ${c.phone}`).join("\n")}

RECOVERY PHASES:
${recoverySteps.map((p) => `${p.phase}:\n${p.steps.map((s) => `  - ${s}`).join("\n")}`).join("\n\n")}
    `.trim();

    navigator.clipboard.writeText(checklistText);
    toast({
      title: "Checklist copied",
      description: "The incident response checklist has been copied to your clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs />

          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="destructive" className="text-sm">
                Emergency Resource
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Incident Response Checklist
            </h1>
            <p className="text-xl text-muted-foreground">
              A step-by-step guide for Australian small businesses to respond to cybersecurity
              incidents. Keep this page bookmarked for quick access during an emergency.
            </p>
          </header>

          {/* Emergency Banner */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 dark:bg-red-950/20 dark:border-red-900">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0" />
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Active incident? Call the ACSC now:
                </p>
                <p className="text-2xl font-bold text-red-700 dark:text-red-300">
                  1300 CYBER1 (1300 292 371)
                </p>
              </div>
            </div>
          </div>

          {/* Immediate Actions */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Clock className="h-6 w-6 text-red-500" />
                Immediate Actions
              </h2>
              <Button variant="outline" size="sm" onClick={handleCopyChecklist}>
                <Copy className="h-4 w-4 mr-2" />
                Copy Checklist
              </Button>
            </div>
            <p className="text-muted-foreground mb-6">
              Complete these steps immediately upon discovering a security incident:
            </p>

            <Card className="p-6">
              <div className="space-y-4">
                {immediateActions.map((action) => (
                  <div key={action.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50">
                    <Checkbox id={action.id} className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor={action.id} className="font-semibold cursor-pointer">
                        {action.title}
                      </Label>
                      <p className="text-sm text-muted-foreground">{action.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Key Contacts */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Phone className="h-6 w-6 text-primary" />
              Key Contacts
            </h2>
            <div className="grid gap-4">
              {notificationContacts.map((contact, index) => (
                <Card key={index} className="p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-semibold">{contact.name}</h3>
                      <p className="text-sm text-muted-foreground">{contact.when}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      {contact.phone && (
                        <a
                          href={`tel:${contact.phone.replace(/\D/g, "")}`}
                          className="text-primary font-medium hover:underline"
                        >
                          {contact.phone}
                        </a>
                      )}
                      {contact.website && (
                        <a
                          href={contact.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          Website →
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Recovery Phases */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <HardDrive className="h-6 w-6 text-primary" />
              Recovery Phases
            </h2>
            <div className="space-y-6">
              {recoverySteps.map((phase, index) => (
                <Card key={phase.phase} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3">{phase.phase}</h3>
                      <ul className="space-y-2">
                        {phase.steps.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Essential Documents */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              Essential Documents to Prepare
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {essentialDocuments.map((doc, index) => (
                <Card key={index} className="p-4">
                  <h3 className="font-semibold mb-1">{doc.title}</h3>
                  <p className="text-sm text-muted-foreground">{doc.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Data Breach Notification */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              Notifiable Data Breaches
            </h2>
            <Card className="p-6">
              <p className="text-muted-foreground mb-4">
                Under the Privacy Act 1988, you must notify the OAIC and affected individuals
                if a data breach is likely to result in serious harm.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-sm">
                    Assess whether the breach involves personal information
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-sm">
                    Determine if serious harm is likely to result
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-sm">
                    Notify OAIC within 30 days if assessment criteria are met
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-sm">
                    Prepare statement for affected individuals
                  </span>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-muted/40">
                <p className="text-sm">
                  <strong>OAIC Notifiable Data Breaches:</strong>{" "}
                  <a
                    href="https://www.oaic.gov.au/privacy/your-privacy-rights/your-personal-information/notifiable-data-breaches"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Learn more →
                  </a>
                </p>
              </div>
            </Card>
          </section>

          {/* Related Resources */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Link href="/ransomware-guide">
              <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer h-full">
                <Shield className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-semibold">Ransomware Guide</h3>
                <p className="text-sm text-muted-foreground">
                  Specific guidance for ransomware prevention and response
                </p>
              </Card>
            </Link>
            <Link href="/advisor">
              <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer h-full">
                <Users className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-semibold">Ask the Advisor</h3>
                <p className="text-sm text-muted-foreground">
                  Get AI-powered guidance for your specific situation
                </p>
              </Card>
            </Link>
          </div>

          {/* Print/Save CTA */}
          <div className="text-center p-6 rounded-lg border bg-muted/40">
            <h3 className="text-lg font-semibold mb-2">Save This Checklist</h3>
            <p className="text-muted-foreground mb-4">
              Print this page or save it as a PDF for offline access during an incident.
            </p>
            <Button variant="outline" onClick={() => window.print()}>
              <Download className="h-4 w-4 mr-2" />
              Print / Save as PDF
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
