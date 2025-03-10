import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
  adjustFontFallback: true,
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif'
  ]
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cybersectools.com'),
  title: {
    default: 'Small Business Cybersecurity Assessment | Free Security Tools',
    template: '%s | CyberSecTools'
  },
  description: 'Free cybersecurity assessment tool and resources for small businesses. Get personalized security recommendations, AI-powered advice, and access to free security tools.',
  keywords: [
    'cybersecurity',
    'small business security',
    'security assessment',
    'cyber threats',
    'security audit',
    'cybersecurity quiz',
    'free security tools',
    'AI security advisor',
    'phishing protection',
    'data security'
  ],
  authors: [{ name: 'CyberSecTools Team' }],
  creator: 'CyberSecTools',
  publisher: 'CyberSecTools',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Small Business Cybersecurity Assessment | Free Security Tools',
    description: 'Free cybersecurity assessment tool and resources for small businesses. Get personalized security recommendations and access free security tools.',
    url: 'https://cybersectools.com',
    siteName: 'CyberSecTools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Small Business Cybersecurity Assessment | Free Security Tools',
    description: 'Free cybersecurity assessment tool and resources for small businesses',
    creator: '@cybersectools',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="canonical" href="https://cybersectools.com" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${inter.className} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}