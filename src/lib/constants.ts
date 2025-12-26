// ============================================
// SITE CONFIGURATION
// ============================================

export const SITE_CONFIG = {
  name: "Lamia Chowdhury",
  tagline: "Home With Lamia",
  domain: "lamiachowdhury.com",
  url: "https://lamiachowdhury.com",
  // CALENDLY: Replace this URL with your actual Calendly link
  calendlyUrl: "https://calendly.com/CHANGE-ME",
} as const;

export const AGENT_INFO = {
  name: "Lamia Chowdhury",
  title: "Sales Representative",
  credentials: "BASc, MHI, PMP",
  yearsExperience: "5+",
  phone: "(416) 298-8383",
  email: "lamia.chowdhury@century21.ca",
  brokerage: "CENTURY 21 Innovative Realty Inc. Brokerage",
  brokerageLocation: "Canada",
  dubaiAffiliation: "Cielo Properties Dubai",
  dubaiRole: "Canada Agent at Cielo",
  social: {
    instagram: "https://www.instagram.com/homewithlamia",
    instagramHandle: "@homewithlamia",
    century21Profile: "https://lamia-chowdhury.c21.ca/",
    cieloProfile: "https://cielodxb.com/agent/lamia-chowdhury/",
  },
  achievements: [
    "Top Performer - February 2025 (Cielo Properties Dubai)",
    "Top Performer - April 2025 (Cielo Properties Dubai)",
    "Top Performer - May 2025 (Cielo Properties Dubai)",
    "Top 5 Agent - Cielo Properties Dubai",
  ],
  bio: {
    short: "With over 5 years helping people find their perfect place, I bring data-driven guidance and transparent communication to every real estate journey in Toronto and beyond.",
    long: "Positioned at the intersection of Canadian stability and Dubai's fast-rising luxury landscape, I offer clients a refined, data-driven pathway to secure high-value real estate assets. My market fluency spans new-build developments, established luxury neighborhoods, and investment-driven opportunities, enabling me to evaluate risk, optimize returns, and navigate regulatory nuances with ease.",
    expertise: [
      "In-depth knowledge of Canada and Dubai's premier luxury corridors",
      "Strong competency in investment evaluation, due diligence and portfolio design",
      "Proven experience supporting foreign investors and international relocations",
      "Highly effective negotiator in diverse cultural and legal environments",
      "Robust network of developers, financial advisers and global property partners",
    ],
  },
} as const;

