import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/animations/Reveal'
import { KALVORA, SOCIAL_LINKS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Software products built by Kalipr Labs. Kalvora â€” proposal and invoice software for interior designers. 500+ users.',
}

export default function ProductsPage() {
  return (
    <div className="bg-canvas pt-[72px]">
      {/* Header */}
      <section className="section-pad border-b border-border">
        <div className="container-width">
          <Reveal>
            <SectionLabel>// products</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 font-heading text-[clamp(2rem,5vw,3rem)] font-semibold tracking-tight text-primary max-w-[600px]">
              Software we&apos;ve built and own.
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 text-base leading-relaxed text-secondary max-w-[480px]">
              We build our own products as well as software for clients. Products we own are
              maintained, improved, and operated by us â€” not handed off.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Kalvora card */}
      <section className="section-pad">
        <div className="container-width">
          <Reveal>
            <div className="rounded-2xl border border-border bg-white overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div className="flex-1 min-w-[280px]">
                    <Badge variant="live">LIVE Â· 500+ Users</Badge>

                    <h2 className="mt-5 font-heading text-3xl font-semibold text-primary">
                      Kalvora
                    </h2>
                    <p className="mt-2 font-mono text-sm text-muted">
                      Proposal & Invoice Software for Interior Designers
                    </p>
                    <p className="mt-5 text-base leading-relaxed text-secondary max-w-[500px]">
                      Kalvora is Kalipr Labs&apos; flagship product. Built for individual interior
                      designers and small-to-medium interior design studios â€” it handles branded
                      proposals, client approvals, and GST invoicing so designers can focus on
                      the actual design work.
                    </p>

                    <ul className="mt-6 space-y-2.5">
                      {KALVORA.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm text-secondary">
                          <span className="text-accent font-mono shrink-0">âœ“</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <Button href={SOCIAL_LINKS.kalvora} variant="primary" size="md" external>
                        Open Kalvora â†’
                      </Button>
                      <Button href="/products/kalvora" variant="secondary" size="md">
                        Product details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* What's next */}
          <Reveal delay={0.1}>
            <div className="mt-6 rounded-2xl border border-dashed border-border bg-surface p-8 md:p-10">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex items-center rounded-full border border-border px-3 py-1 font-mono text-[0.6rem] text-muted uppercase tracking-widest shrink-0">
                  Exploring
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-primary">
                    What&apos;s next
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary">
                    We&apos;re exploring the next product to build. If you have a software problem
                    worth solving â€” in a space that lacks good tooling â€” we&apos;d like to hear about
                    it.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:text-accent-hover transition-colors"
                  >
                    Tell us about a problem â†’
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}



