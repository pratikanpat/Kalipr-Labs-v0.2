'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { COMPANY, SOCIAL_LINKS, SCREENSHOT_PATHS } from '@/lib/constants'

const EASE = [0.16, 1, 0.3, 1] as const

// ── Cycling words that swap in the headline
const CYCLE_WORDS = ['friction.', 'waste.', 'workarounds.', 'complexity.']

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setWordIdx((i) => (i + 1) % CYCLE_WORDS.length)
    }, 2600)
    return () => clearInterval(id)
  }, [])

  const item = (delay: number) => ({
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  })

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center bg-canvas pt-[72px] overflow-hidden"
      aria-label="Hero"
    >
      {/* Background texture */}
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-50" />

      {/* Soft cobalt glow — top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-64 -right-64 w-[800px] h-[800px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(67,89,232,0.07) 0%, transparent 65%)' }}
      />
      {/* Soft vermilion glow — bottom left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(240,120,82,0.05) 0%, transparent 65%)' }}
      />

      <div className="container-width relative z-10 w-full py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] items-center gap-16 xl:gap-20">

          {/* ── LEFT: Copy — strict P1 → P2 → P3 hierarchy ── */}
          <div>

            {/* P3 — Studio label (smallest, recedes) */}
            <motion.div {...item(0)} className="inline-flex items-center gap-2.5 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted">
                Independent Software Studio · Pune, India
              </span>
            </motion.div>

            {/* P1 — Display headline (commands full attention) */}
            <div
              className="font-heading font-bold text-primary mb-8"
              style={{
                fontSize: 'clamp(3rem, 7.5vw, 5.5rem)',
                lineHeight: 1.03,
                letterSpacing: '-0.035em',
              }}
            >
              {/* Line 1 — static */}
              <motion.div {...item(0.08)} className="overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
                >
                  We find the
                </motion.span>
              </motion.div>

              {/* Line 2 — cycling word highlighted in cobalt */}
              <motion.div {...item(0.0)} className="flex items-baseline gap-[0.2em] overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIdx}
                      className="inline-block text-accent"
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
              </motion.div>

              {/* Line 3 — static */}
              <motion.div {...item(0.0)} className="overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.24, ease: EASE }}
                >
                  We build what
                </motion.span>
              </motion.div>

              {/* Line 4 — with vermilion underline accent */}
              <motion.div {...item(0.0)} className="overflow-hidden">
                <motion.span
                  className="block relative inline-block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.32, ease: EASE }}
                >
                  fixes it.
                  {/* Animated underline draws in after headline lands */}
                  <motion.span
                    aria-hidden
                    className="absolute -bottom-1 left-0 h-[4px] rounded-full"
                    style={{ background: '#F07852' }}
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.9, ease: EASE }}
                  />
                </motion.span>
              </motion.div>
            </div>

            {/* P2 — Supporting copy (secondary attention) */}
            <motion.p
              {...item(0.5)}
              className="text-[1.125rem] leading-[1.72] text-secondary mb-10 max-w-[480px] text-pretty"
            >
              An independent software studio from Pune. We build our own products
              and engineer digital solutions for businesses — turning everyday
              problems into useful software.
            </motion.p>

            {/* P2 — CTAs */}
            <motion.div {...item(0.6)} className="flex flex-wrap items-center gap-3 mb-12">
              {/* Primary CTA — most prominent */}
              <Link
                href="/products"
                className="group inline-flex items-center gap-2.5 bg-accent text-white font-semibold px-7 py-3.5 rounded-full text-[0.9375rem] transition-all duration-200 hover:bg-accent-hover hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(67,89,232,0.4)] active:scale-[0.98]"
              >
                Explore our products
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 border border-border-strong text-primary font-medium px-7 py-[13px] rounded-full text-[0.9375rem] transition-all duration-200 hover:border-primary hover:bg-surface active:scale-[0.98]"
              >
                Build with us
              </Link>
            </motion.div>

            {/* P3 — Product quick-links (recedes, context only) */}
            <motion.div
              {...item(0.72)}
              className="flex items-center gap-6 pt-7 border-t border-border"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted shrink-0">
                Our products
              </span>
              <div className="flex items-center gap-5">
                {[
                  { label: 'Kalvora', href: SOCIAL_LINKS.kalvora },
                  { label: 'Sill',    href: SOCIAL_LINKS.sill },
                ].map((p) => (
                  <a
                    key={p.label}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative font-medium text-sm text-secondary hover:text-primary transition-colors duration-200 inline-flex items-center gap-1"
                  >
                    {p.label}
                    <ArrowRight className="w-3 h-3 -rotate-45 opacity-40 transition-all duration-200 group-hover:opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    {/* Underline slide */}
                    <span
                      aria-hidden
                      className="absolute -bottom-0.5 left-0 h-px w-full bg-current rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Product cards ── */}
          <div className="hidden lg:block relative">

            {/* Kalvora card */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -1.5 }}
              animate={{ opacity: 1, y: 0, rotate: -1.5 }}
              transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
              whileHover={{ rotate: 0, y: -6, transition: { duration: 0.35, ease: EASE } }}
              className="relative rounded-2xl overflow-hidden border shadow-lg cursor-default"
              style={{ background: '#F0E8D8', borderColor: 'rgba(139,111,71,0.2)' }}
            >
              <div className="px-4 py-3 flex items-center gap-3 border-b" style={{ borderColor: 'rgba(139,111,71,0.12)' }}>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F07852', opacity: 0.7 }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F5C842', opacity: 0.6 }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#5AC27A', opacity: 0.6 }} />
                </div>
                <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'rgba(44,31,14,0.4)' }}>
                  kalvora — proposal editor
                </span>
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src={SCREENSHOT_PATHS.kalvora.proposalEditor}
                  alt="Kalvora proposal editor"
                  fill
                  className="object-cover object-top"
                  sizes="480px"
                />
              </div>
              <div className="px-4 py-2.5 flex items-center justify-between">
                <span className="text-xs" style={{ color: 'rgba(44,31,14,0.5)' }}>Interior Design SaaS</span>
                <span className="font-mono text-[10px] font-medium" style={{ color: '#8B6F47' }}>{COMPANY.kalvoraUsers} users</span>
              </div>
            </motion.div>

            {/* Sill card — offset, slightly overlapping */}
            <motion.div
              initial={{ opacity: 0, y: 60, rotate: 1.5 }}
              animate={{ opacity: 1, y: -60, rotate: 1.5 }}
              transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
              whileHover={{ rotate: 0, y: -68, transition: { duration: 0.35, ease: EASE } }}
              className="relative rounded-2xl overflow-hidden border shadow-xl cursor-default ml-8"
              style={{ background: '#191B22', borderColor: 'rgba(255,255,255,0.08)' }}
            >
              <div className="px-4 py-3 flex items-center gap-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <span className="font-mono text-[10px] tracking-widest uppercase text-white/25">
                  sill — command palette
                </span>
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src={SCREENSHOT_PATHS.sill.commandPalette}
                  alt="Sill command palette"
                  fill
                  className="object-cover object-top"
                  sizes="440px"
                />
              </div>
              <div className="px-4 py-2.5 flex items-center justify-between">
                <span className="text-xs text-white/30">Windows 11 Utility</span>
                <span className="font-mono text-[10px] text-white/40">Free + Pro</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
        style={{ background: 'linear-gradient(to bottom, transparent, #F5F1E9)' }}
      />
    </section>
  )
}
