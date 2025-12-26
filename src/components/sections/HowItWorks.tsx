"use client";

import Link from "next/link";
import { PROCESS_STEPS } from "@/lib/constants";
import { ProcessStep, ProcessStepHorizontal } from "@/components/ui/ProcessStep";
import { AnimatedSection, AnimatedChildren } from "@/components/ui/AnimatedSection";

export function HowItWorks() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="process-heading"
    >
      <div className="container">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">
            The Process
          </span>
          <h2 id="process-heading" className="mt-4 mb-6 text-forest">
            How We&apos;ll Work Together
          </h2>
          <p className="text-lg text-charcoal-light">
            Whether you&apos;re buying or selling in Toronto, my proven process
            ensures a smooth journey from first conversation to closing day.
          </p>
        </AnimatedSection>

        {/* Vertical Timeline (Mobile) */}
        <AnimatedChildren className="lg:hidden max-w-xl mx-auto" staggerDelay={150}>
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStep
              key={step.step}
              {...step}
              isLast={index === PROCESS_STEPS.length - 1}
            />
          ))}
        </AnimatedChildren>

        {/* Horizontal Timeline (Desktop) */}
        <AnimatedChildren className="hidden lg:flex justify-between items-start" staggerDelay={100}>
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStepHorizontal
              key={step.step}
              {...step}
              isLast={index === PROCESS_STEPS.length - 1}
            />
          ))}
        </AnimatedChildren>

        {/* CTA */}
        <AnimatedSection className="text-center mt-16" delay={500}>
          <p className="text-charcoal-light mb-6">
            Ready to begin? Let&apos;s start with a no-obligation conversation.
          </p>
          <Link href="/contact" className="btn btn-primary pulse-glow">
            Book Your Discovery Call
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
