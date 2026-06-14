"use client";

import Image from "next/image";
import {
  Play,
  Trophy,
  Star,
  Mic2,
  Music2,
  Users,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

const galleryItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop",
    title: "Main Award Stage",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop",
    title: "AAEA Trophy",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop",
    title: "Event Hall",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop",
    title: "Red Carpet",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1600&auto=format&fit=crop",
    title: "Speaker Session",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1600&auto=format&fit=crop",
    title: "Live Performance",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1600&auto=format&fit=crop",
    title: "Guests",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop",
    title: "Audience",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1600&auto=format&fit=crop",
    title: "Dinner Setup",
  },
];

const filters = [
  {
    label: "All",
    icon: Star,
  },
  {
    label: "Award Ceremony",
    icon: Trophy,
  },
  {
    label: "Red Carpet",
    icon: Star,
  },
  {
    label: "Speakers",
    icon: Mic2,
  },
  {
    label: "Performances",
    icon: Music2,
  },
  {
    label: "Guests",
    icon: Users,
  },
];

export default function GalleryView() {
  return (
    <main className="min-h-screen bg-[#020B24] text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0D2D75,transparent_40%)] pointer-events-none" />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-yellow-500/10">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/bg/hero-bg.png"
            alt="AAEA"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#04143B]/75" />
        <div className="absolute inset-0 bg-linear-to-b from-[#04143B]/30 via-[#04143B]/70 to-[#020B24]" />

        {/* Trophy Decoration */}
        <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 lg:block">
          <div className="relative h-full min-h-105 w-[320px] opacity-90">
            <Image
              src="/images/plaque.png"
              alt="Trophy"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Airport Decoration */}
        {/* <div className="absolute right-0 bottom-0 hidden h-[260px] w-[520px] opacity-40 lg:block">
          <Image
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1400&auto=format&fit=crop"
            alt="Airport"
            fill
            className="object-cover"
          />
        </div> */}

        {/* Content */}
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-yellow-400">
            Gallery
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Moments of Excellence
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
            Relive the unforgettable moments from past editions of the Abuja
            Aviation Excellence Awards — celebrating innovation, leadership, and
            excellence across the aviation industry.
          </p>

          {/* Decorative Line */}
          <div className="mt-10 flex items-center gap-5">
            <div className="h-px w-24 bg-yellow-500/40" />
            <div className="text-yellow-400">✈</div>
            <div className="h-px w-24 bg-yellow-500/40" />
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-t border-yellow-500/10 bg-brand-700/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-6 py-3">
          {filters.map((filter, index) => {
            const Icon = filter.icon;

            return (
              <button
                key={filter.label}
                className={cn(
                  "flex items-center gap-3 rounded-xl border px-6 py-3 text-sm font-medium transition border-white/10 bg-white/5 text-white hover:border-gold-400/30 hover:bg-white/10",
                  index === 0
                    ? "border-gold-400 bg-linear-to-r from-gold-400 to-gold-600 text-black"
                    : "",
                )}
              >
                <Icon className="h-4 w-4" />
                {filter.label}
              </button>
            );
          })}

          <button className="ml-auto flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-white hover:border-yellow-400/30">
            2026 Edition
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="">
        <div className="mx-auto px-24">
          <div className="grid auto-rows-[220px] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {/* Gallery Images */}
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl border border-yellow-500/10`}
              >
                <Image
                  src={item.image}
                  alt="Gallery"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020B24]/90 via-transparent to-transparent" />

                <div className="absolute inset-0 border border-yellow-400/0 transition group-hover:border-yellow-400/40" />
              </div>
            ))}

            {/* Video Card (same masonry size) */}
            <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-[#071C52] to-[#020B24]">
              {/* Glow */}
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl" />

              <div className="flex h-full flex-col justify-center p-10">
                <button className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-yellow-400/30 bg-yellow-500/10 transition hover:scale-110">
                  <Play className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                </button>

                <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">
                  Watch Highlight
                </p>

                <h3 className="mt-3 text-3xl font-bold leading-tight">
                  2026 Edition Recap
                </h3>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 flex justify-center">
            <button className="rounded-2xl border border-yellow-400/30 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 px-10 py-4 text-lg font-semibold text-yellow-300 transition hover:border-yellow-400 hover:bg-yellow-400/10">
              View More Photos
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
