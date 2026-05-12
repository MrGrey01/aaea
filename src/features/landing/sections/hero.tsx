"use client";

import { useEffect, useState } from "react";
import Beams from "@/components/customs/beams";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-linear-to-br from-blue-600/10 to-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-blue/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>
      <div
        className="w-full h-screen absolute top-0 left-0 right-0 overflow-hidden"
        style={{
          width: "100%",
          // height: "600px",
          position: "absolute",
          zIndex: 0,
        }}
      >
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={12}
          lightColor="#8D9EFF"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>
      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Highlight Badge */}
          <div className="inline-block mb-6 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full shadow-lg shadow-accent/10">
            <span className="text-accent text-sm font-semibold tracking-wide">
              ✈ Excellence in Aviation
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Abuja Aviation
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-accent to-accent/60 animate-gradient-x">
              Excellence Awards
            </span>
          </h1>
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Celebrating innovation, excellence, and leadership in the aviation
            industry. Join us for an unforgettable evening of recognition and
            networking.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-accent/20 transform hover:scale-[1.04]"
            >
              Register Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border border-accent/30 text-foreground rounded-lg hover:text-accent/50 transition-all duration-300 font-semibold hover:shadow-md transform hover:scale-[1.02]"
            >
              Learn More
            </Button>
          </div>

          {/* Event Info Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 pt-10 border-t border-accent/10">
            {[
              {
                label: "DATE",
                value: "Coming Soon",
                delay: "0.2s",
              },
              {
                label: "LOCATION",
                value: "Abuja, Nigeria",
                delay: "0.4s",
              },
              {
                label: "FORMAT",
                value: "In-Person Event",
                delay: "0.6s",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: item.delay }}
              >
                <div className="text-accent text-sm font-semibold mb-1 tracking-wider">
                  {item.label}
                </div>
                <div className="text-foreground text-xl font-semibold">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
