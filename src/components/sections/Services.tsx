'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'

/* ── Animated Wireframes ─────────────────────────────────────────── */

function WireframeSoftware({ hovered }: { hovered: boolean }) {
  const nodes = [0, 1, 2, 3, 4]
  return (
    <svg width="100%" height="80" viewBox="0 0 220 80" fill="none" aria-hidden>
      {[[0,1],[1,2],[2,3],[3,4]].map(([a,b], i) => (
        <line
          key={i}
          x1={20 + a * 45} y1="40" x2={20 + b * 45} y2="40"
          strokeDasharray="4 4"
          style={{
            stroke: hovered ? 'rgba(26,29,22,0.35)' : 'rgba(26,29,22,0.12)',
            strokeWidth: 1.5,
            transition: `stroke 0.4s ease ${i * 0.08}s`,
          }}
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={n}
          cx={20 + n * 45} cy="40" r={i === 0 || i === 4 ? 8 : 6}
          style={{
            fill: hovered ? (i === 0 ? '#1A1D16' : 'rgba(26,29,22,0.15)') : 'rgba(26,29,22,0.08)',
            stroke: hovered ? 'rgba(26,29,22,0.4)' : 'rgba(26,29,22,0.12)',
            strokeWidth: 1.5,
            transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.07}s`,
          }}
        />
      ))}
      {['Idea','Design','Build','Test','Ship'].map((label, i) => (
        <text
          key={label} x={20 + i * 45} y={62} textAnchor="middle"
          style={{
            fontFamily: 'var(--font-mono)', fontSize: '8px',
            fill: hovered ? 'rgba(26,29,22,0.5)' : 'rgba(26,29,22,0.25)',
            transition: `fill 0.4s ease ${i * 0.06}s`,
          }}
        >
          {label}
        </text>
      ))}
    </svg>
  )
}

function WireframeWebApp({ hovered }: { hovered: boolean }) {
  return (
    <div style={{ height: '80px', display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center' }}>
      {[70, 90, 55].map((w, i) => (
        <div
          key={i}
          style={{
            height: '10px', borderRadius: '5px',
            background: 'rgba(26,29,22,0.08)',
            width: `${w}%`, position: 'relative', overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(90deg, transparent 0%, rgba(26,29,22,0.15) 50%, transparent 100%)',
              animation: hovered ? `skeleton-sweep 1.5s ease ${i * 0.2}s infinite` : 'none',
            }}
          />
        </div>
      ))}
    </div>
  )
}

function WireframeAI({ hovered }: { hovered: boolean }) {
  const pts = [{ cx:30,cy:40 },{ cx:110,cy:20 },{ cx:110,cy:60 },{ cx:190,cy:40 }]
  const edges = [[0,1],[0,2],[1,3],[2,3]]
  return (
    <svg width="100%" height="80" viewBox="0 0 220 80" fill="none" aria-hidden>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={pts[a].cx} y1={pts[a].cy} x2={pts[b].cx} y2={pts[b].cy}
          style={{
            stroke: hovered ? 'rgba(26,29,22,0.30)' : 'rgba(26,29,22,0.08)',
            strokeWidth: 1.5,
            transition: `stroke 0.5s ease ${i * 0.1}s`,
          }}
        />
      ))}
      {pts.map((p, i) => (
        <circle
          key={i} cx={p.cx} cy={p.cy} r={i === 0 || i === 3 ? 10 : 7}
          style={{
            fill: hovered ? (i === 0 || i === 3 ? '#1A1D16' : 'rgba(26,29,22,0.12)') : 'rgba(26,29,22,0.07)',
            stroke: hovered ? 'rgba(26,29,22,0.35)' : 'rgba(26,29,22,0.10)',
            strokeWidth: 1.5,
            transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.09}s`,
            animation: hovered ? `pulse-node 2s ease-in-out ${i * 0.3}s infinite` : 'none',
          }}
        />
      ))}
    </svg>
  )
}

