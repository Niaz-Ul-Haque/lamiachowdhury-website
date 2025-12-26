import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, AGENT_INFO } from "@/lib/constants";
import { BreadcrumbJsonLd, LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { ContactForm } from "@/components/ui/ContactForm";
import { AnimatedSection, AnimatedChildren } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact Lamia Chowdhury | Book a Consultation | Toronto Realtor",
  description:
    "Get in touch with Lamia Chowdhury, your Toronto real estate expert. Book a consultation, request a home valuation, or ask about buying and selling in the GTA.",
  openGraph: {
    title: "Contact Lamia Chowdhury | Book a Consultation",
    description:
      "Get in touch for expert real estate guidance in Toronto and the GTA. Book a consultation today.",
    url: `${SITE_CONFIG.url}/contact`,
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Structured Data */}
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-forest text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contact-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-pattern)" />
          </svg>
        </div>

        <div className="container relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-gold/20 rounded-full text-sm text-gold font-medium mb-6">
              Let&apos;s Connect
            </span>
            <h1 className="text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/85 leading-relaxed">
              Whether you&apos;re ready to buy, sell, or just have questions about
              the Toronto or Dubai real estate market, I&apos;m here to help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white" aria-labelledby="contact-heading">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 id="contact-heading" className="mb-6 text-forest">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forest/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-forest"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-forest">Phone</p>
                    <a
                      href={`tel:${AGENT_INFO.phone.replace(/[^0-9]/g, "")}`}
                      className="text-charcoal-light hover:text-gold transition-colors"
                    >
                      {AGENT_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forest/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-forest"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-forest">Email</p>
                    <a
                      href={`mailto:${AGENT_INFO.email}`}
                      className="text-charcoal-light hover:text-gold transition-colors"
                    >
                      {AGENT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forest/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-forest"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-forest">Instagram</p>
                    <a
                      href={AGENT_INFO.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-charcoal-light hover:text-gold transition-colors"
                    >
                      {AGENT_INFO.social.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>

              {/* Affiliations */}
              <div className="p-6 bg-ivory rounded-lg mb-8">
                <h3 className="font-display text-lg font-semibold text-forest mb-4">
                  Professional Affiliations
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-forest">{AGENT_INFO.brokerage}</p>
                    <p className="text-sm text-charcoal-light">
                      {AGENT_INFO.name}, {AGENT_INFO.title}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-forest">{AGENT_INFO.dubaiAffiliation}</p>
                    <p className="text-sm text-charcoal-light">{AGENT_INFO.dubaiRole}</p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="p-6 bg-ivory rounded-lg">
                <h3 className="font-display text-lg font-semibold text-forest mb-4">
                  Availability
                </h3>
                <div className="space-y-2 text-charcoal-light">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>By Appointment</span>
                  </div>
                </div>
                <p className="text-sm text-warm-gray mt-4">
                  Flexible scheduling available for showings and consultations.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-ivory p-8 rounded-lg">
                <ContactForm
                  variant="default"
                  showIntent={true}
                  title="Send Me a Message"
                  submitLabel="Send Message"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="section-padding bg-ivory" aria-labelledby="booking-heading">
        <div className="container">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">
              Book Online
            </span>
            <h2 id="booking-heading" className="mt-4 mb-6 text-forest">
              Schedule a Consultation
            </h2>
            <p className="text-lg text-charcoal-light mb-8">
              Ready to discuss your real estate goals? Book a convenient time
              for a no-obligation consultation.
            </p>

            {/*
              ================================================
              CALENDLY INTEGRATION
              ================================================
              To integrate Calendly:
              1. Replace the URL below with your actual Calendly link
              2. Optionally embed the Calendly widget directly using their embed code

              Current placeholder URL: https://calendly.com/CHANGE-ME
              ================================================
            */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-ivory rounded flex items-center justify-center mb-6">
                <div className="text-center text-warm-gray">
                  <svg
                    className="w-16 h-16 mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm">Calendly Booking Widget</p>
                  <p className="text-xs mt-1">Embed code goes here</p>
                </div>
              </div>

              <a
                href={SITE_CONFIG.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary pulse-glow"
              >
                Book a Time on Calendly
              </a>
              <p className="text-sm text-warm-gray mt-4">
                Opens in a new window. Choose a time that works for you.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="container">
          <AnimatedSection className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link
              href="/buy-a-home-in-toronto"
              className="p-6 bg-ivory rounded-lg text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-forest group-hover:scale-110 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-forest group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-forest mb-2">
                Looking to Buy?
              </h3>
              <p className="text-sm text-charcoal-light">
                Start your Toronto home search
              </p>
            </Link>

            <Link
              href="/sell-your-home-in-toronto"
              className="p-6 bg-ivory rounded-lg text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-forest group-hover:scale-110 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-forest group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-forest mb-2">
                Ready to Sell?
              </h3>
              <p className="text-sm text-charcoal-light">
                Get your free home valuation
              </p>
            </Link>

            <Link
              href="/dubai-real-estate"
              className="p-6 bg-ivory rounded-lg text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-forest group-hover:scale-110 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-forest group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-forest mb-2">
                Dubai Investment?
              </h3>
              <p className="text-sm text-charcoal-light">
                Explore Dubai opportunities
              </p>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
