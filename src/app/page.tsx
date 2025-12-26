import { Hero } from "@/components/sections/Hero";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturedNeighborhoods } from "@/components/sections/FeaturedNeighborhoods";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { MarketInsights } from "@/components/sections/MarketInsights";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Value Proposition - Why Work With Me */}
      <ValueProposition />

      {/* Market Insights - GTA Market Update */}
      <MarketInsights />

      {/* Featured Neighborhoods - Toronto & GTA Areas */}
      <FeaturedNeighborhoods />

      {/* CTA - Home Valuation */}
      <CTASection variant="valuation" />

      {/* How It Works - The Process */}
      <HowItWorks />

      {/* Featured Properties */}
      <FeaturedProperties />

      {/* Testimonials */}
      <Testimonials />

      {/* Dubai Investment Teaser */}
      <CTASection variant="dubai" />

      {/* Final CTA - Consultation */}
      <CTASection variant="consultation" />
    </>
  );
}
