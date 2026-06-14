import { ReactLenis } from "lenis/react";
import { PageHero } from "@/components/shared/page-hero";
import { ImageCTA } from "@/components/shared/image-cta";
import { FAQSection } from "@/features/landing/sections/faq-section";
import LatestInsights from "@/features/landing/sections/insights-section";
import { ExpertiseSection } from "@/features/about/sections/expertise-section";
import { PublicationSection } from "@/features/about/sections/publication";
import { WhyUs } from "@/features/about/sections/why-us";
import { client } from "@/lib/orpc";
import OurStory from "../sections/our-story";
import AboutHeroSection from "../sections/about-info";
import { MissionSection } from "../sections/mission";

export default async function AboutPage() {
  // const faqs = await client.faq.list();
  const [
    faqs,
    featuredPosts,
    insightData,
    aboutHeroData,
    aboutMeData,
    aboutCtaData,
  ] = await Promise.all([
    client.faq.list(),
    client.blog.listFeatured(),
    client.sections.getBySlug({ slug: "posts-section" }),
    client.sections.getBySlug({ slug: "about-hero" }),
    client.sections.getBySlug({ slug: "about-me-main" }),
    client.sections.getBySlug({ slug: "home-cta-main" }),
  ]);
  return (
    <ReactLenis root>
      <div className="min-h-screen bg-brand-800 text-white relative overflow-hidden">
        {/* Hero */}
        <PageHero
          title={aboutHeroData?.title || "About Us"}
          imageSrc={aboutHeroData?.image || "/images/bg/hero-bg.png"}
        />
        {/* <ExpertiseSection sectionData={aboutMeData} /> */}
        <PublicationSection sectionData={aboutMeData} />
        <AboutHeroSection />
        <OurStory />
        <MissionSection />
        <WhyUs />
        <FAQSection faqs={faqs} />
        <ImageCTA
          title={aboutCtaData?.title || ""}
          subtitle={aboutCtaData?.subtitle || ""}
          ctaText={aboutCtaData?.ctaText || ""}
          ctaLink={aboutCtaData?.ctaLink || ""}
          className="bg-accent-brand-950"
        />
        <LatestInsights sectionData={insightData} posts={featuredPosts} />
      </div>
    </ReactLenis>
  );
}
