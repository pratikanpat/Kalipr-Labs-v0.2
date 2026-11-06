'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'motion/react'
import { PROCESS_STEPS } from '@/lib/constants'

const STEP_NUMS = ['01', '02', '03']

export default function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (v < 0.33)       setActiveStep(0)
    else if (v < 0.66)  setActiveStep(1)
    else                setActiveStep(2)
  })

  const steps = PROCESS_STEPS.slice(0, 3)

  return (
    <>
      {/* Gradient transition: canvas → ink */}
      <div
        style={{
          height: '120px',
          background: 'linear-gradient(to bottom, #E6EAD4 0%, #1A1D16 100%)',
          marginBottom: '-1px',
        }}
        aria-hidden
      />

      <section
        id="process"
        aria-labelledby="process-heading"
        style={{ background: '#1A1D16', position: 'relative' }}
      >
        {/* Scrollable container that provides scroll distance */}
        <div
          ref={containerRef}
          style={{ minHeight: `${steps.length * 100}vh`, position: 'relative' }}
        >
          {/* Sticky wrapper — stays in view throughout scroll */}
          <div
            style={{
              position: 'sticky',
              top: 0,
              height: '100vh',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
            }}
          >
            {/* ── LEFT: counter + progress bar ───────────────────── */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 'clamp(32px, 6vw, 80px)',
                overflow: 'hidden',
              }}
            >
              {/* Large background step counter */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: 'clamp(24px, 5vw, 60px)',
                  transform: 'translateY(-50%)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 'clamp(8rem, 20vw, 14rem)',
                  letterSpacing: '-0.06em',
                  lineHeight: 1,
                  color: 'rgba(230,234,212,0.03)',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
                aria-hidden
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={STEP_NUMS[activeStep]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: 'block' }}
                  >
                    {STEP_NUMS[activeStep]}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Section label */}
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: 'rgba(230,234,212,0.30)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '48px',
                }}
              >
                How we work
              </span>

              {/* Step indicators with vertical progress bar */}
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '0' }}>
                {/* Progress track */}
                <div
                  style={{
                    position: 'absolute',
                    left: '7px',
                    top: '12px',
                    bottom: '12px',
                    width: '1px',
                    background: 'rgba(230,234,212,0.08)',
                  }}
                />
                {/* Animated fill */}
                <motion.div
                  style={{
                    position: 'absolute',
                    left: '7px',
                    top: '12px',
                    width: '1px',
                    height: progressHeight,
                    background: 'rgba(230,234,212,0.50)',
                    maxHeight: 'calc(100% - 24px)',
                  }}
                />

                {steps.map((step, i) => (
                  <div
                    key={step.step}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      padding: '16px 0',
                    }}
                  >
                    {/* Dot */}
                    <div
                      style={{
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        border: `1.5px solid ${i <= activeStep ? 'rgba(230,234,212,0.60)' : 'rgba(230,234,212,0.15)'}`,
                        background: i === activeStep ? 'rgba(230,234,212,0.60)' : 'transparent',
                        flexShrink: 0,
                        transition: 'all 0.4s ease',
                        zIndex: 1,
                      }}
                    />
                    <div>
                      <p
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: i === activeStep ? 600 : 400,
                          fontSize: '0.875rem',
                          color: i === activeStep ? '#E6EAD4' : 'rgba(230,234,212,0.35)',
                          letterSpacing: '-0.01em',
                          transition: 'all 0.4s ease',
                        }}
                      >
                        {step.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: active step content ──────────────────────── */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 'clamp(32px, 6vw, 80px)',
                borderLeft: '1px solid rgba(230,234,212,0.06)',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
                >
                  {/* Step number badge */}
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      letterSpacing: '0.10em',
                      color: 'rgba(230,234,212,0.35)',
                      textTransform: 'uppercase',
                    }}
                  >
                    Step {STEP_NUMS[activeStep]}
                  </span>

                  {/* Title */}
                  <h2
                    id="process-heading"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                      letterSpacing: '-0.03em',
                      lineHeight: 1.15,
                      color: '#E6EAD4',
                    }}
                  >
                    {steps[activeStep]?.title}
                  </h2>

                  {/* Summary micro-label — flat mono, no pill container */}
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.10em',
                      color: 'rgba(230,234,212,0.38)',
                      textTransform: 'uppercase',
                      alignSelf: 'flex-start',
                    }}
                  >
                    // {steps[activeStep]?.summary}
                  </span>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1rem',
                      lineHeight: 1.75,
                      color: 'rgba(230,234,212,0.55)',
                      maxWidth: '48ch',
                    }}
                  >
                    {steps[activeStep]?.description}
                  </p>

                  {/* Deliverable — grid table separator above */}
                  <div
                    style={{
                      borderTop: '1px solid rgba(230,234,212,0.05)',
                      paddingTop: '20px',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'rgba(230,234,212,0.30)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginBottom: '6px',
                      }}
                    >
                      Deliverable
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.875rem',
                        color: 'rgba(230,234,212,0.50)',
                        lineHeight: 1.5,
                      }}
                    >
                      {steps[activeStep]?.deliverable}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile fallback — stacked steps */}
        <div
          className="lg:hidden container-width section-pad"
          style={{ borderTop: '1px solid rgba(230,234,212,0.06)' }}
        >
          {steps.map((step, i) => (
            <div
              key={step.step}
              style={{
                borderBottom: '1px solid rgba(230,234,212,0.06)',
                padding: '32px 0',
              }}
            >
              <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', fontWeight:600, letterSpacing:'0.10em', color:'rgba(230,234,212,0.35)', display:'block', marginBottom:'12px' }}>
                Step {STEP_NUMS[i]}
              </span>
              <h3 style={{ fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'1.5rem', letterSpacing:'-0.03em', color:'#E6EAD4', marginBottom:'12px' }}>
                {step.title}
              </h3>
              <p style={{ fontFamily:'var(--font-sans)', fontSize:'0.9375rem', lineHeight:1.65, color:'rgba(230,234,212,0.50)' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
