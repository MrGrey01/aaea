"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
/*
  Add these utility classes to your globals.css @layer utilities:

  .cta-section-bg {
    background-image:
      url('/images/cta-bg.jpg'),
      linear-gradient(to right, oklch(0.08 0.04 258), oklch(0.12 0.06 258 / 0.95));
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  }

  .cta-corner-tl {
    clip-path: polygon(0 0, 48px 0, 0 48px);
  }
  .cta-corner-tr {
    clip-path: polygon(100% 0, calc(100% - 48px) 0, 100% 48px);
  }
  .cta-corner-bl {
    clip-path: polygon(0 100%, 48px 100%, 0 calc(100% - 48px));
  }
  .cta-corner-br {
    clip-path: polygon(100% 100%, calc(100% - 48px) 100%, 100% calc(100% - 48px));
  }
*/

export function CTASection() {
  return (
    <section className="cta-section-bg relative w-full overflow-hidden border-y border-gold-500/30 bg-brand-950 py-16">
      <Image
        alt=""
        fill
        src="/images/aviation-bg.png"
        className="object-cover opacity-40"
      />
      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-linear-to-r from-brand-950/90 via-brand-900/75 to-brand-950/90" />

      {/* Gold corner accents — top-left */}
      <div className="pointer-events-none absolute left-0 top-0 h-20 w-20">
        {/* vertical bar */}
        <div className="absolute left-4 top-0 h-10 w-px bg-linear-to-b from-gold-500/80 to-transparent" />
        {/* horizontal bar */}
        <div className="absolute left-0 top-4 h-px w-10 bg-linear-to-r from-gold-500/80 to-transparent" />
        {/* corner dot */}
        <div className="absolute left-3.5 top-3.5 h-1.5 w-1.5 rounded-full bg-gold-500/70" />
      </div>

      {/* Gold corner accents — top-right */}
      <div className="pointer-events-none absolute right-0 top-0 h-20 w-20">
        <div className="absolute right-4 top-0 h-10 w-px bg-linear-to-b from-gold-500/80 to-transparent" />
        <div className="absolute right-0 top-4 h-px w-10 bg-linear-to-l from-gold-500/80 to-transparent" />
        <div className="absolute right-3.5 top-3.5 h-1.5 w-1.5 rounded-full bg-gold-500/70" />
      </div>

      {/* Gold corner accents — bottom-left */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-20">
        <div className="absolute bottom-0 left-4 h-10 w-px bg-linear-to-t from-gold-500/80 to-transparent" />
        <div className="absolute bottom-4 left-0 h-px w-10 bg-gradient-to-r from-gold-500/80 to-transparent" />
        <div className="absolute bottom-3.5 left-3.5 h-1.5 w-1.5 rounded-full bg-gold-500/70" />
      </div>

      {/* Gold corner accents — bottom-right */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-20">
        <div className="absolute bottom-0 right-4 h-10 w-px bg-linear-to-t from-gold-500/80 to-transparent" />
        <div className="absolute bottom-4 right-0 h-px w-10 bg-linear-to-l from-gold-500/80 to-transparent" />
        <div className="absolute bottom-3.5 right-3.5 h-1.5 w-1.5 rounded-full bg-gold-500/70" />
      </div>

      {/* Subtle horizontal gold rule lines */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold-500/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-gold-500/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-5 px-6 text-center">
        {/* Eyebrow */}
        <p className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-accent-brand">
          Join Us for an Unforgettable Night
        </p>

        {/* Heading */}
        <h2 className="font-heading text-[clamp(26px,4vw,46px)] font-extrabold leading-[1.1] tracking-tight text-foreground">
          Ready to Celebrate Excellence?
        </h2>

        {/* Body */}
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Secure your spot at the most prestigious aviation awards in Abuja.
          <br />
          Let&apos;s honor excellence and shape the future together.
        </p>

        {/* CTA button — filled gold */}
        <a
          href="#tickets"
          className="mt-2 inline-flex items-center gap-3 rounded-md bg-gradient-to-r from-gold-500 to-gold-600 px-7 py-3 text-[13px] font-bold tracking-wide text-brand-950 no-underline shadow-[0_0_32px_oklch(0.72_0.16_82_/_0.35)] transition-all duration-200 hover:from-gold-400 hover:to-gold-500 hover:shadow-[0_0_44px_oklch(0.72_0.16_82_/_0.5)]"
        >
          Get Your Ticket Now
          <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
        </a>
      </div>
    </section>
  );
}
