import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  isSample?: boolean;
  image?: string;
}

export function TestimonialCard({
  quote,
  author,
  location,
  isSample = false,
  image,
}: TestimonialCardProps) {
  return (
    <blockquote className="relative bg-white p-8 rounded-lg shadow-sm border border-ivory-dark">
      {/* Quote Icon */}
      <div className="absolute -top-4 left-8">
        <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
          <svg
            className="w-4 h-4 text-forest-dark"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
      </div>

      {/* Sample Badge */}
      {isSample && (
        <div className="absolute top-4 right-4">
          <span className="text-xs text-warm-gray italic">Sample Testimonial</span>
        </div>
      )}

      {/* Quote */}
      <p className="text-lg text-charcoal leading-relaxed mt-4 mb-6 italic">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Attribution */}
      <footer className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-ivory flex items-center justify-center overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={author}
              width={48}
              height={48}
              className="object-cover"
            />
          ) : (
            <svg
              className="w-6 h-6 text-warm-gray"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          )}
        </div>

        <div>
          <cite className="not-italic font-semibold text-forest block">
            {author}
          </cite>
          <span className="text-sm text-warm-gray">{location}</span>
        </div>
      </footer>
    </blockquote>
  );
}
