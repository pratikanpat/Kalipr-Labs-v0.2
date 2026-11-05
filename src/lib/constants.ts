// ─── Company ──────────────────────────────────────────────
export const COMPANY = {
  name:           'Kalipr Labs',
  tagline:        'Independent Software Product Studio',
  description:    'An independent software studio from Pune. We build our own products and engineer digital solutions for businesses.',
  philosophy:     'We find the friction. We build what fixes it.',
  location:       'Pune, India',
  email:          'contact@kaliprlabs.in',
  url:            'https://kaliprlabs.in',
  foundedYear:    2025,
  kalvoraUsers:   '500+',
  clientProjects: 5,       // exact count — do not use "5+"
  productCount:   2,
} as const

// ─── Navigation ───────────────────────────────────────────
export const NAV_LINKS = [
  { href: '/products',  label: 'Products' },
  { href: '/services',  label: 'Services' },
  { href: '/work',      label: 'Work' },
  { href: '/about',     label: 'About' },
  { href: '/contact',   label: 'Contact' },
] as const

// ─── Social ───────────────────────────────────────────────
export const SOCIAL_LINKS = {
  linkedin:        'https://www.linkedin.com/company/kalipr-labs',
  kalvora:         'https://kalvora.kaliprlabs.in',
  sill:            'https://sill.kaliprlabs.in',
  founderPortfolio:'https://pratik.kaliprlabs.in',
  founderLinkedIn: 'https://www.linkedin.com/in/pratikanpat',
} as const

// ─── Products ─────────────────────────────────────────────
export const KALVORA = {
  name:        'Kalvora',
  tagline:     'Good design deserves a better business workflow.',
  description: 'Proposal and invoice software for interior designers. Create branded proposals, share with clients, track views, collect approvals and generate GST invoices — without the Word/Excel/WhatsApp chaos.',
  url:         'https://kalvora.kaliprlabs.in',
  users:       '500+',
  status:      'Live',
  audience:    'Independent interior designers, freelancers and small-to-medium design studios',
  workflow: [
    { step: '01', label: 'Create proposal',  description: 'Build a branded proposal with your studio logo, payment terms and project details.' },
    { step: '02', label: 'Share a link',      description: 'Send one shareable link instead of PDF versions over WhatsApp.' },
    { step: '03', label: 'Track views',       description: 'Know exactly when a client opens and reads your proposal.' },
    { step: '04', label: 'Collect approval',  description: 'Clients comment and approve — no back-and-forth email chains.' },
    { step: '05', label: 'Generate invoice',  description: 'Create a GST invoice automatically after the proposal is approved.' },
  ],
  features: [
    'Branded proposal creation',
    'Studio branding — logo, accent colour, payment terms',
    'Shareable proposal links',
    'Client proposal view tracking',
    'Client comments and approval',
    'Proposal management and versioning',
    'Automatic invoice generation after approval',
    'GST-compliant invoicing',
    'Project pipeline — Draft, Sent, Viewed, Approved, Paid',
  ],
} as const

export const SILL = {
  name:        'Sill',
  tagline:     'Less navigating. More getting things done.',
  description: 'A small tool belt for Windows 11. One command palette and a live taskbar widget — bringing everyday PC actions into one keyboard-first interface.',
  url:         'https://sill.kaliprlabs.in',
  // storeUrl: get the actual Microsoft Store URL and add it here
  status:      'Live — Free + Pro',
  platform:    'Windows 11',
  pricing:     'Free core · Optional one-time Pro upgrade',
  developer:   'Kalipr Labs (developed by Raman)',
  capabilities: [
    {
      group: 'Command Palette',
      icon:  'command',
      description: 'One keyboard shortcut for everything.',
      features: [
        'App and open-window search',
        'Windows Settings search by typing',
        'Notes and reminders search',
        'Calculations and quick actions',
        'Keyboard-first — Ctrl + Alt + Space',
        'Pin frequently used actions',
      ],
    },
    {
      group: 'Taskbar Widget',
      icon:  'monitor',
      description: 'Your PC at a glance without opening another app.',
      features: [
        'Live CPU and RAM usage',
        'Download progress',
        'Upcoming reminder display',
        'Now-playing information',
        'Available disk space',
        'Multiple widget appearances (some Pro)',
      ],
    },
    {
      group: 'Quick System Controls',
      icon:  'settings',
      description: 'Everything your system needs, one shortcut away.',
      features: [
        'Find and connect to Wi-Fi networks',
        'Connect and disconnect Bluetooth devices',
        'Switch sound output devices',
        'Power commands',
      ],
    },
    {
      group: 'Notes & Reminders',
      icon:  'edit',
      description: 'Stay organised without leaving your workflow.',
      features: [
        'Markdown-based notes',
        'Time-based reminders',
        'Snooze and completion actions',
        'Resumable downloads',
        'Browser handoff for Chrome, Edge, Brave and Vivaldi',
      ],
    },
    {
      group: 'Workflows & Presets',
      icon:  'zap',
      description: 'Build shortcuts for the things you do every day.',
      features: [
        'Open websites, files, folders and apps',
        'Run PowerShell commands',
        'Launch custom workspaces',
        'Terminal access',
        'Use presets from the command line',
      ],
    },
  ],
} as const

