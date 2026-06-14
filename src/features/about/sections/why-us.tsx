import { ArrowRight, Star, Users, Lightbulb, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const reasons = [
  {
    icon: Star,
    title: "Prestige & Recognition",
    body: "Celebrate outstanding achievements and industry leadership.",
  },
  {
    icon: Users,
    title: "Networking Opportunities",
    body: "Connect with key decision-makers and industry professionals.",
  },
  {
    icon: Lightbulb,
    title: "Inspiration & Innovation",
    body: "Be inspired by stories that drive the future of aviation.",
  },
  {
    icon: TrendingUp,
    title: "Industry Advancement",
    body: "Support a thriving, sustainable, and innovative aviation sector.",
  },
];

export function WhyUs() {
  return (
    <div className="w-full font-sans">
      {/* ═══════════════════════════════════════════
          TOP BAND — Why AAEA + feature cards
      ═══════════════════════════════════════════ */}
      <section className="relative w-full bg-brand-700 overflow-hidden">
        {/* Decorative airplane silhouette — top right */}
        <div className="absolute top-4 right-8 opacity-20 pointer-events-none select-none">
          <svg
            width="90"
            height="40"
            viewBox="0 0 90 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 20 L60 4 L88 20 L60 36 Z"
              stroke="#C9922A"
              strokeWidth="1.2"
              fill="none"
            />
            <path d="M30 20 L60 4" stroke="#C9922A" strokeWidth="0.8" />
            <path
              d="M50 12 L65 8 L60 20"
              stroke="#C9922A"
              strokeWidth="0.8"
              fill="none"
            />
          </svg>
        </div>

        {/* Diagonal gold accent lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, transparent, transparent 120px, rgba(201,146,42,0.03) 120px, rgba(201,146,42,0.03) 121px)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* LEFT: text block */}
          <div className="shrink-0 lg:w-70 xl:w-75">
            <p className="text-gold-500 text-[11px] font-bold tracking-[0.22em] uppercase mb-4">
              Why AAEA?
            </p>
            <h2 className="font-heading text-[28px] md:text-[32px] font-bold text-white leading-[1.15] mb-5">
              More Than an
              <br />
              Awards Event
            </h2>
            <p className="text-white/55 text-[13.5px] leading-relaxed mb-8">
              AAEA is a movement that connects, celebrates, and empowers the
              aviation community. Be part of a legacy that recognizes excellence
              and fuels the future of aviation in Africa and beyond.
            </p>

            <Button
              // variant="outline"
              size="lg"
              className="group gap-2 rounded-lg border border-gold-500/30 bg-transparent text-white text-[12px] tracking-widest uppercase font-semibold px-5 py-5  hover:bg-white hover:text-gold-500 transition-all duration-300"
            >
              View Award Categories
              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </div>

          {/* RIGHT: feature cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {reasons.map(({ icon: Icon, title, body }, i) => (
              <div
                key={i}
                className="group relative flex flex-col gap-4 rounded-xl border border-white/10 bg-white/3 p-5 hover:border-gold-500/40 hover:bg-gold-500/4 transition-all duration-300"
              >
                {/* Icon circle */}
                <div className="w-11 h-11 rounded-full border border-gold-500/50 bg-gold-500/10 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors duration-300">
                  <Icon size={18} className="text-gold-500" strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-[14px] leading-snug">
                  {title}
                </h3>

                {/* Body */}
                <p className="text-white/50 text-sm leading-relaxed mt-auto">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BOTTOM BAND — CTA bar
      ═══════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/photo-1464037866556-6812c9d1c72e.jpg"
            alt=""
            fill
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
          {/* Deep navy overlay */}
          <div className="absolute inset-0 bg-brand-800/88" />
          {/* Left gold diagonal chrome accent */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(105deg, rgba(201,146,42,0.18) 0%, transparent 35%)",
            }}
          />
          {/* Right gold diagonal chrome accent */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(255deg, rgba(201,146,42,0.14) 0%, transparent 35%)",
            }}
          />
          {/* Top gold border line */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-gold-500/80 via-gold-500/30 to-gold-500/80" />
          {/* Bottom gold border line */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-gold-500/80 via-gold-500/30 to-gold-500/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-9 md:py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-heading text-[22px] md:text-[26px] font-bold text-white leading-tight mb-2">
              Let&apos;s Shape the Future of Aviation Together
            </h3>
            <p className="text-white/55 text-[13.5px]">
              Join us in celebrating excellence and elevating aviation to
              greater heights.
            </p>
          </div>

          <Button className="group shrink-0 gap-2 rounded-lg bg-gold-500 hover:bg-gold-600 text-brand-950 font-bold text-[12px] tracking-widest uppercase px-7 py-5 transition-all duration-300">
            Get Your Ticket Now
            <ArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>
        </div>
      </section>
    </div>
  );
}
