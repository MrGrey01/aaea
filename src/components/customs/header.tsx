"use client";

import { useState } from "react";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <div className="w-10 h-10 bg-linear-to-br from-accent to-accent/50 rounded-lg flex items-center justify-center">
            <span className="text-foreground font-bold text-lg">✈</span>
          </div>
          <span className="text-xl font-bold text-foreground">AAEA</span> */}
          <Image
            src="/assets/logo.png"
            alt="AAEA Logo"
            width={100}
            height={100}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="#awards"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Nominees
          </a>
          <a
            href="#awards"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Updates
          </a>
          <a
            href="#contact"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2 text-foreground/70 hover:text-foreground transition-colors">
            Sign In
          </button>
          <button className="px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium">
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-4">
            <a
              href="#features"
              className="block text-foreground/70 hover:text-foreground"
            >
              About
            </a>
            <a
              href="#awards"
              className="block text-foreground/70 hover:text-foreground"
            >
              Awards
            </a>
            <a
              href="#contact"
              className="block text-foreground/70 hover:text-foreground"
            >
              Contact
            </a>
            <button className="w-full px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium">
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
