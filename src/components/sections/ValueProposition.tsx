"use client";

import Link from "next/link";
import { AnimatedSection, AnimatedChildren } from "@/components/ui/AnimatedSection";

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Data-Driven Guidance",
    description:
      "I analyze Toronto market trends, comparable sales, and neighborhood data to help you make informed decisions backed by real numbers.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: "Transparent Communication",
    description:
      "No surprises. I keep you informed at every step, explain all your options clearly, and am always available to answer your questions.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Strong Negotiation",
    description:
      "With a background in project management and a strategic mindset, I negotiate firmly on your behalf to get you the best possible outcome.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Local GTA Expertise",
    description:
      "From downtown Toronto condos to Scarborough family homes, I know the neighborhoods, the market dynamics, and what makes each area unique.",
  },
];

export function ValueProposition() {
  return (
    <section
      id="value-proposition"
      className="section-padding bg-ivory"
      aria-labelledby="value-heading"
    >
      <div className="container">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">
            Why Work With Me
          </span>
          <h2 id="value-heading" className="mt-4 mb-6 text-forest">
            Your Trusted Partner for Toronto Real Estate
          </h2>
          <p className="text-lg text-charcoal-light">
            Buying or selling a home is one of life&apos;s biggest decisions.
            I combine market expertise with a client-first approach to ensure
            your experience is smooth, informed, and successful.
          </p>
        </AnimatedSection>

        {/* Values Grid */}
        <AnimatedChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={100}>
          {values.map((value) => (
            <div
              key={value.title}
              className="group p-8 bg-white rounded-lg shadow-sm border border-transparent hover:border-gold/20 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                {value.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-forest mb-3">
                {value.title}
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </AnimatedChildren>

        {/* CTA */}
        <AnimatedSection className="text-center mt-12" delay={400}>
          <Link href="/about" className="btn btn-secondary">
            Learn More About My Approach
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
