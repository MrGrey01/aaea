"use client";

import { useEffect, useRef, useState } from "react";

const awards = [
  { title: "Airline of the Year", icon: "✈️" },
  { title: "Innovation Excellence", icon: "🚀" },
  { title: "Safety Leadership", icon: "🛡️" },
  { title: "Customer Service", icon: "⭐" },
  { title: "Sustainability Champion", icon: "🌱" },
  { title: "Emerging Leader", icon: "🌟" },
];

export function Awards() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = ref.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Award Categories
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Celebrating excellence across multiple dimensions of the aviation
            industry.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {awards.map((award, index) => {
            const isVisible = visibleItems.includes(index);

            return (
              <div
                key={index}
                data-index={index}
                className={`group p-8 rounded-xl border border-border/50 bg-background hover:border-accent/50 hover:bg-card/50 transition-all duration-500 transform cursor-pointer ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {award.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {award.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
