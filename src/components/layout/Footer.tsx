'use client'

import Link from 'next/link'
import { COMPANY, SOCIAL_LINKS } from '@/lib/constants'

const studioLinks = [
  { href: '/about',    label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/work',     label: 'Work' },
  { href: '/contact',  label: 'Contact' },
]

const productLinks = [
  { href: SOCIAL_LINKS.kalvora, label: 'Kalvora', external: true  },
  { href: SOCIAL_LINKS.sill,    label: 'Sill',    external: true  },
  { href: '/products',          label: 'All products', external: false },
]

const legalLinks = [
  { href: '/privacy',  label: 'Privacy Policy' },
  { href: '/terms',    label: 'Terms of Service' },
]

export default function Footer() {
  return (
    <footer
      style={{ background: '#1A1D16', position: 'relative', overflow: 'hidden' }}
      aria-label="Site footer"
    >
      {/* ── Main content ─────────────────────────────────────────── */}
      <div
        className="container-width"
        style={{ paddingTop: '80px', paddingBottom: '0', position: 'relative', zIndex: 1 }}
      >
        {/* Big email CTA */}
        <a
          href={`mailto:${COMPANY.email}`}
          className="link-underline link-underline--heavy"
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 'clamp(1.5rem, 4vw, 3rem)',
            letterSpacing: '-0.03em',
            color: '#E6EAD4',
            textDecoration: 'none',
            marginBottom: '48px',
          }}
        >
          {COMPANY.email}
        </a>

        {/* Separator */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '40px' }} />

        {/* 4-column grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '40px 24px',
            paddingBottom: '48px',
          }}
        >
          {/* Col 1 — Studio info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p style={labelStyle}>Studio</p>
            <p style={mutedStyle}>{COMPANY.name}</p>
            <p style={mutedStyle}>{COMPANY.location}</p>
            <p style={mutedStyle}>Est. {COMPANY.foundedYear}</p>
          </div>

          {/* Col 2 — Studio links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p style={labelStyle}>Navigation</p>
            {studioLinks.map((l) => (
              <Link key={l.href} href={l.href} className="link-underline" style={linkStyle}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Col 3 — Products */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p style={labelStyle}>Products</p>
            {productLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="link-underline"
                style={linkStyle}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Col 4 — Legal & social */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p style={labelStyle}>Legal</p>
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="link-underline" style={linkStyle}>
                {l.label}
              </Link>
            ))}
            {/* Cookie Preferences — inline text toggle */}
            <button
              type="button"
              onClick={() => {/* cookie consent reset hook — extend as needed */}}
              className="link-underline"
              style={{
                ...linkStyle,
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              Cookie Preferences
            </button>
            <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <p style={labelStyle}>Social</p>
              <Link href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline" style={linkStyle}>
                LinkedIn
              </Link>
              <Link href={SOCIAL_LINKS.founderPortfolio} target="_blank" rel="noopener noreferrer" className="link-underline" style={linkStyle}>
                Founder
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            padding: '20px 0',
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          <p style={mutedStyle}>© 2026 {COMPANY.name}. All rights reserved.</p>
          <p style={mutedStyle}>Independent software product studio.</p>
        </div>
      </div>

      {/* ── Giant brand text ─────────────────────────────────────── */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          lineHeight: 0.85,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
        aria-hidden
      >
        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 900,
            fontSize: 'clamp(80px, 18vw, 180px)',
            letterSpacing: '-0.05em',
            color: 'rgba(255,255,255,0.015)',
            whiteSpace: 'nowrap',
            padding: '0 clamp(16px, 4vw, 48px)',
          }}
        >
          KALIPR LABS
        </p>
      </div>
    </footer>
  )
}

/* ── Shared style objects ─────────────────────────────────────────── */
const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.65rem',
  fontWeight: 600,
  letterSpacing: '0.10em',
  color: 'rgba(230,234,212,0.30)',
  textTransform: 'uppercase',
  marginBottom: '4px',
}

const mutedStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: '0.8125rem',
  color: 'rgba(230,234,212,0.35)',
  lineHeight: 1.5,
}

const linkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: '0.8125rem',
  color: 'rgba(230,234,212,0.40)',
  textDecoration: 'none',
  lineHeight: 1.5,
  transition: 'color 0.3s ease',
}
