"use client";

import { SiteHeader } from "@/components/site-header";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Copy, Download, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const acceptableUsePolicy = `# ACCEPTABLE USE POLICY

**Company Name:** [Your Business Name]
**Effective Date:** [Date]
**Last Reviewed:** [Date]

## 1. Purpose

This Acceptable Use Policy outlines the rules and guidelines for the appropriate use of [Company Name]'s information technology resources, including computers, networks, internet access, email, and other digital assets.

## 2. Scope

This policy applies to all employees, contractors, consultants, temporary workers, and any other individuals who use [Company Name]'s IT resources.

## 3. Acceptable Use

### 3.1 General Use
- Use IT resources primarily for business purposes
- Personal use should be minimal and not interfere with work duties
- Follow all applicable laws and regulations
- Respect intellectual property rights

### 3.2 Email and Communications
- Use company email for business communications
- Do not send spam, chain letters, or harassing messages
- Be cautious with attachments and links from unknown sources
- Do not share confidential information via unencrypted email

### 3.3 Internet Use
- Access websites for legitimate business purposes
- Avoid sites with inappropriate, illegal, or offensive content
- Do not download unauthorized software or files
- Report any suspicious websites or pop-ups

### 3.4 Software and Applications
- Only use approved and licensed software
- Do not install unauthorised applications
- Report any software issues to IT support
- Keep software updated as directed

## 4. Prohibited Use

The following activities are strictly prohibited:

- Accessing, storing, or distributing illegal content
- Attempting to bypass security controls
- Sharing passwords or access credentials
- Using another person's account without authorisation
- Installing malware, viruses, or malicious software
- Engaging in hacking or unauthorised access attempts
- Violating copyright or intellectual property rights
- Harassing, threatening, or discriminating against others
- Disclosing confidential company information

## 5. Security Requirements

- Use strong, unique passwords for all accounts
- Enable multi-factor authentication where available
- Lock devices when leaving them unattended
- Report lost or stolen devices immediately
- Do not disable or circumvent security software
- Follow clean desk and clear screen practices

## 6. Monitoring

[Company Name] reserves the right to monitor use of IT resources to ensure compliance with this policy, protect company assets, and maintain system security.

## 7. Violations

Violations of this policy may result in:
- Revocation of IT access privileges
- Disciplinary action, up to and including termination
- Legal action where appropriate

## 8. Acknowledgement

I acknowledge that I have read and understood this Acceptable Use Policy and agree to comply with its terms.

**Employee Name:** ___________________
**Signature:** ___________________
**Date:** ___________________

---

*This policy should be reviewed annually and updated as needed.*`;

const passwordPolicy = `# PASSWORD POLICY

**Company Name:** [Your Business Name]
**Effective Date:** [Date]
**Last Reviewed:** [Date]

## 1. Purpose

This policy establishes requirements for creating, managing, and protecting passwords used to access [Company Name]'s systems and data.

## 2. Scope

This policy applies to all employees, contractors, and any individuals who access [Company Name]'s systems.

## 3. Password Requirements

### 3.1 Complexity Requirements
All passwords must meet the following criteria:
- Minimum length: 12 characters
- Contains at least one uppercase letter (A-Z)
- Contains at least one lowercase letter (a-z)
- Contains at least one number (0-9)
- Contains at least one special character (!@#$%^&*)
- Does not contain the user's name or username
- Does not contain common words or sequences

### 3.2 Password Examples
**Good passwords:**
- Tr0ub4dor&3Horse!
- C0ff33!Sh0p@2024
- MyD0g$N4me!sB1u3

**Bad passwords:**
- password123
- CompanyName2024
- Qwerty123!

## 4. Password Management

### 4.1 Password Creation
- Use a password manager to generate and store passwords
- Never reuse passwords across different accounts
- Do not use personal information (birthdays, names, etc.)

### 4.2 Password Storage
- Store passwords only in approved password managers
- Never write passwords on paper or sticky notes
- Never share passwords via email or messaging
- Do not store passwords in plain text files

### 4.3 Password Changes
- Change passwords immediately if a breach is suspected
- Change passwords every 90 days for sensitive systems
- Do not reuse the last 12 passwords

## 5. Multi-Factor Authentication (MFA)

MFA is required for:
- All email accounts
- All financial systems
- All administrative access
- All remote access
- All cloud services

## 6. Account Lockout

- Accounts will be locked after 5 failed login attempts
- Locked accounts require administrator reset or timed unlock (30 minutes)
- Users must report lockouts to IT support

## 7. Password Sharing

Password sharing is prohibited except:
- When using approved password manager sharing features
- For emergency access with documented approval
- For shared service accounts with proper controls

## 8. Violations

Failure to comply with this policy may result in:
- Mandatory password security training
- Revocation of system access
- Disciplinary action

---

*Review this policy annually and update based on current security best practices.*`;

