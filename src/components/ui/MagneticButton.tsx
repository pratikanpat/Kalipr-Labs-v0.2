'use client'

import { useRef, useCallback } from 'react'
import { motion, useSpring } from 'motion/react'

const SPRING     = { stiffness: 180, damping: 18, mass: 0.6 }
// Press compression — snaps back via spring, feels like a physical stamp
const TAP_SPRING = { type: 'spring' as const, stiffness: 500, damping: 35 }

interface MagneticButtonProps {
  children: React.ReactNode
  /** Distance in px within which the magnet starts pulling */
  radius?: number
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  href?: string
  /** Render as <a> tag for external links */
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  'aria-label'?: string
}

/**
 * MagneticButton — Flat Ink Stamp Edition
 *
 * Physics:
 *   · Hover: cursor proximity pulls the button via spring (x/y detach).
 *            CSS letter-spacing expansion fires via [data-magnetic] CSS class.
 *   · Press: whileTap compresses to scale(0.96) — a physical stamp cut.
 *            Snaps back via stiff spring (stiffness 500) — no bounce delay.
 *   · No radial fill, no shadows, no elevation. Flush with the paper canvas.
 *
 * Usage:
 *   <MagneticButton href="/contact" className="btn-primary">
 *     Start Project
 *   </MagneticButton>
 */
export function MagneticButton({
  children,
  radius = 40,
  className = 'btn-primary',
  style,
  onClick,
  href,
  external,
  type = 'button',
  disabled,
  'aria-label': ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)

  // Spring-driven translate — elastic proximity pull
  const x = useSpring(0, SPRING)
  const y = useSpring(0, SPRING)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect  = el.getBoundingClientRect()
    const cx    = rect.left + rect.width  / 2
    const cy    = rect.top  + rect.height / 2
    const dx    = e.clientX - cx
    const dy    = e.clientY - cy
    const dist  = Math.hypot(dx, dy)
    const pull  = Math.min(1, (radius - Math.max(0, dist - rect.width / 2)) / radius)

    x.set(dx * pull * 0.35)
    y.set(dy * pull * 0.35)
  }, [radius, x, y])

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  const motionProps = {
    ref,
    // data-magnetic tells the CSS layer to suppress :hover/:active transform
    // so the spring + whileTap own all transform exclusively.
    'data-magnetic': true,
    style: {
      x,
      y,
      position:    'relative' as const,
      display:     'inline-flex',
      boxShadow:   'none',
      ...style,
    },
    whileTap:   { scale: 0.96 },
    // whileTap transition — stiff spring snaps back cleanly
    transition: TAP_SPRING,
    onMouseMove:  handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className,
  }

  if (href) {
    return (
      <motion.a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        aria-label={ariaLabel}
        {...motionProps as React.ComponentProps<typeof motion.a>}
        onClick={onClick}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      {...motionProps as React.ComponentProps<typeof motion.button>}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}
