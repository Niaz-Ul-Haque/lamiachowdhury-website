"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AGENT_INFO } from "@/lib/constants";

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after a short delay for smoother entrance
    const timer = setTimeout(() => setImageLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/*
          ================================================
          HERO BACKGROUND IMAGE PLACEHOLDER
          ================================================
          Image requirements:
          - Aspect ratio: 16:9 or wider
          - Recommended size: 1920x1080px minimum
          - Toronto skyline or beautiful Toronto neighborhood/home
          - Should be professional, aspirational, inviting
          - Suggested filename: /public/images/hero-bg.jpg
          ================================================
        */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1510] via-[#2a2015] to-[#1a1510]" />

        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-[0.05]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1.5" fill="#c9a227" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-pattern)" />
          </svg>
        </div>

        {/* Subtle golden shimmer gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badges - Stacked vertically */}
          <div className="flex flex-col gap-3 mb-8">
            {/* Achievement Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 backdrop-blur-sm rounded-full w-fit animate-fade-in-up">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm text-gold font-medium">
                Top Performer 2025 | {AGENT_INFO.yearsExperience} Years Experience
              </span>
            </div>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full w-fit animate-fade-in-up delay-100">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-sm text-white/90">
                Trusted Toronto & GTA Real Estate Expert
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1
            id="hero-heading"
            className="text-white text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight mb-6 animate-fade-in-up delay-100"
          >
            Find Your Perfect Home in{" "}
            <span className="text-gold">Toronto</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-8 animate-fade-in-up delay-200">
            Whether you&apos;re buying your first home, upgrading, or selling in the GTA,
            I provide data-driven guidance and transparent communication to help you
            make confident real estate decisions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <Link href="/contact" className="btn btn-gold btn-icon-slide group/cta">
              Book a Consultation
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/cta:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
            <Link href="/buy-a-home-in-toronto" className="btn btn-white btn-icon-slide group/cta">
              Start Your Search
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/cta:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20 animate-fade-in-up delay-400">
            <p className="text-sm text-white/90 mb-4">Proudly affiliated with</p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="text-white">
                <span className="font-semibold">{AGENT_INFO.brokerage}</span>
              </div>
              <div className="w-px h-8 bg-white/20 hidden sm:block" />
              <div className="text-white">
                <span className="text-gold font-semibold">{AGENT_INFO.credentials}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lamia Headshot */}
        <div className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2">
          <div 
            className={`relative w-96 xl:w-[420px] h-[520px] xl:h-[580px] rounded-lg overflow-hidden border-2 border-gold/30 shadow-2xl transition-all duration-1000 ease-out ${imageLoaded ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'}`}
          >
            <Image
              src="/half-body-headshot-blackcoat.png"
              alt={`${AGENT_INFO.name} - Toronto Real Estate Agent`}
              fill
              className="object-cover object-top"
              priority
              onLoad={() => setImageLoaded(true)}
            />
            {/* Decorative corner accent with glow animation */}
            <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gold/40 rounded-full blur-2xl transition-all duration-1000 ${imageLoaded ? 'opacity-100 animate-glow-pulse' : 'opacity-0'}`} style={{ transitionDelay: '500ms' }} />
            {/* Golden frame accent */}
            <div className="absolute inset-0 border-2 border-gold/20 rounded-lg pointer-events-none" />
            {/* Shimmer overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 -translate-x-full hover:translate-x-full" style={{ transition: 'transform 0.8s ease-in-out, opacity 0.3s' }} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-bounce">
        <a
          href="#value-proposition"
          className="flex flex-col items-center text-white/90 hover:text-white transition-colors group"
          aria-label="Scroll to learn more"
        >
          <span className="text-xs uppercase tracking-widest mb-2 group-hover:text-gold transition-colors">Explore</span>
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
