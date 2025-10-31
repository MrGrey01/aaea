"use client";

import type React from "react";

import { useState } from "react";

export function SponsorshipBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent/10 to-accent/5 border-y border-accent/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Become a Partner
          </h2>
          <p className="text-lg text-foreground/70 mb-2">
            Join us in celebrating aviation excellence
          </p>
          <p className="text-foreground/60">
            Sponsorship and partnership opportunities available for industry
            leaders
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent/50 transition-colors flex-1 sm:flex-none"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-accent text-background font-semibold hover:bg-accent/90 transition-colors duration-300 whitespace-nowrap"
            >
              {submitted ? "✓ Sent!" : "Contact Us"}
            </button>
          </form>

          <a
            href="tel:+234-XXX-XXX-XXXX"
            className="px-6 py-3 rounded-lg border border-accent/50 text-accent font-semibold hover:bg-accent/10 transition-colors duration-300"
          >
            Call Us
          </a>
        </div>

        <p className="text-center text-sm text-foreground/50 mt-6">
          We&apos;ll get back to you within 24 hours with partnership details
          and sponsorship packages.
        </p>
      </div>
    </section>
  );
}
