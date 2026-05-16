import { client } from "@/lib/orpc";
import { fetchSections } from "@/lib/sections/fetch-sections";
import { HeroSection } from "../sections/hero-main";
import { WhyAttendSection } from "../sections/why-attend";
import { HallOfFame } from "@/features/landing/sections/hall-of-fame";
import { CTA } from "@/features/landing/sections/cta";
import { CTASection } from "@/features/landing/sections/cta-section";
import { ImageCTA } from "@/components/shared/image-cta";

export const HomeView = async () => {
  // const [sections, featuredPosts] = await Promise.all([
  //   fetchSections([
  //     "home-hero",
  //     "home-carousel",
  //     "difference-section",
  //     "difference-section-gallery",
  //     "posts-section",
  //   ]),
  //   client.blog.listFeatured(),
  // ]);

  return (
    <>
      {/* <ReactLenis root> */}

      <HeroSection />
      <WhyAttendSection />
      <HallOfFame />

      {/* <MapSection /> */}
      <CTA />
      <CTASection />
      <ImageCTA className="bg-brand-800" />

      {/* </ReactLenis> */}
    </>
  );
};
