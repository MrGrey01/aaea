import ContactView from "@/features/contact/views/contact-view";
import type { Metadata } from "next";
import { buildSEO } from "@/lib/seo/engine";
import { JsonLd } from "@/components/seo/json-ld";

export async function generateMetadata(): Promise<Metadata> {
  const { metadata } = await buildSEO({
    title: "Contact Us | Join AAEA",
    description:
      "Get in touch with us today. We’d love to capture your special moments—reach out today.",
    keywords: [
      "contact photographer",
      "book photography session",
      "hire photographer",
      "photography inquiry",
    ],
    path: "/contact",
  });

  return metadata;
}

export default async function Page() {
  const { jsonLd } = await buildSEO({
    title: "Contact Us",
    image: `${process.env.NEXT_PUBLIC_BASE_URL}/images/bg/hero-bg.png`,
    path: "/contact",
  });

  return (
    <>
      <ContactView />
      <JsonLd data={jsonLd} />
    </>
  );
}
