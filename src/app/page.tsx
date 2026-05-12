import { Header } from "@/components/customs/header";
import { Hero } from "@/features/landing/sections/hero";

import { HeroTwo } from "@/features/landing/sections/hero2";
import { MetricBar } from "@/features/landing/sections/metric-bar";
import { AwardCategories } from "@/features/landing/sections/award-categories";
import { Judges } from "@/features/landing/sections/judges";
import { HallOfFame } from "@/features/landing/sections/hall-of-fame";

import { Features } from "@/features/landing/sections/features";
import { SponsorshipBanner } from "@/features/landing/sections/sponsorship-banner";
import { CTA } from "@/features/landing/sections/cta";
import { FooterOne } from "@/features/landing/sections/footer-one";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050814] text-[#F5F7FA] font-sans selection:bg-[#38E0FF] selection:text-[#050814] xbg-background dark">
      <Header />
      {/* --- Hero Section --- */}
      <Hero />
      <HeroTwo />
      {/* --- Metrics Bar --- */}
      <MetricBar />
      {/* --- Categories Section --- */}
      <AwardCategories />
      {/* --- Timeline Section --- */}

      {/* --- Judges / Credibility --- */}
      <Judges />

      {/* --- Past Winners --- */}
      <HallOfFame />

      {/* --- Newsletter --- */}
      <Features />
      {/* <Awards /> */}
      {/* <ArtSection /> */}
      <SponsorshipBanner />
      <CTA />
      {/* <Footer /> */}
      <FooterOne />
    </main>
  );
}
