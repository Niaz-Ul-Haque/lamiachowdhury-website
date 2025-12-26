"use client";

import { useState, FormEvent } from "react";
import { CONTACT_INTENTS } from "@/lib/constants";

interface ContactFormProps {
  variant?: "default" | "compact" | "dark";
  showIntent?: boolean;
  title?: string;
  submitLabel?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  intent: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function ContactForm({
  variant = "default",
  showIntent = true,
  title,
  submitLabel = "Send Message",
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    intent: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Focus on first error field
      const firstError = document.querySelector('[aria-invalid="true"]');
      if (firstError instanceof HTMLElement) {
        firstError.focus();
      }
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    // TODO: Replace with actual form handling (e.g., API route, email service)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", phone: "", intent: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const isDark = variant === "dark";
  const inputClasses = isDark
    ? "form-input bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-gold"
    : "form-input";
  const labelClasses = isDark ? "form-label text-white/90" : "form-label";

  if (isSuccess) {
    return (
      <div
        className={`p-8 text-center ${
          isDark ? "bg-white/10 text-white" : "bg-success/10"
        } rounded-lg`}
        role="alert"
        aria-live="polite"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/20 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-success"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className={`font-display text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-forest"}`}>
          Message Sent!
        </h3>
        <p className={isDark ? "text-white/80" : "text-charcoal-light"}>
          Thank you for reaching out. I&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {title && (
        <h3 className={`font-display text-2xl font-semibold mb-6 ${isDark ? "text-white" : "text-forest"}`}>
          {title}
        </h3>
      )}

      <div className={variant === "compact" ? "grid md:grid-cols-2 gap-4" : "space-y-6"}>
        {/* Name */}
        <div className="form-group">
          <label htmlFor="contact-name" className={labelClasses}>
            Full Name <span className="text-error">*</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your full name"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="form-error" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="contact-email" className={labelClasses}>
            Email Address <span className="text-error">*</span>
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="you@email.com"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="form-error" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className={variant === "compact" ? "grid md:grid-cols-2 gap-4" : "space-y-6"}>
        {/* Phone */}
        <div className="form-group">
          <label htmlFor="contact-phone" className={labelClasses}>
            Phone Number
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="(416) 555-0123"
          />
        </div>

        {/* Intent */}
        {showIntent && (
          <div className="form-group">
            <label htmlFor="contact-intent" className={labelClasses}>
              How Can I Help?
            </label>
            <select
              id="contact-intent"
              name="intent"
              value={formData.intent}
              onChange={handleChange}
              className={`form-select ${isDark ? "bg-white/10 border-white/20 text-white" : ""}`}
            >
              <option value="">Select an option...</option>
              {CONTACT_INTENTS.map((intent) => (
                <option key={intent.value} value={intent.value}>
                  {intent.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Message */}
      <div className="form-group">
        <label htmlFor="contact-message" className={labelClasses}>
          Your Message <span className="text-error">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`form-textarea ${isDark ? "bg-white/10 border-white/20 text-white placeholder:text-white/50" : ""}`}
          placeholder="Tell me about your real estate goals..."
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="form-error" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`btn w-full ${isDark ? "btn-gold" : "btn-primary"} ${
          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </>
        ) : (
          submitLabel
        )}
      </button>

      <p className={`text-xs text-center ${isDark ? "text-white/80" : "text-warm-gray"}`}>
        By submitting, you agree to receive communications from Lamia Chowdhury.
        Your information is kept confidential.
      </p>
    </form>
  );
}
