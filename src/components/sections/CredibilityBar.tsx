'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'motion/react'
import { COMPANY } from '@/lib/constants'

function useCountUp(target: number, duration = 1200, inView = false) {
  const [count, setCount] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!inView || startedRef.current) return
    startedRef.current = true

    let startTime: number
    function step(timestamp: number) {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target, duration])

  return count
}

function Stat({
  value,
  suffix = '',
  label,
}: {
  value: number | string
  suffix?: string
  label: string
}) {
  const ref    = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inView = useInView(ref, { once: true, margin: '-40px 0px' } as any)
  const isNum  = typeof value === 'number'
  const count  = useCountUp(isNum ? value : 0, 1100, isNum ? inView : false)

  return (
    <div ref={ref} className="flex flex-col items-center justify-center py-7 px-6 text-center">
      <span
        className="font-heading font-bold text-white block tabular-nums"
        style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', letterSpacing: '-0.03em', lineHeight: 1 }}
      >
        {isNum ? count : value}{suffix}
      </span>
      <span
        className="font-mono text-[10px] tracking-[0.16em] uppercase mt-2.5 leading-snug"
        style={{ color: 'rgba(255,255,255,0.35)' }}
      >
        {label}
      </span>
    </div>
  )
}

export default function CredibilityBar() {
  return (
    <section
      aria-label="Studio highlights"
      style={{ background: '#0C0C0E', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="container-width">
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ borderLeft: '1px solid rgba(255,255,255,0.07)' }}
        >
          {[
            { value: COMPANY.productCount,  suffix: '',  label: 'Products built' },
            { value: 500,                   suffix: '+', label: 'Kalvora users' },
            { value: COMPANY.clientProjects,suffix: '',  label: 'Clients worked with' },
            { value: COMPANY.foundedYear,   suffix: '',  label: `Founded · ${COMPANY.location}` },
          ].map((s, i) => (
            <div
              key={i}
              style={{ borderRight: '1px solid rgba(255,255,255,0.07)' }}
            >
              <Stat {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
