import { Header } from "@/components/customs/header";
import { Hero } from "@/components/customs/hero";

import { HeroTwo } from "@/components/sections/hero2";
import { MetricBar } from "@/components/sections/metric-bar";
import { AwardCategories } from "@/components/sections/award-categories";
import { Judges } from "@/components/sections/judges";
import { HallOfFame } from "@/components/sections/hall-of-fame";

import { Features } from "@/components/customs/features";
// import { Awards } from "@/components/customs/awards";
// import { ArtSection } from "@/components/customs/art-section";
import { SponsorshipBanner } from "@/components/customs/sponsorship-banner";
import { CTA } from "@/components/customs/cta";
// import { Footer } from "@/components/customs/footer";
import { FooterOne } from "@/components/sections/footer-one";

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
