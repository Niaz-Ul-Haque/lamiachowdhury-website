import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG, FAQS, FEATURED_NEIGHBORHOODS } from "@/lib/constants";
import { FaqJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { NeighborhoodCard } from "@/components/ui/NeighborhoodCard";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Buy a Home in Toronto | First-Time Buyer Guide | GTA Real Estate",
  description:
    "Looking to buy a home in Toronto or the GTA? Get expert guidance for first-time buyers and move-up buyers. Explore neighborhoods, understand the process, and find your dream home.",
  keywords: [
    "buy home Toronto",
    "first-time home buyer Toronto",
    "Toronto homes for sale",
    "GTA real estate",
    "buying a house in Toronto",
    "Toronto condo",
    "North York homes",
    "Scarborough real estate",
  ],
  openGraph: {
    title: "Buy a Home in Toronto | First-Time Buyer Guide",
    description:
      "Expert guidance for buying a home in Toronto and the GTA. First-time buyer resources, neighborhood guides, and personalized support.",
    url: `${SITE_CONFIG.url}/buy-a-home-in-toronto`,
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/buy-a-home-in-toronto`,
  },
};

const buyingSteps = [
  {
    step: 1,
    title: "Get Pre-Approved",
    description:
      "Before you start looking, get pre-approved for a mortgage to understand your budget and show sellers you're serious.",
  },
  {
    step: 2,
    title: "Define Your Needs",
    description:
      "We'll discuss your must-haves, nice-to-haves, preferred neighborhoods, and timeline to create your home-buying profile.",
  },
  {
    step: 3,
    title: "Search & View Homes",
    description:
      "I'll curate listings that match your criteria and schedule viewings at times that work for you.",
  },
  {
    step: 4,
    title: "Make an Offer",
    description:
      "When you find the one, I'll help you craft a competitive offer with strategic terms and conditions.",
  },
  {
    step: 5,
    title: "Due Diligence",
    description:
      "Complete home inspection, review status certificate (for condos), and satisfy any conditions in your offer.",
  },
  {
    step: 6,
    title: "Close & Move In",
    description:
      "Finalize your mortgage, complete paperwork, and get your keys. Welcome to your new home!",
  },
];

const firstTimeBuyerTips = [
  {
    title: "First-Time Home Buyer Incentive",
    description:
      "The federal government offers a shared equity mortgage program that can help reduce your monthly payments.",
  },
  {
    title: "RRSP Home Buyers' Plan",
    description:
      "Withdraw up to $35,000 from your RRSP tax-free for your down payment (you have 15 years to repay).",
  },
  {
    title: "First Home Savings Account (FHSA)",
    description:
      "A new tax-free savings account to help you save for your first home purchase faster.",
  },
  {
    title: "Land Transfer Tax Rebate",
    description:
      "First-time buyers in Ontario can receive up to $4,000 rebate on provincial land transfer tax.",
  },
];

export default function BuyHomePage() {
  return (
    <>
      {/* Structured Data */}
      <FaqJsonLd faqs={FAQS.buying} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Buy a Home in Toronto", href: "/buy-a-home-in-toronto" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-forest text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="buy-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#buy-pattern)" />
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-gold/20 rounded-full text-sm text-gold font-medium mb-6">
              Toronto Home Buyers
            </span>
            <h1 className="text-white mb-6">
              Buy a Home in Toronto & the GTA
            </h1>
            <p className="text-xl text-white/85 leading-relaxed mb-8">
              Whether you&apos;re a first-time buyer or looking to upgrade, I provide
              the data-driven guidance and local expertise you need to find your
              perfect home in the competitive Toronto market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact?intent=toronto-buying" className="btn btn-gold">
                Start Your Search
              </Link>
              <Link href="#neighborhoods" className="btn btn-white">
                Explore Neighborhoods
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Buy With Me */}
      <section className="section-padding bg-white" aria-labelledby="why-heading">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-gold uppercase tracking-widest">
                Why Work With Me
              </span>
              <h2 id="why-heading" className="mt-4 mb-6 text-forest">
                Your Advantage in Toronto&apos;s Competitive Market
              </h2>
              <p className="text-lg text-charcoal-light mb-8">
                Toronto&apos;s real estate market moves fast. You need an agent who
                understands the data, knows the neighborhoods, and can act quickly
                when the right property comes along.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-forest/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-forest mb-2">
                      Market Analysis
                    </h3>
                    <p className="text-charcoal-light">
                      I analyze comparable sales, market trends, and neighborhood data
                      to ensure you make an informed offer at the right price.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-forest/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-forest mb-2">
                      Neighborhood Expertise
                    </h3>
                    <p className="text-charcoal-light">
                      From Downtown Toronto to Scarborough, North York to Mississauga—I
                      know what makes each area unique and which fits your lifestyle.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-forest/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-forest mb-2">
                      Strong Negotiation
                    </h3>
                    <p className="text-charcoal-light">
                      With a background in project management (PMP), I bring strategic
                      thinking to every negotiation to protect your interests.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Home Buying Image */}
            <div className="aspect-[4/3] bg-ivory rounded-lg overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                alt="Happy couple with new home keys"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Buying Process */}
      <section className="section-padding bg-ivory" aria-labelledby="process-heading">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">
              Step by Step
            </span>
            <h2 id="process-heading" className="mt-4 mb-6 text-forest">
              The Toronto Home Buying Process
            </h2>
            <p className="text-lg text-charcoal-light">
              Buying a home doesn&apos;t have to be overwhelming. Here&apos;s how
              we&apos;ll navigate the process together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buyingSteps.map((step) => (
              <div key={step.step} className="bg-white p-8 rounded-lg shadow-sm">
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
      </section>

      {/* First-Time Buyer Section */}
      <section className="section-padding bg-white" aria-labelledby="first-time-heading">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-gold uppercase tracking-widest">
                First-Time Buyers
              </span>
              <h2 id="first-time-heading" className="mt-4 mb-6 text-forest">
                Programs & Incentives for Toronto First-Time Buyers
              </h2>
              <p className="text-lg text-charcoal-light">
                As a first-time home buyer in Ontario, you have access to several
                programs that can make homeownership more affordable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {firstTimeBuyerTips.map((tip) => (
                <div
                  key={tip.title}
                  className="p-6 bg-ivory rounded-lg border border-ivory-dark"
                >
                  <h3 className="font-display text-lg font-semibold text-forest mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-charcoal-light">{tip.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-charcoal-light mb-4">
                I&apos;ll help you understand and maximize these programs.
              </p>
              <Link
                href="/contact?intent=toronto-buying"
                className="btn btn-primary"
              >
                Get First-Time Buyer Guidance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section
        id="neighborhoods"
        className="section-padding bg-ivory"
        aria-labelledby="neighborhoods-heading"
      >
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">
              Explore Areas
            </span>
            <h2 id="neighborhoods-heading" className="mt-4 mb-6 text-forest">
              Popular Toronto & GTA Neighborhoods for Buyers
            </h2>
            <p className="text-lg text-charcoal-light">
              Each neighborhood in the Greater Toronto Area has its own character.
              Let me help you find the one that fits your lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_NEIGHBORHOODS.map((neighborhood) => (
              <NeighborhoodCard key={neighborhood.slug} {...neighborhood} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/toronto-neighborhoods" className="btn btn-secondary">
              View All Neighborhoods
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white" aria-labelledby="faq-heading">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-gold uppercase tracking-widest">
                Questions
              </span>
              <h2 id="faq-heading" className="mt-4">
                Frequently Asked Questions About Buying in Toronto
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.buying.map((faq, index) => (
                <details key={index} className="group bg-ivory rounded-lg">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="font-display text-lg font-semibold text-forest pr-8">
                      {faq.question}
                    </h3>
                    <svg
                      className="w-5 h-5 text-gold shrink-0 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
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
      </section>

      {/* CTA */}
      <CTASection variant="consultation" />
    </>
  );
}
