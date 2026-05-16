import { JsonLd } from "@/components/seo/json-ld";
import AboutView from "@/features/about/views/about-view";
import { buildSEO } from "@/lib/seo/engine";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { metadata } = await buildSEO({
    title: "Team Members | Abuja Aviation Excellence Awards",
    path: "/",
  });

  return metadata;
}

export default async function AboutPage() {
  const { jsonLd } = await buildSEO({
    title: "Team Members | Abuja Aviation Excellence Awards",
    image: `${process.env.NEXT_PUBLIC_BASE_URL}/images/bg/hero-bg.png`,
    path: "/",
  });
  return (
    <>
      <AboutView />
      <JsonLd data={jsonLd} />
    </>
  );
}
