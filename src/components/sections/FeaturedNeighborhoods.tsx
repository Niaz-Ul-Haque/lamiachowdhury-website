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
            className="btn btn-secondary shrink-0 btn-icon-slide group/cta"
          >
            View All Areas
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
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
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
