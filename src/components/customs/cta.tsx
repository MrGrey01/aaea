"use client";

import { useEffect, useState } from "react";

export function CTA() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div
          className={`relative rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 to-accent/5 p-12 sm:p-16 text-center overflow-hidden transition-all duration-1000 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Ready to Celebrate Excellence?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
              Join industry leaders and innovators at the Abuja Aviation
              Excellence Awards. Register now to secure your spot.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-300 font-semibold text-lg hover:shadow-lg hover:shadow-accent/30 transform hover:scale-105">
                Register Today
              </button>
              <button className="px-8 py-4 border border-accent/30 text-foreground rounded-lg hover:bg-accent/5 transition-all duration-300 font-semibold text-lg">
                Contact Us
              </button>
            </div>

            <p className="text-sm text-foreground/50 mt-8">
              Early bird registrations now open. Limited seats available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
