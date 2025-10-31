import { Header } from "@/components/customs/header";
import { Hero } from "@/components/customs/hero";
import { Features } from "@/components/customs/features";
import { Awards } from "@/components/customs/awards";
import { SponsorshipBanner } from "@/components/customs/sponsorship-banner";
import { CTA } from "@/components/customs/cta";
import { Footer } from "@/components/customs/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background dark">
      <Header />
      <Hero />
      <Features />
      <Awards />
      <SponsorshipBanner />
      <CTA />
      <Footer />
    </main>
  );
}
