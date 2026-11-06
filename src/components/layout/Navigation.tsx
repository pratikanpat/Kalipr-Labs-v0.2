'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, COMPANY } from '@/lib/constants'
import { cn } from '@/lib/utils'

const EASE = [0.16, 1, 0.3, 1] as const

// Pill nav link with background tracking on hover
function NavLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={href}
      className="relative px-3.5 py-1.5 text-[13px] font-medium rounded-full transition-colors duration-300"
      style={{ color: hovered ? '#1A1D16' : 'rgba(26,29,22,0.55)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <motion.span
          layoutId="nav-hover"
          className="absolute inset-0 rounded-full"
          style={{ background: 'rgba(26,29,22,0.07)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: EASE }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </Link>
  )
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeMenu = () => setMobileOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* Desktop header */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{ height: 76 }}
      >
        <div className="container-width h-full flex items-center justify-between">

          {/* Logo — always visible, left-aligned */}
          <Link
            href="/"
            className="font-heading font-bold text-[15px] tracking-[0.06em] text-primary transition-opacity hover:opacity-70"
            onClick={closeMenu}
          >
            KALIPR LABS
          </Link>

          {/* Center — floating pill navigation */}
          <nav
            className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full"
            style={{
              background: '#F5F7EF',
              border: '1px solid rgba(26,29,22,0.07)',
              boxShadow: scrolled ? '0 4px 24px rgba(26,29,22,0.08)' : 'none',
              transition: 'box-shadow 0.5s cubic-bezier(0.16,1,0.3,1)',
            }}
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          {/* Right — CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="btn-primary text-[13px] px-5 py-2.5"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-border"
            style={{ background: '#F5F7EF' }}
            onClick={() => setMobileOpen(o => !o)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-nav"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-4 h-4 text-primary" />
                </motion.span>
              ) : (
                <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-4 h-4 text-primary" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: '#E6EAD4' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex-1 flex flex-col justify-center px-8 md:px-14" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => (
                <div key={link.href} className="overflow-hidden" style={{ borderBottom: '1px solid rgba(26,29,22,0.08)' }}>
                  <motion.div
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '110%' }}
                    transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                  >
                    <Link href={link.href} className="flex items-baseline gap-5 py-6 group" onClick={closeMenu}>
                      <span className="font-mono text-xs text-muted">0{i + 1}</span>
                      <span className="font-heading text-5xl font-bold text-primary tracking-tight leading-none">
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                </div>
              ))}
              <motion.div
                className="pt-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: NAV_LINKS.length * 0.07 + 0.1 }}
              >
                <Link href="/contact" onClick={closeMenu} className="btn-primary">
                  Start Project
                </Link>
              </motion.div>
            </nav>

            <motion.div
              className="border-t px-8 md:px-14 py-6 flex justify-between items-end"
              style={{ borderColor: 'rgba(26,29,22,0.08)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <div>
                <p className="font-mono text-xs text-muted uppercase tracking-widest mb-1">{COMPANY.tagline}</p>
                <p className="text-sm text-secondary">{COMPANY.location}</p>
              </div>
              <a href={`mailto:${COMPANY.email}`} className="font-mono text-xs text-primary">{COMPANY.email}</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
