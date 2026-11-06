'use client'

import { useRef, useState, useCallback } from 'react'
import { motion, useSpring } from 'motion/react'

const SPRING = { stiffness: 180, damping: 18, mass: 0.6 }
const EASE   = [0.16, 1, 0.3, 1] as const

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
 * MagneticButton
 *
 * When the cursor moves within `radius` px of the button boundary, the
 * button gently detaches and slides toward the pointer. On hover, an
 * ink-coloured circle scales up from the cursor contact point, swapping
 * the text colour on completion — a "radial fill" effect.
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
  const [hovered, setHovered]           = useState(false)
  const [fillOrigin, setFillOrigin]     = useState({ x: '50%', y: '50%' })

  // Spring-driven translate — feels elastic, not robotic
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

  const handleMouseEnter = useCallback((e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    // Record where inside the button the cursor entered for fill origin
    setFillOrigin({
      x: `${((e.clientX - rect.left) / rect.width  * 100).toFixed(1)}%`,
      y: `${((e.clientY - rect.top)  / rect.height * 100).toFixed(1)}%`,
    })
    setHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
    setHovered(false)
  }, [x, y])

  const motionProps = {
    ref,
    style: { x, y, position: 'relative' as const, display: 'inline-flex', overflow: 'hidden', ...style },
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    className,
  }

  const innerContent = (
    <>
      {/* Radial fill circle — scales from cursor contact point */}
      <motion.span
        aria-hidden
        initial={false}
        animate={hovered
          ? { scale: 4, opacity: 1 }
          : { scale: 0, opacity: 0 }
        }
        transition={{ duration: 0.5, ease: EASE }}
        style={{
          position:     'absolute',
          width:        '120%',
          paddingBottom:'120%',
          borderRadius: '50%',
          background:   '#E6EAD4',
          top:          fillOrigin.y,
          left:         fillOrigin.x,
          transform:    'translate(-50%, -50%)',
          pointerEvents:'none',
          zIndex:        0,
          mixBlendMode: 'difference',
        }}
      />
      {/* Actual label — sits above the fill layer */}
      <span style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
        {children}
      </span>
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        aria-label={ariaLabel}
        {...motionProps as React.ComponentProps<typeof motion.a>}
        onClick={onClick}
      >
        {innerContent}
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
      {innerContent}
    </motion.button>
  )
}

