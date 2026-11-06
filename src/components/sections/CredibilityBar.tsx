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
      // Ease out
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
  delay = 0,
}: {
  value: number | string
  suffix?: string
  label: string
  delay?: number
}) {
  const ref    = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inView = useInView(ref, { once: true, margin: '-40px 0px' } as any)
  const isNum  = typeof value === 'number'
  const count  = useCountUp(isNum ? value : 0, 1100, isNum ? inView : false)

  return (
    <div ref={ref} className="flex flex-col items-center justify-center py-8 px-6 text-center">
      <span
        className="font-heading font-bold text-primary block tabular-nums"
        style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', letterSpacing: '-0.03em', lineHeight: 1 }}
      >
        {isNum ? count : value}{suffix}
      </span>
      <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-muted mt-2.5 leading-snug">
        {label}
      </span>
    </div>
  )
}

export default function CredibilityBar() {
  return (
    <section aria-label="Studio highlights" className="border-y border-border bg-canvas">
      <div className="container-width">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
          <Stat value={COMPANY.productCount}  suffix="" label="Products built"        delay={0}   />
          <Stat value="500"                   suffix="+" label="Kalvora users"         delay={80}  />
          <Stat value={COMPANY.clientProjects} suffix="" label="Clients worked with"   delay={160} />
          <Stat value={COMPANY.foundedYear}    suffix="" label={`Founded · ${COMPANY.location}`} delay={240} />
        </div>
      </div>
    </section>
  )
}