export const NAVIGATION = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Buy", href: "/buy-a-home-in-toronto" },
  { label: "Sell", href: "/sell-your-home-in-toronto" },
  { label: "Neighborhoods", href: "/toronto-neighborhoods" },
  { label: "Dubai", href: "/dubai-real-estate" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICE_AREAS = {
  toronto: [
    "Downtown Toronto",
    "Midtown Toronto",
    "North York",
    "Scarborough",
    "Etobicoke",
    "East York",
    "York",
  ],
  gta: [
    "Mississauga",
    "Brampton",
    "Vaughan",
    "Richmond Hill",
    "Markham",
    "Oakville",
    "Burlington",
    "Ajax",
    "Pickering",
    "Oshawa",
  ],
} as const;

export const FEATURED_NEIGHBORHOODS = [
  {
    name: "Downtown Toronto",
    slug: "downtown-toronto",
    description: "The heart of the city with world-class condos, entertainment, and business districts.",
    features: ["Condos & Lofts", "Walkable", "Transit Hub"],
    avgPrice: "$750,000+",
    image: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=800&h=600&fit=crop",
  },
  {
    name: "North York",
    slug: "north-york",
    description: "Diverse communities with excellent schools, parks, and a mix of housing options.",
    features: ["Family-Friendly", "Good Schools", "Subway Access"],
    avgPrice: "$850,000+",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
  },
  {
    name: "Scarborough",
    slug: "scarborough",
    description: "Affordable options with great value, diverse culture, and growing communities.",
    features: ["Great Value", "Growing Area", "Diverse"],
    avgPrice: "$700,000+",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
  },
  {
    name: "Etobicoke",
    slug: "etobicoke",
    description: "Waterfront living, established neighborhoods, and easy highway access.",
    features: ["Waterfront", "Established", "Highway Access"],
    avgPrice: "$900,000+",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
  },
  {
    name: "Mississauga",
    slug: "mississauga",
    description: "Canada's sixth-largest city with modern amenities and excellent infrastructure.",
    features: ["Modern Condos", "Square One", "GO Transit"],
    avgPrice: "$750,000+",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop",
  },
  {
    name: "Vaughan",
    slug: "vaughan",
    description: "Fast-growing community with new developments and family-oriented neighborhoods.",
    features: ["New Builds", "Family-Friendly", "Subway Extension"],
    avgPrice: "$1,100,000+",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&fit=crop",
  },
] as const;

export const CONTACT_INTENTS = [
  { value: "toronto-buying", label: "Buying a Home in Toronto/GTA" },
  { value: "toronto-selling", label: "Selling a Home in Toronto/GTA" },
  { value: "dubai-investing", label: "Dubai Real Estate Investment" },
  { value: "market-updates", label: "Toronto Market Updates" },
  { value: "home-valuation", label: "Free Home Valuation" },
  { value: "other", label: "Other Inquiry" },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery Call",
    description: "We start with a conversation about your goals, timeline, and what matters most to you.",
    icon: "phone",
  },
  {
    step: 2,
    title: "Strategy Session",
    description: "I analyze market data and develop a personalized plan tailored to your needs.",
    icon: "chart",
  },
  {
    step: 3,
    title: "Property Search / Prep",
    description: "For buyers: curated showings. For sellers: staging and marketing preparation.",
    icon: "search",
  },
  {
    step: 4,
    title: "Negotiation",
    description: "Strong, data-backed negotiation to get you the best possible outcome.",
    icon: "handshake",
  },
  {
    step: 5,
    title: "Closing Support",
    description: "Guidance through inspections, financing, and paperwork until keys change hands.",
    icon: "key",
  },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Lamia made our first home purchase in Toronto so much easier. Her market knowledge and patience were exactly what we needed.",
    author: "Sarah & Michael T.",
    location: "First-time buyers, Scarborough",
    isSample: true,
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    quote: "We sold our North York home above asking price thanks to Lamia's strategic pricing and marketing approach. Highly recommend!",
    author: "The Patel Family",
    location: "Sellers, North York",
    isSample: true,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    quote: "Professional, responsive, and truly understands the Toronto market. Lamia helped us find our dream condo downtown.",
    author: "James L.",
    location: "Buyer, Downtown Toronto",
    isSample: true,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
] as const;

// Sample featured properties (placeholders - will be managed via CMS)
export const FEATURED_PROPERTIES = [
  {
    id: 1,
    title: "Modern Condo in Downtown Toronto",
    address: "123 King Street West, Toronto",
    price: "$699,000",
    bedrooms: 2,
    bathrooms: 2,
    sqft: "950",
    type: "Condo",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Detached Family Home",
    address: "456 Maple Avenue, North York",
    price: "$1,299,000",
    bedrooms: 4,
    bathrooms: 3,
    sqft: "2,400",
    type: "Detached",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Townhouse with Private Garden",
    address: "789 Oak Street, Scarborough",
    price: "$849,000",
    bedrooms: 3,
    bathrooms: 2,
    sqft: "1,800",
    type: "Townhouse",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
  },
] as const;