const dataHandlingPolicy = `# DATA HANDLING POLICY

**Company Name:** [Your Business Name]
**Effective Date:** [Date]
**Last Reviewed:** [Date]

## 1. Purpose

This policy establishes guidelines for the proper handling, storage, transmission, and disposal of data to protect confidentiality, integrity, and availability.

## 2. Data Classification

### 2.1 Classification Levels

**Public:** Information that can be freely shared with the public.
- Marketing materials
- Published product information
- Public website content

**Internal:** Information for internal use only.
- Internal memos
- Meeting notes
- General business correspondence

**Confidential:** Sensitive business information.
- Financial records
- Customer information
- Employee records
- Business strategies

**Restricted:** Highly sensitive information requiring maximum protection.
- Payment card data
- Health records
- Government identifiers (TFN, ABN)
- Authentication credentials

## 3. Handling Requirements

### 3.1 Public Data
- No special handling required
- Ensure accuracy before publishing

### 3.2 Internal Data
- Share only with employees who need access
- Do not post publicly without approval
- Store on company-approved systems

### 3.3 Confidential Data
- Access limited to authorised personnel only
- Must be encrypted when transmitted
- Must be stored on secure, approved systems
- Must not be stored on personal devices
- Must be backed up regularly

### 3.4 Restricted Data
- Strict need-to-know access only
- Must be encrypted at rest and in transit
- Access logged and audited
- Additional security controls required
- Never stored on mobile devices without encryption

## 4. Data Transmission

### 4.1 Email
- Confidential data: Use encrypted email or password-protected attachments
- Restricted data: Do not send via email without explicit approval

### 4.2 Cloud Services
- Use only approved cloud services
- Ensure encryption is enabled
- Verify sharing permissions before uploading

### 4.3 Physical Transfer
- Use secure courier services for sensitive data
- Encrypt USB drives and portable media
- Log all physical data transfers

## 5. Data Storage

### 5.1 Approved Storage Locations
- Company file servers
- Approved cloud services (list specific services)
- Encrypted local storage on company devices

### 5.2 Prohibited Storage
- Personal cloud accounts
- Unencrypted USB drives
- Personal devices without approval
- Public file-sharing services

## 6. Data Disposal

### 6.1 Electronic Data
- Use secure deletion tools that overwrite data
- Factory reset devices before disposal
- Verify deletion was successful

### 6.2 Physical Documents
- Shred confidential and restricted documents
- Use cross-cut shredders for sensitive material
- Secure shred bins for collection

## 7. Incident Reporting

Report any data breaches or handling violations immediately to:
- IT Support: [Contact details]
- Privacy Officer: [Contact details]

## 8. Compliance

Failure to comply with this policy may result in:
- Disciplinary action
- Termination of employment
- Legal action where applicable

---

*This policy aligns with the Privacy Act 1988 and Australian Privacy Principles.*`;

