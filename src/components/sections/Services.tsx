'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/animations/Reveal'
import { SERVICES } from '@/lib/constants'

export default function Services() {
  return (
    <section aria-labelledby="services-heading" className="bg-canvas section-pad border-t border-border">
      <div className="container-width">

        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted">// Services</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <h2
              id="services-heading"
              className="font-heading font-bold text-primary text-balance"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              Some problems need more
              <br className="hidden sm:block" /> than an off-the-shelf tool.
            </h2>
            <p className="text-secondary text-[0.9375rem] leading-relaxed max-w-sm text-pretty">
              We work with businesses to understand their operations and engineer
              software around the way they actually work.
            </p>
          </div>
        </Reveal>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08}>
              <div className="bg-canvas p-8 lg:p-10 group h-full flex flex-col hover:bg-surface transition-colors duration-300">
                {/* Number */}
                <span className="font-mono text-[11px] tracking-[0.18em] text-muted mb-6">{service.id}</span>

                {/* Title */}
                <h3
                  className="font-heading font-semibold text-primary mb-4"
                  style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', letterSpacing: '-0.02em', lineHeight: 1.2 }}
                >
                  {service.title}
                </h3>

                {/* Problem */}
                <p className="font-medium text-sm text-accent mb-3 leading-snug">
                  {service.problem}
                </p>

                {/* Description */}
                <p className="text-[0.9rem] text-secondary leading-[1.7] mb-6 flex-1">
                  {service.description}
                </p>

                {/* Deliverable */}
                <div className="pt-5 border-t border-border mt-auto">
                  <p className="font-mono text-[10px] tracking-widest uppercase text-muted mb-1">
                    What we deliver
                  </p>
                  <p className="text-sm text-primary font-medium">{service.deliverable}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.3}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors group"
            >
              Learn more about how we work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
