'use client'

import { Reveal } from '@/components/animations/Reveal'
import { PROCESS_STEPS } from '@/lib/constants'

export default function HowWeWork() {
  return (
    <section aria-labelledby="process-heading" className="bg-inverse section-pad">
      <div className="container-width">

        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-on-inverse-muted">// How We Work</span>
          </div>
          <h2
            id="process-heading"
            className="font-heading font-bold text-on-inverse mb-16 text-balance"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
          >
            Understand first.{' '}
            <span className="text-on-inverse-muted">Build with purpose.</span>
          </h2>
        </Reveal>

        {/* Three steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border-inverse">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.1}>
              <div className="bg-inverse p-8 lg:p-10 h-full flex flex-col">
                {/* Step number */}
                <div className="flex items-center gap-4 mb-8">
                  <span
                    className="font-heading font-bold text-on-inverse-muted/30"
                    style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: 1, letterSpacing: '-0.04em' }}
                    aria-hidden
                  >
                    {step.step}
                  </span>
                </div>

                <h3
                  className="font-heading font-semibold text-on-inverse mb-3"
                  style={{ fontSize: '1.2rem', letterSpacing: '-0.02em' }}
                >
                  {step.title}
                </h3>

                <p className="text-[0.9rem] text-on-inverse-muted leading-[1.7] flex-1 mb-6">
                  {step.description}
                </p>

                {/* Deliverable */}
                <div className="pt-5 border-t border-border-inverse">
                  <p className="font-mono text-[10px] tracking-widest uppercase text-on-inverse-muted/50 mb-1.5">
                    Output
                  </p>
                  <p className="text-sm text-on-inverse font-medium leading-snug">
                    {step.deliverable}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
