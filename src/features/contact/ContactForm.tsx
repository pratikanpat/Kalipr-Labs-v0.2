'use client'

import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronDown, Check } from 'lucide-react'
import { contactSchema, type ContactFormData } from './schema'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const PROJECT_TYPES = [
  'Software Product Development',
  'Custom Web Application',
  'AI & Workflow Automation',
  'Website Development',
  'Not sure yet',
] as const

const TIMELINE_OPTIONS = [
  'Under ₹1L',
  '₹1L – ₹3L',
  '₹3L – ₹7L',
  '₹7L – ₹15L',
  '₹15L+',
  "Let's discuss",
] as const

/* ── NarrativeInput — Editorial Line Accent ─────────────────────── */
// Empty:   muted text (#1A1D16 @35%), solid soft line rgba(26,29,22,0.15)
// Filled:  bold dark text (#1A1D16 @100%), solid 1.5px rgba(26,29,22,0.45)
// Focused: 2px solid #1A1D16, warm bg tint rgba(26,29,22,0.02)
interface NarrativeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

function NarrativeInput({ error, style, ...props }: NarrativeInputProps) {
  const [focused, setFocused] = useState(false)
  const [localVal, setLocalVal] = useState('')
  const hasValue = Boolean(localVal || props.value || props.defaultValue)

  const underlineWidth = focused ? '2px' : '1.5px'
  const underlineColor = error
    ? 'rgba(200,60,40,0.70)'
    : focused
    ? '#1A1D16'
    : hasValue
    ? 'rgba(26,29,22,0.45)'
    : 'rgba(26,29,22,0.15)'

  return (
    <span style={{ display: 'inline-flex', flexDirection: 'column', gap: '3px', verticalAlign: 'baseline' }}>
      <input
        {...props}
        style={{
          display:        'inline-block',
          fontFamily:     'var(--font-heading)',
          fontWeight:     hasValue ? 700 : 500,
          fontSize:       'inherit',
          letterSpacing:  hasValue ? '-0.025em' : '-0.01em',
          lineHeight:     'inherit',
          color:          hasValue ? '#1A1D16' : 'rgba(26,29,22,0.38)',
          background:     focused ? 'rgba(26,29,22,0.02)' : 'transparent',
          border:         'none',
          borderBottom:   `${underlineWidth} solid ${underlineColor}`,
          borderRadius:   focused ? '4px 4px 0 0' : '0',
          outline:        'none',
          minWidth:       '120px',
          maxWidth:       '300px',
          padding:        focused ? '2px 6px 3px' : '0 4px 3px',
          transition:     'all 0.25s cubic-bezier(0.16,1,0.3,1)',
          ...style,
        }}
        onFocus={(e) => {
          setFocused(true)
          props.onFocus?.(e)
        }}
        onBlur={(e) => {
          setFocused(false)
          props.onBlur?.(e)
        }}
        onChange={(e) => {
          setLocalVal(e.target.value)
          props.onChange?.(e)
        }}
      />
      {error && (
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.68rem', color: 'rgba(200,60,40,0.80)', letterSpacing: '0.01em' }}>
          {error}
        </span>
      )}
    </span>
  )
}

/* ── NarrativeSelect — Ivory Surface Pill Tag ───────────────────── */
// Resting empty : ivory pill (#F5F7EF), low-opacity border, muted text
// Resting filled: same pill, full ink text, bold weight
// Open          : border darkens, chevron flips
interface NarrativeSelectProps {
  options: readonly string[]
  value: string
  onChange: (v: string) => void
  placeholder: string
  error?: string
}

