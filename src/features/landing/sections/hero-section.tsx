import Image from "next/image";
import { GlobeIcon } from "@/components/icons/globe";
import BlockRevealAnime from "@/components/shared/reveal-anime";
import ParallaxImage from "@/components/shared/parallax-image";
import { SectionWithItems } from "@/lib/db/schema";

interface HeroSectionProps {
  /**
   * Path to the hero portrait image.
   * Replace with your actual image path, e.g. "/images/clivelle.jpg"
   */
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  bgImageSrc?: string;
  imageAlt?: string;
  badge?: string;
}

const sectionDesc =
  "Experience the premier aviation awards event with unparalleled networking and recognition opportunities.";

export function HeroSection({
  title = "DIPHACTORY",
  subtitle = sectionDesc,
  imageSrc = "/images/bg/hero-bg.png",
  bgImageSrc = "/images/bg/hero-bg.png",
  imageAlt = "AAEA – digital designer and 3D renderer",
  badge = "©2026",
}: HeroSectionProps) {
  return (
    <section
      className="relative w-screen h-screen overflow-hidden bg-(--color-bg-primary)"
      style={{ minHeight: "100svh" }}
      aria-label="Hero"
    >
      <div className="absolute inset-0 z-5 bg-linear-to-b from-black/72 via-transparent to-black/55" />
      {/* ── Full-bleed portrait ── */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src={bgImageSrc || "/images/bg/hero-bg.png"}
          alt={imageAlt || "AAEA – digital designer and manager"}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 0px"
          className="md:hidden object-cover object-top opacity-80 w-screen h-screen"
          style={{ objectPosition: "50% 15%" }}
        />
        <ParallaxImage
          src={imageSrc}
          alt={imageAlt}
          className="hidden md:block object-cover object-center opacity-80"
          scale={1.3}
        />
        {/* Gradient overlays – left, bottom, right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,12,13,0.72) 0%, transparent 40%, transparent 60%, rgba(10,12,13,0.55) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,12,13,0.92) 0%, rgba(10,12,13,0.45) 35%, transparent 65%)",
          }}
        />
      </div>

      {/* ── Decorative: globe icon (far right, lower) ── */}
      <div
        className="absolute right-5 bottom-36 z-20 hidden lg:flex items-center justify-center"
        aria-hidden="true"
      >
        <GlobeIcon />
      </div>

      {/* ── Bottom content row ── */}
      <div className="relative h-full w-full z-10 flex flex-col items-center justify-center text-center md:items-center md:text-center">
        {/* Copyright line */}
        <p className="px-6 md:px-10 lg:px-14 text-2xl font-medium text-muted-foreground mb-1 md:mb-2">
          {badge}
        </p>

        {/* Large name + bio row */}
        <div className="flex flex-col items-end justify-between px-6 md:px-10 lg:px-14 pb-6 md:pb-10 gap-4">
          {/* Giant headline */}
          <BlockRevealAnime
          // blockColor="#fe0100"
          >
            <h1
              className="font-black uppercase leading-[0.88] tracking-tight text-white select-none"
              style={{
                // fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 8vw, 9rem)",
                lineHeight: 0.88,
              }}
            >
              {title}
              {/* <span className="text-accent-brand">*</span> */}
            </h1>
          </BlockRevealAnime>

          {/* Bio blurb – bottom right */}
          {subtitle && (
            <BlockRevealAnime>
              <p className="hidden md:block max-w-55 lg:max-w-xs text-right text-sm leading-relaxed text-muted-foreground shrink-0 mb-1 lg:mb-2">
                {subtitle}
              </p>
            </BlockRevealAnime>
          )}
        </div>

        {/* Mobile bio */}
        <p className="md:hidden px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
