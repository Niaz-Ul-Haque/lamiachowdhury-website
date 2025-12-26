"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "scale" | "fade";
  threshold?: number;
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
  threshold = 0.1,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  const animationClasses = {
    "fade-up": `transition-all duration-700 ease-out ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`,
    scale: `transition-all duration-500 ease-out ${
      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`,
    fade: `transition-opacity duration-700 ease-out ${
      isVisible ? "opacity-100" : "opacity-0"
    }`,
  };

  return (
    <div
      ref={sectionRef}
      className={`${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  );
}

interface AnimatedChildrenProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  threshold?: number;
}

export function AnimatedChildren({
  children,
  className = "",
  staggerDelay = 100,
  threshold = 0.1,
}: AnimatedChildrenProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        // @ts-expect-error CSS custom property
        "--stagger-delay": `${staggerDelay}ms`,
      }}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * staggerDelay}ms` : "0ms",
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
