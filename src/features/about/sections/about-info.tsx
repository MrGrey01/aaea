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
        <div className="max-w-lg">
          {/* Label */}
          <Badge
            variant="outline"
            className="mb-5 text-[11px] tracking-[0.18em] uppercase font-semibold border-white/25 text-white/70 bg-white/5 backdrop-blur-sm px-3 py-1 rounded-sm"
          >
            About AAEA
          </Badge>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[52px] leading-[1.08] font-bold text-white mb-3 tracking-tight">
            Celebrating Excellence.
          </h1>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[52px] leading-[1.08] font-bold text-[#C9922A] mb-6 tracking-tight italic">
            Elevating Aviation.
          </h2>

          {/* Body */}
          <p className="text-white/70 text-[15px] leading-relaxed mb-8 max-w-105">
            The Abuja Aviation Excellence Awards (AAEA) is a prestigious
            platform dedicated to recognizing innovation, outstanding
            performance, and leadership in the aviation industry. We honor those
            shaping the future of aviation and driving progress across the
            sector.
          </p>

          {/* CTA Button */}
          <Button className="group gap-2 rounded-none bg-transparent border border-white/40 text-white text-[13px] tracking-wide uppercase font-semibold px-6 py-5 hover:bg-white hover:text-[#0a1628] transition-all duration-300">
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
