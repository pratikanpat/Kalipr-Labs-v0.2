import type { Metadata } from 'next'
import Link from 'next/link'
import { Reveal } from '@/components/animations/Reveal'
import KalvoraUI from '@/components/ui/KalvoraUI'
import SillUI from '@/components/ui/SillUI'
import { COMPANY, KALVORA, SILL, SOCIAL_LINKS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Products — Kalvora & Sill',
  description:
    'Software products built and owned by Kalipr Labs. Kalvora — proposal & invoice software for interior designers. Sill — Windows 11 tool belt.',
  alternates: { canonical: 'https://kaliprlabs.in/products' },
  openGraph: {
    title: 'Products — Kalipr Labs',
    description: 'Kalvora: proposal software for interior designers. Sill: Windows 11 tool belt. Built and owned by Kalipr Labs.',
    url: 'https://kaliprlabs.in/products',
    images: [{ url: '/og/home.png', width: 1200, height: 630, alt: 'Kalipr Labs Products' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products — Kalipr Labs',
    description: 'Kalvora: proposal software for interior designers. Sill: Windows 11 tool belt.',
  },
}

/* ── Arrow link (borderless text, 2px arrow slide on hover) ─── */
function ArrowLink({
  href,
  external,
  children,
  light,
}: {
  href: string
  external?: boolean
  children: React.ReactNode
  light?: boolean
}) {
  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.72rem',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: light ? 'rgba(230,234,212,0.70)' : 'rgba(26,29,22,0.55)',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  }
  const externalProps = external
    ? { target: '_blank' as const, rel: 'noopener noreferrer' }
    : {}

  return (
    <a
      href={href}
      style={base}
      {...externalProps}
      className={light ? 'arrow-link-light' : 'arrow-link-dark'}
    >
      <span className="arrow-link-label">{children}</span>
      <span className="arrow-link-icon" aria-hidden>→</span>
    </a>
  )
}

export default function ProductsPage() {
  return (
    <div style={{ background: '#E6EAD4' }} className="pt-[72px]">

      {/* ── Header + Meta Track ──────────────────────────────────────── */}
      <section style={{ borderBottom: '1px solid rgba(26,29,22,0.08)' }}>
        <div className="container-width section-pad">
          <Reveal>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: 'rgba(26,29,22,0.38)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '24px',
            }}>
              // Registry / Production System Matrix
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: 'clamp(2rem,5vw,3rem)',
              letterSpacing: '-0.04em',
              lineHeight: 1.08,
              color: '#1A1D16',
              maxWidth: '22ch',
            }}>
              Software we&apos;ve built and own.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9375rem',
              lineHeight: 1.7,
              color: 'rgba(26,29,22,0.55)',
              maxWidth: '48ch',
              marginTop: '20px',
            }}>
              We build our own products as well as software for clients. Products we own are
              maintained, improved, and operated by us — not handed off.
            </p>
          </Reveal>

          {/* 3-col meta strip */}
          <Reveal delay={0.18}>
            <div
              className="products-meta-strip"
              style={{
                marginTop: '48px',
                borderTop: '1px solid rgba(26,29,22,0.10)',
              }}
            >
              {[
                { label: 'Production tools live', value: `${COMPANY.productCount.toString().padStart(2,'0')}` },
                { label: 'Direct active users',   value: COMPANY.kalvoraUsers },
                { label: 'Est.',                  value: String(COMPANY.foundedYear) },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="products-meta-item"
                  style={{
                    padding: '24px 0',
                    paddingRight: i < 2 ? '32px' : '0',
                    borderRight: i < 2 ? '1px solid rgba(26,29,22,0.08)' : 'none',
                    paddingLeft: i > 0 ? '32px' : '0',
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: 'clamp(1.75rem,3.5vw,2.5rem)',
                    letterSpacing: '-0.04em',
                    color: '#1A1D16',
                    lineHeight: 1,
                  }}>
                    {item.value}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    fontWeight: 600,
                    letterSpacing: '0.10em',
                    textTransform: 'uppercase',
                    color: 'rgba(26,29,22,0.35)',
                    marginTop: '6px',
                  }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 01 / Kalvora — Light Canvas ─────────────────────────────── */}
      <section style={{ background: '#E6EAD4', borderBottom: '1px solid rgba(26,29,22,0.08)' }}>
        <div className="container-width">

          {/* Section rule label */}
          <Reveal>
            <div style={{
              borderBottom: '1px solid rgba(26,29,22,0.08)',
              padding: '20px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                color: 'rgba(26,29,22,0.30)',
                textTransform: 'uppercase',
              }}>
                01 / SaaS Platform
              </span>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.60rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(26,29,22,0.45)',
                background: 'rgba(26,29,22,0.05)',
                border: '1px solid rgba(26,29,22,0.08)',
                borderRadius: '100px',
                padding: '3px 10px',
              }}>
                <span style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#2D6A2D', display:'inline-block' }} />
                Live · {KALVORA.users} Users
              </span>
            </div>
          </Reveal>

          {/* 50/50 split — copy left, UI right */}
          <div className="products-split">

            {/* Left — copy */}
            <Reveal>
              <div className="products-split-copy" style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
                gap: '0',
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: 'rgba(26,29,22,0.30)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '20px',
                }}>
                  // Core Target: Interior Design Studios · Stack: Next.js + Supabase + Resend
                </span>

                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 'clamp(2rem,4vw,3rem)',
                  letterSpacing: '-0.04em',
                  color: '#1A1D16',
                  lineHeight: 1.0,
                  marginBottom: '8px',
                }}>
                  Kalvora
                </h2>
                <p style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 500,
                  fontSize: '1rem',
                  color: 'rgba(26,29,22,0.45)',
                  letterSpacing: '-0.01em',
                  marginBottom: '24px',
                }}>
                  ProposalFlow Closing Engine
                </p>

                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.75,
                  color: 'rgba(26,29,22,0.60)',
                  maxWidth: '42ch',
                  marginBottom: '32px',
                }}>
                  {KALVORA.description}
                </p>

                {/* Key stats */}
                <div style={{
                  display: 'flex',
                  gap: '24px',
                  marginBottom: '36px',
                  borderTop: '1px solid rgba(26,29,22,0.07)',
                  paddingTop: '24px',
                }}>
                  {[
                    { v: '500+', l: 'Active users' },
                    { v: 'Free', l: 'To start' },
                    { v: 'GST', l: 'Compliant' },
                  ].map(item => (
                    <div key={item.l}>
                      <div style={{ fontFamily:'var(--font-heading)', fontWeight:800, fontSize:'1.25rem', letterSpacing:'-0.03em', color:'#1A1D16' }}>{item.v}</div>
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.60rem', fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase', color:'rgba(26,29,22,0.35)', marginTop:'3px' }}>{item.l}</div>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                  <ArrowLink href="https://kalvora.kaliprlabs.in/" external>Open Kalvora</ArrowLink>
                </div>
              </div>
            </Reveal>

            {/* Right — coded UI mockup */}
            <Reveal delay={0.1}>
              <div className="products-split-ui">
                <KalvoraUI />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 02 / Sill — Deep Ink Inversion ──────────────────────────── */}
      <section style={{ background: '#1A1D16', borderBottom: '1px solid rgba(230,234,212,0.06)' }}>
        <div className="container-width">

          {/* Section rule label */}
          <Reveal>
            <div style={{
              borderBottom: '1px solid rgba(230,234,212,0.07)',
              padding: '20px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                color: 'rgba(230,234,212,0.28)',
                textTransform: 'uppercase',
              }}>
                02 / OS System Utility
              </span>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.60rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(230,234,212,0.45)',
                background: 'rgba(230,234,212,0.06)',
                border: '1px solid rgba(230,234,212,0.10)',
                borderRadius: '100px',
                padding: '3px 10px',
              }}>
                <span style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#7B6FE8', display:'inline-block' }} />
                Live · Free + Pro
              </span>
            </div>
          </Reveal>

          {/* 50/50 split — UI left, copy right (flipped) */}
          <div className="products-split">

            {/* Left — coded UI mockup (desktop left, mobile below copy) */}
            <Reveal>
              <div className="products-split-ui-dark">
                <SillUI />
              </div>
            </Reveal>

            {/* Right — copy (always top on mobile) */}
            <Reveal delay={0.1}>
              <div className="products-split-copy-dark" style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: 'rgba(230,234,212,0.28)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '20px',
                }}>
                  // Core Target: Windows Power Users · Stack: Rust + Native Win32 Interface
                </span>

                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 'clamp(2rem,4vw,3rem)',
                  letterSpacing: '-0.04em',
                  color: '#E6EAD4',
                  lineHeight: 1.0,
                  marginBottom: '8px',
                }}>
                  Sill
                </h2>
                <p style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 500,
                  fontSize: '1rem',
                  color: 'rgba(230,234,212,0.40)',
                  letterSpacing: '-0.01em',
                  marginBottom: '24px',
                }}>
                  Windows 11 Keyboard Utility
                </p>

                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.75,
                  color: 'rgba(230,234,212,0.55)',
                  maxWidth: '42ch',
                  marginBottom: '32px',
                }}>
                  {SILL.description}
                </p>

                {/* Capability tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '36px',
                }}>
                  {['Command Palette', 'Taskbar Widget', 'System Controls', 'Notes & Reminders', 'Workflows'].map(tag => (
                    <span key={tag} style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'rgba(230,234,212,0.45)',
                      background: 'rgba(230,234,212,0.05)',
                      border: '1px solid rgba(230,234,212,0.08)',
                      borderRadius: '100px',
                      padding: '4px 10px',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key stats */}
                <div style={{
                  display: 'flex',
                  gap: '24px',
                  marginBottom: '36px',
                  borderTop: '1px solid rgba(230,234,212,0.07)',
                  paddingTop: '24px',
                }}>
                  {[
                    { v: 'Free', l: 'Core tier' },
                    { v: 'Pro', l: 'One-time upgrade' },
                    { v: 'Win11', l: 'Platform' },
                  ].map(item => (
                    <div key={item.l}>
                      <div style={{ fontFamily:'var(--font-heading)', fontWeight:800, fontSize:'1.25rem', letterSpacing:'-0.03em', color:'#E6EAD4' }}>{item.v}</div>
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.60rem', fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase', color:'rgba(230,234,212,0.30)', marginTop:'3px' }}>{item.l}</div>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                  <ArrowLink href={SOCIAL_LINKS.sill} external light>Get Sill</ArrowLink>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Closing — What's next ────────────────────────────────────── */}
      <section style={{ background: '#E6EAD4', borderBottom: '1px solid rgba(26,29,22,0.08)' }}>
        <div className="container-width section-pad">
          <Reveal>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '32px',
            }}>
              <div>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: 'rgba(26,29,22,0.30)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '16px',
                }}>
                  // Exploring
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.25rem,2.5vw,1.75rem)',
                  letterSpacing: '-0.03em',
                  color: '#1A1D16',
                  marginBottom: '10px',
                }}>
                  What&apos;s next?
                </h2>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.65,
                  color: 'rgba(26,29,22,0.55)',
                  maxWidth: '48ch',
                }}>
                  We&apos;re exploring the next product to build. If you have a software problem
                  worth solving — in a space that lacks good tooling — we&apos;d like to hear about it.
                </p>
              </div>
              <Link href="/contact" className="btn-primary" style={{ flexShrink: 0 }}>
                Tell us about a problem
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  )
}
