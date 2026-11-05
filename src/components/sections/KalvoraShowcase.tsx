'use client'

import { motion } from 'motion/react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/animations/Reveal'
import { ProductPreview } from '@/components/visuals/ProductPreview'
import { KALVORA, SOCIAL_LINKS } from '@/lib/constants'
import { ease } from '@/lib/utils'

export default function KalvoraShowcase() {
  return (
    <section className="bg-inverse section-pad">
      <div className="container-width">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* â”€â”€ Left: Content â”€â”€ */}
          <div>
            <Reveal>
              <Badge variant="live">LIVE Â· 500+ Users</Badge>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-5 font-heading text-[clamp(2rem,5vw,3.25rem)] font-semibold tracking-tight text-on-inverse leading-[1.08]">
                Kalvora
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-3 font-mono text-sm tracking-wide text-on-inverse-muted">
                Proposal & Invoice Software for Interior Designers
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-[1.0625rem] leading-relaxed text-on-inverse-muted max-w-[460px]">
                Kalvora is our flagship product â€” purpose-built for individual interior
                designers and small-to-medium interior design studios. From branded proposal
                generation to GST invoicing, it handles the business side so designers can
                focus on the design.
              </p>
            </Reveal>

            {/* Feature list */}
            <Reveal delay={0.2}>
              <ul className="mt-8 space-y-3">
                {KALVORA.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-on-inverse-muted">
                    <span className="shrink-0 font-mono text-accent">âœ“</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Button
                  href={SOCIAL_LINKS.kalvora}
                  variant="inverse"
                  size="lg"
                  external
                >
                  Explore Kalvora
                  <span aria-hidden>â†’</span>
                </Button>
                <Button
                  href="/products/kalvora"
                  variant="ghost"
                  size="lg"
                  className="text-on-inverse-muted hover:text-on-inverse"
                >
                  View product details â†’
                </Button>
              </div>
            </Reveal>
          </div>

          {/* â”€â”€ Right: Screenshot â”€â”€ */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            <ProductPreview />
          </motion.div>
        </div>
      </div>
    </section>
  )
}


