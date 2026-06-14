import { client } from "@/lib/orpc";
import { fetchSections } from "@/lib/sections/fetch-sections";
import { HeroSection } from "../sections/hero-main";
import { WhyAttendSection } from "../sections/why-attend";
import { HallOfFame } from "@/features/landing/sections/hall-of-fame";
import { CTA } from "@/features/landing/sections/cta";
import { CTASection } from "@/features/landing/sections/cta-section";
import { ImageCTA } from "@/components/shared/image-cta";

import { About } from "../components/new/about";
import { AwardCategories } from "../components/new/award-categories";
import { WhyAttend } from "../components/new/why-attend";
import { EventHighlights } from "../components/new/event-highlights";
import { FeaturedSpeakers } from "../components/new/featured-speakers";
import { EventTimeline } from "../components/new/event-timeline";
import { SponsorshipPackages } from "../components/new/sponsorship-packages";
import { PastWinners } from "../components/new/past-winners";
import { TicketShowcase } from "../components/new/ticket-showcase";
import { Gallery } from "../components/new/gallery";
import { Testimonials } from "../components/new/testimonials";
import { FaqSection } from "../components/new/faq-section";
import { CtaBanner } from "../components/new/cta-banner";
import { ShowcaseSection } from "../sections/showcase-section";
import { Features } from "../sections/features";
import LatestInsights from "../sections/insights-section";

export const HomeView = async () => {
  const [
    sections,
    faqs,
    featuredPosts,
    // insightData
  ] = await Promise.all([
    fetchSections(["home-hero", "posts-section"]),
    client.faq.list(),
    client.blog.listFeatured(),
    // client.sections.getBySlug({ slug: "posts-section" }),
  ]);

  return (
    <>
      {/* <ReactLenis root> */}
      <HeroSection />
      <About />
      <AwardCategories />
      <WhyAttend />
      <Features />
      {/* <PastWinners /> */}
      <ShowcaseSection />
      {/* <TicketShowcase /> */}
      {/* <Gallery /> */}
      {/* <Testimonials /> */}
      {/* <FaqSection /> */}
      {/* <CtaBanner /> */}

      {/* <WhyAttendSection /> */}
      {/* <HallOfFame /> */}

      {/* <MapSection /> */}
      {/* <CTA /> */}
      <CTASection />
      <ImageCTA className="bg-brand-800" />
      <LatestInsights
        sectionData={sections["posts-section"]}
        posts={featuredPosts}
      />
      {/* <LatestInsights sectionData={insightData} posts={featuredPosts} /> */}

      {/* </ReactLenis> */}
    </>
  );
};