function NarrativeSelect({ options, value, onChange, placeholder, error }: NarrativeSelectProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <span ref={ref} style={{ display: 'inline-flex', flexDirection: 'column', gap: '2px', verticalAlign: 'baseline', position: 'relative' }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          fontFamily: 'var(--font-heading)',
          fontWeight: value ? 700 : 500,
          fontSize: 'inherit',
          letterSpacing: value ? '-0.025em' : '-0.01em',
          lineHeight: 1,
          color: value ? '#1A1D16' : 'rgba(26,29,22,0.45)',
          background: '#F5F7EF',
          border: `1.5px solid ${error ? 'rgba(200,60,40,0.50)' : open ? 'rgba(26,29,22,0.22)' : 'rgba(26,29,22,0.12)'}`,
          borderRadius: '100px',
          outline: 'none',
          cursor: 'pointer',
          padding: '3px 10px 3px 12px',
          transition: 'border-color 0.2s ease, color 0.2s ease',
          whiteSpace: 'nowrap',
        }}
      >
        {value || placeholder}
        <ChevronDown
          size={13}
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
            opacity: 0.45,
            flexShrink: 0,
          }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.span
            initial={{ opacity: 0, y: -6, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -6, scaleY: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 6px)',
              left: 0,
              zIndex: 50,
              background: '#F5F7EF',
              border: '1px solid rgba(26,29,22,0.10)',
              borderRadius: '12px',
              padding: '6px',
              minWidth: '220px',
              boxShadow: '0 8px 32px rgba(26,29,22,0.12)',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              transformOrigin: 'top left',
            }}
          >
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => { onChange(opt); setOpen(false) }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  fontWeight: opt === value ? 600 : 400,
                  color: '#1A1D16',
                  background: opt === value ? 'rgba(26,29,22,0.07)' : 'transparent',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => { if (opt !== value) e.currentTarget.style.background = 'rgba(26,29,22,0.04)' }}
                onMouseLeave={(e) => { if (opt !== value) e.currentTarget.style.background = 'transparent' }}
              >
                {opt}
                {opt === value && <Check size={13} style={{ opacity: 0.6 }} />}
              </button>
            ))}
          </motion.span>
        )}
      </AnimatePresence>

      {error && (
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', color: 'rgba(200,60,40,0.80)' }}>
          {error}
        </span>
      )}
    </span>
  )
}

