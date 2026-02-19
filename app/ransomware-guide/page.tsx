"use client";

import { SiteHeader } from "@/components/site-header";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  AlertTriangle,
  Lock,
  HardDrive,
  Phone,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  Users,
  Download,
} from "lucide-react";
import Link from "next/link";

const preventionSteps = [
  {
    title: "Back Up Your Data Regularly",
    icon: HardDrive,
    description:
      "Maintain offline backups that ransomware cannot reach. Follow the 3-2-1 rule: 3 copies, 2 different media, 1 offsite.",
    actions: [
      "Set up automatic daily backups of critical files",
      "Test backup restoration monthly",
      "Keep one backup disconnected from your network",
      "Use cloud backup services with versioning",
    ],
  },
  {
    title: "Keep Systems Updated",
    icon: Shield,
    description:
      "Ransomware often exploits known vulnerabilities. Patching promptly closes these doors.",
    actions: [
      "Enable automatic OS and software updates",
      "Patch critical vulnerabilities within 48 hours",
      "Remove unused software and plugins",
      "Keep antivirus definitions current",
    ],
  },
  {
    title: "Train Your Team",
    icon: Users,
    description:
      "Phishing emails are the #1 way ransomware enters businesses. Educated staff are your best defense.",
    actions: [
      "Run quarterly security awareness training",
      "Conduct simulated phishing exercises",
      "Teach staff to verify unexpected attachments",
      "Create a clear reporting process for suspicious emails",
    ],
  },
  {
    title: "Limit Access Privileges",
    icon: Lock,
    description:
      "If ransomware strikes, limited access contains the damage.",
    actions: [
      "Apply the principle of least privilege",
      "Separate admin accounts from daily use",
      "Disable unused accounts immediately",
      "Use standard user accounts for routine work",
    ],
  },
];

const responseSteps = [
  {
    step: 1,
    title: "Disconnect Immediately",
    description:
      "Isolate infected devices from the network to prevent spread. Unplug network cables and disable Wi-Fi.",
    urgent: true,
  },
  {
    step: 2,
    title: "Do Not Pay the Ransom",
    description:
      "Payment does not guarantee recovery and funds criminal operations. You may also be targeted again.",
    urgent: true,
  },
  {
    step: 3,
    title: "Document Everything",
    description:
      "Take photos of ransom notes, record error messages, and note which systems are affected. This helps investigators.",
    urgent: false,
  },
  {
    step: 4,
    title: "Report to Authorities",
    description:
      "Contact the Australian Cyber Security Centre (ACSC) via 1300 CYBER1 (1300 292 371) and report to the Australian Federal Police.",
    urgent: true,
  },
  {
    step: 5,
    title: "Engage IT Support",
    description:
      "Work with a cybersecurity professional to assess the scope, contain the threat, and plan recovery.",
    urgent: false,
  },
  {
    step: 6,
    title: "Restore from Backups",
    description:
      "Once systems are cleaned, restore from known-good backups. Verify backup integrity before restoration.",
    urgent: false,
  },
];

const ransomwareTypes = [
  {
    name: "Encryptors",
    description: "Encrypt files and demand payment for the decryption key.",
    examples: "WannaCry, Ryuk, LockBit",
  },
  {
    name: "Lockers",
    description: "Lock the screen or system, preventing access until payment.",
    examples: "WinLocker, Police-themed ransomware",
  },
  {
    name: "Scareware",
    description: "Fake alerts claiming infection, demanding payment for 'cleanup'.",
    examples: "Fake antivirus popups",
  },
  {
    name: "Doxware/Leakware",
    description: "Threatens to publish stolen data if ransom isn't paid.",
    examples: "Maze, REvil",
  },
];

export default function RansomwareGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs />

          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="destructive" className="text-sm">
                Critical Security Guide
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Ransomware Protection & Response Guide
            </h1>
            <p className="text-xl text-muted-foreground">
              Ransomware is one of the most devastating cyber threats facing Australian small
              businesses. This guide will help you prevent attacks and respond effectively if
              you&apos;re targeted.
            </p>
          </header>

          {/* Warning Banner */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 dark:bg-red-950/20 dark:border-red-900">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-900 dark:text-red-100">
                  <strong>Active ransomware attack?</strong> Disconnect affected devices
                  immediately and call the ACSC: <strong>1300 CYBER1 (1300 292 371)</strong>
                </p>
              </div>
            </div>
          </div>

          {/* What is Ransomware */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">What is Ransomware?</h2>
            <p className="text-muted-foreground mb-6">
              Ransomware is malicious software that encrypts your files or locks your system,
              demanding payment (usually in cryptocurrency) to restore access. According to the 
              ACSC Annual Cyber Threat Report 2024-25, the average cost of a cyber incident to 
              a small business is approximately $56,600—not counting downtime, reputation damage, 
              and lost data.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {ransomwareTypes.map((type) => (
                <Card key={type.name} className="p-4">
                  <h3 className="font-semibold mb-1">{type.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{type.description}</p>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium">Examples:</span> {type.examples}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          {/* Prevention */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              Prevention: Protect Your Business
            </h2>
            <p className="text-muted-foreground mb-6">
              Prevention is far cheaper and less disruptive than recovery. Implement these
              essential measures:
            </p>

            <div className="space-y-6">
              {preventionSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        <ul className="space-y-2">
                          {step.actions.map((action, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Response */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-amber-500" />
              Response: If You&apos;re Attacked
            </h2>
            <p className="text-muted-foreground mb-6">
              Every minute counts during a ransomware attack. Follow these steps in order:
            </p>

            <div className="space-y-4">
              {responseSteps.map((step) => (
                <Card
                  key={step.step}
                  className={`p-4 ${step.urgent ? "border-red-200 bg-red-50/50 dark:bg-red-950/10 dark:border-red-900" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        step.urgent
                          ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{step.title}</h3>
                        {step.urgent && (
                          <Badge variant="destructive" className="text-xs">
                            Urgent
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Key Contacts */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Phone className="h-6 w-6 text-primary" />
              Key Contacts
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Australian Cyber Security Centre</h3>
                <p className="text-2xl font-bold text-primary mb-1">1300 CYBER1</p>
                <p className="text-sm text-muted-foreground">(1300 292 371)</p>
                <p className="text-sm text-muted-foreground mt-2">
                  24/7 incident reporting and guidance
                </p>
              </Card>
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Australian Federal Police</h3>
                <p className="text-2xl font-bold text-primary mb-1">131 AFP</p>
                <p className="text-sm text-muted-foreground">(131 237)</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Report cybercrime for investigation
                </p>
              </Card>
            </div>
          </section>

          {/* Downloads */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/incident-response">
                <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer h-full">
                  <FileText className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-semibold">Incident Response Checklist</h3>
                  <p className="text-sm text-muted-foreground">
                    Step-by-step guide for handling security incidents
                  </p>
                </Card>
              </Link>
              <Link href="/assessment">
                <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer h-full">
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-semibold">Security Assessment</h3>
                  <p className="text-sm text-muted-foreground">
                    Check your ransomware readiness with our free assessment
                  </p>
                </Card>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center p-6 rounded-lg border bg-muted/40">
            <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
            <p className="text-muted-foreground mb-4">
              Our AI advisor can answer specific questions about ransomware protection for your
              business.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link href="/advisor">Ask the Advisor</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/assessment">Take the Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
