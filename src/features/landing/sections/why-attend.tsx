"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Lightbulb, Network } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Industry Recognition",
    description:
      "Celebrate outstanding achievements across the aviation sector.",
  },
  {
    icon: Network,
    title: "Networking Opportunities",
    description: "Connect with key decision-makers and professionals.",
  },
  {
    icon: Lightbulb,
    title: "Inspiration & Insights",
    description: "Gain insights from leaders driving the industry forward.",
  },
];

const gallery = [
  {
    src: "/images/fallback.jpg",
    className: "col-start-1 row-start-1 h-[250px]",
  },
  {
    src: "/images/fallback.jpg",
    className: "col-start-2 row-span-2 row-start-1 h-[520px]",
  },
  {
    src: "/images/fallback.jpg",
    className: "col-start-3 row-start-1 h-[250px] ",
  },
  {
    src: "/images/fallback.jpg",
    className: "col-start-1 row-start-2 h-[250px] ",
  },
  {
    src: "/images/fallback.jpg",
    className: "col-start-2 row-start-3 h-[220px] ",
  },
  {
    src: "/images/fallback.jpg",
    className: "col-start-3 row-span-2 row-start-2 h-[470px]",
  },
];

export function WhyAttendSection() {
  return (
    <section className="why-section-bg relative overflow-hidden border-t border-gold-500/20 bg-brand-800 py-24 text-white">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,196,0,0.08),transparent_30%)]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-12 bg-gold-500" />

              <span className="text-xs font-bold uppercase tracking-[0.28em] text-gold-400">
                Why Attend AAEA?
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading font-extrabold leading-[1.02] tracking-tight text-foreground text-[clamp(28px,3.5vw,42px)] xlg:text-6xl text-5xl">
              Be Part of Aviation’s Biggest Night
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground">
              AAEA brings together industry leaders, innovators, and
              changemakers to celebrate achievements that are shaping the future
              of aviation.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-7">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title} className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-500/20 bg-gold-500/10 text-gold-400 shadow-[0_0_30px_rgba(255,196,0,0.12)]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-white/60">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-12">
              <Link
                href="#"
                className="group inline-flex items-center gap-4 rounded-xl border border-gold-500/30 bg-gold-500/10 px-7 py-4 text-sm font-semibold text-gold-400 backdrop-blur-xl transition-all duration-300 hover:bg-gold-500 hover:text-brand-950 hover:shadow-[0_0_40px_rgba(255,196,0,0.25)]"
              >
                <span>View Award Categories</span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current/20">
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </div>
          </div>

          {/* <div className="h-full aspect-square absolute right-0 top-0 padding-6"> */}
          <img
            src="/images/about-grid.png"
            alt="Why Attend"
            // fill
            className="object-contain h-full aspect-square absolute right-0 top-0"
          />
          {/* </div> */}

          {/* RIGHT COLLAGE */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Flight path */}
            {/* <div className="absolute -left-22.5 top-1/2 hidden -translate-y-1/2 lg:block">
              <svg
                width="220"
                height="220"
                viewBox="0 0 220 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible"
              >
                <path
                  d="M12 200C55 140 80 110 125 105C170 100 190 50 208 10"
                  stroke="rgba(255,196,0,0.45)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="6 8"
                />

                <g transform="translate(150 80)">
                  <path
                    d="M0 0L22 8L15 13L18 27L11 29L6 17L0 14V0Z"
                    fill="rgba(255,196,0,0.9)"
                  />
                </g>
              </svg>
            </div> */}

            {/* Image Grid */}

            {/* <div className="grid grid-cols-3 grid-rows-3 gap-5">
              {gallery.map((image, index) => (
                <div
                  key={index}
                  className={`group w-52 relative overflow-hidden border border-white/10 bg-white/5 shadow-[0_15px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl rotate-14 rounded-lg ${image.className}`}
                >
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />

                  <div className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-gold-500/10" />
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom border glow */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-gold-500/50 to-transparent" />
    </section>
  );
}
