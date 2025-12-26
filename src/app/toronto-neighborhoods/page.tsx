import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG, SERVICE_AREAS } from "@/lib/constants";

// Neighborhood images from Unsplash
const neighborhoodImages: Record<string, string> = {
  "downtown-toronto": "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=800&h=450&fit=crop",
  "north-york": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=450&fit=crop",
  "scarborough": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=450&fit=crop",
  "etobicoke": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=450&fit=crop",
  "mississauga": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=450&fit=crop",
  "vaughan": "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=450&fit=crop",
};
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Toronto Neighborhoods Guide | GTA Areas | Find Your Perfect Community",
  description:
    "Explore Toronto and GTA neighborhoods with our comprehensive guide. From Downtown Toronto condos to family homes in Scarborough, North York, Mississauga, and Vaughan. Find your ideal community.",
  keywords: [
    "Toronto neighborhoods",
    "GTA communities",
    "Downtown Toronto",
    "North York real estate",
    "Scarborough homes",
    "Etobicoke houses",
    "Mississauga real estate",
    "Vaughan homes",
    "Brampton houses",
    "where to live in Toronto",
  ],
  openGraph: {
    title: "Toronto Neighborhoods Guide | GTA Areas",
    description:
      "Explore Toronto and GTA neighborhoods. Find your ideal community with our comprehensive neighborhood guide.",
    url: `${SITE_CONFIG.url}/toronto-neighborhoods`,
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/toronto-neighborhoods`,
  },
};

const neighborhoodDetails = [
  {
    name: "Downtown Toronto",
    slug: "downtown-toronto",
    description:
      "The vibrant heart of Canada's largest city. Downtown Toronto offers an unparalleled urban lifestyle with world-class dining, entertainment, business districts, and stunning condo living. From the Financial District to King West, the Entertainment District to the Distillery, each pocket has its own character.",
    highlights: [
      "Walk Score of 90+ in most areas",
      "Easy access to TTC subway and streetcars",
      "Proximity to major employers and businesses",
      "Vibrant nightlife and restaurant scene",
      "Waterfront trails and parks",
    ],
    propertyTypes: ["Condos", "Lofts", "Townhouses"],
    priceRange: "$500,000 - $2,000,000+",
    idealFor: ["Young professionals", "Urban couples", "Investors"],
  },
  {
    name: "North York",
    slug: "north-york",
    description:
      "A diverse borough with excellent schools, parks, and a mix of housing options. North York offers the best of both worlds—urban amenities with suburban space. Areas like Willowdale, Bayview Village, and York Mills are highly sought after by families.",
    highlights: [
      "Top-rated public and private schools",
      "Access to Yonge subway line",
      "Large parks including Earl Bales and G Ross Lord",
      "Diverse dining and shopping options",
      "Mix of condos and detached homes",
    ],
    propertyTypes: ["Detached homes", "Semi-detached", "Condos", "Townhouses"],
    priceRange: "$700,000 - $3,000,000+",
    idealFor: ["Families", "Professionals", "New Canadians"],
  },
  {
    name: "Scarborough",
    slug: "scarborough",
    description:
      "One of Toronto's most diverse and affordable areas. Scarborough offers great value with a strong sense of community. The Scarborough Bluffs provide stunning natural beauty, while neighborhoods like Agincourt and Guildwood offer family-friendly living.",
    highlights: [
      "More affordable entry points",
      "Strong multicultural communities",
      "Beautiful Scarborough Bluffs parkland",
      "Growing transit infrastructure (LRT coming)",
      "Larger lot sizes than downtown",
    ],
    propertyTypes: ["Detached homes", "Semi-detached", "Townhouses", "Condos"],
    priceRange: "$600,000 - $1,500,000+",
    idealFor: ["First-time buyers", "Families", "Value seekers"],
  },
  {
    name: "Etobicoke",
    slug: "etobicoke",
    description:
      "West Toronto's established community with waterfront access and easy highway connectivity. From the upscale Kingsway to family-friendly Mimico, Etobicoke offers diverse neighborhoods with strong community bonds.",
    highlights: [
      "Waterfront access and parks",
      "Easy highway access (Gardiner, 427)",
      "Established, mature neighborhoods",
      "Good schools and community centers",
      "Mix of old charm and new development",
    ],
    propertyTypes: ["Detached homes", "Condos", "Townhouses"],
    priceRange: "$700,000 - $2,500,000+",
    idealFor: ["Families", "Commuters", "Waterfront lovers"],
  },
  {
    name: "Mississauga",
    slug: "mississauga",
    description:
      "Canada's sixth-largest city with modern infrastructure and excellent amenities. The Square One area is a hub of condo development, while areas like Port Credit offer charming waterfront living. Great for those who want urban amenities outside Toronto proper.",
    highlights: [
      "Modern condo developments",
      "Square One shopping and entertainment",
      "Port Credit waterfront village",
      "GO Transit to downtown Toronto",
      "Lower property taxes than Toronto",
    ],
    propertyTypes: ["Condos", "Detached homes", "Townhouses"],
    priceRange: "$500,000 - $2,000,000+",
    idealFor: ["Young professionals", "Families", "Commuters to Toronto"],
  },
  {
    name: "Vaughan",
    slug: "vaughan",
    description:
      "One of Canada's fastest-growing cities with modern infrastructure and family-oriented communities. The Vaughan Metropolitan Centre brings urban living to the suburbs, while areas like Kleinburg offer luxury estate living.",
    highlights: [
      "Vaughan subway extension (TTC Line 1)",
      "Canada's Wonderland nearby",
      "New developments and modern homes",
      "Strong Italian-Canadian community",
      "Excellent schools",
    ],
    propertyTypes: ["Detached homes", "Townhouses", "Condos"],
    priceRange: "$800,000 - $3,000,000+",
    idealFor: ["Families", "New home buyers", "Commuters"],
  },
];

export default function NeighborhoodsPage() {
  return (
    <>
      {/* Structured Data */}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Toronto Neighborhoods", href: "/toronto-neighborhoods" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-forest text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="neighborhoods-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neighborhoods-pattern)" />
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-gold/20 rounded-full text-sm text-gold font-medium mb-6">
              Toronto & GTA Guide
            </span>
            <h1 className="text-white mb-6">
              Discover Toronto & GTA Neighborhoods
            </h1>
            <p className="text-xl text-white/85 leading-relaxed mb-8">
              From bustling downtown condos to peaceful suburban streets, the Greater
              Toronto Area offers incredible diversity. Find the community that fits
              your lifestyle.
            </p>
            <Link href="/contact" className="btn btn-gold">
              Get Neighborhood Recommendations
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-8 bg-white border-b border-ivory-dark sticky top-[var(--header-height)] z-30">
        <div className="container">
          <nav aria-label="Neighborhood quick navigation">
            <ul className="flex flex-wrap gap-3 justify-center">
              {neighborhoodDetails.map((n) => (
                <li key={n.slug}>
                  <a
                    href={`#${n.slug}`}
                    className="px-4 py-2 text-sm font-medium text-charcoal-light hover:text-forest hover:bg-ivory rounded-full transition-colors"
                  >
                    {n.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* Neighborhood Details */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="space-y-24">
            {neighborhoodDetails.map((neighborhood, index) => (
              <article
                key={neighborhood.slug}
                id={neighborhood.slug}
                className="scroll-mt-40"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="aspect-video bg-ivory rounded-lg overflow-hidden relative">
                      <Image
                        src={neighborhoodImages[neighborhood.slug]}
                        alt={`${neighborhood.name} neighborhood`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <span className="text-sm font-semibold text-gold uppercase tracking-widest">
                      {neighborhood.priceRange}
                    </span>
                    <h2 className="mt-2 mb-4 text-forest">{neighborhood.name}</h2>
                    <p className="text-lg text-charcoal-light mb-6">
                      {neighborhood.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h3 className="font-display text-lg font-semibold text-forest mb-3">
                        Neighborhood Highlights
                      </h3>
                      <ul className="space-y-2">
                        {neighborhood.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2">
                            <svg
                              className="w-5 h-5 text-gold shrink-0 mt-0.5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-charcoal-light">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Property Types */}
                    <div className="mb-6">
                      <h3 className="font-display text-lg font-semibold text-forest mb-3">
                        Property Types
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {neighborhood.propertyTypes.map((type) => (
                          <span
                            key={type}
                            className="px-3 py-1 bg-ivory text-charcoal-light text-sm rounded"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Ideal For */}
                    <div className="mb-6">
                      <h3 className="font-display text-lg font-semibold text-forest mb-3">
                        Ideal For
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {neighborhood.idealFor.map((type) => (
                          <span
                            key={type}
                            className="px-3 py-1 bg-forest/10 text-forest text-sm rounded"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/contact?intent=toronto-buying&neighborhood=${neighborhood.slug}`}
                      className="btn btn-primary"
                    >
                      Explore {neighborhood.name} Listings
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Service Areas */}
      <section className="section-padding bg-ivory" aria-labelledby="areas-heading">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">
              Full Service Area
            </span>
            <h2 id="areas-heading" className="mt-4 mb-6 text-forest">
              All Areas I Serve in the GTA
            </h2>
            <p className="text-lg text-charcoal-light">
              Whether you&apos;re looking in Toronto proper or the surrounding GTA,
              I have the local knowledge to help you find your perfect home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Toronto */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="font-display text-xl font-semibold text-forest mb-4">
                Toronto
              </h3>
              <ul className="space-y-2">
                {SERVICE_AREAS.toronto.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-charcoal-light">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            {/* GTA */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="font-display text-xl font-semibold text-forest mb-4">
                Greater Toronto Area
              </h3>
              <ul className="space-y-2">
                {SERVICE_AREAS.gta.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-charcoal-light">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="consultation" />
    </>
  );
}
