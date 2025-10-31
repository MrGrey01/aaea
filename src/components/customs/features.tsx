"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: "🏆",
    title: "Prestigious Awards",
    description:
      "Recognizing outstanding achievements and contributions to the aviation industry.",
  },
  {
    icon: "👥",
    title: "Industry Leaders",
    description:
      "Connect with top executives, innovators, and decision-makers in aviation.",
  },
  {
    icon: "⚡",
    title: "Innovation Showcase",
    description:
      "Discover cutting-edge technologies and solutions shaping the future of aviation.",
  },
  {
    icon: "🌍",
    title: "Global Network",
    description:
      "Build meaningful connections with aviation professionals from around the world.",
  },
];

export function Features() {
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
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Why Attend AAEA?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Experience the premier aviation awards event with unparalleled
            networking and recognition opportunities.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const isVisible = visibleItems.includes(index);

            return (
              <div
                key={index}
                data-index={index}
                className={`p-8 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-500 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
