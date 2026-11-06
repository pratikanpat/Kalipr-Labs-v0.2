'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import { SCREENSHOT_PATHS } from '@/lib/constants'

const EASE = [0.16, 1, 0.3, 1] as const

type Problem = {
  id: string
  problem: string
  solution: string
  detail: string
  image: string
  imageAlt: string
  label: string
  bg: string
}

const PROBLEMS: Problem[] = [
  {
    id: 'kalvora-chaos',
    problem: 'Designers chase clients over WhatsApp for weeks.',
    solution: 'Now it\'s one shareable link.',
    detail: 'Interior designers spend hours on proposals in Word, share blurry PDFs over WhatsApp, and lose track of approvals across five different chats. Kalvora replaces all of it with a single professional link.',
    image: SCREENSHOT_PATHS.kalvora.clientView,
    imageAlt: 'Kalvora client view — proposal shared as a link',
    label: 'KALVORA — Interior Design SaaS',
    bg: '#F0E8D8',
  },
  {
    id: 'sill-clutter',
    problem: 'Windows needs 10 apps to do 10 things.',
    solution: 'One keyboard shortcut for everything.',
    detail: 'Switching between apps, digging through Settings, tracking downloads, checking system stats — it all fragments your flow. Sill puts every everyday PC action behind a single command palette.',
    image: SCREENSHOT_PATHS.sill.commandPalette,
    imageAlt: 'Sill command palette — Windows 11 productivity',
    label: 'SILL — Windows 11 Utility',
    bg: '#191B22',
  },
  {
    id: 'custom-software',
    problem: 'Business processes break without custom software.',
    solution: 'We build it. Exactly to fit.',
    detail: 'Generic tools don\'t fit how your business actually works. We engineer custom web applications, automation systems and product software — built for your specific workflow, not someone else\'s.',
    image: SCREENSHOT_PATHS.kalvora.approval,
    imageAlt: 'Kalvora approval workflow — custom business software',
    label: 'SERVICES — Custom Engineering',
    bg: '#EAE6DC',
  },
]

export default function ProblemSolution() {
  const [activeId, setActiveId] = useState<string>(PROBLEMS[0].id)

  const active = PROBLEMS.find((p) => p.id === activeId) ?? PROBLEMS[0]
  const isDark = active.bg === '#191B22'

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#0C0C0E' }}
      aria-label="Problems we solve"
    >
      {/* Top separator */}
      <div className="container-width">
        <div className="h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
      </div>

      <div className="section-pad container-width">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_540px] gap-16 xl:gap-24 items-center">

          {/* Left -- Problem accordion */}
          <div>
            {/* Section label */}
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase mb-10" style={{ color: 'rgba(255,255,255,0.3)' }}>
              // Problems we solve
            </p>

            {/* Accordion items */}
            <div className="space-y-1">
              {PROBLEMS.map((p) => {
                const isActive = p.id === activeId
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveId(p.id)}
                    className="w-full text-left rounded-xl transition-all duration-200"
                    style={{
                      background: isActive ? 'rgba(255,255,255,0.05)' : 'transparent',
                      border: isActive ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent',
                      padding: isActive ? '20px 24px' : '16px 24px',
                    }}
                  >
                    {/* Problem headline */}
                    <p
                      className="font-heading font-bold mb-0 transition-all duration-200"
                      style={{
                        fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
                        letterSpacing: '-0.025em',
                        lineHeight: 1.25,
                        color: isActive ? '#fff' : 'rgba(255,255,255,0.4)',
                      }}
                    >
                      {p.problem}
                    </p>

                    {/* Expanded content */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <p
                            className="font-heading font-semibold mt-2 mb-3"
                            style={{
                              color: '#7B8FF0',
                              fontSize: '1.0625rem',
                              letterSpacing: '-0.02em',
                            }}
                          >
                            {p.solution}
                          </p>
                          <p
                            className="text-[0.9375rem] leading-relaxed"
                            style={{ color: 'rgba(255,255,255,0.45)' }}
                          >
                            {p.detail}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right -- Product screenshot */}
          <div className="hidden lg:block relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0,  scale: 1 }}
                exit={{   opacity: 0, y: -20, scale: 0.97 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="rounded-2xl overflow-hidden border"
                style={{
                  borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
                  boxShadow: '0 32px 64px rgba(0,0,0,0.5)',
                  background: active.bg,
                }}
              >
                {/* Chrome bar */}
                <div
                  className="px-4 py-2.5 flex items-center justify-between border-b"
                  style={{
                    borderColor: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)',
                    background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.04)',
                  }}
                >
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.12)' }} />
                    <span className="w-2 h-2 rounded-full" style={{ background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.12)' }} />
                    <span className="w-2 h-2 rounded-full" style={{ background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.12)' }} />
                  </div>
                  <span
                    className="font-mono text-[10px] tracking-widest uppercase"
                    style={{ color: isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.3)' }}
                  >
                    {active.label}
                  </span>
                </div>

                {/* Screenshot */}
                <Image
                  src={active.image}
                  alt={active.imageAlt}
                  width={540}
                  height={380}
                  className="w-full object-cover object-top"
                  sizes="540px"
                />
              </motion.div>
            </AnimatePresence>

            {/* Ambient glow behind image */}
            <div
              className="absolute -inset-8 -z-10 rounded-3xl opacity-20 blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(67,89,232,0.6) 0%, transparent 70%)' }}
            />
          </div>

        </div>
      </div>
    </section>
  )
}