// ─── Services ─────────────────────────────────────────────
export const SERVICES = [
  {
    id: '01',
    title: 'Software Product Development',
    problem: 'You have an idea worth building but need a team to take it from concept to live product.',
    description: 'We build SaaS platforms and software products from first principles. We validate, architect, develop and iterate — treating your product with the same seriousness we give our own.',
    deliverable: 'Working product from idea to production deployment',
    link: '/services',
  },
  {
    id: '02',
    title: 'Custom Web Applications',
    problem: "Your business process doesn't fit any existing tool, or the tools you use don't talk to each other.",
    description: 'Purpose-built dashboards, portals and internal applications designed around the way your business actually works. No templates, no shortcuts.',
    deliverable: 'Tailored web application engineered for your workflow',
    link: '/services',
  },
  {
    id: '03',
    title: 'AI & Workflow Automation',
    problem: 'Your team is spending hours on repetitive tasks that software could handle more reliably.',
    description: 'We connect systems, automate repetitive processes and build practical AI integrations where they create real, measurable value — not AI for its own sake.',
    deliverable: 'Automated workflows and connected business systems',
    link: '/services',
  },
  {
    id: '04',
    title: 'Website Development',
    problem: 'Your website doesn\'t reflect the quality of your work or convert visitors into enquiries.',
    description: 'Fast, accessible, well-designed websites built to perform — from portfolio sites to full marketing platforms for businesses that take their digital presence seriously.',
    deliverable: 'Production-grade website that communicates and converts',
    link: '/services',
  },
] as const

// ─── Process ──────────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Understand',
    summary: 'Learn the problem',
    description: 'We learn about your business, users, constraints and the actual problem worth solving. We don\'t write code until we understand what we\'re building — and why.',
    deliverable: 'Defined scope, requirements and solution direction',
  },
  {
    step: '02',
    title: 'Design & Engineer',
    summary: 'Build with purpose',
    description: 'We shape the experience, choose the right architecture and develop the solution with engineering precision. Code that is maintainable, structured and built to evolve.',
    deliverable: 'Working, tested software',
  },
  {
    step: '03',
    title: 'Launch & Improve',
    summary: 'Ship, then iterate',
    description: 'We deploy, observe real usage, resolve issues and improve what needs improving. Software doesn\'t end at launch — and neither does our involvement.',
    deliverable: 'Production-ready solution with a clear improvement path',
  },
] as const

// ─── About / Philosophy ───────────────────────────────────
export const PHILOSOPHY_PRINCIPLES = [
  {
    num: '01',
    title: 'Understand before building',
    description: 'Most bad software comes from building the wrong thing confidently. We don\'t write code until we understand the problem clearly.',
  },
  {
    num: '02',
    title: 'Quality over shortcuts',
    description: 'Speed matters. Quality matters more. We build things that work correctly, hold up under real usage, and don\'t create debt.',
  },
  {
    num: '03',
    title: 'Simplicity over complexity',
    description: 'The best solution is usually the simplest one that solves the problem. We resist the urge to over-engineer.',
  },
  {
    num: '04',
    title: 'Build for reliability',
    description: 'Software that people depend on must be dependable. We don\'t ship things we wouldn\'t trust ourselves.',
  },
  {
    num: '05',
    title: 'Learn from real users',
    description: 'Product decisions should come from actual behaviour, not assumptions. We test, listen carefully, and iterate honestly.',
  },
  {
    num: '06',
    title: 'Every project is a responsibility',
    description: 'When a business trusts us with their technology, we treat it as a serious responsibility — not a contract to fulfil and forget.',
  },
] as const

// ─── Screenshot asset paths ───────────────────────────────
export const SCREENSHOT_PATHS = {
  kalvora: {
    proposalEditor: '/screenshots/kalvora/Screenshot 2026-05-01 153123.png',
    clientView:     '/screenshots/kalvora/Screenshot 2026-05-01 165050.png',
    viewTracking:   '/screenshots/kalvora/Screenshot 2026-05-01 182525.png',
    approval:       '/screenshots/kalvora/Screenshot 2026-05-07 042109.png',
    invoice:        '/screenshots/kalvora/Screenshot 2026-05-07 043145.png',
    dashboard:      '/screenshots/kalvora/Screenshot 2026-05-07 043145.png',
  },
  sill: {
    commandPalette: '/screenshots/sill/Screenshot 2026-11-06 050754.png',
    taskbarWidget:  '/screenshots/sill/Screenshot 2026-11-06 050838.png',
    systemControls: '/screenshots/sill/Screenshot 2026-11-06 050905.png',
    notes:          '/screenshots/sill/Screenshot 2026-11-06 050917.png',
    downloads:      '/screenshots/sill/Screenshot 2026-11-06 050917.png',
    presets:        '/screenshots/sill/Screenshot 2026-11-06 050754.png',
  },
} as const
