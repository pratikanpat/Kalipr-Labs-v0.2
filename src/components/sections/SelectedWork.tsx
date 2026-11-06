'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const PROJECTS = [
  {
    id: 'p1',
    industry: 'Interior Design',
    type: 'SaaS Platform',
    year: '2025',
    description: 'Proposal and invoicing software for independent designers. Replaced a Word + WhatsApp workflow with a shareable link, real-time view tracking and automatic GST invoicing.',
    tags: ['Product Design', 'React', 'SaaS'],
    colSpan: 7,
  },
  {
    id: 'p2',
    industry: 'Professional Services',
    type: 'Custom Web Application',
    year: '2026',
    description: 'Internal workflow tool for a client services firm. Automated report generation, reduced manual coordination time and gave leadership real-time project visibility.',
    tags: ['Next.js', 'Automation', 'Dashboard'],
    colSpan: 5,
  },
  {
    id: 'p3',
    industry: 'Technology',
    type: 'AI & Workflow Automation',
    year: '2026',
    description: 'An AI-assisted process layer integrated into an existing product pipeline. Cut turnaround time on a repetitive operations task from hours to minutes.',
    tags: ['AI Integration', 'Automation', 'API'],
    colSpan: 5,
  },
] as const

function ProjectCard({ project, delay }: { project: (typeof PROJECTS)[number]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px 0px' } as any)

  return (
    <motion.div
      ref={ref}
      className={`col-span-12 lg:col-span-${project.colSpan}`}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: '#F5F7EF',
        borderRadius: 'var(--radius-card)',
        padding: '32px',
        border: '1px solid rgba(26,29,22,0.07)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
      }}
      whileHover={{
        background: '#F9FAF6',
        borderColor: 'rgba(26,29,22,0.14)',
        y: -4,
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.10em',
              color: 'rgba(26,29,22,0.35)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            {project.industry}
          </span>
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              letterSpacing: '-0.03em',
              color: '#1A1D16',
              lineHeight: 1.2,
            }}
          >
            {project.type}
          </h3>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'rgba(26,29,22,0.30)',
            letterSpacing: '0.06em',
            flexShrink: 0,
            paddingTop: '4px',
          }}
        >
          {project.year}
        </span>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'rgba(26,29,22,0.07)' }} />

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.875rem',
          lineHeight: 1.65,
          color: 'rgba(26,29,22,0.60)',
          flex: 1,
        }}
      >
        {project.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'rgba(26,29,22,0.45)',
              background: 'rgba(26,29,22,0.05)',
              border: '1px solid rgba(26,29,22,0.08)',
              borderRadius: '100px',
              padding: '3px 10px',
              letterSpacing: '0.03em',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function SelectedWork() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px 0px' } as any)

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="section-pad"
      style={{ background: '#E6EAD4' }}
    >
      <div className="container-width">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: 'rgba(26,29,22,0.40)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            Selected Work
          </span>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2
              id="work-heading"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: '#1A1D16',
                maxWidth: '18ch',
              }}
            >
              Five clients. Real results.
            </h2>
            <div style={{ maxWidth: '36ch' }}>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                  color: 'rgba(26,29,22,0.55)',
                  marginBottom: '8px',
                }}
              >
                Client names are kept private. Industry and project type are shown.
                Detailed case studies are being prepared.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="bento-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.1} />
          ))}

          {/* CTA tile */}
          <motion.div
            className="col-span-12 lg:col-span-7"
            initial={{ opacity: 0, y: 32 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: '#1A1D16',
              borderRadius: 'var(--radius-card)',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '32px',
              minHeight: '160px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                letterSpacing: '-0.02em',
                color: '#E6EAD4',
                lineHeight: 1.3,
                maxWidth: '32ch',
              }}
            >
              Want to become project #6? Let's talk about what you're building.
            </p>
            <Link
              href="/contact"
              className="btn-text-arrow"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '0.9375rem',
                color: '#E6EAD4',
                letterSpacing: '-0.01em',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(230,234,212,0.25)',
                paddingBottom: '2px',
                alignSelf: 'flex-start',
              }}
            >
              <span className="btn-label">Start a conversation</span>
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
