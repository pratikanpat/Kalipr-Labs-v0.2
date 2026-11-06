'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react'

const EASE = [0.16, 1, 0.3, 1] as const

const COMMANDS = [
  { icon: '⌘', label: 'Open Applications',   sub: 'Search installed apps',      shortcut: 'A' },
  { icon: '⚡', label: 'System Controls',     sub: 'Wi-Fi, Bluetooth, Sound',    shortcut: 'S' },
  { icon: '📝', label: 'Quick Notes',         sub: 'Markdown notes & reminders', shortcut: 'N' },
  { icon: '⬇', label: 'Downloads',           sub: 'Active & resumable',         shortcut: 'D' },
  { icon: '⚙', label: 'Windows Settings',    sub: 'Search any setting fast',    shortcut: 'W' },
]

const EXTRA_COMMANDS = [
  { icon: '🖥', label: 'Workspaces & Presets',  sub: 'Launch saved workflows' },
  { icon: '📊', label: 'System Monitor',         sub: 'CPU · RAM · Storage' },
]

// ── Live CPU micro-animation ────────────────────────────────────────
// Independently ticks every 2.8 s, shifting ±2–3 % to imply a live engine.
function useLiveMetric(base: number, spread: number, intervalMs: number) {
  const [val, setVal] = useState(base)
  useEffect(() => {
    const id = setInterval(() => {
      setVal(Math.min(99, Math.max(5, base + (Math.random() * spread * 2 - spread))))
    }, intervalMs)
    return () => clearInterval(id)
  }, [base, spread, intervalMs])
  return val
}

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

export default function SillUI() {
  const [hovered, setHovered] = useState(false)
  const [activeCmd, setActiveCmd] = useState(0)

  // Live-ticking metrics — independent, different rhythms
  const cpu = useLiveMetric(34, 3, 2800)
  const ram = useLiveMetric(61, 2, 3600)

  const stats = [
    { label: 'CPU', value: cpu },
    { label: 'RAM', value: ram },
  ]

  return (
    <TiltCard>
      <div
        className="relative overflow-hidden select-none"
        style={{
          background: '#1A1D16',
          borderRadius: 24,
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)',
          fontFamily: 'var(--font-geist-sans), system-ui, sans-serif',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >

        {/* Chrome bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)' }}>
          <div style={{ display: 'flex', gap: 5 }}>
            {[0,1,2].map(i => (
              <span key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'block' }} />
            ))}
          </div>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-jetbrains-mono)', letterSpacing: '0.12em', textTransform: 'uppercase', marginLeft: 6 }}>
            SILL — Windows 11
          </span>
          <span style={{ marginLeft: 'auto', fontSize: 9, color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-jetbrains-mono)' }}>
            Ctrl+Alt+Space
          </span>
        </div>

        <div style={{ padding: 14 }}>

          {/* Command palette card */}
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: 14,
            border: '1px solid rgba(255,255,255,0.08)',
            overflow: 'hidden',
            marginBottom: 10,
          }}>
            {/* Search bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>⌘</span>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', flex: 1 }}>Search commands, apps, settings...</span>
              <span
                style={{
                  width: 2, height: 14,
                  background: '#E6EAD4',
                  display: 'inline-block',
                  animation: 'blink-cursor 1s step-end infinite',
                }}
              />
            </div>

            {/* Command items */}
            <div>
              {COMMANDS.map((cmd, i) => (
                <div
                  key={i}
                  onClick={() => setActiveCmd(i)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '8px 14px', cursor: 'pointer',
                    background: activeCmd === i ? 'rgba(230,234,212,0.08)' : 'transparent',
                    borderLeft: activeCmd === i ? '2px solid rgba(230,234,212,0.5)' : '2px solid transparent',
                    transition: 'all 0.15s',
                  }}
                >
                  <span style={{ fontSize: 14, width: 22, textAlign: 'center' }}>{cmd.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 11, fontWeight: 500, color: activeCmd === i ? '#E6EAD4' : 'rgba(255,255,255,0.65)' }}>
                      {cmd.label}
                    </div>
                    <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', marginTop: 1 }}>
                      {cmd.sub}
                    </div>
                  </div>
                  <span style={{ fontSize: 9, background: 'rgba(255,255,255,0.08)', borderRadius: 4, padding: '2px 5px', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-jetbrains-mono)' }}>
                    {cmd.shortcut}
                  </span>
                </div>
              ))}

              {/* Expandable extra items on hover */}
              <AnimatePresence>
                {hovered && EXTRA_COMMANDS.map((cmd, i) => (
                  <motion.div
                    key={cmd.label}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.06, ease: EASE }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 14px' }}>
                      <span style={{ fontSize: 14, width: 22, textAlign: 'center' }}>{cmd.icon}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.55)' }}>{cmd.label}</div>
                        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)', marginTop: 1 }}>{cmd.sub}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* ── Taskbar widget strip — live metrics ─────────────────── */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            borderRadius: 10,
            border: '1px solid rgba(255,255,255,0.06)',
            padding: '8px 12px',
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-jetbrains-mono)', letterSpacing: '0.1em', textTransform: 'uppercase', flexShrink: 0 }}>
              Taskbar
            </span>
            {stats.map(stat => (
              <div key={stat.label} style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.3)' }}>{stat.label}</span>
                  {/* Animated numeric readout */}
                  <motion.span
                    key={Math.round(stat.value)}
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    style={{ fontSize: 8, color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-jetbrains-mono)' }}
                  >
                    {Math.round(stat.value)}%
                  </motion.span>
                </div>
                <div style={{ height: 3, background: 'rgba(255,255,255,0.08)', borderRadius: 2, overflow: 'hidden' }}>
                  {/* Smooth bar width transition on value change */}
                  <motion.div
                    animate={{ width: `${stat.value}%` }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ height: '100%', background: 'rgba(230,234,212,0.5)', borderRadius: 2 }}
                  />
                </div>
              </div>
            ))}
            <div style={{ flexShrink: 0, textAlign: 'right' }}>
              <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.25)' }}>Now Playing</div>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.45)', marginTop: 1 }}>Synthwave Mix</div>
            </div>
          </div>
        </div>
      </div>
    </TiltCard>
  )
}
