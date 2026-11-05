import { COMPANY } from '@/lib/constants'

const stats = [
  { value: `${COMPANY.productCount}`,        label: 'Products built' },
  { value: `${COMPANY.kalvoraUsers}`,         label: 'Kalvora users' },
  { value: `${COMPANY.clientProjects}`,       label: 'Clients worked with' },
  { value: `${COMPANY.foundedYear}`,          label: `Founded · ${COMPANY.location}` },
]

export default function CredibilityBar() {
  return (
    <section
      aria-label="Studio highlights"
      className="border-y border-border bg-canvas"
    >
      <div className="container-width">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center py-8 px-6 text-center">
              <span
                className="font-heading font-bold text-primary block"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', letterSpacing: '-0.03em', lineHeight: 1 }}
              >
                {stat.value}
              </span>
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted mt-2 leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
