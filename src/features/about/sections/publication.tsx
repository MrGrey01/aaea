"use client";

import AnimatedButton from "@/components/shared/animated-button";
import { SectionBadge } from "@/components/shared/section-badge";
import ParallaxImage from "@/components/shared/parallax-image";
import { SectionWithItems } from "@/lib/db/schema";
import Link from "next/link";
import Image from "next/image";

const ExpertIcon = () => {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <rect
        x="1.5"
        y="1.5"
        width="10"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M4 6.5h5M4 4.5h3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

interface ExpertiseSectionProps {
  sectionData: SectionWithItems | null;
}

const sectionDescription =
  "Our mission is to recognize, honor, and inspire individuals and organizations who demonstrate outstanding professionalism, service quality, and innovation in Nigeria’s aviation ecosystem. AAEA seeks to foster a culture of excellence, strengthen industry collaboration, and enhance public confidence in the aviation sector through credible recognition and engagement";

export function PublicationSection({ sectionData }: ExpertiseSectionProps) {
  return (
    <section className="w-full px-6 py-12 md:px-12 md:py-16 bg-brand">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* ── Left: Image ── */}
        <div className="w-full md:w-[54%] shrink-0 relative">
          <div className="relative aspect-4/5 rounded-2xl overflow-hidden">
            {/* <ParallaxImage
              src={sectionData?.image || "/images/gallery/book-front.jpeg"}
              scale={0.9}
              alt="Portrait"
              className="object-cover object-center"
            /> */}
            <Image
              src="/images/gallery/book-front.jpeg"
              fill
              alt="Portrait"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* ── Right: Content ── */}
        <div className="flex-1 flex flex-col items-start">
          {/* Pill badge */}
          <SectionBadge
            label="press"
            className="w-fit text-xs font-medium mb-3 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border text-accent-brand"
            icon={<ExpertIcon />}
          />

          {/* Heading */}
          <h2 className="text-[clamp(34px,4.5vw,54px)] font-black text-accent-brand-200 leading-[1.1] tracking-none mb-5 font-display">
            {"Publication"}
          </h2>

          {/* Subheading */}
          <p className="text-[15px] font-semibold text-accent-brand-100 mb-3">
            {"Airport Operation & Passenger Experience Handbook"}
          </p>

          {/* Body */}
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm mb-8">
            {sectionData?.description || sectionDescription}
          </p>

          {/* CTA row */}
          <div className="flex items-center gap-6 flex-wrap">
            {/* Reusable animated button */}
            <Link href={sectionData?.ctaLink || "/gallery"}>
              <AnimatedButton label={sectionData?.ctaText || "View Gallery"} />
            </Link>

            {/* Stars + rating */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-0.5 text-accent-brand-500">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="currentColor"
                  >
                    <path d="M9 1.5l2.09 4.26 4.7.68-3.4 3.31.8 4.69L9 12.02l-4.19 2.42.8-4.69-3.4-3.31 4.7-.68L9 1.5z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-500 font-medium">
                299+ People Rated
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
