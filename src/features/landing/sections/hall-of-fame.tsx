/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SectionBorder } from "@/components/icons/section-boder";

/*
  Add these utility classes to your globals.css @layer utilities:

  .scrollbar-hidden {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .scrollbar-hidden::-webkit-scrollbar {
    display: none;
  }

  .hof-card-overlay::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, oklch(0.08 0.03 258 / 0.25) 0%, transparent 60%);
    pointer-events: none;
    border-radius: inherit;
  }
*/

// ─── Types ────────────────────────────────────────────────────────────────────

interface Winner {
  year: string;
  company: string;
  award: string;
  logo: string;
  ringBorder: string;
}

interface NavButtonProps {
  onClick: () => void;
  label: string;
  children: ReactNode;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const winners: Winner[] = [
  {
    year: "2024",
    company: "FlyAir Global",
    award: "Airline of the Year",
    logo: "✈",
    ringBorder: "border-sky-500/30",
  },
  {
    year: "2023",
    company: "EcoSky",
    award: "Sustainability Champion",
    logo: "🌿",
    ringBorder: "border-emerald-500/30",
  },
  {
    year: "2022",
    company: "SafeJet Systems",
    award: "Safety Innovation",
    logo: "🛡",
    ringBorder: "border-orange-500/30",
  },
  {
    year: "2021",
    company: "AeroTech Ltd.",
    award: "Innovation Award",
    logo: "⚙",
    ringBorder: "border-slate-500/30",
  },
  {
    year: "2020",
    company: "SkyBridge Air",
    award: "Route of the Year",
    logo: "🌐",
    ringBorder: "border-blue-500/30",
  },
  {
    year: "2019",
    company: "PilotEdge",
    award: "Training Excellence",
    logo: "🎓",
    ringBorder: "border-gold-500/30",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function NavButton({ onClick, label, children }: NavButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-300/30 bg-brand-800/60 text-foreground backdrop-blur-sm transition-all duration-200 hover:border-gold-500/50 hover:bg-brand-700/80 hover:text-accent-brand"
    >
      {children}
    </button>
  );
}

function WinnerCard({ year, company, award, logo, ringBorder }: Winner) {
  return (
    <div className="group hof-card-overlay relative flex w-55 shrink-0 cursor-default select-none flex-col items-center gap-3 rounded-xl border border-brand-300/40 bg-linear-to-br from-brand-700/90 to-brand-900/95 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/45 hover:shadow-[0_0_28px_oklch(0.72_0.16_82/0.1)]">
      <div
        className={cn(
          "flex h-18 w-18 items-center justify-center rounded-full border bg-linear-to-br from-brand-600 to-brand-900 text-3xl",
          ringBorder,
        )}
      >
        <span role="img" aria-label={company}>
          {logo}
        </span>
      </div>

      <span className="text-xs font-semibold tracking-widest text-muted-foreground">
        {year}
      </span>

      <p className="text-center text-[15px] font-bold leading-tight text-foreground">
        {company}
      </p>

      <p className="text-center text-[10px] font-bold uppercase tracking-[0.15em] text-accent-brand">
        {award}
      </p>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function HallOfFame() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1): void => {
    carouselRef.current?.scrollBy({ left: dir * 240, behavior: "smooth" });
  };

  return (
    <section className="relative w-full overflow-hidden border-y border-gold-500/30 bg-brand-950 bg-[radial-gradient(ellipse_70%_80%_at_50%_50%,oklch(0.18_0.06_258/0.9),transparent_70%)] px-6 py-20">
      {/* Trophy watermark */}

      <div className="pointer-events-none absolute -left-10 top-1/2 h-95 w-85 -translate-y-1/2 select-none  opacity-10">
        <img
          src="/images/plaque.png"
          alt="Hall of Fame Plaque"
          // fill
          className="object-contain"
        />
      </div>

      <SectionBorder
        className="pointer-events-none absolute bottom-0 left-0"
        color="#f5a73b"
      />
      <SectionBorder
        className="pointer-events-none absolute bottom-0 right-0 transform: scale-x-[-1]"
        color="#f5a73b"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-300 flex-col items-center gap-10">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-accent-brand">
            Hall of Fame
          </p>
          <h2 className="font-heading text-[clamp(28px,4vw,48px)] font-extrabold leading-[1.1] tracking-tight text-foreground">
            Celebrating Aviation
            <br />
            Excellence
          </h2>
        </div>

        {/* Carousel */}
        <div className="flex w-full items-center gap-4">
          <NavButton onClick={() => scroll(-1)} label="Previous winners">
            <ChevronLeft className="h-5 w-5" strokeWidth={1.8} />
          </NavButton>

          <div
            ref={carouselRef}
            className="scrollbar-hidden flex flex-1 py-4 gap-4 overflow-x-auto scroll-smooth"
          >
            {winners.map((winner) => (
              <WinnerCard
                key={`${winner.year}-${winner.company}`}
                {...winner}
              />
            ))}
          </div>

          <NavButton onClick={() => scroll(1)} label="Next winners">
            <ChevronRight className="h-5 w-5" strokeWidth={1.8} />
          </NavButton>
        </div>

        {/* CTA */}
        <a
          href="#past-winners"
          className="inline-flex items-center gap-2.5 rounded-md border border-gold-500/70 bg-transparent px-6 py-2.5 text-[13px] font-semibold tracking-wide text-accent-brand no-underline transition-all duration-200 hover:border-gold-500 hover:bg-gold-500/10 hover:shadow-[0_0_24px_oklch(0.72_0.16_82_/_0.25)]"
        >
          View All Past Winners
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
        </a>
      </div>
    </section>
  );
}
