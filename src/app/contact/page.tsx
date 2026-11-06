import type { Metadata } from 'next'
import { ContactForm } from '@/features/contact/ContactForm'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Start a Project — Kalipr Labs',
  description:
    'Tell us about your project. We build software products, custom web applications, AI automation systems, and professional websites.',
}

export default function ContactPage() {
  return (
    <div style={{ background: '#E6EAD4', minHeight: '100vh', paddingTop: '100px' }}>
      <section className="section-pad">
        <div className="container-width" style={{ maxWidth: '800px' }}>

          {/* Page header */}
          <div style={{ marginBottom: '60px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                color: 'rgba(26,29,22,0.40)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '20px',
              }}
            >
              Contact
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                letterSpacing: '-0.04em',
                lineHeight: 1.08,
                color: '#1A1D16',
                marginBottom: '20px',
                maxWidth: '22ch',
              }}
            >
              Let&apos;s talk about what you&apos;re building.
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9375rem',
                lineHeight: 1.65,
                color: 'rgba(26,29,22,0.55)',
                maxWidth: '44ch',
              }}
            >
              We work with founders, business owners, and teams who have a real problem
              to solve. Fill in the form — we reply within 1–2 business days. Or email
              us directly at{' '}
              <a
                href={`mailto:${COMPANY.email}`}
                style={{ color: '#1A1D16', fontWeight: 600 }}
              >
                {COMPANY.email}
              </a>
              .
            </p>
          </div>

          {/* Narrative form */}
          <div
            style={{
              background: '#F5F7EF',
              borderRadius: 'var(--radius-card)',
              padding: 'clamp(32px, 5vw, 56px)',
              border: '1px solid rgba(26,29,22,0.07)',
            }}
          >
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
