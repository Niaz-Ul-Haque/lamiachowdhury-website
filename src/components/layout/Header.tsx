"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION, AGENT_INFO, SITE_CONFIG } from "@/lib/constants";

// Pages with light (ivory/white) hero backgrounds - header should use dark text
const LIGHT_HERO_PAGES = ["/about", "/privacy", "/terms"];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if current page has a light hero background
  const hasLightHero = LIGHT_HERO_PAGES.includes(pathname);
  // Use dark text when scrolled OR when on a page with light hero
  const useDarkText = isScrolled || hasLightHero;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="container flex items-center justify-between h-[var(--header-height)]"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="relative z-50 flex flex-col"
          aria-label={`${SITE_CONFIG.name} - Home`}
        >
          <span className={`font-display text-xl md:text-2xl font-semibold tracking-tight transition-colors ${useDarkText ? 'text-forest' : 'text-white'}`}>
            {SITE_CONFIG.name}
          </span>
          <span className={`text-xs tracking-widest uppercase transition-colors ${useDarkText ? 'text-warm-gray' : 'text-gold'}`}>
            {SITE_CONFIG.tagline}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6" role="menubar">
            {NAVIGATION.map((item) => (
              <li key={item.href} role="none">
                <Link
                  href={item.href}
                  role="menuitem"
                  className={`relative py-2 text-sm font-medium tracking-wide transition-colors ${
                    pathname === item.href
                      ? useDarkText ? "text-forest" : "!text-gold"
                      : useDarkText ? "text-charcoal-light hover:text-forest" : "!text-white hover:!text-gold"
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link href="/contact" className={`btn ${useDarkText ? 'btn-primary' : 'btn-gold'}`}>
            Book Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden relative z-50 p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2 bg-forest" : useDarkText ? "bg-forest" : "bg-white"
              }`}
            />
            <span
              className={`block h-0.5 w-full transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0 bg-forest" : useDarkText ? "bg-forest" : "bg-white"
              }`}
            />
            <span
              className={`block h-0.5 w-full transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2 bg-forest" : useDarkText ? "bg-forest" : "bg-white"
              }`}
            />
          </div>
        </button>

        {/* Mobile Menu - Full screen overlay */}
        <div
          id="mobile-menu"
          className={`fixed top-0 left-0 right-0 bottom-0 bg-ivory lg:hidden transition-all duration-500 ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto z-40"
              : "opacity-0 pointer-events-none -z-10"
          }`}
          aria-hidden={!isMobileMenuOpen}
          style={{ height: '100vh', minHeight: '100dvh' }}
        >
          <div className="container h-full flex flex-col justify-center" style={{ paddingTop: 'var(--header-height)' }}>
            <ul className="space-y-6" role="menu">
              {NAVIGATION.map((item, index) => (
                <li
                  key={item.href}
                  role="none"
                  className={`transition-all duration-500 ${
                    isMobileMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <Link
                    href={item.href}
                    role="menuitem"
                    className={`block font-display text-3xl md:text-4xl font-medium ${
                      pathname === item.href
                        ? "text-forest"
                        : "text-charcoal-light hover:text-forest"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <span className="inline-block w-2 h-2 ml-3 bg-gold rounded-full align-middle" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Contact Info */}
            <div
              className={`mt-12 pt-8 border-t border-ivory-dark transition-all duration-500 delay-300 ${
                isMobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href={`tel:${AGENT_INFO.phone.replace(/[^0-9]/g, "")}`}
                className="block text-lg text-forest font-medium mb-2"
              >
                {AGENT_INFO.phone}
              </a>
              <a
                href={`mailto:${AGENT_INFO.email}`}
                className="block text-charcoal-light hover:text-forest"
              >
                {AGENT_INFO.email}
              </a>

              <Link
                href="/contact"
                className="btn btn-primary w-full mt-6"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
