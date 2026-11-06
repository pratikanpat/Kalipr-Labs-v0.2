import Hero            from '@/components/sections/Hero'
import CredibilityBar  from '@/components/sections/CredibilityBar'
import ProductsSection from '@/components/sections/ProductsSection'
import Services        from '@/components/sections/Services'
import SelectedWork    from '@/components/sections/SelectedWork'
import HowWeWork       from '@/components/sections/HowWeWork'
import ClosingCTA      from '@/components/sections/ClosingCTA'

export default function HomePage() {
  return (
    <>
      {/* 01 · Hero */}
      <Hero />

      {/* 02 · Proof */}
      <CredibilityBar />

      {/* 03 · Our Products — before services (product-led studio) */}
      <ProductsSection />

      {/* 04 · Services */}
      <Services />

      {/* 05 · Selected Work */}
      <SelectedWork />

      {/* 06 · How We Work */}
      <HowWeWork />

      {/* 07 · Closing CTA */}
      <ClosingCTA />
    </>
  )
}
