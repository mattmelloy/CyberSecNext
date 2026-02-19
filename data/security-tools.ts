import { SecurityTool } from "@/types/tools";

export interface SecurityToolWithCategory extends SecurityTool {
  category: string;
}

export const securityTools: SecurityToolWithCategory[] = [
  // Training & Awareness
  {
    title: "Free Online Cybersecurity Training - Cyber101.com",
    description: "Protect your business from cyber threats with our cybersecurity training. Equip your team to prevent phishing attacks, secure sensitive data, and comply with industry regulations—ensuring your business stays safe and resilient.",
    link: "https://cyber101.com",
    icon: "ShieldCheck",
    category: "Training & Awareness"
  },
  {
    title: "Google Phishing Quiz",
    description: "Test your ability to spot phishing scams with Google's Phishing Quiz. Learn how to identify fake emails, protect your business from cyberattacks, and keep sensitive data safe.",
    link: "https://phishingquiz.withgoogle.com",
    icon: "Mail",
    category: "Training & Awareness"
  },
  {
    title: "Phishing Simulation Tool - Get Go Phish",
    description: "Protect your business from phishing attacks with a free phishing simulation test. Train your team to recognize and avoid fake emails, reduce the risk of data breaches, and strengthen your security.",
    link: "https://getgophish.com",
    icon: "UserCheck",
    category: "Training & Awareness"
  },
  
  // Password & Identity Security
  {
    title: "Password Strength Checker - Nordpass",
    description: "Is your password strong enough? Use this free password checker to test its complexity and see if it's been exposed in past security breaches. Strengthen your accounts and stay protected.",
    link: "https://nordpass.com/secure-password/",
    icon: "Key",
    category: "Password & Identity Security"
  },
  
  // Email & Link Safety
  {
    title: "Link Safety Checker - Bitdefender",
    description: "Instantly verify if a link is secure, avoid phishing scams, and protect your personal or business data from malicious websites. Ensure every click is safe and trustworthy.",
    link: "https://www.bitdefender.com/en-au/consumer/link-checker",
    icon: "Search",
    category: "Email & Link Safety"
  },
  
  // Website & Network Security
  {
    title: "Website Security Checker - SSL Labs",
    description: "Ensure your website is secure with the SSL Labs SSL Checker. This free tool analyzes your SSL/TLS configuration, identifies vulnerabilities, and provides actionable steps to protect your site.",
    link: "https://www.ssllabs.com/ssltest/",
    icon: "Lock",
    category: "Website & Network Security"
  },
  
  // Data Breach & Monitoring
  {
    title: "Data Breach Checker - Have you been Pwned",
    description: "Has your login details been stolen? Check now with \"Have I Been Pwned\" to see if your email or passwords have been compromised in a data breach. Stay one step ahead of hackers.",
    link: "https://haveibeenpwned.com",
    icon: "AlertTriangle",
    category: "Data Breach & Monitoring"
  },
  
  // Security Frameworks & Toolkits
  {
    title: "Cybersecurity Toolkit - GCAToolkit.org",
    description: "The GCA Cybersecurity Toolkits provides free and effective tools that individuals and organizations of any size can use right now to take action to reduce cyber risk. The tools are carefully selected and organized to make it easy to search, find, and implement basic cybersecurity hygiene.",
    link: "https://gcatoolkit.org",
    icon: "UserCheck",
    category: "Security Frameworks & Toolkits"
  }
];

export const toolCategories = [
  {
    name: "Training & Awareness",
    description: "Educate your team on cybersecurity best practices",
    icon: "ShieldCheck"
  },
  {
    name: "Password & Identity Security",
    description: "Strengthen your authentication and password practices",
    icon: "Key"
  },
  {
    name: "Email & Link Safety",
    description: "Protect against phishing and malicious links",
    icon: "Mail"
  },
  {
    name: "Website & Network Security",
    description: "Secure your online presence and network infrastructure",
    icon: "Lock"
  },
  {
    name: "Data Breach & Monitoring",
    description: "Monitor and respond to data breaches",
    icon: "AlertTriangle"
  },
  {
    name: "Security Frameworks & Toolkits",
    description: "Comprehensive security resources and frameworks",
    icon: "UserCheck"
  }
];
