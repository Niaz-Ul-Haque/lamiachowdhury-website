"use client";

import Link from "next/link";
import { FEATURED_PROPERTIES } from "@/lib/constants";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { AnimatedSection, AnimatedChildren } from "@/components/ui/AnimatedSection";

export function FeaturedProperties() {
  return (
    <section
      className="section-padding bg-ivory"
      aria-labelledby="properties-heading"
    >
      <div className="container">
        {/* Section Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">
              Current Listings
            </span>
            <h2 id="properties-heading" className="mt-4 mb-4 text-forest">
              Featured Opportunities
            </h2>
            <p className="text-lg text-charcoal-light">
              Explore select properties I&apos;m currently helping clients buy and
              sell across Toronto and the GTA.
            </p>
          </div>

          <Link
            href="/contact"
            className="btn btn-secondary shrink-0 btn-icon-slide group/cta"
          >
            See All Listings
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
        </AnimatedSection>

        {/* Properties Grid */}
        <AnimatedChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={150}>
          {FEATURED_PROPERTIES.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </AnimatedChildren>

        {/* Note */}
        <AnimatedSection delay={500}>
          <p className="text-center text-sm text-warm-gray mt-8 italic">
            These are sample listings. Contact me for current available properties.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
