"use client";

import React, { useState, useEffect } from "react";
import { Plane, Menu, X } from "lucide-react";
import { Button } from "../ui/button";

export const NavOne = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050814]/80 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-[#F5C76A] p-2 rounded-lg text-[#050814]">
            <Plane
              size={24}
              className="group-hover:-rotate-12 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl leading-none tracking-wider text-white">
              AAEA
            </span>
            <span className="text-[10px] uppercase text-gray-400 tracking-widest">
              Abuja Aviation
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Awards", "Categories", "Judges", "History", "About"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-300 hover:text-[#F5C76A] transition-colors"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Button className="hidden md:inline-flex">Submit Entry</Button>
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0C1020] border-b border-white/10 p-6 flex flex-col gap-4 shadow-xl">
          {["Awards", "Categories", "Judges", "History", "About"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-lg font-medium text-gray-300 block py-2 border-b border-white/5"
              >
                {item}
              </a>
            )
          )}
          <Button className="w-full mt-2">Submit Entry</Button>
        </div>
      )}
    </nav>
  );
};
