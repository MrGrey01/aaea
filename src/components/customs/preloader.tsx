"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after page loads
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Animated loading circle */}
      <div className="relative w-32 h-32">
        {/* Outer rotating circle */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin" />

        {/* Middle rotating circle (slower) */}
        <div
          className="absolute inset-2 rounded-full border-4 border-transparent border-b-accent animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "3s" }}
        />

        {/* Plane icon in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl animate-pulse">✈️</span>
        </div>
      </div>
    </div>
  );
}
