import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/animations/Reveal'
import { ClientLedger } from '@/components/sections/ClientLedger'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Kalipr Labs has worked with 5+ clients across product development, custom engineering, and automation projects. Pune, India.',
}

const CAPABILITIES = [
  {
    id: '01',
    label: 'SaaS Products',
    desc: 'Multi-tenant software products with real user bases.',
    metric: '1',
    metricLabel: 'Live product',
  },
  {
    id: '02',
    label: 'Web Applications',
    desc: 'Purpose-built tools engineered around specific business workflows.',
    metric: '3+',
    metricLabel: 'Delivered',
  },
  {
    id: '03',
    label: 'Automation Systems',
    desc: 'Integrations and automation that reduce manual business overhead.',
    metric: '1+',
    metricLabel: 'Deployed',
  },
]


export default function WorkPage() {
  return (
    <div className="bg-canvas pt-[72px]">

      {/* ── Header ─────────────────────────────────────────────────── */}
      <section className="section-pad border-b border-border">
        <div className="container-width">
          <Reveal>
            <SectionLabel>// work</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 font-heading text-[clamp(2rem,5vw,3rem)] font-semibold tracking-tight text-primary max-w-[600px] text-balance">
              {COMPANY.clientProjects} clients. Real projects.
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 text-base leading-relaxed text-secondary max-w-[480px]">
              We have worked with clients across software product development, custom web
              engineering, and business automation. Each project is treated as a genuine
              engineering responsibility.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Capability Metrics — top of content ────────────────────── */}
      <section className="section-pad border-b border-border bg-surface">
        <div className="container-width">
          <Reveal>
            <SectionLabel>// what we&apos;ve built</SectionLabel>
          </Reveal>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              marginTop: '32px',
              borderTop: '1px solid rgba(26,29,22,0.08)',
            }}
            className="capabilities-grid"
          >
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.id} delay={i * 0.06}>
                <div
                  className="capability-item"
                  style={{
                    padding: '32px 32px 32px 0',
                    borderRight: i < CAPABILITIES.length - 1 ? '1px solid rgba(26,29,22,0.08)' : 'none',
                    marginRight: i < CAPABILITIES.length - 1 ? '32px' : '0',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.10em',
                      color: 'rgba(26,29,22,0.30)',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '16px',
                    }}
                  >
                    {cap.id}
                  </span>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      letterSpacing: '-0.04em',
                      color: '#1A1D16',
                      lineHeight: 1,
                    }}
                  >
                    {cap.metric}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(26,29,22,0.38)',
                      marginTop: '6px',
                      marginBottom: '16px',
                    }}
                  >
                    {cap.metricLabel}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      fontSize: '0.9375rem',
                      color: '#1A1D16',
                      letterSpacing: '-0.01em',
                      marginBottom: '8px',
                    }}
                  >
                    {cap.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      lineHeight: 1.65,
                      color: 'rgba(26,29,22,0.55)',
                    }}
                  >
                    {cap.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Confidential Client Ledger Registry ────────────────────── */}
      <section className="section-pad">
        <div className="container-width">
          <Reveal>
            <SectionLabel>// client registry</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', marginTop: '16px', flexWrap: 'wrap' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  letterSpacing: '-0.03em',
                  color: '#1A1D16',
                }}
              >
                Confidential Portfolio Ledger.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'rgba(26,29,22,0.38)',
                  maxWidth: '32ch',
                  lineHeight: 1.6,
                }}
              >
                Client names are kept private. Sector and system architecture are shown.
              </p>
            </div>
          </Reveal>

          {/* Table — client component for hover interactivity */}
          <Reveal delay={0.12}>
            <ClientLedger />
          </Reveal>

          {/* CTA row below ledger */}
          <Reveal delay={0.2}>
            <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
              <Link href="/contact" className="btn-primary">
                Request project references
              </Link>
              <a href={`mailto:${COMPANY.email ?? 'hello@kaliprlabs.in'}`} className="btn-text-arrow" style={{ color: 'rgba(26,29,22,0.55)', fontFamily: 'var(--font-sans)', fontSize: '0.875rem', textDecoration: 'none' }}>
                <span className="btn-label">Email directly</span>
                <svg className="btn-arrow" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
