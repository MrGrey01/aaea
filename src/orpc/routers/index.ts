// src/server/router.ts — root router
import { base } from "@/orpc/base";
import { userRouter } from "./user";
import { InferRouterInputs, InferRouterOutputs } from "@orpc/server";
import { testimonialsRouter } from "./testimonials";
import { blogRouter } from "./blog";
import { faqRouter } from "./components/faq";
import { sectionsRouter } from "./components/sections";
import { siteConfigRouter } from "./site-config";
import { mediaRouter } from "./media";
import { mediaUsageRouter } from "./media-usage";
import { albumsRouter } from "./albums";

export const router = base.router({
  siteConfig: siteConfigRouter,
  user: userRouter,
  testimonials: testimonialsRouter,

  media: mediaRouter,
  albums: albumsRouter,
  mediaUsage: mediaUsageRouter,

  faq: faqRouter,
  sections: sectionsRouter,
  blog: blogRouter,
});

export type Router = typeof router;

export type Inputs = InferRouterInputs<Router>;

export type Outputs = InferRouterOutputs<Router>;
