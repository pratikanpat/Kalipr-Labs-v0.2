'use client'

const CLIENT_LEDGER = [
  { reg: '#KL-005', sector: 'Interior Design',      system: 'SaaS Product · Kalvora',         year: '2025–26' },
  { reg: '#KL-004', sector: 'Professional Services', system: 'Internal Workflow Web App',       year: '2026' },
  { reg: '#KL-003', sector: 'Technology',            system: 'AI & Process Automation Layer',   year: '2026' },
  { reg: '#KL-002', sector: 'Logistics Core',        system: 'Client Automation Engine',        year: '2026' },
  { reg: '#KL-001', sector: 'Custom Services',       system: 'Custom Web Application',          year: '2025' },
]

export function ClientLedger() {
  return (
    <div style={{ marginTop: '32px', overflowX: 'auto' }}>
      {/* Table header */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '120px 1fr 1fr 80px',
          gap: '0 24px',
          paddingBottom: '12px',
          borderBottom: '1px solid rgba(26,29,22,0.12)',
        }}
      >
        {['Registry No.', 'Sector', 'Deployed System Architecture', 'Year'].map((col) => (
          <span
            key={col}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.10em',
              color: 'rgba(26,29,22,0.30)',
              textTransform: 'uppercase',
            }}
          >
            {col}
          </span>
        ))}
      </div>

      {/* Table rows */}
      {CLIENT_LEDGER.map((entry) => (
        <div
          key={entry.reg}
          style={{
            display: 'grid',
            gridTemplateColumns: '120px 1fr 1fr 80px',
            gap: '0 24px',
            padding: '20px 0',
            borderBottom: '1px solid rgba(26,29,22,0.06)',
            alignItems: 'center',
            transition: 'background 0.2s ease',
            cursor: 'default',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(26,29,22,0.02)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'transparent' }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.06em', color: 'rgba(26,29,22,0.38)' }}>
            {entry.reg}
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(26,29,22,0.65)' }}>
            {entry.sector}
          </span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'rgba(26,29,22,0.65)' }}>
            {entry.system}
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.04em', color: 'rgba(26,29,22,0.38)' }}>
            {entry.year}
          </span>
        </div>
      ))}
    </div>
  )
}

