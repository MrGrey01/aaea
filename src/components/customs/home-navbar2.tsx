"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/customs/resizable-navbar";
import { useState } from "react";

// import { ModeToggle } from "./theme-toggle";
// import { AuthButton } from "@/modules/auth/ui/components/auth-button";
import Link from "next/link";

export const HomeNavbar = () => {
  const navItems = [
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "Demos",
      link: "/menu-demo",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Docs",
      link: "/documentation",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4 z-50">
          {/* <ModeToggle />
          <AuthButton /> */}
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </Link>
          ))}
          <div className="flex w-full flex-col gap-4 z-50">
            {/* <ModeToggle />
            <AuthButton /> */}
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};
