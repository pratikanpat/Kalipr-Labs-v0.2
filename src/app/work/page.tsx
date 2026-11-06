import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/animations/Reveal'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Kalipr Labs has worked with 5+ clients across product development, custom engineering, and automation projects. Pune, India.',
}

export default function WorkPage() {
  return (
    <div className="bg-canvas pt-[72px]">
      {/* Header */}
      <section className="section-pad border-b border-border">
        <div className="container-width">
          <Reveal>
            <SectionLabel>// work</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 font-heading text-[clamp(2rem,5vw,3rem)] font-semibold tracking-tight text-primary max-w-[600px] text-balance">
              {COMPANY.clientProjects} clients. Real projects.
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 text-base leading-relaxed text-secondary max-w-[480px]">
              We have worked with clients across software product development, custom web
              engineering, and business automation. Each project is treated as a genuine
              engineering responsibility.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Case studies placeholder */}
      <section className="section-pad">
        <div className="container-width">
          <Reveal>
            <div className="rounded-2xl border border-dashed border-border bg-surface p-10 md:p-16 text-center">
              <p className="font-mono text-xs text-muted uppercase tracking-widest">
                Coming soon
              </p>
              <h2 className="mt-5 font-heading text-xl font-semibold text-primary">
                Case studies being prepared.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-secondary max-w-[460px] mx-auto">
                We&apos;re documenting our client work carefully — with the same precision we
                apply to building it. Detailed case studies will be published here.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-on-inverse hover:bg-primary/90 transition-colors"
                >
                  Request project references
                </Link>
                <a
                  href="mailto:hello@kaliprlabs.in"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-secondary hover:border-border-strong hover:text-primary transition-colors"
                >
                  Email directly →
                </a>
              </div>
            </div>
          </Reveal>

          {/* What we've built section */}
          <div className="mt-16">
            <Reveal>
              <h2 className="font-heading text-xl font-semibold text-primary">
                What we&apos;ve built
              </h2>
            </Reveal>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { label: 'SaaS Products', desc: 'Multi-tenant software products with real user bases.' },
                { label: 'Web Applications', desc: 'Purpose-built tools engineered around specific business workflows.' },
                { label: 'Automation Systems', desc: 'Integrations and automation that reduce manual business overhead.' },
              ].map((item, i) => (
                <Reveal key={item.label} delay={i * 0.06}>
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="font-heading text-sm font-semibold text-primary">
                      {item.label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-secondary">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

