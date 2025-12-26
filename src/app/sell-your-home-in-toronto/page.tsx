import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, FAQS } from "@/lib/constants";
import { FaqJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { ContactForm } from "@/components/ui/ContactForm";
import { CTASection } from "@/components/sections/CTASection";
import { AnimatedSection, AnimatedChildren } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Sell Your Home in Toronto | Free Home Valuation | GTA Realtor",
  description:
    "Selling your home in Toronto? Get a free home valuation and expert marketing strategy. Data-driven pricing, professional staging guidance, and skilled negotiation to maximize your sale price.",
  keywords: [
    "sell home Toronto",
    "Toronto home valuation",
    "sell house GTA",
    "listing agent Toronto",
    "home selling Toronto",
    "Toronto real estate agent",
    "sell condo Toronto",
  ],
  openGraph: {
    title: "Sell Your Home in Toronto | Free Home Valuation",
    description:
      "Get a free home valuation and expert marketing strategy to sell your Toronto home for top dollar.",
    url: `${SITE_CONFIG.url}/sell-your-home-in-toronto`,
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/sell-your-home-in-toronto`,
  },
};

const sellingSteps = [
  {
    step: 1,
    title: "Home Valuation",
    description:
      "I'll analyze comparable sales, market conditions, and your home's unique features to determine optimal pricing.",
  },
  {
    step: 2,
    title: "Preparation & Staging",
    description:
      "Get guidance on decluttering, repairs, and staging to make your home shine for buyers.",
  },
  {
    step: 3,
    title: "Professional Marketing",
    description:
      "High-quality photos, virtual tours, targeted online advertising, and MLS exposure.",
  },
  {
    step: 4,
    title: "Showings & Open Houses",
    description:
      "Coordinate showings, host open houses, and gather feedback from potential buyers.",
  },
  {
    step: 5,
    title: "Offer Negotiation",
    description:
      "Review offers, negotiate terms, and guide you through multiple offer situations.",
  },
  {
    step: 6,
    title: "Close the Sale",
    description:
      "Manage conditions, coordinate with lawyers, and ensure a smooth closing.",
  },
];

const marketingServices = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Professional Photography",
    description: "High-quality photos that showcase your home's best features and attract more buyers.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Virtual Tours",
    description: "3D walkthroughs and video tours so buyers can explore your home from anywhere.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "MLS & Online Exposure",
    description: "Maximum visibility on MLS, Realtor.ca, and top real estate websites.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: "Targeted Advertising",
    description: "Strategic social media and digital advertising to reach qualified buyers.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Open Houses",
    description: "Strategic open houses to attract serious buyers and create buzz.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Expert Negotiation",
    description: "Skilled negotiation to protect your interests and maximize your sale price.",
  },
];

export default function SellHomePage() {
  return (
    <>
      {/* Structured Data */}
      <FaqJsonLd faqs={FAQS.selling} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Sell Your Home in Toronto", href: "/sell-your-home-in-toronto" },
        ]}
      />

      {/* Hero Section */}
      <AnimatedSection animation="fade-up" className="pt-32 pb-16 bg-forest text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="sell-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sell-pattern)" />
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-gold/20 rounded-full text-sm text-gold font-medium mb-6">
              Toronto Home Sellers
            </span>
            <h1 className="text-white mb-6">
              Sell Your Home in Toronto for Top Dollar
            </h1>
            <p className="text-xl text-white/85 leading-relaxed mb-8">
              Get a strategic pricing approach, professional marketing, and expert
              negotiation to sell your Toronto home quickly and for the best price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#valuation" className="btn btn-gold">
                Get Free Valuation
              </Link>
              <Link href="#process" className="btn btn-white">
                See My Approach
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Free Valuation Section */}
      <AnimatedSection
        animation="fade-up"
        id="valuation"
        className="section-padding bg-white"
        aria-labelledby="valuation-heading"
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-sm font-semibold text-gold uppercase tracking-widest">
                Free Home Valuation
              </span>
              <h2 id="valuation-heading" className="mt-4 mb-6 text-forest">
                What&apos;s Your Toronto Home Worth?
              </h2>
              <p className="text-lg text-charcoal-light mb-8">
                Get a comprehensive market analysis of your property&apos;s value
                based on recent comparable sales, current market conditions, and
                your home&apos;s unique features.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest">Comparable Sales Analysis</h3>
                    <p className="text-charcoal-light text-sm">Recent sales of similar homes in your area</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest">Current Market Conditions</h3>
                    <p className="text-charcoal-light text-sm">Supply, demand, and pricing trends in your neighborhood</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest">Strategic Pricing Recommendation</h3>
                    <p className="text-charcoal-light text-sm">Optimal list price to maximize your sale</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-warm-gray">
                No obligation. Just valuable insights to help you make an informed decision.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg">
              <ContactForm
                variant="default"
                showIntent={false}
                title="Request Your Free Valuation"
                submitLabel="Get My Valuation"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Marketing Services */}
      <AnimatedSection animation="fade-up" className="section-padding bg-ivory" aria-labelledby="marketing-heading">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">
              Marketing Your Home
            </span>
            <h2 id="marketing-heading" className="mt-4 mb-6 text-forest">
              Comprehensive Marketing to Attract Buyers
            </h2>
            <p className="text-lg text-charcoal-light">
              Your home deserves maximum exposure. Here&apos;s how I&apos;ll market
              your property to find the right buyer at the right price.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-forest/10 rounded-lg flex items-center justify-center text-forest mb-4">
                  {service.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-forest mb-2">
                  {service.title}
                </h3>
                <p className="text-charcoal-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Selling Process */}
      <AnimatedSection
        animation="fade-up"
        id="process"
        className="section-padding bg-white"
        aria-labelledby="process-heading"
      >
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">
              The Selling Journey
            </span>
            <h2 id="process-heading" className="mt-4 mb-6 text-forest">
              How We&apos;ll Sell Your Toronto Home
            </h2>
            <p className="text-lg text-charcoal-light">
              A smooth, strategic process from listing to closing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sellingSteps.map((step) => (
              <div key={step.step} className="bg-ivory p-8 rounded-lg">
                <div className="w-10 h-10 bg-forest rounded-full flex items-center justify-center text-white font-semibold mb-4">
                  {step.step}
                </div>
                <h3 className="font-display text-xl font-semibold text-forest mb-3">
                  {step.title}
                </h3>
                <p className="text-charcoal-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection animation="fade-up" className="section-padding bg-ivory" aria-labelledby="faq-heading">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-gold uppercase tracking-widest">
                Questions
              </span>
              <h2 id="faq-heading" className="mt-4">
                Frequently Asked Questions About Selling in Toronto
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.selling.map((faq, index) => (
                <details key={index} className="group bg-white rounded-lg">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="font-display text-lg font-semibold text-forest pr-8">
                      {faq.question}
                    </h3>
                    <svg
                      className="w-5 h-5 text-gold shrink-0 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-charcoal-light leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <CTASection variant="valuation" />
    </>
  );
}
