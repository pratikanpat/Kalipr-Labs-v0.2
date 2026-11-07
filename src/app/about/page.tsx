import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/animations/Reveal'
import { PHILOSOPHY_PRINCIPLES, SOCIAL_LINKS, COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Kalipr Labs is an independent software product studio founded in Pune, India. We build software products and engineer digital solutions for real-world business problems.',
}

const TIMELINE = [
  {
    year: '2025',
    events: [
      'Kalipr Labs founded in Pune, India.',
      'First 2 client projects delivered — custom web applications and product development.',
      'Kalvora development begun: proposal & invoice software for interior designers.',
    ],
  },
  {
    year: '2026',
    events: [
      'Kalvora launched publicly and reached 500+ active users.',
      '3 additional client projects delivered across product development and automation.',
      'Kalipr Labs reaches 5 client projects milestone.',
    ],
  },
  {
    year: 'Now',
    events: [
      'Continuing to build and improve Kalvora.',
      'Accepting new client projects.',
      'Exploring the next product to build.',
    ],
  },
]

export default function AboutPage() {
  return (
    <div className="bg-canvas pt-[72px]">

      {/* ── Company intro ──────────────────────────────────────────── */}
      <section className="section-pad border-b border-border">
        <div className="container-width">
          <Reveal>
            <SectionLabel>// about</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 font-heading text-[clamp(2rem,5vw,3rem)] font-semibold tracking-tight text-primary max-w-[680px] text-balance">
              An independent software product studio.
            </h1>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-[840px]">
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-secondary">
                Kalipr Labs is an independent software product studio based in Pune, India.
                We build software products from scratch and engineer custom digital solutions
                for businesses that need something built properly.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="text-base leading-relaxed text-secondary">
                We work at the intersection of software engineering and product thinking —
                not just writing code, but building things that solve the right problems
                the right way. Our flagship product, Kalvora, is used by 500+ interior
                designers across India.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Philosophy ─────────────────────────────────────────────── */}
      <section className="section-pad border-b border-border bg-surface">
        <div className="container-width">
          <Reveal>
            <SectionLabel>// philosophy</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight text-primary">
              How we think about software.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PHILOSOPHY_PRINCIPLES.map((principle, i) => (
              <Reveal key={principle.num} delay={i * 0.06}>
                <div
                  style={{
                    borderRadius: '14px',
                    border: '1px solid rgba(26,29,22,0.08)',
                    background: '#FAFBF7',
                    padding: '24px',
                    height: '100%',
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
                    }}
                  >
                    {principle.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      fontSize: '0.9375rem',
                      color: '#1A1D16',
                      marginTop: '12px',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {principle.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      lineHeight: 1.65,
                      color: 'rgba(26,29,22,0.55)',
                      marginTop: '8px',
                    }}
                  >
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline — 2-column Comparative Ledger ─────────────────── */}
      <section className="section-pad border-b border-border">
        <div className="container-width">
          <Reveal>
            <SectionLabel>// timeline</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight text-primary">
              How we got here.
            </h2>
          </Reveal>

          {/* Ledger header */}
          <div
            className="timeline-header-row"
            style={{
              marginTop: '48px',
              paddingBottom: '16px',
              borderBottom: '1px solid rgba(26,29,22,0.12)',
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
              }}
            >
              Period
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.10em',
                color: 'rgba(26,29,22,0.30)',
                textTransform: 'uppercase',
              }}
            >
              Milestones
            </span>
          </div>

          {/* Ledger rows */}
          {TIMELINE.map((entry, i) => (
            <Reveal key={entry.year} delay={i * 0.08}>
              <div
                className="timeline-row"
              >
                {/* Left — year marker */}
                <div>
                  <span
                    className={`timeline-year${entry.year === 'Now' ? ' timeline-year-now' : ''}`}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      letterSpacing: '-0.04em',
                      lineHeight: 1,
                      color: entry.year === 'Now' ? '#1A1D16' : 'rgba(26,29,22,0.18)',
                      display: 'block',
                    }}
                  >
                    {entry.year}
                  </span>
                </div>

                {/* Right — milestone paragraphs, hairline-separated */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {entry.events.map((event, j) => (
                    <div key={event}>
                      {j > 0 && (
                        <div
                          style={{
                            height: '1px',
                            background: 'rgba(26,29,22,0.06)',
                            margin: '14px 0',
                          }}
                        />
                      )}
                      <p
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.9375rem',
                          lineHeight: 1.65,
                          color: 'rgba(26,29,22,0.65)',
                        }}
                      >
                        {event}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Founder — Asymmetric Framework ─────────────────────────── */}
      <section className="section-pad border-b border-border bg-surface">
        <div className="container-width">
          <Reveal>
            <SectionLabel>// founder</SectionLabel>
          </Reveal>

          <Reveal delay={0.08}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0 64px',
                marginTop: '40px',
                alignItems: 'start',
              }}
              className="grid-cols-1 md:grid-cols-2"
            >
              {/* Left — structural label block */}
              <div
                style={{
                  borderRight: '1px solid rgba(26,29,22,0.08)',
                  paddingRight: '64px',
                }}
                className="hidden md:block"
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    color: 'rgba(26,29,22,0.30)',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '24px',
                  }}
                >
                  // FOUNDER ENGINE
                </span>
                <p
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    letterSpacing: '-0.04em',
                    lineHeight: 1.0,
                    color: 'rgba(26,29,22,0.08)',
                    userSelect: 'none',
                  }}
                  aria-hidden
                >
                  P.A.
                </p>
                <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { label: 'Role', value: 'Founder' },
                    { label: 'Studio', value: 'Kalipr Labs' },
                    { label: 'Location', value: COMPANY.location },
                    { label: 'Est.', value: String(COMPANY.foundedYear) },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '12px',
                        borderBottom: '1px solid rgba(26,29,22,0.06)',
                        paddingBottom: '8px',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.65rem',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: 'rgba(26,29,22,0.30)',
                          width: '64px',
                          flexShrink: 0,
                        }}
                      >
                        {item.label}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.875rem',
                          color: 'rgba(26,29,22,0.65)',
                        }}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — bio copy */}
              <div>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    letterSpacing: '-0.03em',
                    color: '#1A1D16',
                  }}
                >
                  Pratik Anpat
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(26,29,22,0.38)',
                    marginTop: '6px',
                  }}
                >
                  Founder · Kalipr Labs · {COMPANY.location}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.75,
                    color: 'rgba(26,29,22,0.65)',
                    marginTop: '24px',
                    maxWidth: '44ch',
                  }}
                >
                  Pratik founded Kalipr Labs to build software that solves real problems —
                  not software built to look impressive in a portfolio. He handles product
                  strategy, engineering, and design across all Kalipr Labs work.
                </p>
                <div style={{ marginTop: '28px', display: 'flex', gap: '24px' }}>
                  <a
                    href={SOCIAL_LINKS.founderPortfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-text-arrow"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'rgba(26,29,22,0.55)',
                      textDecoration: 'none',
                    }}
                  >
                    <span className="btn-label">Portfolio</span>
                    <svg className="btn-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a
                    href={SOCIAL_LINKS.founderLinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-text-arrow"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'rgba(26,29,22,0.55)',
                      textDecoration: 'none',
                    }}
                  >
                    <span className="btn-label">LinkedIn</span>
                    <svg className="btn-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-width">
          <Reveal>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
              <div>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                    letterSpacing: '-0.02em',
                    color: '#1A1D16',
                  }}
                >
                  Working on something worth building?
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.65,
                    color: 'rgba(26,29,22,0.55)',
                    marginTop: '8px',
                    maxWidth: '44ch',
                  }}
                >
                  We&apos;re selective about the projects we take on. If your problem is
                  worth solving properly, we&apos;d like to hear about it.
                </p>
              </div>
              <Link href="/contact" className="btn-primary" style={{ flexShrink: 0 }}>
                Start a conversation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
