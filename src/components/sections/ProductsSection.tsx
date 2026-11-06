'use client'

import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import KalvoraUI from '@/components/ui/KalvoraUI'
import SillUI from '@/components/ui/SillUI'
import { KALVORA, SILL, SOCIAL_LINKS } from '@/lib/constants'

function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' } as any)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ── Kalvora Block ─────────────────────────────────────────────── */
function KalvoraBlock() {
  return (
    <section
      aria-label="Kalvora — proposal software"
      style={{ backgroundColor: '#EDE5D5' }}
    >
      <div className="container-width section-pad">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 lg:items-center">

          {/* Left — copy */}
          <div className="flex flex-col gap-8">
            <FadeUp delay={0}>
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-widest uppercase"
                  style={{
                    background: 'rgba(44,31,14,0.10)',
                    color: '#2C1F0E',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{ background: '#8B6F47' }}
                  />
                  Live · 500+ users
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h2
                className="text-balance"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  color: '#2C1F0E',
                }}
              >
                {KALVORA.name}
              </h2>
              <p
                className="mt-3"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 500,
                  fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                  color: '#8B6F47',
                  letterSpacing: '-0.01em',
                }}
              >
                {KALVORA.tagline}
              </p>
            </FadeUp>

            <FadeUp delay={0.14}>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  color: 'rgba(44,31,14,0.70)',
                  maxWidth: '42ch',
                }}
              >
                {KALVORA.description}
              </p>
            </FadeUp>

            {/* Workflow steps */}
            <FadeUp delay={0.2}>
              <div className="flex flex-col gap-3">
                {KALVORA.workflow.map((step, i) => (
                  <div key={step.step} className="flex items-start gap-4">
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        color: '#8B6F47',
                        paddingTop: '3px',
                        minWidth: '20px',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {step.step}
                    </span>
                    <div>
                      <p
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 600,
                          fontSize: '0.875rem',
                          color: '#2C1F0E',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {step.label}
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.8125rem',
                          lineHeight: 1.5,
                          color: 'rgba(44,31,14,0.55)',
                          marginTop: '2px',
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* CTAs */}
            <FadeUp delay={0.26}>
              <div className="flex items-center gap-3 flex-wrap">
                <Link
                  href={SOCIAL_LINKS.kalvora}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-500"
                  style={{
                    background: '#2C1F0E',
                    color: '#EDE5D5',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Try Kalvora
                  <ExternalLink size={14} />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-500"
                  style={{
                    background: 'rgba(44,31,14,0.08)',
                    color: '#2C1F0E',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Learn more
                  <ArrowRight size={14} />
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Right — coded UI */}
          <FadeUp delay={0.1} className="w-full">
            <KalvoraUI />
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

/* ── Sill Block ────────────────────────────────────────────────── */
function SillBlock() {
  return (
    <section
      aria-label="Sill — Windows productivity utility"
      style={{ backgroundColor: '#1A1D16', marginTop: '4px' }}
    >
      <div className="container-width section-pad">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 lg:items-center">

          {/* Left — coded UI */}
          <FadeUp delay={0.1} className="w-full order-2 lg:order-1">
            <SillUI />
          </FadeUp>

          {/* Right — copy */}
          <div className="flex flex-col gap-8 order-1 lg:order-2">
            <FadeUp delay={0}>
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-widest uppercase"
                  style={{
                    background: 'rgba(230,234,212,0.08)',
                    color: 'rgba(230,234,212,0.6)',
                    fontFamily: 'var(--font-mono)',
                    border: '1px solid rgba(230,234,212,0.12)',
                  }}
                >
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{ background: '#4CAF82' }}
                  />
                  Live · Windows 11
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h2
                className="text-balance"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  color: '#E6EAD4',
                }}
              >
                {SILL.name}
              </h2>
              <p
                className="mt-3"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 500,
                  fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                  color: 'rgba(230,234,212,0.55)',
                  letterSpacing: '-0.01em',
                }}
              >
                {SILL.tagline}
              </p>
            </FadeUp>

            <FadeUp delay={0.14}>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  color: 'rgba(230,234,212,0.50)',
                  maxWidth: '42ch',
                }}
              >
                {SILL.description}
              </p>
            </FadeUp>

            {/* Capabilities */}
            <FadeUp delay={0.2}>
              <div className="flex flex-col gap-6">
                {SILL.capabilities.map((cap) => (
                  <div key={cap.group}>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 600,
                          fontSize: '0.875rem',
                          color: '#E6EAD4',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {cap.group}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.8125rem',
                        color: 'rgba(230,234,212,0.45)',
                        marginBottom: '8px',
                      }}
                    >
                      {cap.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cap.features.slice(0, 4).map((f) => (
                        <span
                          key={f}
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.75rem',
                            color: 'rgba(230,234,212,0.50)',
                            background: 'rgba(230,234,212,0.06)',
                            border: '1px solid rgba(230,234,212,0.08)',
                            borderRadius: '6px',
                            padding: '3px 10px',
                          }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Platform note */}
            <FadeUp delay={0.24}>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'rgba(230,234,212,0.30)',
                  letterSpacing: '0.06em',
                }}
              >
                {SILL.pricing} · {SILL.platform}
              </p>
            </FadeUp>

            {/* CTAs */}
            <FadeUp delay={0.3}>
              <div className="flex items-center gap-3 flex-wrap">
                <Link
                  href={SOCIAL_LINKS.sill}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-500"
                  style={{
                    background: '#E6EAD4',
                    color: '#1A1D16',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Get Sill
                  <ExternalLink size={14} />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-500"
                  style={{
                    background: 'rgba(230,234,212,0.08)',
                    color: 'rgba(230,234,212,0.7)',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '-0.01em',
                    border: '1px solid rgba(230,234,212,0.10)',
                  }}
                >
                  Learn more
                  <ArrowRight size={14} />
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Export ─────────────────────────────────────────────────────── */
export default function ProductsSection() {
  return (
    <div id="products">
      <KalvoraBlock />
      <SillBlock />
    </div>
  )
}