// Market insights content
export const MARKET_INSIGHTS = {
  lastUpdated: "July 2025",
  highlights: [
    {
      title: "Sales Activity Up",
      description: "Number of sales has increased in recent months across the GTA.",
      trend: "up",
    },
    {
      title: "Price Stabilization",
      description: "Average sale prices showing downward trend compared to last year, creating buyer opportunities.",
      trend: "down",
    },
    {
      title: "More Listings Available",
      description: "Increased inventory gives buyers more options and stronger negotiating positions.",
      trend: "up",
    },
  ],
  buyerOpportunity: "With more listings and stabilizing prices, this is an opportune time for buyers to enter the market or upgrade their homes.",
  sellerStrategy: "Focus on competitive pricing, effective staging, and targeted marketing to attract the right buyers in this evolving market.",
} as const;

// Dubai-specific content
export const DUBAI_INFO = {
  market: {
    averageCondoPrice: "1.3M AED (~$486K CAD)",
    yearOverYearGrowth: "20.5%",
    lastUpdated: "June 2025",
  },
  benefits: [
    "No property tax on residential properties",
    "High rental yields (5-9% average)",
    "Tax-free income for residents",
    "World-class infrastructure and lifestyle",
    "Strong investor protections and regulations",
    "Golden Visa eligibility through property investment",
  ],
  investmentTypes: [
    {
      type: "Off-Plan Properties",
      description: "New developments with flexible payment plans and strong appreciation potential.",
    },
    {
      type: "Ready Properties",
      description: "Move-in ready homes for immediate rental income or personal use.",
    },
    {
      type: "Luxury Residences",
      description: "Premium properties in sought-after locations like Palm Jumeirah and Downtown Dubai.",
    },
  ],
  partnerDeveloper: "Sobha Realty",
} as const;

// FAQ content for structured data
export const FAQS = {
  general: [
    {
      question: "Why should I work with a realtor in Toronto?",
      answer: "A knowledgeable Toronto realtor provides invaluable market insights, negotiation expertise, and guidance through complex paperwork. With 5+ years of experience, I help you avoid costly mistakes and find the best opportunities in the competitive GTA market.",
    },
    {
      question: "What areas of Toronto and the GTA do you serve?",
      answer: "I serve all of Toronto including Downtown, North York, Scarborough, Etobicoke, and the broader GTA including Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville, and more.",
    },
    {
      question: "Do you help first-time home buyers?",
      answer: "Absolutely! First-time buyers are a specialty. I guide you through government incentives, mortgage pre-approval, the search process, and closing - making your first purchase as smooth as possible.",
    },
  ],
  buying: [
    {
      question: "What is the home buying process in Toronto?",
      answer: "The process includes: 1) Get pre-approved for a mortgage, 2) Define your needs and budget, 3) Search and view properties, 4) Make an offer, 5) Complete home inspection and conditions, 6) Finalize financing, 7) Close and get your keys. I guide you through each step.",
    },
    {
      question: "How much do I need for a down payment in Toronto?",
      answer: "In Canada, the minimum down payment is 5% for homes under $500,000, 10% for the portion between $500,000-$1,000,000, and 20% for homes over $1,000,000. First-time buyers may access additional programs and incentives.",
    },
  ],
  selling: [
    {
      question: "How do you determine my home's value?",
      answer: "I conduct a comprehensive market analysis comparing recent sales of similar homes in your area, current market conditions, your home's unique features, and local trends to determine optimal pricing strategy.",
    },
    {
      question: "How long does it take to sell a home in Toronto?",
      answer: "The average time on market varies by neighborhood and price point. In the current market, well-priced homes typically sell within 20-45 days. I'll provide specific expectations based on your property and location.",
    },
  ],
  dubai: [
    {
      question: "Can Canadians buy property in Dubai?",
      answer: "Yes! Dubai welcomes international investors. Foreigners can purchase freehold property in designated areas. There are no restrictions on ownership, and the process is straightforward with proper guidance.",
    },
    {
      question: "What are the benefits of investing in Dubai real estate?",
      answer: "Dubai offers no property tax, high rental yields (5-9%), tax-free income, Golden Visa eligibility through investment, world-class infrastructure, and strong capital appreciation potential.",
    },
  ],
} as const;
