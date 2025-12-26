"use client";

import Link from "next/link";
import { MARKET_INSIGHTS } from "@/lib/constants";
import { AnimatedSection, AnimatedChildren } from "@/components/ui/AnimatedSection";

export function MarketInsights() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="market-heading"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <AnimatedSection>
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">
              GTA Market Watch
            </span>
            <h2 id="market-heading" className="mt-4 mb-6 text-forest">
              Toronto Real Estate Market Update
            </h2>
            <p className="text-lg text-charcoal-light mb-8">
              Stay informed about the latest trends in the Greater Toronto Area
              housing market. Updated insights to help you make smart decisions.
            </p>

            {/* Market Highlights */}
            <div className="space-y-4 mb-8">
              {MARKET_INSIGHTS.highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="flex items-start gap-4 p-4 bg-ivory rounded-lg"
                >
                  {/* Trend Icon */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                      highlight.trend === "up"
                        ? "bg-success/10 text-success"
                        : "bg-gold/10 text-gold-dark"
                    }`}
                  >
                    {highlight.trend === "up" ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                        />
                      </svg>
                    )}
                  </div>

                  <div>
                    <h4 className="font-semibold text-forest mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-charcoal-light">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-warm-gray mb-6">
              Last updated: {MARKET_INSIGHTS.lastUpdated}
            </p>

            <Link href="/contact?intent=market-updates" className="btn btn-primary">
              Get Monthly Market Updates
            </Link>
          </AnimatedSection>

          {/* Insights Cards */}
          <AnimatedChildren className="space-y-6" staggerDelay={200}>
            {/* Buyer Card */}
            <div className="p-8 bg-gradient-to-br from-[#1a1510] to-[#2a2015] rounded-lg text-white">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className="w-6 h-6 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <h3 className="font-display text-xl font-semibold text-white">
                  For Buyers
                </h3>
              </div>
              <p className="text-white/90 leading-relaxed mb-4">
                {MARKET_INSIGHTS.buyerOpportunity}
              </p>
              <Link
                href="/buy-a-home-in-toronto"
                className="inline-flex items-center text-gold hover:text-gold-light transition-colors"
              >
                Start Your Search
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Seller Card */}
            <div className="p-8 bg-ivory rounded-lg border border-ivory-dark">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className="w-6 h-6 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="font-display text-xl font-semibold text-forest">
                  For Sellers
                </h3>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">
                {MARKET_INSIGHTS.sellerStrategy}
              </p>
              <Link
                href="/sell-your-home-in-toronto"
                className="inline-flex items-center text-forest hover:text-gold transition-colors"
              >
                Get Your Home Valued
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </AnimatedChildren>
        </div>
      </div>
    </section>
  );
}
