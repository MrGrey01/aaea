import { BlogPostFeatured } from "@/types/router-types";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  post: BlogPostFeatured;
}
export const BlogPostCard = ({ post }: BlogCardProps) => {
  return (
    <article className="snap-start flex flex-col cursor-pointer group min-w-[80%] sm:min-w-[60%] md:min-w-0">
      {/* Image */}
      <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden border-2 border-gold-500/10">
        <Image
          src={post.coverImage || "/images/fallback/post_image.png"}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover  w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Meta */}
      <div className="relative mt-4 flex items-center justify-between">
        <div>
          <p className="text-[15px] leading-tight font-bold text-muted-foreground max-w-4/5 line-clamp-2">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </p>
          <p className="text-xs text-gold-400 mt-0.5">
            {post.updatedAt.toLocaleDateString()}
          </p>
        </div>
        <span className="text-xs text-brand-400 hover:text-brand-800 border border-gold-500 hover:bg-gold-400 transition-colors px-4 py-2 rounded-full font-medium shrink-0">
          {post.category?.name ?? "Uncategorized"}
        </span>
      </div>
    </article>
  );
};
