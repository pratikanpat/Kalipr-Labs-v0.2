'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { cn } from '@/lib/utils'

const EASE = [0.16, 1, 0.3, 1] as const

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const inViewOpts = (margin: string) => ({ once: true, margin } as any)

interface RevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: React.ElementType
  /** How far elements travel before revealing — default 32px */
  distance?: number
  /** Trigger margin from viewport edge */
  margin?: string
}

/** Basic fade-up reveal for sections and blocks */
export function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
  distance = 32,
  margin = '-60px 0px',
}: RevealProps) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, inViewOpts(margin))
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div

  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y: distance }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  )
}

interface SplitRevealProps {
  text: string
  className?: string
  delay?: number
  /** Tag to render each word in */
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  stagger?: number
}

/**
 * Splits text into words and animates each word up with a stagger.
 * Cal.com / editorial style headline entrance.
 */
export function SplitReveal({
  text,
  className,
  delay = 0,
  tag: Tag = 'h1',
  stagger = 0.06,
}: SplitRevealProps) {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, inViewOpts('-40px 0px'))
  const words  = text.split(' ')

  return (
    // @ts-expect-error — dynamic tag
    <Tag ref={ref} className={cn('overflow-visible', className)} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.28em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: '110%', opacity: 0 }}
            transition={{ duration: 0.65, delay: delay + i * stagger, ease: EASE }}
            aria-hidden
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

/** Lightweight fade-in for smaller elements */
export function FadeIn({ children, delay = 0, className, direction = 'up' }: FadeInProps) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, inViewOpts('-40px 0px'))

  const offset = {
    up:    { y: 20 },
    down:  { y: -20 },
    left:  { x: 20 },
    right: { x: -20 },
    none:  {},
  }[direction]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{ duration: 0.55, delay, ease: EASE }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
