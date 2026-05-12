"use client";

import { useEffect, useState } from "react";
import LightRays from "@/components/customs/light-rays";
import { Button } from "@/components/ui/button";

export function CTA() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="contact"
      className="relative flex items-center justify-center bg-background overflow-hidden py-24 px-6"
    >
      <div
        className="h-[70vh] w-full absolute top-0 left-0 right-0 overflow-hidden"
        style={{
          width: "100%",
          // height: "600px",
          position: "absolute",
        }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#8D9EFF"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <div className="max-w-4xl mx-auto">
        <div
          className={`relative rounded-2xl border border-secondary/30 bg-linear-to-br from-secondary/10 to-secondary/5 p-12 sm:p-16 text-center overflow-hidden transition-all duration-1000 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
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
              <Button className="bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-accent/30 transform hover:scale-105">
                Register Today
              </Button>
              <Button
                variant="outline"
                className="border border-accent/30 text-foreground rounded-lg hover:bg-accent/5 transition-all duration-300 font-semibold"
              >
                Contact Us
              </Button>
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
