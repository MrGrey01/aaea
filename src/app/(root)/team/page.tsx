import { JsonLd } from "@/components/seo/json-ld";
import TeamView from "@/features/about/views/team-view";
import { buildSEO } from "@/lib/seo/engine";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { metadata } = await buildSEO({
    title: "Team Members | Abuja Aviation Excellence Awards",
    path: "/",
  });

  return metadata;
}

export default async function TeamPage() {
  const { jsonLd } = await buildSEO({
    title: "Team Members | Abuja Aviation Excellence Awards",
    image: `${process.env.NEXT_PUBLIC_BASE_URL}/images/bg/hero-bg.png`,
    path: "/",
  });
  return (
    <>
      <TeamView />
      <JsonLd data={jsonLd} />
    </>
  );
}