/* ── ContactForm ─────────────────────────────────────────────────── */
export function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const projectTypeValue = watch('projectType') as string | undefined
  const budgetValue      = watch('budget') as string | undefined

  // Set submittedAt on mount (honeypot timing)
  useEffect(() => {
    setValue('submittedAt', Date.now())
  }, [setValue])

  async function onSubmit(data: ContactFormData) {
    if (data.honeypot) return // bot trap
    setFormState('loading')
    setErrorMessage('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setFormState('success')
      } else {
        const body = await res.json().catch(() => ({}))
        setErrorMessage(body?.message ?? 'Something went wrong. Please try again.')
        setFormState('error')
      }
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.')
      setFormState('error')
    }
  }

  /* Success screen */
  if (formState === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '40px 0' }}
      >
        <div
          style={{
            width: '48px', height: '48px', borderRadius: '50%',
            background: 'rgba(26,29,22,0.07)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <Check size={22} style={{ color: '#1A1D16' }} />
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-heading)', fontWeight: 700,
            fontSize: '1.5rem', letterSpacing: '-0.03em', color: '#1A1D16',
          }}
        >
          Message sent.
        </h3>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', lineHeight: 1.65, color: 'rgba(26,29,22,0.55)', maxWidth: '36ch' }}>
          We'll review your message and reply within 24 hours. If it's urgent, email us directly at{' '}
          <a href="mailto:hello@kaliprlabs.in" style={{ color: '#1A1D16', fontWeight: 600 }}>
            hello@kaliprlabs.in
          </a>.
        </p>
      </motion.div>
    )
  }

  /* Shared paragraph style */
  const paraStyle: React.CSSProperties = {
    fontFamily: 'var(--font-heading)',
    fontWeight: 500,
    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
    letterSpacing: '-0.02em',
    lineHeight: 1.65,
    color: '#1A1D16',
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Honeypot — hidden from humans */}
      <input
        {...register('honeypot')}
        type="text"
        tabIndex={-1}
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
        autoComplete="off"
      />
      <input {...register('submittedAt', { valueAsNumber: true })} type="hidden" />

      {/* Narrative paragraph */}
      <div style={paraStyle}>
        Hello Kalipr Labs, my name is{' '}
        <NarrativeInput
          {...register('name')}
          placeholder="your name"
          error={errors.name?.message}
          aria-label="Your name"
        />
        {' '}and I represent{' '}
        <NarrativeInput
          {...register('company')}
          placeholder="your company"
          aria-label="Company name"
        />
        .{' '}
        <br className="hidden md:block" />
        We are looking for help with{' '}
        <NarrativeSelect
          options={PROJECT_TYPES}
          value={projectTypeValue ?? ''}
          onChange={(v) => setValue('projectType', v as ContactFormData['projectType'], { shouldValidate: true })}
          placeholder="type of project"
          error={errors.projectType?.message}
        />
        .{' '}
        <br className="hidden md:block" />
        Our budget is around{' '}
        <NarrativeSelect
          options={TIMELINE_OPTIONS}
          value={budgetValue ?? ''}
          onChange={(v) => setValue('budget', v)}
          placeholder="estimated budget"
        />
        .{' '}
        <br className="hidden md:block" />
        Reach me at{' '}
        <NarrativeInput
          {...register('email')}
          type="email"
          placeholder="your email"
          error={errors.email?.message}
          aria-label="Email address"
          style={{ minWidth: '180px' }}
        />
        .{' '}
        <br className="hidden md:block" />
        My mobile is{' '}
        <NarrativeInput
          {...register('phone')}
          type="tel"
          placeholder="phone (optional)"
          error={errors.phone?.message}
          aria-label="Phone number (optional)"
          style={{ minWidth: '160px' }}
        />
        .
      </div>

      {/* Additional details textarea */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label
          htmlFor="description"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.875rem',
            fontWeight: 500,
            color: 'rgba(26,29,22,0.60)',
            letterSpacing: '-0.01em',
          }}
        >
          Any additional details?{' '}
          <span style={{ color: 'rgba(26,29,22,0.35)', fontWeight: 400 }}>(required · min 50 chars)</span>
        </label>
        <textarea
          id="description"
          {...register('description')}
          rows={5}
          placeholder="Tell us more about the problem, your timeline, any constraints, or what a good outcome looks like..."
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9375rem',
            lineHeight: 1.6,
            color: '#1A1D16',
            background: '#F5F7EF',
            border: `1.5px solid ${errors.description ? 'rgba(200,60,40,0.40)' : 'rgba(26,29,22,0.10)'}`,
            borderRadius: '14px',
            padding: '16px 20px',
            outline: 'none',
            resize: 'vertical',
            width: '100%',
            transition: 'border-color 0.3s ease',
          }}
          onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(26,29,22,0.30)' }}
          onBlur={(e) => { e.currentTarget.style.borderColor = errors.description ? 'rgba(200,60,40,0.40)' : 'rgba(26,29,22,0.10)' }}
        />
        {errors.description && (
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(200,60,40,0.80)' }}>
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Error message */}
      {formState === 'error' && errorMessage && (
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'rgba(200,60,40,0.80)' }}>
          {errorMessage}
        </p>
      )}

      {/* Submit */}
      <div style={{ display: 'flex', justifyContent: 'flex-start', paddingTop: '8px' }}>
        <button
          type="submit"
          disabled={formState === 'loading'}
          className="btn-primary"
          style={{
            opacity: formState === 'loading' ? 0.6 : 1,
            cursor: formState === 'loading' ? 'wait' : 'pointer',
          }}
        >
          {formState === 'loading' ? 'Sending…' : 'Send it →'}
        </button>
      </div>
    </form>
  )
}

export default ContactForm
