// FilmGrain — hardware-accelerated noise overlay
// Uses a base64 SVG feTurbulence noise as background-image (static, no filter recalc per frame)
// will-change: transform forces browser compositing layer — zero Lenis perf impact

export default function FilmGrain() {
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9998,
        opacity: 0.038,
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        backgroundRepeat: 'repeat',
        backgroundSize: '256px 256px',
        // Key performance hint: own compositing layer, never triggers layout
        willChange: 'transform',
        transform: 'translateZ(0)',
      }}
    />
  )
}