export default function SecurityPolicyTemplatePage() {
  const { toast } = useToast();
  const [copiedPolicy, setCopiedPolicy] = useState<string | null>(null);

  const handleCopy = (policy: string, name: string) => {
    navigator.clipboard.writeText(policy);
    setCopiedPolicy(name);
    toast({
      title: "Copied to clipboard",
      description: `${name} has been copied and is ready to paste into your document editor.`,
    });
    setTimeout(() => setCopiedPolicy(null), 2000);
  };

  const handleDownload = (policy: string, filename: string) => {
    const blob = new Blob([policy], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast({
      title: "Download started",
      description: `${filename}.md has been downloaded.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs />

          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">Templates</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Security Policy Templates
            </h1>
            <p className="text-xl text-muted-foreground">
              Free, customisable security policy templates for Australian small businesses.
              Copy or download these templates and adapt them to your needs.
            </p>
          </header>

          {/* Instructions */}
          <Card className="p-6 mb-8 bg-muted/40">
            <h2 className="font-semibold mb-3">How to Use These Templates</h2>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              <li>Copy the template text or download the markdown file</li>
              <li>Replace [bracketed text] with your business details</li>
              <li>Review and adjust policies to fit your operations</li>
              <li>Have all staff read and sign the policies</li>
              <li>Review and update policies annually</li>
            </ol>
          </Card>

          {/* Policy Tabs */}
          <Tabs defaultValue="acceptable-use" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="acceptable-use">Acceptable Use</TabsTrigger>
              <TabsTrigger value="password">Password Policy</TabsTrigger>
              <TabsTrigger value="data-handling">Data Handling</TabsTrigger>
            </TabsList>

            <TabsContent value="acceptable-use">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold">Acceptable Use Policy</h2>
                    <p className="text-sm text-muted-foreground">
                      Rules for using company IT resources and systems
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCopy(acceptableUsePolicy, "Acceptable Use Policy")}
                    >
                      {copiedPolicy === "Acceptable Use Policy" ? (
                        <CheckCircle className="h-4 w-4 mr-2" />
                      ) : (
                        <Copy className="h-4 w-4 mr-2" />
                      )}
                      Copy
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownload(acceptableUsePolicy, "acceptable-use-policy")}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
                <div className="bg-muted/40 rounded-lg p-4 overflow-auto max-h-[600px]">
                  <pre className="text-sm whitespace-pre-wrap font-mono">{acceptableUsePolicy}</pre>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="password">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold">Password Policy</h2>
                    <p className="text-sm text-muted-foreground">
                      Requirements for creating and managing secure passwords
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCopy(passwordPolicy, "Password Policy")}
                    >
                      {copiedPolicy === "Password Policy" ? (
                        <CheckCircle className="h-4 w-4 mr-2" />
                      ) : (
                        <Copy className="h-4 w-4 mr-2" />
                      )}
                      Copy
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownload(passwordPolicy, "password-policy")}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
                <div className="bg-muted/40 rounded-lg p-4 overflow-auto max-h-[600px]">
                  <pre className="text-sm whitespace-pre-wrap font-mono">{passwordPolicy}</pre>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="data-handling">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold">Data Handling Policy</h2>
                    <p className="text-sm text-muted-foreground">
                      Guidelines for handling, storing, and protecting data
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCopy(dataHandlingPolicy, "Data Handling Policy")}
                    >
                      {copiedPolicy === "Data Handling Policy" ? (
                        <CheckCircle className="h-4 w-4 mr-2" />
                      ) : (
                        <Copy className="h-4 w-4 mr-2" />
                      )}
                      Copy
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownload(dataHandlingPolicy, "data-handling-policy")}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
                <div className="bg-muted/40 rounded-lg p-4 overflow-auto max-h-[600px]">
                  <pre className="text-sm whitespace-pre-wrap font-mono">{dataHandlingPolicy}</pre>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Additional Resources */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-4">
                <FileText className="h-6 w-6 text-primary mb-2" />
                <h3 className="font-semibold">Australian Privacy Principles</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Guidelines from the Office of the Australian Information Commissioner
                </p>
                <a
                  href="https://www.oaic.gov.au/privacy/australian-privacy-principles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  View on OAIC website →
                </a>
              </Card>
              <Card className="p-4">
                <FileText className="h-6 w-6 text-primary mb-2" />
                <h3 className="font-semibold">ACSC Essential Eight</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Baseline mitigation strategies from the Australian Cyber Security Centre
                </p>
                <a
                  href="https://www.cyber.gov.au/protect-yourself/essential-eight/essential-eight-explained"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  View on ACSC website →
                </a>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