function WireframeWebsite({ hovered }: { hovered: boolean }) {
  return (
    <div
      style={{
        height: '80px',
        border: '1.5px solid rgba(26,29,22,0.12)',
        borderRadius: '8px', overflow: 'hidden',
        background: 'rgba(26,29,22,0.03)',
      }}
    >
      <div
        style={{
          height: '18px', background: 'rgba(26,29,22,0.06)',
          borderBottom: '1px solid rgba(26,29,22,0.08)',
          display: 'flex', alignItems: 'center', gap: '4px', paddingLeft: '8px',
        }}
      >
        {[0,1,2].map(i => (
          <div key={i} style={{
            width:'5px', height:'5px', borderRadius:'50%',
            background: hovered ? `rgba(26,29,22,${0.3 + i * 0.1})` : 'rgba(26,29,22,0.12)',
            transition:`background 0.4s ease ${i * 0.08}s`,
          }}/>
        ))}
      </div>
      <div style={{ padding: '8px', display:'flex', flexDirection:'column', gap:'5px' }}>
        {[80, 60, 40].map((w, i) => (
          <div key={i} style={{ height:'8px', borderRadius:'4px', background:'rgba(26,29,22,0.07)', overflow:'hidden', position:'relative' }}>
            <div style={{
              position:'absolute', top:0, left:0, bottom:0,
              width: hovered ? `${w}%` : '0%',
              background: i === 0 ? 'rgba(26,29,22,0.20)' : 'rgba(26,29,22,0.10)',
              borderRadius:'4px',
              transition: `width 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`,
            }}/>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Service Card ────────────────────────────────────────────────── */
interface CardProps {
  num: string; title: string; problem: string; description: string
  deliverable: string; colSpan: 7 | 5; wireframe: 'software'|'webapp'|'ai'|'website'
  cta: string; ctaHref: string;
  /** Stagger delay index — each card offset by 0.06 s */
  staggerIndex?: number;
}

function ServiceCard({ num, title, problem, description, deliverable, colSpan, wireframe, cta, ctaHref, staggerIndex = 0 }: CardProps) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  // Use section-level inView so all 4 cards share the same trigger threshold
  const inView = useInView(ref, { once: true, margin: '-80px 0px' } as any)

  return (
    <motion.div
      ref={ref}
      className={`col-span-12 lg:col-span-${colSpan}`}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: staggerIndex * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#F9FAF6' : '#F5F7EF',
        borderRadius: 'var(--radius-card)',
        padding: '32px',
        border: `1px solid ${hovered ? 'rgba(26,29,22,0.14)' : 'rgba(26,29,22,0.07)'}`,
        transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
        transform: hovered ? 'scale(1.015)' : 'scale(1)',
        display: 'flex', flexDirection: 'column', gap: '20px',
      }}
    >
      {/* Header */}
      <div>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', fontWeight:600, color:'rgba(26,29,22,0.35)', letterSpacing:'0.08em', display:'block', marginBottom:'8px' }}>
          {num}
        </span>
        <h3 style={{ fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'clamp(1.1rem,2vw,1.35rem)', letterSpacing:'-0.03em', color:'#1A1D16', lineHeight:1.2 }}>
          {title}
        </h3>
      </div>

      {/* Wireframe */}
      <div>
        {wireframe === 'software' && <WireframeSoftware hovered={hovered} />}
        {wireframe === 'webapp'   && <WireframeWebApp   hovered={hovered} />}
        {wireframe === 'ai'       && <WireframeAI       hovered={hovered} />}
        {wireframe === 'website'  && <WireframeWebsite  hovered={hovered} />}
      </div>

      {/* Problem */}
      <p style={{ fontFamily:'var(--font-heading)', fontWeight:600, fontSize:'0.9375rem', letterSpacing:'-0.01em', color:'#1A1D16' }}>
        {problem}
      </p>

      {/* Description */}
      <p style={{ fontFamily:'var(--font-sans)', fontSize:'0.875rem', lineHeight:1.65, color:'rgba(26,29,22,0.60)', flex:1 }}>
        {description}
      </p>

      {/* Footer row */}
      <div style={{ borderTop:'1px solid rgba(26,29,22,0.07)', paddingTop:'16px', display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:'12px', flexWrap:'wrap' }}>
        <p style={{ fontFamily:'var(--font-mono)', fontSize:'0.72rem', color:'rgba(26,29,22,0.40)', letterSpacing:'0.03em', lineHeight:1.4, maxWidth:'28ch' }}>
          {deliverable}
        </p>
        <Link href={ctaHref} style={{ fontFamily:'var(--font-heading)', color:'#1A1D16', letterSpacing:'-0.01em', display:'inline-flex', alignItems:'center', gap:'6px', fontSize:'0.875rem', fontWeight:600, textDecoration:'none', whiteSpace:'nowrap' }}>
          {cta}
          <ArrowRight size={14} style={{ transform: hovered ? 'translateX(3px)' : 'translateX(0)', transition:'transform 0.4s cubic-bezier(0.16,1,0.3,1)' }}/>
        </Link>
      </div>
    </motion.div>
  )
}

/* ── Data ────────────────────────────────────────────────────────── */
const CARDS: CardProps[] = [
  { num:'01', title:'Software Product Development', problem:"You have an idea. Building it right the first time is hard.", description:"From zero to a live product — discovery, design, engineering and launch. We build software that holds up under real usage and grows with your business.", deliverable:'Working software with a clear improvement path', colSpan:7, wireframe:'software', cta:'Start a project', ctaHref:'/contact' },
  { num:'02', title:'Custom Web Applications', problem:"Generic tools don't fit your workflow.", description:"Bespoke web apps built for your exact process. Admin dashboards, internal tools, customer portals — engineered to match how your team actually works.", deliverable:'A production web app built for your workflow', colSpan:5, wireframe:'webapp', cta:'Get a quote', ctaHref:'/contact' },
  { num:'03', title:'AI & Workflow Automation', problem:"Repetitive work is stealing time from real work.", description:"Identify the bottlenecks, integrate AI where it genuinely helps, and automate the repetitive cycles that slow your team down — without replacing judgment work.", deliverable:'Measurable reduction in manual process time', colSpan:5, wireframe:'ai', cta:'Explore automation', ctaHref:'/contact' },
  { num:'04', title:'Website Development', problem:"Your website isn't doing enough for your business.", description:"High-performance marketing sites and landing pages built for speed, SEO, and conversion — with the kind of design polish that actually builds trust.", deliverable:'A fast, polished site that converts visitors', colSpan:7, wireframe:'website', cta:'See our work', ctaHref:'/work' },
]

/* ── Section ─────────────────────────────────────────────────────── */
export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px 0px' } as any)

  return (
    <section id="services" aria-labelledby="services-heading" className="section-pad" style={{ background:'#E6EAD4' }}>
      <div className="container-width">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity:0, y:24 }}
          animate={headerInView ? { opacity:1, y:0 } : {}}
          transition={{ duration:0.7, ease:[0.16,1,0.3,1] }}
          className="mb-14"
        >
          <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', fontWeight:600, letterSpacing:'0.12em', color:'rgba(26,29,22,0.40)', textTransform:'uppercase', display:'block', marginBottom:'16px' }}>
            Services
          </span>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 id="services-heading" style={{ fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'clamp(2rem,4.5vw,3.25rem)', letterSpacing:'-0.03em', lineHeight:1.1, color:'#1A1D16', maxWidth:'18ch' }}>
              What we build for you.
            </h2>
            <p style={{ fontFamily:'var(--font-sans)', fontSize:'0.9375rem', lineHeight:1.6, color:'rgba(26,29,22,0.55)', maxWidth:'36ch' }}>
              Four focused service areas, each with deep experience behind it. We don't spread thin — we do fewer things, better.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="bento-grid">
          {CARDS.map((card, i) => (
            <ServiceCard key={card.num} {...card} staggerIndex={i} />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity:0 }}
          animate={headerInView ? { opacity:1 } : {}}
          transition={{ duration:0.7, delay:0.5, ease:[0.16,1,0.3,1] }}
          className="mt-12 flex items-center justify-between gap-6 flex-wrap"
        >
          <p style={{ fontFamily:'var(--font-sans)', fontSize:'0.875rem', color:'rgba(26,29,22,0.45)' }}>
            Not sure what you need? Let's figure it out together.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a conversation
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
