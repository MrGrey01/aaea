import { JsonLd } from "@/components/seo/json-ld";
import GalleryView from "@/features/landing/views/gallery-view";
import { buildSEO } from "@/lib/seo/engine";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { metadata } = await buildSEO({
    title: "Gallery | Abuja Aviation Excellence Awards",
    path: "/",
  });

  return metadata;
}

export default async function GalleryPage() {
  const { jsonLd } = await buildSEO({
    title: "Gallery | Abuja Aviation Excellence Awards",
    image: `${process.env.NEXT_PUBLIC_BASE_URL}/images/bg/hero-bg.png`,
    path: "/",
  });
  return (
    <>
      <GalleryView />
      <JsonLd data={jsonLd} />
    </>
  );
}
