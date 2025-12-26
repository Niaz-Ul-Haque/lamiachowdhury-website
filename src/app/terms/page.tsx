import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, AGENT_INFO } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Terms of Service | Lamia Chowdhury Real Estate",
  description: "Terms of Service for Lamia Chowdhury Real Estate website. Read our terms and conditions for using our real estate services in Toronto and the GTA.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/terms`,
  },
};

export default function TermsPage() {
  const lastUpdated = "December 2024";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Terms of Service", href: "/terms" },
        ]}
      />

      {/* Header */}
      <AnimatedSection animation="fade-up" className="pt-32 pb-12 bg-ivory">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-display font-semibold text-forest mb-4">
              Terms of Service
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
              Welcome to the website of {AGENT_INFO.name}, Sales Representative at {AGENT_INFO.brokerage}. By accessing or using this website, you agree to be bound by these Terms of Service.
            </p>

            <h2 className="text-2xl font-display font-semibold text-forest mt-12 mb-4">
              1. Real Estate Services
            </h2>
            <p className="text-charcoal-light mb-4">
              {AGENT_INFO.name} is a registered real estate salesperson with the Real Estate Council of Ontario (RECO), operating under {AGENT_INFO.brokerage}. All real estate services are provided in accordance with:
            </p>
            <ul className="list-disc pl-6 text-charcoal-light space-y-2 mb-6">
              <li>The Real Estate and Business Brokers Act, 2002 (REBBA)</li>
              <li>RECO&apos;s Code of Ethics</li>
              <li>Toronto Regional Real Estate Board (TRREB) rules and regulations</li>
              <li>Ontario Real Estate Association (OREA) standards</li>
            </ul>

            <h2 className="text-2xl font-display font-semibold text-forest mt-12 mb-4">
              2. Website Information Disclaimer
            </h2>
            <p className="text-charcoal-light mb-4">
              The information provided on this website is for general informational purposes only and does not constitute:
            </p>
            <ul className="list-disc pl-6 text-charcoal-light space-y-2 mb-6">
              <li>Legal advice</li>
              <li>Financial or investment advice</li>
              <li>A guarantee of property values or market conditions</li>
              <li>An offer to buy or sell real estate</li>
            </ul>
            <p className="text-charcoal-light">
              Property listings, prices, and market data are subject to change without notice. Always verify information independently before making any real estate decisions.
            </p>

            <h2 className="text-2xl font-display font-semibold text-forest mt-12 mb-4">
              3. Property Listings and MLS Data
            </h2>
            <p className="text-charcoal-light mb-4">
              Property listings displayed on this website may be provided through the Toronto Regional Real Estate Board (TRREB) MLS system. This data is:
            </p>
            <ul className="list-disc pl-6 text-charcoal-light space-y-2 mb-6">
              <li>Intended for personal, non-commercial use only</li>
              <li>Subject to copyright by TRREB</li>
              <li>Not guaranteed to be accurate or current</li>
              <li>Subject to prior sale or removal without notice</li>
            </ul>
            <p className="text-charcoal-light">
              Reproduction or redistribution of MLS data is prohibited without express written consent.
            </p>

            <h2 className="text-2xl font-display font-semibold text-forest mt-12 mb-4">
              4. Agency Relationships
            </h2>
            <p className="text-charcoal-light mb-4">
              In Ontario, real estate agents can represent buyers, sellers, or both parties (with informed consent). By using this website or contacting us:
            </p>
            <ul className="list-disc pl-6 text-charcoal-light space-y-2 mb-6">
              <li>No agency relationship is created until a written agreement is signed</li>
              <li>You will receive a RECO Information Guide explaining agency relationships</li>
              <li>Multiple representation (representing both buyer and seller) requires written consent</li>
              <li>Customer service can be provided without creating an agency relationship</li>
            </ul>

            <h2 className="text-2xl font-display font-semibold text-forest mt-12 mb-4">
              5. FINTRAC Compliance
            </h2>
            <p className="text-charcoal-light">
              As required by the Proceeds of Crime (Money Laundering) and Terrorist Financing Act, we must verify the identity of all clients involved in real estate transactions. You agree to provide valid government-issued identification and other information as required by FINTRAC regulations.
            </p>

            <h2 className="text-2xl font-display font-semibold text-forest mt-12 mb-4">
              6. Ontario Land Transfer Tax
            </h2>
            <p className="text-charcoal-light">
              Buyers of property in Toronto are subject to both Ontario Land Transfer Tax and Toronto Municipal Land Transfer Tax. First-time homebuyers may be eligible for rebates. Tax calculations provided on this website are estimates only and should be verified with a lawyer or tax professional.
            </p>

            <h2 className="text-2xl font-display font-semibold text-forest mt-12 mb-4">
              7. Dubai Real Estate Services
            </h2>
            <p className="text-charcoal-light">
              Dubai real estate services are provided through {AGENT_INFO.dubaiAffiliation} and are subject to Dubai Land Department (DLD) regulations and the Real Estate Regulatory Agency (RERA) guidelines. These services are separate from Ontario-regulated real estate services.
            </p>

            <h2 className="text-2xl font-display font-semibold text-forest mt-12 mb-4">
              8. Intellectual Property
            </h2>
            <p className="text-charcoal-light">
              All content on this website, including text, images, logos, and design elements, is protected by copyright and trademark laws. You may not reproduce, distribute, or use any content without express written permission.
            </p>

            <h2 className="text-2xl font-display font-semibold text-forest mt-12 mb-4">
              9. Third-Party Links
            </h2>
            <p className="text-charcoal-light">
              This website may contain links to third-party websites. We are not responsible for the content, accuracy, or privacy practices of external sites. Links do not imply endorsement.
            </p>

            <h2 className="text-2xl font-display font-semibold text-forest mt-12 mb-4">
              10. Limitation of Liability
            </h2>
            <p className="text-charcoal-light">
              To the maximum extent permitted by law, {AGENT_INFO.name} and {AGENT_INFO.brokerage} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or reliance on information provided herein.
            </p>

            <h2 className="text-2xl font-display font-semibold text-forest mt-12 mb-4">
              11. Governing Law
            </h2>
            <p className="text-charcoal-light">
              These Terms of Service are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein. Any disputes shall be resolved in the courts of Ontario.
            </p>

            <h2 className="text-2xl font-display font-semibold text-forest mt-12 mb-4">
              12. Changes to Terms
            </h2>
            <p className="text-charcoal-light">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this website. Your continued use of the website constitutes acceptance of any changes.
            </p>

            <h2 className="text-2xl font-display font-semibold text-forest mt-12 mb-4">
              13. Contact Information
            </h2>
            <p className="text-charcoal-light mb-4">
              For questions about these Terms of Service, please contact:
            </p>
            <div className="bg-ivory p-6 rounded-lg">
              <p className="text-charcoal font-semibold">{AGENT_INFO.name}</p>
              <p className="text-charcoal-light">{AGENT_INFO.brokerage}</p>
              <p className="text-charcoal-light">Email: {AGENT_INFO.email}</p>
              <p className="text-charcoal-light">Phone: {AGENT_INFO.phone}</p>
            </div>

            <h2 className="text-2xl font-display font-semibold text-forest mt-12 mb-4">
              14. Consumer Protection
            </h2>
            <p className="text-charcoal-light mb-4">
              As a consumer in Ontario, you have rights protected by:
            </p>
            <ul className="list-disc pl-6 text-charcoal-light space-y-2">
              <li>Real Estate Council of Ontario (RECO) - <a href="https://www.reco.on.ca" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">www.reco.on.ca</a></li>
              <li>Consumer Protection Ontario - <a href="https://www.ontario.ca/page/consumer-protection-ontario" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">www.ontario.ca/consumer</a></li>
              <li>Ontario Human Rights Commission - <a href="https://www.ohrc.on.ca" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">www.ohrc.on.ca</a></li>
            </ul>
            <p className="text-charcoal-light mt-4">
              To file a complaint about a real estate professional in Ontario, contact RECO at 1-800-245-6910 or visit their website.
            </p>
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
