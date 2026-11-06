import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { COMPANY, SOCIAL_LINKS } from '@/lib/constants'

const studioLinks = [
  { href: '/about',    label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/work',     label: 'Work' },
  { href: '/contact',  label: 'Contact' },
]

const productLinks = [
  { href: SOCIAL_LINKS.kalvora, label: 'Kalvora', external: true },
  { href: SOCIAL_LINKS.sill,    label: 'Sill',    external: true },
  { href: '/products',          label: 'All products', external: false },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#0C0C0E', color: '#EDE9DF' }}>

      {/* Top separator */}
      <div className="container-width">
        <div className="h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
      </div>

      {/* Main footer grid */}
      <div className="section-pad">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Brand column */}
            <div className="lg:col-span-1">
              <p className="font-heading font-bold tracking-[0.12em] text-white text-sm mb-3">
                KALIPR LABS
              </p>
              <p className="text-[0.8125rem] leading-relaxed mb-6 max-w-[200px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Independent software studio building products and digital solutions.
              </p>
              <p className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.2)' }}>
                {COMPANY.location} &middot; Est. {COMPANY.foundedYear}
              </p>
            </div>

            {/* Studio column */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.25)' }}>
                Studio
              </p>
              <nav aria-label="Footer studio links">
                <ul className="space-y-3">
                  {studioLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm transition-colors duration-200 hover:text-white"
                        style={{ color: 'rgba(255,255,255,0.45)' }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Products column */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.25)' }}>
                Our Products
              </p>
              <nav aria-label="Footer product links">
                <ul className="space-y-3">
                  {productLinks.map((link) => (
                    <li key={link.href}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm transition-colors duration-200 hover:text-white inline-flex items-center gap-1"
                          style={{ color: 'rgba(255,255,255,0.45)' }}
                        >
                          {link.label}
                          <ArrowRight className="w-3 h-3 -rotate-45 opacity-50" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm transition-colors duration-200 hover:text-white"
                          style={{ color: 'rgba(255,255,255,0.45)' }}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Connect column */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.25)' }}>
                Connect
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors duration-200 hover:text-white inline-flex items-center gap-1"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                  >
                    LinkedIn
                    <ArrowRight className="w-3 h-3 -rotate-45 opacity-50" />
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-sm transition-colors duration-200 hover:text-white break-all"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                  >
                    {COMPANY.email}
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="section-pad-sm" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="container-width">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="font-mono text-[11px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
              &copy; {year} Kalipr Labs. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {/* Privacy & Terms — only add hrefs when real pages exist */}
              <span className="font-mono text-[11px]" style={{ color: 'rgba(255,255,255,0.18)' }}>
                Privacy Policy
              </span>
              <span style={{ color: 'rgba(255,255,255,0.12)' }}>&middot;</span>
              <span className="font-mono text-[11px]" style={{ color: 'rgba(255,255,255,0.18)' }}>
                Terms of Use
              </span>
              <span style={{ color: 'rgba(255,255,255,0.12)' }}>&middot;</span>
              <span className="font-mono text-[11px]" style={{ color: 'rgba(255,255,255,0.18)' }}>
                Made in Pune, India.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Cal.com-style giant brand text — decorative background art */}
      <div className="overflow-hidden select-none" aria-hidden>
        <p
          className="font-heading font-black text-center leading-none whitespace-nowrap"
          style={{
            fontSize: 'clamp(80px, 18vw, 180px)',
            letterSpacing: '-0.05em',
            lineHeight: 0.9,
            color: 'rgba(255,255,255,0.025)',
            paddingBottom: 'clamp(24px, 4vw, 48px)',
          }}
        >
          KALIPR LABS
        </p>
      </div>

    </footer>
  )
}
