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
    <div style={{ marginTop: '32px' }}>
      {/* Table header — hidden on mobile via CSS */}
      <div className="ledger-table-header" style={{ paddingBottom: '12px', borderBottom: '1px solid rgba(26,29,22,0.12)' }}>
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

      {/* Rows — desktop table / mobile bento cards via CSS */}
      {CLIENT_LEDGER.map((entry) => (
        <div
          key={entry.reg}
          className="ledger-table-row"
          onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(26,29,22,0.02)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'transparent' }}
        >
          <span className="ledger-cell-reg" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.06em', color: 'rgba(26,29,22,0.38)' }}>
            {entry.reg}
          </span>
          <span className="ledger-cell-sector" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(26,29,22,0.65)' }}>
            {entry.sector}
          </span>
          <span className="ledger-cell-system" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'rgba(26,29,22,0.65)' }}>
            {entry.system}
          </span>
          <span className="ledger-cell-year" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.04em', color: 'rgba(26,29,22,0.38)' }}>
            {entry.year}
          </span>
        </div>
      ))}
    </div>
  )
}

