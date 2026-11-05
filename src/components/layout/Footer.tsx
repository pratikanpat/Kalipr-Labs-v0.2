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
    <footer className="bg-inverse text-on-inverse">

      {/* ── Main footer grid ── */}
      <div className="section-pad border-b border-border-inverse">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Brand column */}
            <div className="lg:col-span-1">
              <p className="font-heading font-bold tracking-[0.12em] text-on-inverse text-sm mb-3">
                KALIPR LABS
              </p>
              <p className="text-[0.8125rem] text-on-inverse-muted leading-relaxed mb-6 max-w-[200px]">
                Independent software studio building products and digital solutions.
              </p>
              <p className="font-mono text-[10px] tracking-widest uppercase text-on-inverse-muted/60">
                {COMPANY.location} · Est. {COMPANY.foundedYear}
              </p>
            </div>

            {/* Studio column */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-on-inverse-muted/60 mb-5">
                Studio
              </p>
              <nav aria-label="Footer studio links">
                <ul className="space-y-3">
                  {studioLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-on-inverse-muted hover:text-on-inverse transition-colors"
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
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-on-inverse-muted/60 mb-5">
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
                          className="text-sm text-on-inverse-muted hover:text-on-inverse transition-colors inline-flex items-center gap-1"
                        >
                          {link.label}
                          <ArrowRight className="w-3 h-3 -rotate-45 opacity-50" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-on-inverse-muted hover:text-on-inverse transition-colors"
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
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-on-inverse-muted/60 mb-5">
                Connect
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-on-inverse-muted hover:text-on-inverse transition-colors inline-flex items-center gap-1"
                  >
                    LinkedIn
                    <ArrowRight className="w-3 h-3 -rotate-45 opacity-50" />
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-sm text-on-inverse-muted hover:text-on-inverse transition-colors break-all"
                  >
                    {COMPANY.email}
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom strip ── */}
      <div className="section-pad-sm">
        <div className="container-width">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="font-mono text-[11px] text-on-inverse-muted">
              © {year} Kalipr Labs. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {/* Privacy & Terms — only add hrefs when real pages exist */}
              <span className="font-mono text-[11px] text-on-inverse-muted/40">
                Privacy Policy
              </span>
              <span className="text-on-inverse-muted/20">·</span>
              <span className="font-mono text-[11px] text-on-inverse-muted/40">
                Terms of Use
              </span>
              <span className="text-on-inverse-muted/20">·</span>
              <span className="font-mono text-[11px] text-on-inverse-muted/40">
                Made in Pune, India.
              </span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
