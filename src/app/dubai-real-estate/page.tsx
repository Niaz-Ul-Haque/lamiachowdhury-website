import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG, DUBAI_INFO, FAQS, AGENT_INFO } from "@/lib/constants";
import { FaqJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { ContactForm } from "@/components/ui/ContactForm";
import { AnimatedSection, AnimatedChildren } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Dubai Real Estate Investment | Canadian Investor Guide",
  description:
    "Explore Dubai real estate investment opportunities for Canadian investors. No property tax, high rental yields, Golden Visa eligibility. Expert guidance from a Top Performer at Cielo Properties Dubai.",
  keywords: [
    "Dubai real estate investment",
    "Canadian investing in Dubai",
    "Dubai property",
    "Dubai condo investment",
    "Dubai Golden Visa",
    "Cielo Properties",
    "off-plan Dubai",
  ],
  openGraph: {
    title: "Dubai Real Estate Investment | Canadian Investor Guide",
    description:
      "Explore Dubai real estate investment opportunities. Expert guidance for Canadian investors from a Top Performer at Cielo Properties Dubai.",
    url: `${SITE_CONFIG.url}/dubai-real-estate`,
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/dubai-real-estate`,
  },
};

export default function DubaiPage() {
  return (
    <>
      {/* Structured Data */}
      <FaqJsonLd faqs={FAQS.dubai} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Dubai Real Estate", href: "/dubai-real-estate" },
        ]}
      />

      {/* Hero Section */}
      <AnimatedSection animation="fade-up" className="pt-32 pb-16 bg-forest text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dubai-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dubai-pattern)" />
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Achievement Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full text-sm text-gold font-medium mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Top 5 Agent at Cielo Properties Dubai
              </div>

              <h1 className="text-white mb-6">
                Dubai Real Estate for Canadian Investors
              </h1>
              <p className="text-xl text-white/85 leading-relaxed mb-8">
                Access Dubai&apos;s thriving property market with expert guidance. As a
                Top Performer with {AGENT_INFO.dubaiAffiliation}, I help Canadian
                investors navigate high-yield opportunities in one of the world&apos;s
                most dynamic real estate markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#inquiry" className="btn btn-gold">
                  Explore Opportunities
                </Link>
                <Link href="#benefits" className="btn btn-white">
                  Why Dubai?
                </Link>
              </div>
            </div>

            {/* Market Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-xl font-display font-semibold text-white mb-6">
                Dubai Market Snapshot
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-white/80 uppercase tracking-wider mb-1">
                    Average Condo Price
                  </p>
                  <p className="text-2xl font-display font-semibold text-gold">
                    {DUBAI_INFO.market.averageCondoPrice}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-white/80 uppercase tracking-wider mb-1">
                    Year-Over-Year Growth
                  </p>
                  <p className="text-2xl font-display font-semibold text-gold">
                    +{DUBAI_INFO.market.yearOverYearGrowth}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-white/80 uppercase tracking-wider mb-1">
                    Average Rental Yield
                  </p>
                  <p className="text-2xl font-display font-semibold text-gold">
                    5-9%
                  </p>
                </div>
                <p className="text-xs text-white/70">
                  Data as of {DUBAI_INFO.market.lastUpdated}
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Dubai */}
      <AnimatedSection
        animation="fade-up"
        id="benefits"
        className="section-padding bg-white"
        aria-labelledby="benefits-heading"
      >
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">
              Investment Benefits
            </span>
            <h2 id="benefits-heading" className="mt-4 mb-6 text-forest">
              Why Canadian Investors Choose Dubai
            </h2>
            <p className="text-lg text-charcoal-light">
              Dubai offers unique advantages for international real estate investors,
              making it an attractive addition to any portfolio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DUBAI_INFO.benefits.map((benefit) => (
              <div
                key={benefit}
                className="p-6 bg-ivory rounded-lg border border-ivory-dark"
              >
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="font-semibold text-forest">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Investment Types */}
      <AnimatedSection animation="fade-up" className="section-padding bg-ivory" aria-labelledby="types-heading">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">
              Investment Options
            </span>
            <h2 id="types-heading" className="mt-4 mb-6 text-forest">
              Types of Dubai Investments
            </h2>
            <p className="text-lg text-charcoal-light">
              From off-plan developments to ready properties, Dubai offers diverse
              investment opportunities to match your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {DUBAI_INFO.investmentTypes.map((type) => (
              <div
                key={type.type}
                className="bg-white p-8 rounded-lg shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-forest"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-forest mb-3">
                  {type.type}
                </h3>
                <p className="text-charcoal-light">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* My Expertise */}
      <AnimatedSection animation="fade-up" className="section-padding bg-white" aria-labelledby="expertise-heading">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-gold uppercase tracking-widest">
                Your Dubai Expert
              </span>
              <h2 id="expertise-heading" className="mt-4 mb-6 text-forest">
                Why Work With Me for Dubai Investment
              </h2>
              <p className="text-lg text-charcoal-light mb-8">
                {AGENT_INFO.bio.long}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-ivory rounded-lg">
                  <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-forest-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-forest">Top 5 Agent</p>
                    <p className="text-sm text-charcoal-light">{AGENT_INFO.dubaiAffiliation}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-ivory rounded-lg">
                  <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-forest-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-forest">Top Performer 2025</p>
                    <p className="text-sm text-charcoal-light">February, April, May</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-ivory rounded-lg">
                  <div className="w-10 h-10 bg-forest rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-forest">Cross-Border Expertise</p>
                    <p className="text-sm text-charcoal-light">Canada & Dubai Markets</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-charcoal-light">
                Partner developer: <strong>{DUBAI_INFO.partnerDeveloper}</strong>
              </p>
            </div>

            {/* Dubai Skyline Image */}
            <div className="aspect-[4/3] bg-ivory rounded-lg overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop"
                alt="Dubai skyline with Burj Khalifa"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Inquiry Form */}
      <AnimatedSection
        animation="fade-up"
        id="inquiry"
        className="section-padding bg-forest text-white"
        aria-labelledby="inquiry-heading"
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-sm font-semibold text-gold uppercase tracking-widest">
                Get Started
              </span>
              <h2 id="inquiry-heading" className="text-white mt-4 mb-6">
                Interested in Dubai Real Estate?
              </h2>
              <p className="text-lg text-white/85 mb-8">
                Whether you&apos;re looking for rental income, capital appreciation,
                or Golden Visa eligibility, I&apos;ll help you find the right
                investment opportunity in Dubai.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-white/90">
                    Personalized investment recommendations based on your goals
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-white/90">
                    Access to off-plan developments and exclusive inventory
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-white/90">
                    End-to-end support from inquiry to closing
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <ContactForm
                variant="default"
                showIntent={false}
                title="Inquire About Dubai Investment"
                submitLabel="Send Inquiry"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection animation="fade-up" className="section-padding bg-white" aria-labelledby="faq-heading">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-gold uppercase tracking-widest">
                Questions
              </span>
              <h2 id="faq-heading" className="mt-4">
                Dubai Investment FAQ
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.dubai.map((faq, index) => (
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

      {/* Back to Toronto CTA */}
      <AnimatedSection animation="fade-up" className="py-12 bg-ivory">
        <div className="container text-center">
          <p className="text-charcoal-light mb-4">
            Also looking for property in Toronto?
          </p>
          <Link href="/buy-a-home-in-toronto" className="btn btn-secondary">
            Explore Toronto Real Estate
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
}
