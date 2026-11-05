'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { COMPANY, SOCIAL_LINKS } from '@/lib/constants'
import { ease } from '@/lib/utils'

const item = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.1, ease } }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-canvas pt-[72px] overflow-hidden">

      {/* Dot grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 dot-grid opacity-60"
      />

      {/* Radial vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 90% 70% at 50% 50%, transparent 40%, #F5F1E9 100%)' }}
      />

      {/* Cobalt accent glow — top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #4359E8 0%, transparent 70%)' }}
      />

      <div className="container-width relative z-10 w-full py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-center gap-16 lg:gap-12">

          {/* ── Left: Copy ── */}
          <div className="max-w-[600px]">

            {/* Studio label */}
            <motion.div
              custom={0} variants={item} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2.5 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted">
                Independent Software Studio · Pune, India
              </span>
            </motion.div>

            {/* Display headline */}
            <motion.h1
              custom={1} variants={item} initial="hidden" animate="visible"
              className="font-heading font-bold text-primary text-balance"
              style={{ fontSize: 'clamp(2.6rem, 6vw, 4.25rem)', lineHeight: 1.06, letterSpacing: '-0.03em' }}
            >
              We find the friction.{' '}
              <span className="relative inline-block">
                We build
                {/* vermilion underline accent */}
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
                  style={{ background: '#F07852', opacity: 0.7 }}
                />
              </span>{' '}
              what fixes it.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2} variants={item} initial="hidden" animate="visible"
              className="mt-6 text-[1.0625rem] leading-[1.7] text-secondary max-w-[460px] text-pretty"
            >
              An independent software studio from Pune. We build our own products and
              engineer digital solutions for businesses — turning everyday problems
              into useful software.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3} variants={item} initial="hidden" animate="visible"
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-accent text-white font-medium px-7 py-3.5 rounded-full text-[0.9375rem] hover:bg-accent-hover transition-colors"
              >
                Explore our products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-border-strong text-primary font-medium px-7 py-[13px] rounded-full text-[0.9375rem] hover:bg-surface transition-colors"
              >
                Build with us
              </Link>
            </motion.div>

            {/* Product quick-links */}
            <motion.div
              custom={4} variants={item} initial="hidden" animate="visible"
              className="mt-10 flex items-center gap-6 pt-8 border-t border-border"
            >
              <span className="font-mono text-[11px] tracking-widest uppercase text-muted">Our products</span>
              <div className="flex items-center gap-4">
                <a
                  href={SOCIAL_LINKS.kalvora}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-sm text-primary hover:text-accent transition-colors flex items-center gap-1"
                >
                  Kalvora
                  <ArrowRight className="w-3 h-3 -rotate-45 opacity-50" />
                </a>
                <span className="text-border-strong">·</span>
                <a
                  href={SOCIAL_LINKS.sill}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-sm text-primary hover:text-accent transition-colors flex items-center gap-1"
                >
                  Sill
                  <ArrowRight className="w-3 h-3 -rotate-45 opacity-50" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Product Preview Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="hidden lg:flex flex-col gap-4 items-end"
          >
            {/* Kalvora card */}
            <div
              className="w-full max-w-[420px] rounded-2xl overflow-hidden border border-border shadow-sm"
              style={{ background: '#F0E8D8' }}
            >
              <div className="px-5 py-4 flex items-center justify-between border-b border-black/[0.07]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-kalvora-accent opacity-70" />
                  <span className="font-mono text-[11px] tracking-widest uppercase text-kalvora-ink/60">Kalvora</span>
                </div>
                <span className="font-mono text-[10px] text-kalvora-ink/40">Interior Design SaaS</span>
              </div>
              {/* Screenshot placeholder — replace with actual screenshot */}
              <div
                className="aspect-[16/9] flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #E8DCC8 0%, #D4C4A8 100%)' }}
              >
                <div className="text-center space-y-1">
                  <p className="font-mono text-[10px] tracking-widest uppercase text-kalvora-ink/30">Screenshot</p>
                  <p className="font-mono text-[10px] text-kalvora-ink/20">public/screenshots/kalvora/01.png</p>
                </div>
              </div>
              <div className="px-5 py-3 flex items-center justify-between">
                <span className="text-xs text-kalvora-ink/60">Proposal &amp; Invoice Software</span>
                <span className="font-mono text-[10px] text-kalvora-accent font-medium">500+ users</span>
              </div>
            </div>

            {/* Sill card — offset right */}
            <div
              className="w-full max-w-[380px] rounded-2xl overflow-hidden border border-white/10 shadow-sm mr-[-24px]"
              style={{ background: '#191B22' }}
            >
              <div className="px-5 py-4 flex items-center justify-between border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-sill-accent opacity-70" />
                  <span className="font-mono text-[11px] tracking-widest uppercase text-white/40">Sill</span>
                </div>
                <span className="font-mono text-[10px] text-white/25">Windows 11 Utility</span>
              </div>
              {/* Screenshot placeholder */}
              <div
                className="aspect-[16/9] flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #22242E 0%, #1A1C26 100%)' }}
              >
                <div className="text-center space-y-1">
                  <p className="font-mono text-[10px] tracking-widest uppercase text-white/20">Screenshot</p>
                  <p className="font-mono text-[10px] text-white/15">public/screenshots/sill/01.png</p>
                </div>
              </div>
              <div className="px-5 py-3 flex items-center justify-between">
                <span className="text-xs text-white/40">Command Palette · Taskbar Widget</span>
                <span className="font-mono text-[10px] text-sill-accent font-medium">Free + Pro</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade to next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-20"
        style={{ background: 'linear-gradient(to bottom, transparent, #F5F1E9)' }}
      />
    </section>
  )
}
