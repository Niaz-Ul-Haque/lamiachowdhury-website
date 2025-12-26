import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AGENT_INFO, FAQS, SITE_CONFIG } from "@/lib/constants";
import { FaqJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Lamia Chowdhury | Toronto Real Estate Agent",
  description: `Meet Lamia Chowdhury, a trusted Toronto real estate agent with ${AGENT_INFO.yearsExperience} years of experience. Top Performer 2025, helping buyers and sellers across the GTA with data-driven guidance.`,
  openGraph: {
    title: "About Lamia Chowdhury | Toronto Real Estate Agent",
    description: `Meet Lamia Chowdhury, a trusted Toronto real estate agent with ${AGENT_INFO.yearsExperience} years of experience helping buyers and sellers across the GTA.`,
    url: `${SITE_CONFIG.url}/about`,
    images: [
      {
        url: "/images/lamia-headshot.jpg",
        width: 800,
        height: 600,
        alt: "Lamia Chowdhury - Toronto Real Estate Agent",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
};

export default function AboutPage() {
  const allFaqs = [...FAQS.general, ...FAQS.buying.slice(0, 1), ...FAQS.selling.slice(0, 1)];

  return (
    <>
      {/* Structured Data */}
      <FaqJsonLd faqs={allFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-ivory" aria-labelledby="about-heading">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">
              Meet Your Realtor
            </span>
            <h1 id="about-heading" className="mt-4 mb-6 text-forest">
              About Lamia Chowdhury
            </h1>
            <p className="text-xl text-charcoal-light leading-relaxed">
              {AGENT_INFO.bio.short}
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] bg-ivory rounded-lg overflow-hidden relative shadow-xl">
                <Image
                  src="/hal-body-headshot-whitedress.png"
                  alt={`${AGENT_INFO.name} - Toronto Real Estate Agent`}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Achievement Card */}
              <div className="absolute -bottom-6 -right-6 bg-[#1a1510] text-white p-6 rounded-lg shadow-xl max-w-xs border border-gold/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#1a1510]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Top 5 Agent</p>
                    <p className="text-sm text-white/80">Cielo Properties Dubai</p>
                  </div>
                </div>
                <p className="text-sm text-gold/80">
                  Top Performer Feb, Apr, May 2025
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-display font-semibold text-forest mb-6">
                Your Partner in Toronto & Global Real Estate
              </h2>

              <div className="prose prose-lg text-charcoal-light mb-8">
                <p>{AGENT_INFO.bio.long}</p>
                <p>
                  International buyers and investors rely on my strategic guidance,
                  transparent communication, and polished execution to simplify
                  cross-border decisions and elevate every aspect of their
                  investment journey.
                </p>
              </div>

              {/* Credentials */}
              <div className="mb-8">
                <h3 className="font-display text-xl font-semibold text-forest mb-4">
                  Credentials & Designations
                </h3>
                <div className="flex flex-wrap gap-3">
                  {AGENT_INFO.credentials.split(", ").map((credential) => (
                    <span
                      key={credential}
                      className="px-4 py-2 bg-gold/10 text-forest-dark font-semibold rounded"
                    >
                      {credential}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expertise */}
              <div className="mb-8">
                <h3 className="font-display text-xl font-semibold text-forest mb-4">
                  Key Expertise
                </h3>
                <ul className="space-y-3">
                  {AGENT_INFO.bio.expertise.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-gold shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-charcoal-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Affiliations */}
              <div className="p-6 bg-ivory rounded-lg">
                <h3 className="font-display text-lg font-semibold text-forest mb-4">
                  Professional Affiliations
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-forest">{AGENT_INFO.brokerage}</p>
                    <p className="text-sm text-charcoal-light">{AGENT_INFO.title}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-forest">{AGENT_INFO.dubaiAffiliation}</p>
                    <p className="text-sm text-charcoal-light">{AGENT_INFO.dubaiRole}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-ivory" aria-labelledby="achievements-heading">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">
              Recognition
            </span>
            <h2 id="achievements-heading" className="mt-4 text-forest">
              Awards & Achievements
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {AGENT_INFO.achievements.map((achievement) => (
              <div
                key={achievement}
                className="bg-white p-6 rounded-lg text-center shadow-sm border border-ivory-dark"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="font-semibold text-forest">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white" aria-labelledby="faq-heading">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-gold uppercase tracking-widest">
                Common Questions
              </span>
              <h2 id="faq-heading" className="mt-4 text-forest">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {allFaqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-ivory rounded-lg"
                >
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
                    <p className="text-charcoal-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-charcoal-light mb-4">
                Have more questions? I&apos;d love to hear from you.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="consultation" />
    </>
  );
}
