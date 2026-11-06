import { cn } from '@/lib/utils'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'ghost' | 'outline' | 'inverse'
type ButtonSize    = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  external?: boolean
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  'aria-label'?: string
}

const variants: Record<ButtonVariant, string> = {
  /**
   * Solid ink pill — primary action.
   * Flat ink stamp: letter-spacing tracks open on hover, compresses on press.
   */
  primary: cn(
    'bg-inverse text-on-inverse',
    'hover:bg-inverse-soft',
    'active:scale-[0.96]',
  ),
  /**
   * Ghost — secondary action.
   */
  ghost: cn(
    'text-primary border border-border-strong bg-transparent',
    'hover:text-primary hover:border-primary hover:bg-accent-subtle',
    'active:scale-[0.96]',
  ),
  /**
   * Outline — same visual as ghost but with stronger border.
   */
  outline: cn(
    'border border-border-strong text-primary bg-transparent',
    'hover:bg-surface hover:border-primary',
    'active:scale-[0.96]',
  ),
  /**
   * On dark backgrounds.
   */
  inverse: cn(
    'bg-on-inverse text-primary',
    'hover:bg-on-inverse/90',
    'active:scale-[0.96]',
  ),
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-7 py-3.5 text-[0.9375rem] gap-2',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  children,
  className,
  onClick,
  type = 'button',
  disabled,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center font-medium rounded-full',
    'transition-[background,letter-spacing,border-color,transform] duration-300 ease-out cursor-pointer',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
    variants[variant],
    sizes[size],
    className,
  )

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

/**
 * AnimatedLink — inline text link with underline that slides in from left on hover.
 * Use for body-copy links and nav items.
 */
export function AnimatedLink({
  href,
  children,
  className,
  external,
}: {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
}) {
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(
        'relative inline-block group',
        className,
      )}
    >
      {children}
      {/* Underline: scaleX 0→1 from left on hover */}
      <span
        aria-hidden
        className="absolute -bottom-0.5 left-0 h-[1.5px] w-full bg-current rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
      />
    </Link>
  )
}
