import Link from "next/link";
import { SITE_CONFIG, AGENT_INFO, NAVIGATION, SERVICE_AREAS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1510] text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6" aria-label="Home">
              <span className="font-display text-2xl font-semibold text-white">
                {SITE_CONFIG.name}
              </span>
              <span className="block text-xs text-gold tracking-widest uppercase mt-1">
                {SITE_CONFIG.tagline}
              </span>
            </Link>

            <address className="not-italic space-y-3 text-white/80">
              <p className="font-medium text-white">
                {AGENT_INFO.name}, {AGENT_INFO.title}
              </p>
              <p className="text-sm">{AGENT_INFO.credentials}</p>
              <p>
                <a
                  href={`tel:${AGENT_INFO.phone.replace(/[^0-9]/g, "")}`}
                  className="hover:text-gold transition-colors"
                >
                  {AGENT_INFO.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${AGENT_INFO.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {AGENT_INFO.email}
                </a>
              </p>
            </address>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {/* Instagram */}
              <a
                href={AGENT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-gold hover:text-[#1a1510] transition-colors"
                aria-label="Follow on Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              {/* Century 21 Profile */}
              <a
                href={AGENT_INFO.social.century21Profile}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-gold hover:text-[#1a1510] transition-colors"
                aria-label="View Century 21 Profile"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </a>
              {/* Cielo Properties Profile */}
              <a
                href={AGENT_INFO.social.cieloProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-gold hover:text-[#1a1510] transition-colors"
                aria-label="View Cielo Properties Profile"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                </svg>
              </a>
            </div>

            {/* External Profile Links */}
            <div className="mt-4 space-y-2 text-sm">
              <a
                href={AGENT_INFO.social.century21Profile}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/90 hover:text-gold transition-colors"
              >
                Century 21 Profile →
              </a>
              <a
                href={AGENT_INFO.social.cieloProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/90 hover:text-gold transition-colors"
              >
                Cielo Dubai Profile →
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas - Toronto */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-white">
              Toronto Areas
            </h3>
            <ul className="space-y-3">
              {SERVICE_AREAS.toronto.map((area) => (
                <li key={area}>
                  <Link
                    href="/toronto-neighborhoods"
                    className="text-white/80 hover:text-gold transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas - GTA */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-white">
              GTA Areas
            </h3>
            <ul className="space-y-3">
              {SERVICE_AREAS.gta.slice(0, 7).map((area) => (
                <li key={area}>
                  <Link
                    href="/toronto-neighborhoods"
                    className="text-white/80 hover:text-gold transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Brokerage & Compliance */}
      <div className="border-t border-white/10">
        <div className="container py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-2">
              <p className="text-sm text-white/90">
                <span className="text-white font-medium">{AGENT_INFO.name}</span>,{" "}
                {AGENT_INFO.title}
              </p>
              <p className="text-sm text-white/90">
                {AGENT_INFO.brokerage}
              </p>
              <p className="text-sm text-white/90">
                Dubai Services via {AGENT_INFO.dubaiAffiliation}
              </p>
            </div>

            <div className="text-sm text-white/90 lg:text-right">
              <p>
                &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
              </p>
              <p className="mt-1">
                <Link href="/privacy" className="hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
                {" | "}
                <Link href="/terms" className="hover:text-gold transition-colors">
                  Terms of Service
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="bg-[#141008]">
        <div className="container py-4">
          <p className="text-xs text-white/80 leading-relaxed">
            The information provided on this website is for general informational purposes only
            and does not constitute legal, financial, or professional advice. Real estate
            transactions involve complex legal and financial considerations. Please consult with
            qualified professionals for advice specific to your situation. Not intended to solicit
            buyers or sellers currently under contract with another brokerage.
          </p>
        </div>
      </div>
    </footer>
  );
}
