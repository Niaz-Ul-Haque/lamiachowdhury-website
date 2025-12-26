import Image from "next/image";
import Link from "next/link";

interface NeighborhoodCardProps {
  name: string;
  slug: string;
  description: string;
  features: readonly string[];
  avgPrice: string;
  image?: string;
}

export function NeighborhoodCard({
  name,
  slug,
  description,
  features,
  avgPrice,
  image,
}: NeighborhoodCardProps) {
  return (
    <article className="card group relative overflow-hidden">
      <div className="relative aspect-[3/2] bg-ivory-dark overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-forest/5 to-forest/10">
            <div className="text-center">
              <svg
                className="w-12 h-12 mx-auto text-forest/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <span className="block text-sm text-forest/40 mt-2">
                {name}
              </span>
            </div>
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Price Badge */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 z-10">
          <span className="badge badge-gold">{avgPrice}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-forest mb-2 group-hover:text-gold transition-colors">
          {name}
        </h3>

        <p className="text-sm text-charcoal-light mb-4 line-clamp-2">
          {description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature) => (
            <span
              key={feature}
              className="text-xs px-2 py-1 bg-ivory rounded text-charcoal-light"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Link */}
        <Link
          href={`/toronto-neighborhoods#${slug}`}
          className="inline-flex items-center text-sm font-medium text-forest hover:text-gold transition-colors group/link"
        >
          Explore {name}
          <svg
            className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
