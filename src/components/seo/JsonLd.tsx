import { SITE_CONFIG, AGENT_INFO, SERVICE_AREAS } from "@/lib/constants";

// Base JSON-LD structured data for the site
export function JsonLd() {
  const realEstateAgentSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.tagline,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
    image: `${SITE_CONFIG.url}/images/lamia-headshot.jpg`,
    description:
      "Trusted Toronto real estate agent helping buyers and sellers across the GTA with data-driven guidance and expert negotiation.",
    telephone: AGENT_INFO.phone,
    email: AGENT_INFO.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.6532,
      longitude: -79.3832,
    },
    areaServed: [
      ...SERVICE_AREAS.toronto.map((area) => ({
        "@type": "City",
        name: area,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Greater Toronto Area",
        },
      })),
      ...SERVICE_AREAS.gta.map((area) => ({
        "@type": "City",
        name: area,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Greater Toronto Area",
        },
      })),
    ],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "16:00",
      },
    ],
    sameAs: [AGENT_INFO.social.instagram],
    parentOrganization: {
      "@type": "RealEstateAgent",
      name: AGENT_INFO.brokerage,
    },
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_CONFIG.url}/#person`,
    name: AGENT_INFO.name,
    jobTitle: AGENT_INFO.title,
    description: `${AGENT_INFO.name} is a Toronto real estate agent with ${AGENT_INFO.brokerage}, helping buyers and sellers across the Greater Toronto Area.`,
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}/images/lamia-headshot.jpg`,
    telephone: AGENT_INFO.phone,
    email: AGENT_INFO.email,
    sameAs: [AGENT_INFO.social.instagram],
    worksFor: {
      "@type": "RealEstateAgent",
      name: AGENT_INFO.brokerage,
    },
    knowsAbout: [
      "Toronto Real Estate",
      "GTA Housing Market",
      "First-Time Home Buyers",
      "Home Selling",
      "Property Negotiation",
      "Real Estate Investment",
      "Dubai Real Estate",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "BASc",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "MHI",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "PMP",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: `${SITE_CONFIG.name} - Toronto Real Estate`,
    description:
      "Find your dream home in Toronto and the GTA with Lamia Chowdhury, your trusted real estate agent.",
    publisher: {
      "@id": `${SITE_CONFIG.url}/#person`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-CA",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(realEstateAgentSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}

// FAQ Schema Generator
export function FaqJsonLd({
  faqs,
}: {
  faqs: readonly { readonly question: string; readonly answer: string }[];
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />
  );
}

// Breadcrumb Schema Generator
export function BreadcrumbJsonLd({
  items,
}: {
  items: Array<{ name: string; href: string }>;
}) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema),
      }}
    />
  );
}

// Local Business Schema for contact page
export function LocalBusinessJsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url}/#localbusiness`,
    name: `${AGENT_INFO.name} - Toronto Real Estate`,
    image: `${SITE_CONFIG.url}/images/lamia-headshot.jpg`,
    telephone: AGENT_INFO.phone,
    email: AGENT_INFO.email,
    url: SITE_CONFIG.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "Ontario",
      postalCode: "",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.6532,
      longitude: -79.3832,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema),
      }}
    />
  );
}
