'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight, Check } from 'lucide-react'
import { Reveal } from '@/components/animations/Reveal'
import { KALVORA, SILL, SOCIAL_LINKS, SCREENSHOT_PATHS } from '@/lib/constants'

// ── Screenshot with styled placeholder fallback
function ScreenshotFrame({
  src,
  alt,
  placeholderPath,
  dark = false,
}: {
  src: string
  alt: string
  placeholderPath: string
  dark?: boolean
}) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border"
      style={{ borderColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(25,27,34,0.10)', aspectRatio: '16/10' }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top"
        // Shows placeholder styling until real image is dropped in
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
      />
      {/* Placeholder visible until real screenshot replaces it */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-2"
        style={{ background: dark ? '#22242E' : '#E4DBCA' }}
      >
        <span className={`font-mono text-[10px] tracking-widest uppercase ${dark ? 'text-white/20' : 'text-black/20'}`}>
          Add screenshot
        </span>
        <span className={`font-mono text-[10px] ${dark ? 'text-white/15' : 'text-black/15'}`}>
          {placeholderPath}
        </span>
      </div>
    </div>
  )
}

export default function ProductsSection() {
  return (
    <section aria-labelledby="products-heading" className="bg-canvas">

      {/* Section header */}
      <div className="container-width section-pad-sm border-b border-border">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted">// Our Products</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              id="products-heading"
              className="font-heading font-bold text-primary text-balance"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              We build our own ideas, too.
            </h2>
            <p className="text-secondary text-[0.9375rem] leading-relaxed max-w-sm text-pretty md:text-right">
              Our products start with real problems. Each serves a different audience,
              but both share the same philosophy: make everyday work simpler.
            </p>
          </div>
        </Reveal>
      </div>

      {/* ── Kalvora Block ── */}
      <div className="border-b border-border" style={{ background: '#F0E8D8' }}>
        <div className="container-width section-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Copy */}
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border" style={{ borderColor: 'rgba(139,111,71,0.25)', background: 'rgba(139,111,71,0.08)' }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#8B6F47' }} />
                  <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: '#8B6F47' }}>
                    Live · {KALVORA.users} users
                  </span>
                </div>

                <h3
                  className="font-heading font-bold mb-4"
                  style={{ color: '#2C1F0E', fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
                >
                  {KALVORA.name}
                </h3>
                <p
                  className="text-lg font-medium mb-5"
                  style={{ color: '#5C3D1E', lineHeight: 1.4 }}
                >
                  {KALVORA.tagline}
                </p>
                <p className="text-[0.9375rem] leading-[1.7] mb-8" style={{ color: '#6B5540' }}>
                  Interior designers prepare proposals in Word, export PDFs, send them
                  over WhatsApp, then chase clients for weeks without knowing if they
                  even opened them. Kalvora fixes that entire workflow.
                </p>

                {/* Workflow steps */}
                <ol className="space-y-3 mb-8">
                  {KALVORA.workflow.map((w) => (
                    <li key={w.step} className="flex items-start gap-3">
                      <span className="font-mono text-[10px] tracking-widest mt-0.5 shrink-0" style={{ color: '#8B6F47' }}>
                        {w.step}
                      </span>
                      <div>
                        <span className="font-medium text-sm" style={{ color: '#2C1F0E' }}>{w.label}</span>
                        <span className="text-sm ml-2" style={{ color: '#7A6555' }}>{w.description}</span>
                      </div>
                    </li>
                  ))}
                </ol>

                {/* Key features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {KALVORA.features.slice(0, 6).map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 shrink-0" style={{ color: '#8B6F47' }} />
                      <span className="text-sm" style={{ color: '#5C3D1E' }}>{f}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={SOCIAL_LINKS.kalvora}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-sm px-6 py-3 rounded-full transition-colors"
                  style={{ background: '#8B6F47', color: '#FFF8F0' }}
                >
                  Explore Kalvora
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            {/* Screenshots */}
            <Reveal delay={0.15}>
              <div className="space-y-3">
                <ScreenshotFrame
                  src={SCREENSHOT_PATHS.kalvora.proposalEditor}
                  alt="Kalvora proposal editor"
                  placeholderPath="public/screenshots/kalvora/01.png"
                />
                <div className="grid grid-cols-2 gap-3">
                  <ScreenshotFrame
                    src={SCREENSHOT_PATHS.kalvora.clientView}
                    alt="Kalvora client view"
                    placeholderPath="public/screenshots/kalvora/02.png"
                  />
                  <ScreenshotFrame
                    src={SCREENSHOT_PATHS.kalvora.invoice}
                    alt="Kalvora invoice"
                    placeholderPath="public/screenshots/kalvora/05.png"
                  />
                </div>
                <p className="font-mono text-[10px] tracking-wider text-center" style={{ color: 'rgba(139,111,71,0.5)' }}>
                  Real product screenshots · kalvora.kaliprlabs.in
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ── Sill Block ── */}
      <div style={{ background: '#191B22' }}>
        <div className="container-width section-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Screenshots — left on desktop */}
            <Reveal delay={0.1} className="order-2 lg:order-1">
              <div className="space-y-3">
                <ScreenshotFrame
                  src={SCREENSHOT_PATHS.sill.commandPalette}
                  alt="Sill command palette"
                  placeholderPath="public/screenshots/sill/01.png"
                  dark
                />
                <div className="grid grid-cols-2 gap-3">
                  <ScreenshotFrame
                    src={SCREENSHOT_PATHS.sill.taskbarWidget}
                    alt="Sill taskbar widget"
                    placeholderPath="public/screenshots/sill/02.png"
                    dark
                  />
                  <ScreenshotFrame
                    src={SCREENSHOT_PATHS.sill.systemControls}
                    alt="Sill system controls"
                    placeholderPath="public/screenshots/sill/03.png"
                    dark
                  />
                </div>
                <p className="font-mono text-[10px] tracking-wider text-center" style={{ color: 'rgba(58,90,139,0.6)' }}>
                  Real product screenshots · sill.kaliprlabs.in
                </p>
              </div>
            </Reveal>

            {/* Copy — right on desktop */}
            <Reveal className="order-1 lg:order-2">
              <div>
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border" style={{ borderColor: 'rgba(58,90,139,0.3)', background: 'rgba(58,90,139,0.12)' }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#3A5A8B' }} />
                  <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: '#7B9CC8' }}>
                    Live · Windows 11 · Free + Pro
                  </span>
                </div>

                <h3
                  className="font-heading font-bold mb-4"
                  style={{ color: '#EDE9DF', fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
                >
                  {SILL.name}
                </h3>
                <p
                  className="text-lg font-medium mb-5"
                  style={{ color: '#A8B8CC', lineHeight: 1.4 }}
                >
                  {SILL.tagline}
                </p>
                <p className="text-[0.9375rem] leading-[1.7] mb-8" style={{ color: '#7A8494' }}>
                  Sill brings your everyday PC actions into one keyboard-first command
                  palette and puts useful information directly on your Windows taskbar —
                  without opening another window.
                </p>

                {/* 5 capability groups */}
                <div className="space-y-4 mb-8">
                  {SILL.capabilities.map((cap) => (
                    <div key={cap.group} className="border-t pt-4" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="font-medium text-sm" style={{ color: '#EDE9DF' }}>{cap.group}</span>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: '#5E6474' }}>
                        {cap.features.slice(0, 3).join(' · ')}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={SOCIAL_LINKS.sill}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-medium text-sm px-6 py-3 rounded-full transition-colors"
                    style={{ background: '#3A5A8B', color: '#EDE9DF' }}
                  >
                    Explore Sill
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="font-mono text-[11px] text-on-inverse-muted">
                    {SILL.pricing}
                  </span>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </div>

    </section>
  )
}

