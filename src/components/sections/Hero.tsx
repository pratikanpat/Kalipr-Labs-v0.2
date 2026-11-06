'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { COMPANY, SOCIAL_LINKS } from '@/lib/constants'

const EASE = [0.16, 1, 0.3, 1] as const

// ── Staggered line reveal (clip-path mask approach) ─────────────────
function item(delay: number) {
  return {
    initial:    { opacity: 0, y: 28 },
    animate:    { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease: EASE },
  }
}

// ── Haptic Snap-to-Grid for "fixes it." ────────────────────────────
// Letters drop from chaos (random tilt + y offset) and snap to baseline
// with a spring bounce, staggered per character.
const SNAP_LETTERS = ['f','i','x','e','s',' ','i','t','.']
const SPRING = { type: 'spring', stiffness: 220, damping: 22 } as const

// Pre-computed stable chaos values (avoid re-randomising each render)
const CHAOS: Array<{ y: number; rotate: number }> = [
  { y: -72, rotate: -22 },
  { y: -88, rotate:  18 },
  { y: -65, rotate: -31 },
  { y: -91, rotate:  12 },
  { y: -78, rotate: -8  },
  { y: 0,   rotate:  0  }, // space — no animation
  { y: -83, rotate:  27 },
  { y: -61, rotate: -19 },
  { y: -95, rotate:  35 },
]

function HapticSnap() {
  const [mounted, setMounted] = useState(false)
  // Micro-flash line on page load
  const [flash, setFlash] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Flash fires when last letter lands: 0.3 + 8*0.04 = 0.62s delay + ~0.4s spring = ~1s
    const t = setTimeout(() => {
      setFlash(true)
      setTimeout(() => setFlash(false), 100)
    }, 1050)
    return () => clearTimeout(t)
  }, [])

  return (
    <span className="inline-block whitespace-nowrap relative">
      {SNAP_LETTERS.map((char, i) => {
        if (char === ' ') return <span key={i}>&thinsp;&thinsp;</span>
        const chaos = CHAOS[i]
        return (
          <motion.span
            key={i}
            className="inline-block"
            style={{ originY: 1 }}
            initial={{ y: chaos.y, rotate: chaos.rotate, opacity: 0 }}
            animate={mounted ? { y: 0, rotate: 0, opacity: 1 } : {}}
            transition={{ ...SPRING, delay: 0.3 + i * 0.04 }}
          >
            {char}
          </motion.span>
        )
      })}
      {/* Micro flash-line — fires on snap completion */}
      <AnimatePresence>
        {flash && (
          <motion.span
            aria-hidden
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 0 }}
            exit={{}}
            transition={{ duration: 0.1, ease: 'linear' }}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: '#1A1D16',
              transformOrigin: 'left',
              borderRadius: '1px',
            }}
          />
        )}
      </AnimatePresence>
    </span>
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

        {/* Top micro-label */}
        <motion.p
          {...item(0)}
          className="font-mono text-[12px] uppercase text-muted mb-10"
          style={{ letterSpacing: '0.06em' }}
        >
          Independent Software Studio &middot; Pune, India
        </motion.p>

        {/* Main headline */}
        <div
          className="font-heading font-bold text-primary mb-10 text-balance"
          style={{
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            maxWidth: '900px',
          }}
        >
          {/* Line 1 — mask reveal with asymmetric ease */}
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

          {/* Line 2 — haptic snap for "fixes it." */}
          <div className="overflow-visible">
            <motion.span
              className="block"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            >
              We build what{' '}
              <HapticSnap />
            </motion.span>
          </div>
        </div>

        {/* Twin CTAs */}
        <motion.div {...item(0.55)} className="flex flex-wrap items-center gap-3 mb-14">
          <Link href="/products" className="btn-primary">
            Explore Products
          </Link>
          <Link href="/contact" className="btn-ghost">
            Partner With Us
          </Link>
        </motion.div>

        {/* Product quick-links row */}
        <motion.div
          {...item(0.72)}
          className="flex items-center gap-6 pt-8"
          style={{ borderTop: '1px solid rgba(26,29,22,0.08)' }}
        >
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted shrink-0">
            Our Products
          </span>
          {[
            { label: 'Kalvora', sub: 'Interior Design SaaS', href: SOCIAL_LINKS.kalvora },
            { label: 'Sill',    sub: 'Windows 11 Utility',   href: SOCIAL_LINKS.sill },
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
              { val: '500+', label: 'Kalvora users' },
              { val: '5',    label: 'Client projects' },
              { val: String(COMPANY.foundedYear), label: 'Est. Pune, India' },
            ].map(s => (
              <div key={s.label} className="text-right">
                <div
                  className="font-heading font-bold text-xl text-primary"
                  style={{ letterSpacing: '-0.03em' }}
                >
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
