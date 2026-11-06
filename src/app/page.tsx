import Hero            from '@/components/sections/Hero'
import CredibilityBar  from '@/components/sections/CredibilityBar'
import ProblemSolution from '@/components/sections/ProblemSolution'
import ProductsSection from '@/components/sections/ProductsSection'
import Services        from '@/components/sections/Services'
import SelectedWork    from '@/components/sections/SelectedWork'
import HowWeWork       from '@/components/sections/HowWeWork'
import ClosingCTA      from '@/components/sections/ClosingCTA'

export default function HomePage() {
  return (
    <>
      {/* 01 · Hero — dark, centered, Cal.com style */}
      <Hero />

      {/* 02 · Proof strip — dark bg, 4-stat grid */}
      <CredibilityBar />

      {/* 03 · Problem → Solution accordion — Cal.com signature section */}
      <ProblemSolution />

      {/* 04 · Our Products — Kalvora (warm) + Sill (dark) blocks */}
      <ProductsSection />

      {/* 05 · Services */}
      <Services />

      {/* 06 · Selected Work */}
      <SelectedWork />

      {/* 07 · How We Work */}
      <HowWeWork />

      {/* 08 · Closing CTA */}
      <ClosingCTA />
    </>
  )
}
