import type { Metadata } from 'next'
import { JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer     from '@/components/layout/Footer'
import SmoothScroll from '@/components/layout/SmoothScroll'
import FilmGrain  from '@/components/layout/FilmGrain'
import { COMPANY } from '@/lib/constants'

// Display / headings — Plus Jakarta Sans
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// Labels / mono
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.url),
  title: {
    default: 'Kalipr Labs — Independent Software Product Studio',
    template: '%s — Kalipr Labs',
  },
  description:
    'We find the friction. We build what fixes it. Kalipr Labs is an independent software studio from Pune — creators of Kalvora and Sill, and builders of custom digital solutions.',
  keywords: [
    'independent software studio',
    'software product studio',
    'software development Pune',
    'custom web application development India',
    'SaaS development India',
    'AI automation software',
    'Kalvora',
    'Sill Windows 11',
    'interior design software India',
    'proposal software for designers',
    'Kalipr Labs',
    'Pratik Anpat',
  ],
  authors: [{ name: 'Pratik Anpat', url: 'https://pratik.kaliprlabs.in' }],
  creator: 'Kalipr Labs',
  publisher: 'Kalipr Labs',
  category: 'technology',
  alternates: {
    canonical: COMPANY.url,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: COMPANY.url,
    title: 'Kalipr Labs — Independent Software Product Studio',
    description:
      'We find the friction. We build what fixes it. Creators of Kalvora and Sill. Based in Pune, India.',
    siteName: 'Kalipr Labs',
    images: [{ url: '/og/home.png', width: 1200, height: 630, alt: 'Kalipr Labs — Independent Software Product Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalipr Labs — Independent Software Product Studio',
    description: 'We find the friction. We build what fixes it. Creators of Kalvora and Sill.',
    images: ['/og/home.png'],
    creator: '@kaliprlabs',
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
    // Add Google Search Console verification token here when available:
    // google: 'your-verification-token',
  },
}

const jsonLd = [
  // Organization schema
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${COMPANY.url}/#organization`,
    name: 'Kalipr Labs',
    url: COMPANY.url,
    logo: {
      '@type': 'ImageObject',
      url: `${COMPANY.url}/brand/logo.svg`,
      width: 180,
      height: 48,
    },
    description: 'Independent software product studio. Creators of Kalvora and Sill.',
    email: COMPANY.email,
    foundingDate: '2025',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    founder: {
      '@type': 'Person',
      name: 'Pratik Anpat',
      url: 'https://pratik.kaliprlabs.in',
      jobTitle: 'Founder',
    },
    sameAs: [
      'https://www.linkedin.com/company/kalipr-labs',
    ],
    owns: [
      {
        '@type': 'SoftwareApplication',
        name: 'Kalvora',
        url: 'https://kalvora.kaliprlabs.in',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'Proposal and invoice software for interior designers.',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Sill',
        url: 'https://sill.kaliprlabs.in',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Windows 11',
        description: 'A small tool belt for Windows 11 — command palette and taskbar widget.',
      },
    ],
  },
  // WebSite schema with SearchAction (enables Google Sitelinks Search Box)
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${COMPANY.url}/#website`,
    url: COMPANY.url,
    name: 'Kalipr Labs',
    description: 'Independent software product studio from Pune, India.',
    publisher: {
      '@id': `${COMPANY.url}/#organization`,
    },
    inLanguage: 'en-IN',
  },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${jetbrainsMono.variable} ${jakarta.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-canvas text-secondary font-sans antialiased overflow-x-hidden">
        <FilmGrain />
        <SmoothScroll />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
