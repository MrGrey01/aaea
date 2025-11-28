"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "../customs/section-heading";
import { CardOne } from "../customs/card-one";
import { Button } from "../ui/button";
import {
  Globe,
  Trophy,
  ArrowRight,
  ChevronRight,
  Users,
  Plane,
  Award,
} from "lucide-react";

export const AwardCategories = () => {
  const containerRef = useRef<HTMLElement>(null);

  // 1. Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Trigger when section enters/leaves view
  });

  // 2. Map scroll progress to Y-axis movement (The Parallax Effect)
  // Moving from -15% to 15% creates a "slow" background movement effect
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      ref={containerRef}
      className="py-24 relative overflow-hidden"
      id="categories"
    >
      {/* --- Parallax Background Wrapper --- */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 h-[120%] -top-[10%] w-full"
      >
        <Image
          src="/assets/stage.png"
          alt="aaea stage backdrop"
          fill
          className="object-cover"
          priority // Optional: Use if this is near the top of the page
        />
        {/* Dark Gradient Overlay: Essential for text readability on complex backgrounds */}
        <div className="absolute inset-0 bg-linear-to-b from-background/90 via-background/80 to-background/90" />
      </motion.div>

      {/* --- Content (z-10 ensures it sits on top) --- */}
      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        <SectionHeading
          title="Award Categories"
          subtitle="Recognizing achievements across safety, innovation, sustainability, and service."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {/* Flagship Award - Spans 2 cols on large screens */}
          <CardOne
            className="md:col-span-2 relative overflow-hidden"
            highlight={true}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Trophy size={120} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-[#F5C76A]/20 text-[#F5C76A]">
                  <Trophy size={24} />
                </div>
                <span className="text-[#F5C76A] font-bold tracking-widest text-xs uppercase">
                  Flagship Award
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Airline of the Year
              </h3>
              <p className="text-gray-400 mb-6 max-w-lg">
                Awarded to the airline that demonstrates exceptional operational
                excellence, customer service, and innovation over the past 12
                months.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[#38E0FF] hover:text-white transition-colors group/link"
              >
                View Criteria{" "}
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover/link:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </CardOne>

          {/* Standard Categories */}
          {[
            {
              icon: Globe,
              title: "Best International Route",
              desc: "Excellence in long-haul connectivity.",
            },
            {
              icon: Users,
              title: "Customer Experience",
              desc: "Best-in-class passenger satisfaction.",
            },
            {
              icon: Plane,
              title: "Sustainable Innovation",
              desc: "Breakthroughs in green aviation.",
            },
            {
              icon: Award,
              title: "Airport of the Year",
              desc: "Operational efficiency and comfort.",
            },
          ].map((cat, idx) => (
            <CardOne key={idx} className="flex flex-col justify-between">
              <div>
                <div className="mb-4 text-[#38E0FF]">
                  <cat.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{cat.desc}</p>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-white/60 hover:text-[#F5C76A] flex items-center mt-auto"
              >
                Details <ChevronRight size={14} className="ml-1" />
              </a>
            </CardOne>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline">View All 24 Categories</Button>
        </div>
      </div>
    </section>
  );
};
