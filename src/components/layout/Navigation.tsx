'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { NAV_LINKS, COMPANY } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Navigation() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMenu = () => setMobileOpen(false)

  // Nav is always on a dark background (hero is dark, scrolled becomes dark blur)
  return (
    <>
      {/* Desktop / Main Header */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'backdrop-blur-md border-b'
            : 'bg-transparent border-b border-transparent',
        )}
        style={
          scrolled
            ? { background: 'rgba(12,12,14,0.85)', borderColor: 'rgba(255,255,255,0.08)' }
            : {}
        }
      >
        <div className="container-width">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Link
              href="/"
              className="font-heading font-semibold text-sm tracking-[0.14em] transition-opacity"
              style={{ color: 'rgba(255,255,255,0.9)', letterSpacing: '0.14em' }}
              onClick={closeMenu}
            >
              KALIPR LABS
            </Link>

            {/* Desktop Nav links */}
            <nav className="hidden md:flex items-center gap-9" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group text-sm font-sans transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  <span className="group-hover:text-white transition-colors duration-200">
                    {link.label}
                  </span>
                  {/* Underline slides in from left */}
                  <span
                    aria-hidden
                    className="absolute -bottom-0.5 left-0 h-px w-full rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                    style={{ background: 'rgba(255,255,255,0.4)' }}
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]"
              >
                Start a Project
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden relative z-50 flex items-center justify-center w-10 h-10 rounded-lg transition-colors"
              style={{ color: 'rgba(255,255,255,0.7)' }}
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
              aria-controls="mobile-nav"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1 }}
                    exit={{   rotate:  90,  opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0,  opacity: 1 }}
                    exit={{   rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Full-screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: '#0C0C0E' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{   opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Nav items */}
            <nav
              className="flex-1 flex flex-col justify-center px-8 md:px-14"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link, i) => (
                <div
                  key={link.href}
                  className="overflow-hidden"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <motion.div
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    exit={{   y: '110%' }}
                    transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-baseline gap-4 py-6 group"
                      onClick={closeMenu}
                    >
                      <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>0{i + 1}</span>
                      <span
                        className="font-heading text-5xl font-bold tracking-tight leading-none transition-colors duration-200"
                        style={{ color: 'rgba(255,255,255,0.75)' }}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                </div>
              ))}

              {/* Mobile CTA */}
              <motion.div
                className="pt-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: NAV_LINKS.length * 0.07 + 0.1 }}
              >
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3.5 rounded-full text-base"
                >
                  Start a Project <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </nav>

            {/* Footer strip */}
            <motion.div
              className="border-t px-8 md:px-14 py-6 flex justify-between items-end"
              style={{ borderColor: 'rgba(255,255,255,0.07)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  {COMPANY.tagline}
                </p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{COMPANY.location}</p>
              </div>
              <a
                href={`mailto:${COMPANY.email}`}
                className="font-mono text-xs transition-colors"
                style={{ color: '#7B8FF0' }}
              >
                {COMPANY.email}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
