'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { COMPANY, SCREENSHOT_PATHS } from '@/lib/constants'

const EASE = [0.16, 1, 0.3, 1] as const

// Cycling words that swap in the headline
const CYCLE_WORDS = ['friction.', 'waste.', 'workarounds.', 'complexity.']

function item(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  }
}

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setWordIdx((i) => (i + 1) % CYCLE_WORDS.length)
    }, 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[72px]"
      style={{ background: '#0C0C0E' }}
      aria-label="Hero"
    >
      {/* Dot grid texture */}
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid-dark opacity-100" />

      {/* Cobalt ambient glow -- top centre */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-48 w-[900px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(67,89,232,0.18) 0%, transparent 65%)' }}
      />

      {/* Vermilion ambient glow -- bottom right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-0 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(240,120,82,0.07) 0%, transparent 65%)' }}
      />

      <div className="container-width relative z-10 w-full py-20 lg:py-28">
        <div className="flex flex-col items-center text-center">

          {/* Announcement badge -- Cal.com style pill */}
          <motion.div {...item(0)} className="mb-10">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[0.8125rem] font-medium"
              style={{
                borderColor: 'rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.05)',
                color: 'rgba(255,255,255,0.65)',
              }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ background: '#F07852' }}
              />
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                Independent Software Studio
              </span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>Pune, India</span>
            </span>
          </motion.div>

          {/* P1 -- Giant headline, Cal.com scale */}
          <div
            className="font-heading font-bold text-white mb-8 text-balance"
            style={{
              fontSize: 'clamp(2.75rem, 8vw, 6.5rem)',
              lineHeight: 1.0,
              letterSpacing: '-0.04em',
              maxWidth: '900px',
            }}
          >
            {/* Line 1 */}
            <div className="overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
              >
                We find the
              </motion.span>
            </div>

            {/* Line 2 -- cycling cobalt word */}
            <div className="overflow-hidden flex justify-center">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, delay: 0.18, ease: EASE }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIdx}
                    style={{ color: '#7B8FF0' }}
                    className="inline-block"
                    initial={{ y: 32, opacity: 0 }}
                    animate={{ y: 0,  opacity: 1 }}
                    exit={{   y: -28, opacity: 0 }}
                    transition={{ duration: 0.42, ease: EASE }}
                    aria-live="polite"
                  >
                    {CYCLE_WORDS[wordIdx]}
                  </motion.span>
                </AnimatePresence>
              </motion.span>
            </div>

            {/* Line 3 */}
            <div className="overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, delay: 0.26, ease: EASE }}
              >
                We build what
              </motion.span>
            </div>

            {/* Line 4 -- vermilion underline */}
            <div className="overflow-hidden inline-block">
              <motion.span
                className="relative block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, delay: 0.34, ease: EASE }}
              >
                fixes it.
                <motion.span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-[4px] rounded-full w-full"
                  style={{ background: '#F07852', transformOrigin: 'left' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.65, delay: 1.0, ease: EASE }}
                />
              </motion.span>
            </div>
          </div>

          {/* P2 -- Supporting copy */}
          <motion.p
            {...item(0.55)}
            className="text-[1.0625rem] leading-[1.72] mb-10 max-w-[520px] text-pretty"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            {COMPANY.description} Turning everyday problems into useful software.
          </motion.p>

          {/* P2 -- CTAs */}
          <motion.div {...item(0.65)} className="flex flex-wrap items-center justify-center gap-3 mb-16">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 bg-white text-black font-semibold px-7 py-3.5 rounded-full text-[0.9375rem] transition-all duration-200 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]"
            >
              See our products
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 font-medium px-7 py-[13px] rounded-full text-[0.9375rem] transition-all duration-200 btn-ghost-dark"
            >
              Build with us
            </Link>
          </motion.div>

          {/* P3 -- Product quick links */}
          <motion.div
            {...item(0.78)}
            className="flex items-center gap-4 pt-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
          >
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Our products
            </span>
            <div className="flex items-center gap-6">
              {[
                { label: 'Kalvora', href: '/products' },
                { label: 'Sill',    href: '/products' },
              ].map((p) => (
                <Link
                  key={p.label}
                  href={p.href}
                  className="group relative text-sm font-medium inline-flex items-center gap-1 transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  <span className="group-hover:text-white transition-colors duration-200">{p.label}</span>
                  <ArrowRight className="w-3 h-3 -rotate-45 opacity-40 transition-all duration-200 group-hover:opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span
                    aria-hidden
                    className="absolute -bottom-0.5 left-0 h-px w-full rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                    style={{ background: 'rgba(255,255,255,0.4)' }}
                  />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Product screenshot composition -- Cal.com style, below the fold hint */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.9, ease: EASE }}
            className="mt-20 w-full max-w-[1100px] mx-auto relative"
          >
            {/* Main product screenshot */}
            <div
              className="relative rounded-2xl overflow-hidden border"
              style={{
                borderColor: 'rgba(255,255,255,0.1)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
              }}
            >
              {/* Browser chrome bar */}
              <div
                className="flex items-center gap-3 px-4 py-3 border-b"
                style={{ background: '#141416', borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F56' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FFBD2E' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#27C93F' }} />
                </div>
                <div
                  className="flex-1 mx-4 h-5 rounded px-3 flex items-center"
                  style={{ background: 'rgba(255,255,255,0.05)', maxWidth: '300px' }}
                >
                  <span className="font-mono text-[10px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    kalvora.kaliprlabs.in
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.2)' }}>
                  KALVORA
                </span>
              </div>

              {/* Screenshot */}
              <div className="relative" style={{ background: '#F0E8D8' }}>
                <Image
                  src={SCREENSHOT_PATHS.kalvora.proposalEditor}
                  alt="Kalvora — proposal editor for interior designers"
                  width={1100}
                  height={620}
                  className="w-full object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, 1100px"
                />
                {/* Bottom fade to dark */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                  style={{ background: 'linear-gradient(to bottom, transparent, #0C0C0E)' }}
                />
              </div>
            </div>

            {/* Sill floating badge -- offset bottom right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3, ease: EASE }}
              className="absolute -bottom-6 -right-4 md:right-8 rounded-xl border overflow-hidden shadow-2xl hidden md:block"
              style={{
                background: '#191B22',
                borderColor: 'rgba(255,255,255,0.1)',
                width: '220px',
              }}
            >
              <div className="px-3 py-2.5 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  SILL — Windows 11
                </span>
              </div>
              <Image
                src={SCREENSHOT_PATHS.sill.commandPalette}
                alt="Sill command palette"
                width={220}
                height={130}
                className="w-full object-cover object-top"
                sizes="220px"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{ background: 'linear-gradient(to bottom, transparent, #0C0C0E)' }}
      />
    </section>
  )
}
