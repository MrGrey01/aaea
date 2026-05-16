"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3, MapPin, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-950 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg/hero-bg.png"
          alt="Aircraft landing"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.96)_0%,rgba(2,6,23,0.82)_38%,rgba(2,6,23,0.58)_58%,rgba(2,6,23,0.88)_100%)]" />

        {/* Bottom glow */}
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-linear-to-t from-brand-950 via-brand-950/80 to-transparent" />

        {/* Radial light */}
        <div className="absolute left-1/2 top-[42%] h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl" />
      </div>

      {/* Decorative lines */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gold-500/40" />

      <div className="container relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 pb-16 lg:px-8">
        <div className="grid w-full gap-14 lg:grid-cols-[1.1fr_0.72fr] lg:items-end">
          {/* LEFT CONTENT */}
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-8 inline-flex items-center gap-3">
              {/* <div className="h-px w-14 bg-gold-500" /> */}

              <p className="text-sm font-bold uppercase tracking-[0.28em] text-gold-400">
                Recognizing Excellence. <br />
                Elevating Aviation.
              </p>
            </div>

            {/* Heading */}
            <div className="space-y-1">
              <h1 className="font-heading text-[5.3rem] font-black uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-[10.7rem]">
                AAEA
              </h1>

              <div className="space-y-0">
                <h2 className="font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tighter text-white md:text-[3.7rem]">
                  Abuja Aviation
                </h2>

                <h2 className="font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tighter text-gold-500 md:text-[3.7rem]">
                  Excellence Awards
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="mt-8 max-w-xl text-base leading-8 text-white/72 md:text-lg">
              Celebrating innovation, excellence, and leadership in the aviation
              industry. Join us for an unforgettable evening of recognition and
              networking.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="#"
                className="group inline-flex h-14 items-center justify-center rounded-xl bg-gold-500 px-8 text-sm font-semibold text-brand-950 transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_0_40px_rgba(255,196,0,0.35)]"
              >
                Buy Tickets
              </Link>

              <Link
                href="#"
                className="group inline-flex h-14 items-center gap-5 rounded-xl border border-white/15 bg-white/3 px-5 pr-3 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/6"
              >
                <span>Learn More</span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/50 bg-gold-500/10 text-gold-400 transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT INFO CARD */}
          <div className="flex justify-end">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-black/25 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
              {/* Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,196,0,0.12),transparent_45%)]" />

              {/* Content */}
              <div className="relative space-y-8">
                {/* Date */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-500/12 text-gold-400 ring-1 ring-gold-500/20">
                    <CalendarDays className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-gold-400">
                      Date
                    </p>

                    <p className="text-sm font-medium text-white/90">
                      21st September, 2025
                    </p>
                  </div>
                </div>

                {/* Venue */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-500/12 text-gold-400 ring-1 ring-gold-500/20">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-gold-400">
                      Venue
                    </p>

                    <p className="max-w-65 text-sm leading-6 text-white/90">
                      Nigerian Air Force Conference Centre, Abuja
                    </p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-500/12 text-gold-400 ring-1 ring-gold-500/20">
                    <Clock3 className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-gold-400">
                      Time
                    </p>

                    <p className="text-sm font-medium text-white/90">
                      6:00 PM (WAT)
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom reflection */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-gold-500/4 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
