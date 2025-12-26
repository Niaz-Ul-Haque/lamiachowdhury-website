"use client";

import Link from "next/link";
import { AGENT_INFO } from "@/lib/constants";
import { AnimatedSection, AnimatedChildren } from "@/components/ui/AnimatedSection";

interface CTASectionProps {
  variant?: "consultation" | "valuation" | "newsletter" | "dubai";
}

export function CTASection({ variant = "consultation" }: CTASectionProps) {
  const content = {
    consultation: {
      badge: "Ready to Get Started?",
      title: "Let's Find Your Perfect Home in Toronto",
      description:
        "Whether you're buying your first home, upgrading, or selling in the GTA, I'm here to guide you every step of the way with data-driven insights and personalized service.",
      primaryCTA: { label: "Book a Consultation", href: "/contact" },
      secondaryCTA: { label: "Call Now", href: `tel:${AGENT_INFO.phone.replace(/[^0-9]/g, "")}` },
    },
    valuation: {
      badge: "Thinking of Selling?",
      title: "Get Your Free Toronto Home Valuation",
      description:
        "Curious what your home is worth in today's market? Get a comprehensive, no-obligation market analysis of your property's value.",
      primaryCTA: { label: "Get Free Valuation", href: "/contact?intent=home-valuation" },
      secondaryCTA: { label: "Learn About Selling", href: "/sell-your-home-in-toronto" },
    },
    newsletter: {
      badge: "Stay Informed",
      title: "Get Toronto Market Updates",
      description:
        "Join my newsletter for monthly insights on Toronto and GTA real estate trends, new listings, and expert tips for buyers and sellers.",
      primaryCTA: { label: "Subscribe Now", href: "/contact?intent=market-updates" },
      secondaryCTA: { label: "View Latest Insights", href: "/about#market-updates" },
    },
    dubai: {
      badge: "Global Investment Opportunities",
      title: "Explore Dubai Real Estate",
      description:
        "As a Top Performer with Cielo Properties Dubai, I help Canadian investors access Dubai's thriving real estate market with its tax advantages and strong returns.",
      primaryCTA: { label: "Learn About Dubai", href: "/dubai-real-estate" },
      secondaryCTA: { label: "Book Consultation", href: "/contact?intent=dubai-investing" },
    },
  };

  const { badge, title, description, primaryCTA, secondaryCTA } = content[variant];

  return (
    <section className="relative py-20 overflow-hidden" aria-labelledby="cta-heading">
      {/* Background - Warm dark with golden accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1510] via-[#252015] to-[#1a1510]" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#c9a227" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>

      {/* Gold accent line with shimmer */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent shimmer-gold" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedChildren staggerDelay={150}>
            {/* Badge */}
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gold font-medium mb-6">
              {badge}
            </span>

            {/* Title */}
            <h2
              id="cta-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white mb-6"
            >
              {title}
            </h2>

            {/* Description */}
            <p className="text-lg text-white/85 leading-relaxed mb-8 max-w-2xl mx-auto">
              {description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={primaryCTA.href} className="btn btn-gold pulse-glow btn-icon-slide group/cta">
                {primaryCTA.label}
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/cta:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
              <Link href={secondaryCTA.href} className="btn btn-white btn-icon-slide group/cta">
                {secondaryCTA.label}
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/cta:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Trust Elements */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm">
                <div className="flex items-center gap-2 group">
                  <svg className="w-5 h-5 text-gold group-hover:animate-icon-bounce" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{AGENT_INFO.yearsExperience} Years Experience</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <svg className="w-5 h-5 text-gold group-hover:animate-icon-bounce" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Top Performer 2025</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <svg className="w-5 h-5 text-gold group-hover:animate-icon-bounce" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Toronto & Dubai Markets</span>
                </div>
              </div>
            </div>
          </AnimatedChildren>
        </div>
      </div>
    </section>
  );
}
