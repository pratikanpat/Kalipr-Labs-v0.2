import type { Metadata } from 'next'
import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/animations/Reveal'
import { KALVORA, SOCIAL_LINKS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Kalvora â€” Proposal & Invoice Software for Interior Designers',
  description:
    'Kalvora by Kalipr Labs. Branded proposals, client approvals, and GST invoicing built specifically for interior designers and studios. 500+ users.',
  openGraph: {
    title: 'Kalvora â€” Proposal & Invoice Software for Interior Designers',
    description:
      'Kalvora helps interior designers and studios manage proposals, client approvals, and invoicing in one place.',
  },
}

const FEATURES_DETAIL = [
  {
    title: 'Branded Proposal Generation',
    description:
      'Create professional, branded proposals that reflect your studio identity. Clients receive a polished document â€” not a generic template.',
  },
  {
    title: 'Client Approval Workflows',
    description:
      'Share proposals with clients and collect structured approvals digitally. No more back-and-forth emails to confirm scope.',
  },
  {
    title: 'Proposal Sharing',
    description:
      'Send proposals via a shareable link. Clients can review, comment, and approve without needing to create an account.',
  },
  {
    title: 'GST Invoice Generation',
    description:
      'Generate GST-compliant invoices directly from approved proposals. The numbers flow through â€” no duplicate data entry.',
  },
  {
    title: 'Studio Management Workflows',
    description:
      'Manage multiple projects, track proposal statuses, and maintain an organised view of your studio\'s client work.',
  },
]

const SCREENSHOTS = [
  { src: '/screenshots/kalvora/dashboard.png', alt: 'Kalvora dashboard view' },
  { src: '/screenshots/kalvora/proposal-editor.png', alt: 'Proposal editor in Kalvora' },
  { src: '/screenshots/kalvora/client-approval.png', alt: 'Client approval flow' },
  { src: '/screenshots/kalvora/invoice-view.png', alt: 'GST invoice generation' },
]

export default function KalvoraPage() {
  return (
    <div className="bg-canvas pt-[72px]">
      {/* Hero */}
      <section className="section-pad border-b border-border">
        <div className="container-width">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <SectionLabel>// kalvora</SectionLabel>
              <Badge variant="live">LIVE Â· 500+ Users</Badge>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-heading text-[clamp(2.25rem,6vw,3.75rem)] font-semibold tracking-tight text-primary text-balance max-w-[700px]">
              Proposal and invoice software built for interior designers.
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 text-base leading-relaxed text-secondary max-w-[520px]">
              Kalvora is Kalipr Labs&apos; flagship product. It handles the business side of
              interior design â€” proposals, client approvals, and GST invoicing â€” so
              designers can focus entirely on the design work.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={SOCIAL_LINKS.kalvora} variant="primary" size="lg" external>
                Open Kalvora â†’
              </Button>
              <span className="text-sm text-muted">Free to get started</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Screenshots */}
      <section className="section-pad bg-surface border-b border-border">
        <div className="container-width">
          <Reveal>
            <SectionLabel>// product screenshots</SectionLabel>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {SCREENSHOTS.map((shot, i) => (
              <Reveal key={shot.src} delay={i * 0.06}>
                <div className="relative overflow-hidden rounded-xl border border-border bg-white aspect-[16/10] shadow-sm">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-xs text-muted text-center">
            Screenshots from the live Kalvora product â€” real interface, real users.
          </p>
        </div>
      </section>

      {/* Features detail */}
      <section className="section-pad border-b border-border">
        <div className="container-width">
          <Reveal>
            <SectionLabel>// features</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight text-primary">
              Everything a design studio needs.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES_DETAIL.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.06}>
                <div className="rounded-xl border border-border bg-white p-6">
                  <div className="flex items-center gap-2.5">
                    <span className="text-accent font-mono text-sm">âœ“</span>
                    <h3 className="font-heading text-sm font-semibold text-primary">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-secondary">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-inverse">
        <div className="container-width text-center">
          <Reveal>
            <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight text-on-inverse">
              Interior designer? Give Kalvora a try.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 text-base text-on-inverse-muted max-w-[400px] mx-auto">
              500+ designers and studios already use Kalvora to run their business.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-8">
              <Button href={SOCIAL_LINKS.kalvora} variant="inverse" size="lg" external>
                Open Kalvora â†’
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}



