import { HeroSection } from "@/features/landing/sections/hero-section";
import { CarouselSection } from "@/features/landing/sections/carousel-section";
import { DifferenceSection } from "@/features/landing/sections/difference-section";
import { ParallaxStickySection } from "@/features/landing/sections/parallax-sticky-section2";
import { ReactLenis } from "lenis/react";
import { ImageCTA } from "@/components/shared/image-cta";
import LatestInsights from "@/features/landing/sections/insights-section";
import { MapSection } from "@/features/landing/sections/map-section";
import { client } from "@/lib/orpc";
import { fetchSections } from "@/lib/sections/fetch-sections";
import { HallOfFame } from "@/features/landing/sections/hall-of-fame";
import { SponsorshipBanner } from "@/features/landing/sections/sponsorship-banner";
import { Hero } from "@/features/landing/sections/hero";
import { Judges } from "@/features/landing/sections/judges";
import { CTA } from "@/features/landing/sections/cta";

export const HomeView = async () => {
  const [sections, featuredPosts] = await Promise.all([
    fetchSections([
      "home-hero",
      "home-carousel",
      "difference-section",
      "difference-section-gallery",
      "posts-section",
    ]),
    client.blog.listFeatured(),
  ]);

  return (
    <>
      <ReactLenis root>
        <div
          className="pointer-events-none fixed inset-0 opacity-[0.03] z-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <HeroSection
          title={sections["home-hero"].title || "AAEA"}
          subtitle={sections["home-hero"].subtitle || ""}
          badge={sections["home-hero"].badge || ""}
          imageSrc={sections["home-hero"].image || "/images/bg/hero-bg.png"}
          bgImageSrc={
            sections["home-hero"].bgImage || "/images/bg/hero-portrait.jpg"
          }
          imageAlt={sections["home-hero"].imageAlt || "DIP Hero background"}
        />
        <ParallaxStickySection
          stickySection={<Hero />}
          overlaySection={
            <CarouselSection sectionData={sections["home-carousel"]} />
          }
          peekAmount="5vh"
        />
        <DifferenceSection
          sectionData={sections["difference-section"]}
          galleryData={sections["difference-section-gallery"]}
        />
        <HallOfFame />
        {/* <Judges /> */}
        <LatestInsights
          sectionData={sections["posts-section"]}
          posts={featuredPosts}
        />
        <ImageCTA className="bg-blue-800" />
        {/* <MapSection /> */}
        <CTA />
        <SponsorshipBanner />
      </ReactLenis>
    </>
  );
};
