import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — Kalipr Labs',
  description: 'Terms governing use of the Kalipr Labs website, Kalvora, Sill, and custom engineering services.',
  alternates: { canonical: 'https://kaliprlabs.in/terms' },
  robots: { index: false, follow: false },
}

const H2_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontWeight: 700,
  fontSize: '1.25rem',
  letterSpacing: '-0.02em',
  color: '#1A1D16',
  marginBottom: '14px',
  marginTop: '40px',
}

const P_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: '0.9375rem',
  lineHeight: 1.75,
  color: 'rgba(26,29,22,0.65)',
  marginBottom: '12px',
}

const UL_STYLE: React.CSSProperties = {
  paddingLeft: '20px',
  listStyleType: 'disc',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginBottom: '16px',
}

const LI_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: '0.9375rem',
  lineHeight: 1.7,
  color: 'rgba(26,29,22,0.65)',
}

const SECTION_STYLE: React.CSSProperties = {
  marginBottom: '40px',
}

export default function TermsPage() {
  return (
    <main
      style={{
        background: '#E6EAD4',
        minHeight: '100vh',
        paddingTop: '120px',
        paddingBottom: '100px',
      }}
    >
      <div
        style={{
          maxWidth: '672px',
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 48px)',
        }}
      >
        {/* Back link */}
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(26,29,22,0.45)',
            textDecoration: 'none',
            display: 'inline-block',
            marginBottom: '48px',
          }}
        >
          ← Kalipr Labs
        </Link>

        {/* Page header */}
        <div style={{ marginBottom: '48px', borderBottom: '1px solid rgba(26,29,22,0.08)', paddingBottom: '32px' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: 'rgba(26,29,22,0.35)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            Legal
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.08,
              color: '#1A1D16',
              marginBottom: '12px',
            }}
          >
            Terms of Service
          </h1>
          <p style={{ ...P_STYLE, color: 'rgba(26,29,22,0.45)', marginBottom: 0 }}>
            Last Updated: November 2026
          </p>
        </div>

        {/* Intro */}
        <p style={P_STYLE}>
          By accessing the Kalipr Labs website or utilising our proprietary software utilities and custom engineering applications (Kalvora, Sill), you agree to be bound by these functional terms of service.
        </p>

        {/* Section 1 */}
        <div style={SECTION_STYLE}>
          <h2 style={H2_STYLE}>1. Scope of Service &amp; Software Usage Licences</h2>
          <ul style={UL_STYLE}>
            <li style={LI_STYLE}>
              <strong>Lab Products:</strong> We grant users a non-exclusive, non-transferable, revocable licence to utilise our software products in accordance with their respective tier rules (e.g., Sill&rsquo;s free core framework and optional one-time Pro upgrade paths).
            </li>
            <li style={LI_STYLE}>
              <strong>Client Projects:</strong> All custom web application engineering, automation deployments, and product consulting cycles are governed by independent, project-specific master service agreements (MSA) executed directly during project scoping.
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div style={SECTION_STYLE}>
          <h2 style={H2_STYLE}>2. Acceptable Use Boundaries</h2>
          <p style={P_STYLE}>You agree not to misuse our systems or applications. Prohibited activities include:</p>
          <ul style={UL_STYLE}>
            <li style={LI_STYLE}>
              Attempting to reverse-engineer, decompile, or breach the infrastructure architectures of Kalvora, Sill, or our client application frameworks.
            </li>
            <li style={LI_STYLE}>
              Using our automation structures or web applications to distribute malicious software, perform scraping actions, or conduct denial-of-service disruptions.
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div style={SECTION_STYLE}>
          <h2 style={H2_STYLE}>3. Intellectual Property Ownership</h2>
          <p style={P_STYLE}>
            Unless explicitly transferred via an active client service contract, Kalipr Labs retains all rights, titles, and interests in and to our core software engines, source code layers, brand designs, interactive UI layouts, and workflow presets.
          </p>
        </div>

        {/* Section 4 */}
        <div style={SECTION_STYLE}>
          <h2 style={H2_STYLE}>4. Limitation of Liability</h2>
          <p style={P_STYLE}>
            Kalipr Labs provides all software products and custom tools on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; baseline. To the maximum extent permitted by applicable law, the studio shall not be held liable for any direct, indirect, or incidental data loss, service interruptions, or operational downtime resulting from system usage.
          </p>
        </div>

        {/* Section 5 */}
        <div style={SECTION_STYLE}>
          <h2 style={H2_STYLE}>5. Governing Jurisdiction</h2>
          <p style={P_STYLE}>
            These terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any legal disputes arising under these terms shall be settled exclusively within the courts of Pune, India.
          </p>
        </div>

        {/* Footer nav */}
        <div
          style={{
            borderTop: '1px solid rgba(26,29,22,0.08)',
            paddingTop: '32px',
            marginTop: '48px',
            display: 'flex',
            gap: '24px',
          }}
        >
          <Link
            href="/privacy"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'rgba(26,29,22,0.45)',
              textDecoration: 'none',
            }}
          >
            Privacy Policy →
          </Link>
          <Link
            href="/contact"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'rgba(26,29,22,0.45)',
              textDecoration: 'none',
            }}
          >
            Contact →
          </Link>
        </div>
      </div>
    </main>
  )
}

