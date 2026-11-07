import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Kalipr Labs',
  description: 'How Kalipr Labs collects, processes, and protects information across our agency ecosystem, client channels, and software products.',
  alternates: { canonical: 'https://kaliprlabs.in/privacy' },
  robots: { index: false, follow: false },
}

const SECTION_STYLE: React.CSSProperties = {
  marginBottom: '40px',
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

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p style={{ ...P_STYLE, color: 'rgba(26,29,22,0.45)', marginBottom: 0 }}>
            Last Updated: April 2026
          </p>
        </div>

        {/* Intro */}
        <p style={P_STYLE}>
          This policy outlines how Kalipr Labs (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;studio&rdquo;) collects, processes, and protects information across our main agency ecosystem, client service channels, and proprietary software applications, including Kalvora and Sill.
        </p>

        {/* Section 1 */}
        <div style={SECTION_STYLE}>
          <h2 style={H2_STYLE}>1. Information We Collect</h2>
          <p style={P_STYLE}>
            We limit data collection strictly to what is required to build, maintain, and secure our software products and custom client infrastructure:
          </p>
          <ul style={UL_STYLE}>
            <li style={LI_STYLE}>
              <strong>Account &amp; Profile Data:</strong> When using our platforms (such as Kalvora), we store your name, email address, corporate identity, and billing data securely via encrypted payment gateways.
            </li>
            <li style={LI_STYLE}>
              <strong>Telemetry &amp; Technical Logs:</strong> For desktop applications (such as Sill), data processing occurs natively on your local machine. We collect zero tracking data, keystroke metrics, or personal workflow profiles.
            </li>
            <li style={LI_STYLE}>
              <strong>Client Inquiries:</strong> Information submitted through our conversational intake channels is used solely to evaluate and scope engineering sprints.
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div style={SECTION_STYLE}>
          <h2 style={H2_STYLE}>2. How We Share Information</h2>
          <p style={P_STYLE}>
            We do not sell, rent, or lease your personal information or project data to third-party brokers. Data sharing is limited to secure infrastructure dependencies required to run our applications, including hosting environments (Vercel, AWS), database providers, and transaction processors (Stripe).
          </p>
        </div>

        {/* Section 3 */}
        <div style={SECTION_STYLE}>
          <h2 style={H2_STYLE}>3. Data Governance &amp; Security</h2>
          <p style={P_STYLE}>
            We use industry-standard encryption protocols (AES-256) for data at rest and transport layer security (TLS) for data in motion. While we implement strict security boundaries, no digital transmission channel can be guaranteed 100% secure.
          </p>
        </div>

        {/* Section 4 */}
        <div style={SECTION_STYLE}>
          <h2 style={H2_STYLE}>4. Your Rights &amp; Erasure Protocols</h2>
          <p style={P_STYLE}>
            You retain complete control over your personal data. You may request access to, correction of, or permanent deletion of your account records and project repositories at any time by contacting our engineering desk at{' '}
            <a
              href="mailto:hello@kaliprlabs.in"
              style={{ color: '#1A1D16', fontWeight: 600 }}
            >
              hello@kaliprlabs.in
            </a>
            .
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
            href="/terms"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'rgba(26,29,22,0.45)',
              textDecoration: 'none',
            }}
          >
            Terms of Service →
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

