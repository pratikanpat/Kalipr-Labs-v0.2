import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import SmoothScroll from '@/components/layout/SmoothScroll'
import { COMPANY } from '@/lib/constants'

// Geist covers all sans-serif roles — Inter dropped
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
    'software products',
    'Kalvora',
    'Sill',
    'SaaS development',
    'custom web applications',
    'AI automation',
    'Pune',
    'India',
  ],
  authors: [{ name: 'Pratik Anpat', url: 'https://pratik.kaliprlabs.in' }],
  creator: 'Kalipr Labs',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: COMPANY.url,
    title: 'Kalipr Labs — Independent Software Product Studio',
    description:
      'We find the friction. We build what fixes it. Creators of Kalvora and Sill. Based in Pune, India.',
    siteName: 'Kalipr Labs',
    images: [{ url: '/og/home.png', width: 1200, height: 630, alt: 'Kalipr Labs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalipr Labs — Independent Software Product Studio',
    description: 'We find the friction. We build what fixes it. Creators of Kalvora and Sill.',
    images: ['/og/home.png'],
  },
  robots: { index: true, follow: true },
}

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kalipr Labs',
  url: COMPANY.url,
  logo: `${COMPANY.url}/brand/logo.svg`,
  description: 'Independent software product studio. Creators of Kalvora and Sill.',
  founder: {
    '@type': 'Person',
    name: 'Pratik Anpat',
    url: 'https://pratik.kaliprlabs.in',
  },
  foundingDate: '2025',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pune',
    addressCountry: 'IN',
  },
  sameAs: ['https://www.linkedin.com/company/kalipr-labs'],
  owns: [
    { '@type': 'SoftwareApplication', name: 'Kalvora', url: 'https://kalvora.kaliprlabs.in' },
    { '@type': 'SoftwareApplication', name: 'Sill',    url: 'https://sill.kaliprlabs.in' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-canvas text-secondary font-sans antialiased overflow-x-hidden">
        <SmoothScroll />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
