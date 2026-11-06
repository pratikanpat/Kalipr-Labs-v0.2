'use client'

/**
 * StampButton (exported as MagneticButton for back-compat)
 *
 * Zero movement. Zero magnetic pull. Zero elevation.
 * The only physics is a whileTap stamp-press: scale(0.96) that snaps
 * back via a stiff spring — replicating the feel of pressing physical ink
 * into paper.
 *
 * All hover styling (letter-spacing, background tint) is handled purely
 * by CSS on .btn-primary / .btn-ghost / .btn-pill-elev — no JS interference.
 */

import { motion } from 'motion/react'

const TAP_SPRING = { type: 'spring' as const, stiffness: 500, damping: 35 }

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  href?: string
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  'aria-label'?: string
  /** unused — kept for API compat */
  radius?: number
}

export function MagneticButton({
  children,
  className = 'btn-primary',
  style,
  onClick,
  href,
  external,
  type = 'button',
  disabled,
  'aria-label': ariaLabel,
}: MagneticButtonProps) {
  const sharedProps = {
    className,
    style: { boxShadow: 'none', ...style },
    whileTap: { scale: 0.96 },
    transition: TAP_SPRING,
  }

  if (href) {
    return (
      <motion.a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        aria-label={ariaLabel}
        onClick={onClick}
        {...sharedProps}
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
      onClick={onClick}
      {...sharedProps}
    >
      {children}
    </motion.button>
  )
}
