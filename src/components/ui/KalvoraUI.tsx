'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform, useInView } from 'motion/react'

const EASE = [0.16, 1, 0.3, 1] as const

const STEPS = [
  { num: '01', label: 'Create proposal', desc: 'Brand it with your logo and terms' },
  { num: '02', label: 'Share a link',    desc: 'One link, not a PDF over WhatsApp' },
  { num: '03', label: 'Track views',     desc: 'Know exactly when they open it' },
  { num: '04', label: 'Collect approval',desc: 'Comment, approve — no email chains' },
  { num: '05', label: 'Generate invoice',desc: 'GST invoice after approval, instantly' },
]

const PROPOSALS = [
  { title: 'The Mehta Residence',   client: 'A. Mehta',       status: 'Approved', value: '₹4.2L' },
  { title: 'SkyLine Penthouse',     client: 'B. Chandra',     status: 'Viewed',   value: '₹7.8L' },
  { title: 'Artisan Café Interior', client: 'R. Nair',        status: 'Draft',    value: '₹2.1L' },
]

// 3D Tilt wrapper
function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5])
  const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5])

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  function reset() { x.set(0); y.set(0) }

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 800 }}
    >
      {children}
    </motion.div>
  )
}

export default function KalvoraUI() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true } as any)
  const [activeStep, setActiveStep] = useState(-1)
  const [activeProposal, setActiveProposal] = useState(0)

  // Sequential step reveal on scroll-into-view
  useEffect(() => {
    if (!inView) return
    STEPS.forEach((_, i) => {
      setTimeout(() => setActiveStep(i), i * 280 + 500)
    })
  }, [inView])

  // Cycle proposals
  useEffect(() => {
    const id = setInterval(() => setActiveProposal(p => (p + 1) % PROPOSALS.length), 2800)
    return () => clearInterval(id)
  }, [])

  const statusColor = (s: string) =>
    s === 'Approved' ? '#4A7C59' : s === 'Viewed' ? '#8B6F47' : '#7A7B85'

  return (
    <TiltCard>
      <div
        ref={ref}
        className="relative overflow-hidden select-none"
        style={{
          background: '#F5F7EF',
          borderRadius: 24,
          border: '1px solid rgba(26,29,22,0.08)',
          boxShadow: '0 20px 60px rgba(26,29,22,0.08), 0 4px 16px rgba(26,29,22,0.04)',
          fontFamily: 'var(--font-geist-sans), system-ui, sans-serif',
        }}
      >

        {/* Top chrome bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '12px 16px',
            borderBottom: '1px solid rgba(26,29,22,0.07)',
            background: '#F9FAF6',
          }}
        >
          <div style={{ display: 'flex', gap: 5 }}>
            {['#FF5F56','#FFBD2E','#27C93F'].map((c, i) => (
              <span key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: c, display: 'block' }} />
            ))}
          </div>
          <span style={{ flex: 1, background: 'rgba(26,29,22,0.05)', borderRadius: 6, padding: '3px 10px', fontSize: 10, color: 'rgba(26,29,22,0.35)', fontFamily: 'var(--font-jetbrains-mono)', letterSpacing: '0.04em' }}>
            kalvora.kaliprlabs.in/proposals
          </span>
          <span style={{ fontSize: 9, color: 'rgba(26,29,22,0.3)', fontFamily: 'var(--font-jetbrains-mono)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            KALVORA
          </span>
        </div>

        {/* App shell */}
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', minHeight: 320 }}>

          {/* Sidebar */}
          <div style={{ borderRight: '1px solid rgba(26,29,22,0.07)', padding: '12px 0', background: '#F5F7EF' }}>
            {/* Search */}
            <div style={{ padding: '0 10px 10px' }}>
              <div style={{ background: 'rgba(26,29,22,0.05)', borderRadius: 8, padding: '5px 10px', fontSize: 10, color: 'rgba(26,29,22,0.3)' }}>
                Search proposals...
              </div>
            </div>
            <div style={{ padding: '0 10px 6px', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(26,29,22,0.3)', fontFamily: 'var(--font-jetbrains-mono)' }}>
              Active
            </div>
            {PROPOSALS.map((p, i) => (
              <div
                key={p.title}
                onClick={() => setActiveProposal(i)}
                style={{
                  padding: '7px 10px',
                  cursor: 'pointer',
                  background: activeProposal === i ? 'rgba(26,29,22,0.07)' : 'transparent',
                  borderLeft: activeProposal === i ? '2px solid #1A1D16' : '2px solid transparent',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 500, color: '#1A1D16', marginBottom: 2 }}>{p.title}</div>
                <div style={{ fontSize: 9, color: 'rgba(26,29,22,0.4)', display: 'flex', justifyContent: 'space-between' }}>
                  <span>{p.client}</span>
                  <span style={{ color: statusColor(p.status) }}>{p.status}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Main proposal area */}
          <div style={{ padding: '16px' }}>
            <motion.div
              key={activeProposal}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              {/* Proposal header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <div>
                  <div style={{ fontSize: 9, color: 'rgba(26,29,22,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 3 }}>
                    Interior Design Proposal
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#1A1D16', letterSpacing: '-0.02em' }}>
                    {PROPOSALS[activeProposal].title}
                  </div>
                  <div style={{ fontSize: 10, color: 'rgba(26,29,22,0.5)', marginTop: 2 }}>
                    For {PROPOSALS[activeProposal].client}
                  </div>
                </div>
                <div>
                  <span style={{
                    padding: '3px 9px',
                    borderRadius: 20,
                    fontSize: 9,
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    background: `${statusColor(PROPOSALS[activeProposal].status)}18`,
                    color: statusColor(PROPOSALS[activeProposal].status),
                  }}>
                    {PROPOSALS[activeProposal].status}
                  </span>
                </div>
              </div>

              {/* Line items */}
              <div style={{ background: 'rgba(26,29,22,0.03)', borderRadius: 10, overflow: 'hidden', marginBottom: 10 }}>
                {[
                  { item: 'Living Room Design',    unit: 'Full concept + execution', amount: '₹1,80,000' },
                  { item: 'Master Bedroom',         unit: 'Furniture + lighting plan', amount: '₹1,10,000' },
                  { item: 'Kitchen Renovation',     unit: 'Layout + material sourcing', amount: '₹90,000' },
                  { item: 'Project Management',     unit: '10% of project value',       amount: '₹38,000' },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 10px', borderBottom: i < 3 ? '1px solid rgba(26,29,22,0.05)' : 'none' }}>
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 500, color: '#1A1D16' }}>{row.item}</div>
                      <div style={{ fontSize: 8.5, color: 'rgba(26,29,22,0.4)' }}>{row.unit}</div>
                    </div>
                    <div style={{ fontSize: 10, fontWeight: 600, color: '#1A1D16' }}>{row.amount}</div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 10px', background: '#1A1D16', borderRadius: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: '#E6EAD4' }}>Total</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#E6EAD4' }}>{PROPOSALS[activeProposal].value}</span>
              </div>
            </motion.div>

            {/* Workflow pipeline — animates steps in view */}
            <div style={{ borderTop: '1px solid rgba(26,29,22,0.07)', paddingTop: 10 }}>
              <div style={{ fontSize: 9, color: 'rgba(26,29,22,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 7, fontFamily: 'var(--font-jetbrains-mono)' }}>
                Workflow
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                {STEPS.map((step, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={i <= activeStep ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0.3 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      style={{
                        width: 18, height: 18, borderRadius: '50%',
                        background: i <= activeStep ? '#1A1D16' : 'rgba(26,29,22,0.12)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 7, fontWeight: 700, color: i <= activeStep ? '#E6EAD4' : 'rgba(26,29,22,0.4)',
                        flexShrink: 0,
                      }}
                    >
                      {i <= activeStep ? '✓' : step.num}
                    </motion.div>
                    {i < STEPS.length - 1 && (
                      <motion.div
                        style={{
                          height: 1, width: 20,
                          background: '#1A1D16',
                          transformOrigin: 'left',
                        }}
                        initial={{ scaleX: 0 }}
                        animate={i < activeStep ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 0.3, delay: 0.1, ease: EASE }}
                      />
                    )}
                  </div>
                ))}
                <span style={{ fontSize: 8, color: 'rgba(26,29,22,0.4)', marginLeft: 4 }}>
                  {activeStep >= 0 ? STEPS[Math.min(activeStep, STEPS.length - 1)].label : 'Starting...'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TiltCard>
  )
}

