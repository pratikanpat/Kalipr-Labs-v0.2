'use client'

import { ArrowRight } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { COMPANY } from '@/lib/constants'
import { MagneticButton } from '@/components/ui/MagneticButton'

export default function ClosingCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' } as any)

  return (
    <section
      aria-labelledby="cta-heading"
      style={{ background: '#E6EAD4' }}
    >
      {/* Top separator */}
      <div style={{ height: '1px', background: 'rgba(26,29,22,0.07)' }} />

      <div className="container-width section-pad">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: '#F5F7EF',
            borderRadius: 'var(--radius-card)',
            padding: 'clamp(40px, 7vw, 80px)',
            border: '1px solid rgba(26,29,22,0.07)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '32px',
          }}
        >
          {/* Label */}
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: 'rgba(26,29,22,0.35)',
              textTransform: 'uppercase',
            }}
          >
            Start a project
          </span>

          {/* Headline */}
          <h2
            id="cta-heading"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              letterSpacing: '-0.04em',
              lineHeight: 1.08,
              color: '#1A1D16',
              maxWidth: '22ch',
            }}
          >
            Have something worth building?
          </h2>

          {/* Sub-copy */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
              lineHeight: 1.7,
              color: 'rgba(26,29,22,0.55)',
              maxWidth: '44ch',
            }}
          >
            We work with a small number of clients at a time — which means every
            project gets our full attention. If you have a problem worth solving,
            let's talk about it.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <MagneticButton href="/contact" className="btn-primary">
              Start a conversation
              <ArrowRight size={15} />
            </MagneticButton>
            <MagneticButton
              href={`mailto:${COMPANY.email}`}
              external
              className="btn-ghost"
            >
              {COMPANY.email}
            </MagneticButton>
          </div>

          {/* Footnote */}
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'rgba(26,29,22,0.30)',
              letterSpacing: '0.04em',
            }}
          >
            Based in {COMPANY.location} · Est. {COMPANY.foundedYear} · Independent studio
          </p>
        </motion.div>
      </div>
    </section>
  )
}
