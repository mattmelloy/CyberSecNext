import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Fraunces } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';
import { SiteFooter } from "@/components/site-footer";

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CyberSecTest",
  "description": "Free cyber security assessment and guidance for Australian small businesses",
  "url": "https://cybersectools.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://cybersectools.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CyberSecTest",
  "url": "https://cybersectools.com",
  "logo": "https://cybersectools.com/favicon.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hello@cybersectools.com",
    "contactType": "customer service",
    "areaServed": "AU"
  },
  "sameAs": []
};

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-sans',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cybersectools.com'),
  title: {
    default: 'Australian Small Business Cyber Security Health Check',
    template: '%s | CyberSecTest'
  },
  description: 'Free cyber security assessment for Australian small businesses. Get a tailored action plan, essential security guidance, and trusted tools aligned to ACSC best practice.',
  keywords: [
    'cyber security',
    'australian small business',
    'security assessment',
    'acsc',
    'essential eight',
    'cyber threats australia',
    'security audit',
    'cyber security quiz',
    'free security tools',
    'security advisor',
    'phishing protection',
    'data security',
    'security tips',
    'cyber protection guide'
  ],
  authors: [{ name: 'CyberSecTest Team' }],
  creator: 'CyberSecTest',
  publisher: 'CyberSecTest',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Australian Small Business Cyber Security Health Check',
    description: 'Free cyber security assessment for Australian small businesses with a tailored action plan and practical guidance.',
    url: 'https://cybersectools.com',
    siteName: 'CyberSecTest',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Australian Small Business Cyber Security Health Check',
    description: 'Free cyber security assessment for Australian small businesses',
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
    <html lang="en-AU" suppressHydrationWarning className={`${spaceGrotesk.variable} ${fraunces.variable}`}>
      <head>
        <link rel="canonical" href="https://cybersectools.com" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="robots" content="index, follow" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P5WP305N2H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P5WP305N2H');
          `}
        </Script>
        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${spaceGrotesk.className} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SiteFooter />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
