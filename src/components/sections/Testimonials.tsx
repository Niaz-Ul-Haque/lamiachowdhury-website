"use client";

import Link from "next/link";
import { TESTIMONIALS } from "@/lib/constants";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { AnimatedSection, AnimatedChildren } from "@/components/ui/AnimatedSection";

export function Testimonials() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">
            Client Stories
          </span>
          <h2 id="testimonials-heading" className="mt-4 mb-6 text-forest">
            What Toronto Home Buyers & Sellers Say
          </h2>
          <p className="text-lg text-charcoal-light">
            Helping families across the GTA achieve their real estate goals
            is what drives me every day.
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <AnimatedChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={150}>
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </AnimatedChildren>

        {/* Note about samples */}
        {/* <AnimatedSection delay={400}>
          <p className="text-center text-sm text-warm-gray mt-8 italic">
            Note: These are sample testimonials. Real client reviews coming soon.
          </p>
        </AnimatedSection> */}

        {/* CTA */}
        <AnimatedSection className="text-center mt-12" delay={500}>
          <p className="text-charcoal-light mb-4">
            Ready to share your success story?
          </p>
          <Link href="/contact" className="btn btn-primary">
            Start Your Journey Today
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
