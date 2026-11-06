'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { COMPANY, SOCIAL_LINKS } from '@/lib/constants'

const EASE = [0.16, 1, 0.3, 1] as const

// ── Live Pune Clock with animated digit-flip on each tick ──────────────
function PuneClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    function tick() {
      setTime(
        new Date().toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (!time) return null

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
      PUNE, IN —&nbsp;
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={time}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'inline-block',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {time}
        </motion.span>
      </AnimatePresence>
      &nbsp;<span style={{ opacity: 0.45 }}>UTC+5:30</span>
    </span>
  )
}

function item(delay: number) {
  return {
    initial:    { opacity: 0, y: 28 },
    animate:    { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease: EASE },
  }
}

// ── Lens Compression Reveal for "fixes it." ─────────────────────────
// Letters emerge wide-spaced (like an out-of-focus lens) then compress
// into their tight final tracking — a camera coming perfectly into focus.
function LensReveal() {
  return (
    <motion.span
      className="inline-block"
      initial={{ letterSpacing: '0.15em', opacity: 0, filter: 'blur(5px)' }}
      animate={{ letterSpacing: '-0.03em', opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.85, delay: 0.42, ease: EASE }}
      style={{ fontFamily: 'inherit', fontWeight: 'inherit' }}
    >
      fixes it.
    </motion.span>
  )
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center bg-canvas overflow-hidden"
      style={{ paddingTop: 160, paddingBottom: 100 }}
      aria-label="Hero"
    >
      <div className="container-width relative z-10 w-full">

        {/* ── Top micro-label — sits ABOVE the structural hairline ─────────── */}
        <motion.p
          {...item(0)}
          className="font-mono text-[12px] uppercase text-muted"
          style={{ letterSpacing: '0.06em', marginBottom: '10px' }}
        >
          Independent Software Studio &middot; Pune, India
        </motion.p>

        {/* ── Structural Grid Guide — coordinates left · clock right ───────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.0, ease: EASE }}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '32px',
          }}
        >
          {/* Geographic coordinates — flush left of the hairline */}
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.07em',
              color: 'rgba(26,29,22,0.38)',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              paddingRight: '14px',
            }}
          >
            // 18.5204° N, 73.8567° E
          </span>
          {/* Full-width hairline */}
          <div style={{ flex: 1, height: '1px', background: 'rgba(26,29,22,0.08)' }} />
          {/* Live clock — far right of the hairline */}
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.07em',
              color: 'rgba(26,29,22,0.38)',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              paddingLeft: '14px',
            }}
          >
            <PuneClock />
          </span>
        </motion.div>

        {/* Main headline */}
        <div
          className="font-heading font-bold text-primary mb-10"
          style={{
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            maxWidth: '900px',
          }}
        >
          {/* Line 1 — mask reveal */}
          <div className="overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            >
              We find the{' '}
              {/* "friction" — skew/wobble on hover */}
              <span
                className="inline-block"
                style={{ transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), color 0.3s' }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'skewX(-5deg) scale(1.02)'
                  el.style.color = 'rgba(26,29,22,0.55)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = 'skewX(0deg) scale(1)'
                  el.style.color = ''
                }}
              >
                friction.
              </span>
            </motion.span>
          </div>

          {/* Line 2 — mask reveal + lens compression on "fixes it." */}
          <div className="overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.22, ease: EASE }}
            >
              {/* "We build what" slides up first… */}
              We build what{' '}
              {/* …then "fixes it." blooms out of blur/wide-track */}
              <LensReveal />
            </motion.span>
          </div>
        </div>

        {/* Twin CTAs — asymmetric: solid pill + bare text link */}
        <motion.div {...item(0.6)} className="flex flex-wrap items-center gap-5 mb-14">
          <Link href="/products" className="btn-primary">
            Explore Products
          </Link>
          <Link href="/contact" className="btn-text-arrow">
            <span className="btn-label">Partner With Us</span>
            <svg
              className="btn-arrow"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>

        {/* Product quick-links row */}
        <motion.div
          {...item(0.78)}
          className="flex items-end gap-6 pt-8"
          style={{ borderTop: '1px solid rgba(26,29,22,0.08)' }}
        >
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted shrink-0">
            Our Products
          </span>

          {[
            { label: 'Kalvora', sub: 'Interior Design SaaS', href: SOCIAL_LINKS.kalvora },
            { label: 'Sill',    sub: 'Windows 11 Utility',   href: SOCIAL_LINKS.sill    },
          ].map(p => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5"
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold"
                style={{
                  background: '#1A1D16',
                  color: '#E6EAD4',
                  transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.1)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)' }}
              >
                {p.label[0]}
              </div>
              <div>
                <div className="text-sm font-semibold text-primary leading-none">{p.label}</div>
                <div className="text-[10px] text-muted mt-0.5">{p.sub}</div>
              </div>
            </a>
          ))}

          {/* Stats strip */}
          <div className="ml-auto hidden lg:flex items-center gap-6">
            {[
              { val: '500+',                     label: 'Kalvora users'   },
              { val: '5',                         label: 'Client projects' },
              { val: String(COMPANY.foundedYear), label: 'Est. Pune, India' },
            ].map(s => (
              <div key={s.label} className="text-left">
                <div className="font-heading font-bold text-xl text-primary" style={{ letterSpacing: '-0.03em' }}>
                  {s.val}
                </div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
