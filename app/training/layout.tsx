import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cybersecurity Training | CyberSecTools',
  description: 'Interactive cybersecurity awareness training for small businesses. Learn to identify threats, protect your business, and respond to incidents effectively.',
  keywords: ['cybersecurity training', 'security awareness', 'small business security', 'phishing prevention', 'ransomware protection'],
  openGraph: {
    title: 'Cybersecurity Training | CyberSecTools',
    description: 'Interactive cybersecurity awareness training for small businesses. Learn to identify threats, protect your business, and respond to incidents effectively.',
    type: 'website',
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cybersecurity Training | CyberSecTools',
    description: 'Interactive cybersecurity awareness training for small businesses.',
  },
};

export default function TrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
