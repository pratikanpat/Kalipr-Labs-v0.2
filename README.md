# Kalipr Labs

**Product Studio Headquarters**
*[kaliprlabs.in](https://kaliprlabs.in)*

Kalipr Labs is a product studio that designs, builds, and ships tools for real-world problems. We selectively build our own products and take on client work that's worth building. 

This repository contains the source code for the main landing page, built for absolute performance, minimal overhead, and a dark-first aesthetic.

## Architecture

- **Stack**: Vanilla JS, Vanilla CSS, Vite
- **No Frameworks**: We don't use React, Next.js, or Tailwind for this site. Plain HTML/CSS/JS means it loads instantly and has zero dependency bloat.
- **Animations**: Native CSS transitions + `IntersectionObserver` for fade-ins.
- **Typography**: Space Grotesk (Headings), Inter (Body), JetBrains Mono (Technical Accents).

## Development

Prerequisites: Node.js (v18+ recommended)

```bash
# 1. Clone the repository
git clone https://github.com/pratikanpat/Kalipr-Labs-v0.2.git

# 2. Install dependencies (Vite)
npm install

# 3. Start development server
npm run dev
```

The site will be available at `http://localhost:5173`.

## Build

To create a production-ready build:

```bash
npm run build
```

This will generate a `dist` folder that can be deployed directly to Vercel, Netlify, or any static hosting provider.

## Design Thesis

- **Dark-first**: `#09090b` background. No light mode. It signals "we build for builders."
- **Restraint over Noise**: No particles, no 3D globes, no screaming gradients. It feels like a serious product company.
- **Anti-positioning**: We don't just say what we do, we make it clear what we *don't* do (no templates, no generic client work).
- **Products Speak**: The focus is directly on what we are building right now (e.g., Kalvora).

## License

© 2025 Kalipr Labs. All Rights Reserved.
