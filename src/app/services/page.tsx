import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/animations/Reveal'
import { SERVICES, PROCESS_STEPS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Software product development, custom web applications, AI & workflow automation, and professional website development. Kalipr Labs, Pune.',
}

export default function ServicesPage() {
  return (
    <div className="bg-canvas pt-[72px]">

      {/* ── Header ─────────────────────────────────────────────────── */}
      <section className="section-pad border-b border-border">
        <div className="container-width">
          <Reveal>
            <SectionLabel>// services</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 font-heading text-[clamp(2rem,5vw,3rem)] font-semibold tracking-tight text-primary max-w-[640px] text-balance">
              We build software. For real problems.
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 text-base leading-relaxed text-secondary max-w-[480px]">
              Four areas of work. All executed with the same engineering standard — built
              to function reliably, scale sensibly, and deliver genuine value.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Services — Z-Pattern alternating 50/50 layout ──────────── */}
      <section className="section-pad border-b border-border">
        <div className="container-width">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {SERVICES.map((service, i) => {
              const isEven = i % 2 === 0
              return (
                <Reveal key={service.id} delay={i * 0.06}>
                  <div
                    className="services-split-row"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '0',
                      borderBottom: i < SERVICES.length - 1 ? '1px solid rgba(26,29,22,0.08)' : 'none',
                      padding: '56px 0',
                    }}
                  >
                    {/* Content block — alternates left/right */}
                    <div
                      className="services-content-block"
                      style={{
                        order: isEven ? 1 : 2,
                        paddingRight: isEven ? '64px' : '0',
                        paddingLeft: isEven ? '0' : '64px',
                        borderRight: isEven ? '1px solid rgba(26,29,22,0.08)' : 'none',
                        borderLeft: !isEven ? '1px solid rgba(26,29,22,0.08)' : 'none',
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
                        {service.id}
                      </span>
                      <h2
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 700,
                          fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                          letterSpacing: '-0.03em',
                          color: '#1A1D16',
                          marginBottom: '16px',
                        }}
                      >
                        {service.title}
                      </h2>
                      <p
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.9375rem',
                          lineHeight: 1.75,
                          color: 'rgba(26,29,22,0.60)',
                          maxWidth: '44ch',
                          marginBottom: '24px',
                        }}
                      >
                        {service.description}
                      </p>
                      <Link href="/contact" className="btn-text-arrow" style={{ color: 'rgba(26,29,22,0.55)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                        <span className="btn-label">Start a project</span>
                        <svg className="btn-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>

                    {/* Meta block — the opposing half */}
                    <div
                      className="services-meta-block"
                      style={{
                        order: isEven ? 2 : 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: isEven ? '0 0 0 64px' : '0 64px 0 0',
                        gap: '16px',
                      }}
                    >
                      {/* Problem statement */}
                      <div
                        style={{
                          background: 'rgba(26,29,22,0.03)',
                          border: '1px solid rgba(26,29,22,0.07)',
                          borderRadius: '10px',
                          padding: '20px 24px',
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
                            marginBottom: '8px',
                          }}
                        >
                          // The Problem
                        </span>
                        <p
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.875rem',
                            lineHeight: 1.65,
                            color: 'rgba(26,29,22,0.55)',
                            fontStyle: 'italic',
                          }}
                        >
                          &ldquo;{service.problem}&rdquo;
                        </p>
                      </div>
                      {/* Deliverable */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: '#1A1D16',
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.875rem',
                            color: 'rgba(26,29,22,0.65)',
                          }}
                        >
                          {service.deliverable}
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Process — Horizontal Pipeline Strip ────────────────────── */}
      <section className="section-pad border-b border-border bg-surface">
        <div className="container-width">
          <Reveal>
            <SectionLabel>// how we work</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                letterSpacing: '-0.03em',
                color: '#1A1D16',
                marginTop: '16px',
                marginBottom: '48px',
              }}
            >
              Working with us.
            </h2>
          </Reveal>

          {/* Horizontal pipeline — single axis */}
          <Reveal delay={0.1}>
            <div
              style={{
                display: 'flex',
                alignItems: 'stretch',
                gap: 0,
                borderTop: '1px solid rgba(26,29,22,0.08)',
                borderBottom: '1px solid rgba(26,29,22,0.08)',
                overflowX: 'auto',
              }}
            >
              {PROCESS_STEPS.map((step, i) => (
                <div
                  key={step.step}
                  style={{
                    display: 'flex',
                    alignItems: 'stretch',
                    flex: 1,
                    minWidth: '200px',
                  }}
                >
                  {/* Step block */}
                  <div
                    style={{
                      flex: 1,
                      padding: '32px 28px',
                      borderRight: i < PROCESS_STEPS.length - 1 ? '1px solid rgba(26,29,22,0.08)' : 'none',
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
                      Step {step.step}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: '1.0625rem',
                        letterSpacing: '-0.02em',
                        color: '#1A1D16',
                        marginBottom: '10px',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.875rem',
                        lineHeight: 1.65,
                        color: 'rgba(26,29,22,0.55)',
                        marginBottom: '16px',
                      }}
                    >
                      {step.description}
                    </p>
                    {/* Deliverable tag */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        paddingTop: '12px',
                        borderTop: '1px solid rgba(26,29,22,0.07)',
                        width: '100%',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.65rem',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: 'rgba(26,29,22,0.28)',
                        }}
                      >
                        Output:
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.65rem',
                          letterSpacing: '0.04em',
                          color: 'rgba(26,29,22,0.45)',
                        }}
                      >
                        {step.deliverable}
                      </span>
                    </div>
                  </div>

                  {/* Arrow connector between steps */}
                  {i < PROCESS_STEPS.length - 1 && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        flexShrink: 0,
                        color: 'rgba(26,29,22,0.20)',
                        fontSize: '18px',
                        fontFamily: 'var(--font-heading)',
                      }}
                      aria-hidden
                    >
                      →
                    </div>
                  )}
                </div>
              ))}
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
                  Have a project in mind?
                </h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', lineHeight: 1.65, color: 'rgba(26,29,22,0.55)', marginTop: '8px', maxWidth: '44ch' }}>
                  Tell us what you&apos;re working on. We&apos;ll take it from there.
                </p>
              </div>
              <Link href="/contact" className="btn-primary" style={{ flexShrink: 0 }}>
                Start a Project
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
