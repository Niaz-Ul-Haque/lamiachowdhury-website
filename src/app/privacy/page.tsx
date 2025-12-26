import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, AGENT_INFO } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Privacy Policy | Lamia Chowdhury Real Estate",
  description: "Privacy Policy for Lamia Chowdhury Real Estate. Learn how we collect, use, and protect your personal information in accordance with Canadian privacy laws.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/privacy`,
  },
};

export default function PrivacyPage() {
  const lastUpdated = "December 2024";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy" },
        ]}
      />

      {/* Header */}
      <AnimatedSection animation="fade-up" className="pt-32 pb-12 bg-ivory">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-display font-semibold text-forest mb-4">
              Privacy Policy
            </h1>
            <p className="text-charcoal-light">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Content */}
      <AnimatedSection animation="fade-up" className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-charcoal-light">
              {AGENT_INFO.name}, Sales Representative at {AGENT_INFO.brokerage} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), is committed to protecting your privacy in accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and Ontario privacy laws.
            </p>

            <h2 className="text-2xl font-display font-semibold text-forest mt-12 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-charcoal-light mb-4">
              We collect personal information that you voluntarily provide to us, including:
            </p>
            <ul className="list-disc pl-6 text-charcoal-light space-y-2 mb-6">
              <li>Contact information (name, email address, phone number)</li>
              <li>Property preferences and requirements</li>
              <li>Financial information relevant to real estate transactions</li>
              <li>Communications you send to us</li>
              <li>Information provided through our website contact forms</li>
            </ul>

            <h2 className="text-2xl font-display font-semibold text-forest mt-12 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-charcoal-light mb-4">
              We use your personal information to:
            </p>
            <ul className="list-disc pl-6 text-charcoal-light space-y-2 mb-6">
              <li>Provide real estate services and assist with property transactions</li>
              <li>Communicate with you about properties and market updates</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you newsletters and market updates (with your consent)</li>
              <li>Comply with legal and regulatory requirements under the Real Estate and Business Brokers Act, 2002 (REBBA)</li>
              <li>Facilitate transactions through the Toronto Regional Real Estate Board (TRREB)</li>
            </ul>

            <h2 className="text-2xl font-display font-semibold text-forest mt-12 mb-4">
              3. Information Sharing
            </h2>
            <p className="text-charcoal-light mb-4">
              We may share your personal information with:
            </p>
            <ul className="list-disc pl-6 text-charcoal-light space-y-2 mb-6">
              <li>{AGENT_INFO.brokerage} as required for real estate transactions</li>
              <li>The Toronto Regional Real Estate Board (TRREB) as required</li>
              <li>Real Estate Council of Ontario (RECO) for regulatory compliance</li>
              <li>Other real estate professionals involved in your transaction</li>
              <li>Legal and financial professionals when necessary</li>
              <li>Government authorities when required by law</li>
            </ul>
            <p className="text-charcoal-light">
              We do not sell your personal information to third parties for marketing purposes.
            </p>

            <h2 className="text-2xl font-display font-semibold text-forest mt-12 mb-4">
              4. Data Security
            </h2>
            <p className="text-charcoal-light">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-display font-semibold text-forest mt-12 mb-4">
              5. Your Rights Under Canadian Law
            </h2>
            <p className="text-charcoal-light mb-4">
              Under PIPEDA and Ontario privacy laws, you have the right to:
            </p>
            <ul className="list-disc pl-6 text-charcoal-light space-y-2 mb-6">
              <li>Access your personal information held by us</li>
              <li>Request correction of inaccurate information</li>
              <li>Withdraw consent for certain uses of your information</li>
              <li>File a complaint with the Office of the Privacy Commissioner of Canada</li>
            </ul>

            <h2 className="text-2xl font-display font-semibold text-forest mt-12 mb-4">
              6. Cookies and Website Analytics
            </h2>
            <p className="text-charcoal-light">
              Our website may use cookies and similar technologies to improve your browsing experience. You can control cookie preferences through your browser settings. We may use analytics services to understand how visitors use our website.
            </p>

            <h2 className="text-2xl font-display font-semibold text-forest mt-12 mb-4">
              7. Retention of Information
            </h2>
            <p className="text-charcoal-light">
              We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including to comply with RECO record-keeping requirements (minimum 6 years for transaction records) and other legal obligations.
            </p>

            <h2 className="text-2xl font-display font-semibold text-forest mt-12 mb-4">
              8. Changes to This Policy
            </h2>
            <p className="text-charcoal-light">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2 className="text-2xl font-display font-semibold text-forest mt-12 mb-4">
              9. Contact Us
            </h2>
            <p className="text-charcoal-light mb-4">
              If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
            </p>
            <div className="bg-ivory p-6 rounded-lg">
              <p className="text-charcoal font-semibold">{AGENT_INFO.name}</p>
              <p className="text-charcoal-light">{AGENT_INFO.brokerage}</p>
              <p className="text-charcoal-light">Email: {AGENT_INFO.email}</p>
              <p className="text-charcoal-light">Phone: {AGENT_INFO.phone}</p>
            </div>

            <h2 className="text-2xl font-display font-semibold text-forest mt-12 mb-4">
              10. Regulatory Information
            </h2>
            <p className="text-charcoal-light mb-4">
              Real estate services in Ontario are regulated by:
            </p>
            <ul className="list-disc pl-6 text-charcoal-light space-y-2">
              <li>Real Estate Council of Ontario (RECO) - <a href="https://www.reco.on.ca" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">www.reco.on.ca</a></li>
              <li>Toronto Regional Real Estate Board (TRREB) - <a href="https://www.trreb.ca" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">www.trreb.ca</a></li>
              <li>Office of the Privacy Commissioner of Canada - <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">www.priv.gc.ca</a></li>
            </ul>
          </div>

          {/* Back Link */}
          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-ivory-dark">
            <Link href="/" className="text-gold hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
