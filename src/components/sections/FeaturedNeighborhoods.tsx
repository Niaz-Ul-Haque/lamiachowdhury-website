"use client";

import Link from "next/link";
import { FEATURED_NEIGHBORHOODS } from "@/lib/constants";
import { NeighborhoodCard } from "@/components/ui/NeighborhoodCard";
import { AnimatedSection, AnimatedChildren } from "@/components/ui/AnimatedSection";

export function FeaturedNeighborhoods() {
  return (
    <section
      className="section-padding bg-ivory"
      aria-labelledby="neighborhoods-heading"
    >
      <div className="container">
        {/* Section Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">
              Explore Toronto & GTA
            </span>
            <h2 id="neighborhoods-heading" className="mt-4 mb-4 text-forest">
              Featured Neighborhoods
            </h2>
            <p className="text-lg text-charcoal-light">
              From vibrant downtown Toronto to family-friendly suburbs across the GTA,
              discover the communities where I help clients find their perfect home.
            </p>
          </div>

          <Link
            href="/toronto-neighborhoods"
            className="btn btn-secondary shrink-0"
          >
            View All Areas
          </Link>
        </AnimatedSection>

        {/* Neighborhoods Grid */}
        <AnimatedChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={100}>
          {FEATURED_NEIGHBORHOODS.map((neighborhood) => (
            <NeighborhoodCard key={neighborhood.slug} {...neighborhood} />
          ))}
        </AnimatedChildren>

        {/* Additional SEO Text */}
        <AnimatedSection className="mt-12" delay={600}>
          <div className="p-8 bg-white rounded-lg border border-ivory-dark">
            <h3 className="font-display text-xl font-semibold text-forest mb-4">
              Your Guide to Toronto & GTA Real Estate
            </h3>
            <p className="text-charcoal-light leading-relaxed">
              The Greater Toronto Area offers incredible diversity in housing options.
              Whether you&apos;re looking for a sleek downtown Toronto condo, a spacious
              family home in North York or Scarborough, or a new build in Vaughan or
              Mississauga, I&apos;ll help you navigate each neighborhood&apos;s unique market.
              With deep knowledge of Etobicoke, Brampton, Markham, Richmond Hill, and
              beyond, I&apos;m here to match you with the community that fits your lifestyle
              and budget.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
