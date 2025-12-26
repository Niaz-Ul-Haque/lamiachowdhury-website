interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: string;
  isLast?: boolean;
}

const icons: Record<string, React.ReactNode> = {
  phone: (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  ),
  chart: (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  ),
  search: (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  ),
  handshake: (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
      />
    </svg>
  ),
  key: (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
      />
    </svg>
  ),
};

export function ProcessStep({
  step,
  title,
  description,
  icon,
  isLast = false,
}: ProcessStepProps) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        {/* Step Number */}
        <div className="relative z-10 w-14 h-14 rounded-full bg-forest flex items-center justify-center text-white shadow-lg">
          {icons[icon] || (
            <span className="font-display text-xl font-semibold">{step}</span>
          )}
        </div>

        {/* Connector Line */}
        {!isLast && (
          <div className="w-0.5 h-full bg-gradient-to-b from-forest to-gold mt-4" />
        )}
      </div>

      {/* Content */}
      <div className={`pb-12 ${isLast ? "" : ""}`}>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-semibold text-gold uppercase tracking-widest">
            Step {step}
          </span>
        </div>
        <h3 className="font-display text-xl font-semibold text-forest mb-2">
          {title}
        </h3>
        <p className="text-charcoal-light leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </div>
  );
}

// Horizontal version for desktop
export function ProcessStepHorizontal({
  step,
  title,
  description,
  icon,
  isLast = false,
}: ProcessStepProps) {
  return (
    <div className="relative text-center flex-1">
      {/* Icon */}
      <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-forest text-white shadow-lg mb-4">
        {icons[icon] || (
          <span className="font-display text-2xl font-semibold">{step}</span>
        )}
      </div>

      {/* Connector Line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-forest to-gold" />
      )}

      {/* Content */}
      <div className="max-w-xs mx-auto">
        <span className="text-xs font-semibold text-gold uppercase tracking-widest">
          Step {step}
        </span>
        <h3 className="font-display text-lg font-semibold text-forest mt-1 mb-2">
          {title}
        </h3>
        <p className="text-sm text-charcoal-light leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
