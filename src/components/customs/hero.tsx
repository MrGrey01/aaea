"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
            <span className="text-accent text-sm font-semibold">
              ✈ Excellence in Aviation
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Abuja Aviation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">
              Excellence Awards
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Celebrating innovation, excellence, and leadership in the aviation
            industry. Join us for an unforgettable evening of recognition and
            networking.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-300 font-semibold text-lg hover:shadow-lg hover:shadow-accent/20 transform hover:scale-105">
              Register Now
            </button>
            <button className="px-8 py-4 border border-accent/30 text-foreground rounded-lg hover:bg-accent/5 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>

          {/* Event Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-border/50">
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-accent text-sm font-semibold mb-2">DATE</div>
              <div className="text-foreground text-lg font-semibold">
                Coming Soon
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-accent text-sm font-semibold mb-2">
                LOCATION
              </div>
              <div className="text-foreground text-lg font-semibold">
                Abuja, Nigeria
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-accent text-sm font-semibold mb-2">
                FORMAT
              </div>
              <div className="text-foreground text-lg font-semibold">
                In-Person Event
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
