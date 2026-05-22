import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function AboutHeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-105 md:min-h-120 flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg/hero-bg.png"
          alt="Aviation background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay gradient — left-heavy to keep text legible */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0a1628]/95 via-[#0a1628]/75 to-[#0a1628]/20" />
        {/* Subtle bottom vignette */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0a1628]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-20">
        <div className="max-w-xl">
          {/* Label */}
          <h3 className="mb-5 text-sm tracking-[0.18em] uppercase font-bold text-gold-500">
            About AAEA
          </h3>

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[52px] leading-none font-bold text-white mb-3 tracking-tight">
            Celebrating Excellence.
          </h1>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[52px] leading-none font-bold text-gold-500 mb-6 tracking-tight">
            Elevating Aviation.
          </h2>

          {/* Body */}
          <p className="text-white/70 text-[15px] leading-relaxed mb-8 max-w-lg">
            The Abuja Aviation Excellence Awards (AAEA) is a prestigious
            platform dedicated to recognizing innovation, outstanding
            performance, and leadership in the aviation industry. We honor those
            shaping the future of aviation and driving progress across the
            sector.
          </p>

          {/* CTA Button */}
          <Button className="group gap-2 rounded-lg bg-transparent border border-gold-500/40 text-gold-500 text-[13px] tracking-wide uppercase font-semibold px-6 py-5 hover:bg-gold-500 hover:text-white transition-all duration-300">
            Join Us in Celebrating Excellence
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
