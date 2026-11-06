'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/animations/Reveal'
import { COMPANY } from '@/lib/constants'

export default function ClosingCTA() {
  return (
    <section aria-labelledby="cta-heading" className="bg-canvas section-pad border-t border-border">
      <div className="container-width">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted mb-6">
              // Start a conversation
            </p>
            <h2
              id="cta-heading"
              className="font-heading font-bold text-primary text-balance mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 3.75rem)', letterSpacing: '-0.03em', lineHeight: 1.07 }}
            >
              Have something
              {' '}<span className="relative inline-block">
                worth fixing?
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
                  style={{ background: '#F07852', opacity: 0.6 }}
                />
              </span>
            </h2>
            <p className="text-[1.0625rem] leading-[1.7] text-secondary mb-10 max-w-xl text-pretty">
              Tell us about the problem you&apos;re trying to solve. We&apos;d love to understand it.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent text-white font-medium px-7 py-3.5 rounded-full text-[0.9375rem] hover:bg-accent-hover transition-colors"
              >
                Start a conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors group"
              >
                Explore our products
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <p className="mt-8 font-mono text-[11px] tracking-widest uppercase text-muted">
              {COMPANY.location} · {COMPANY.email}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

