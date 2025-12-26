import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
  id: number;
  title: string;
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: string;
  type: string;
  status: string;
  image?: string;
}

export function PropertyCard({
  title,
  address,
  price,
  bedrooms,
  bathrooms,
  sqft,
  type,
  status,
  image,
}: PropertyCardProps) {
  return (
    <article className="card group">
      <div className="relative aspect-[4/3] bg-ivory-dark overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ivory-dark to-ivory">
            <div className="text-center">
              <svg
                className="w-16 h-16 mx-auto text-warm-gray/40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="block text-sm text-warm-gray/60 mt-2">
                Property Image
              </span>
            </div>
          </div>
        )}

        {/* Status Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="badge badge-forest">{status}</span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/20 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Type */}
        <span className="text-xs text-gold font-semibold tracking-wider uppercase">
          {type}
        </span>

        {/* Title */}
        <h3 className="font-display text-xl font-semibold text-forest mt-2 mb-1 group-hover:text-forest-light transition-colors">
          {title}
        </h3>

        {/* Address */}
        <p className="text-sm text-warm-gray mb-4">{address}</p>

        {/* Price */}
        <p className="font-display text-2xl font-semibold text-forest mb-4">
          {price}
        </p>

        {/* Features */}
        <div className="flex items-center gap-4 text-sm text-charcoal-light border-t border-ivory-dark pt-4">
          <div className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-warm-gray"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>{bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-warm-gray"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-warm-gray"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
            <span>{sqft} sqft</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="btn btn-secondary w-full mt-6"
        >
          Inquire Now
        </Link>
      </div>
    </article>
  );
}
