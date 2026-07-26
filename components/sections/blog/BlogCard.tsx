import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/types";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group glass glass-border flex h-full flex-col justify-between gap-6 rounded-3xl p-8 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:bg-white/[0.05]"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="w-fit rounded-full border border-surface-border bg-white/[0.03] px-3 py-1 text-xs font-medium text-primary-300">
            {post.category}
          </span>
          <ArrowUpRight
            className="size-5 text-muted transition-all duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary-300"
            aria-hidden="true"
          />
        </div>
        <h3 className="text-xl font-semibold leading-snug text-foreground">
          {post.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{post.excerpt}</p>
      </div>

      <div className="flex items-center gap-4 border-t border-surface-border pt-5 text-xs text-muted">
        <span className="flex items-center gap-1.5">
          <Calendar className="size-3.5" aria-hidden="true" />
          {formatDate(post.date)}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="size-3.5" aria-hidden="true" />
          {post.readTime}
        </span>
      </div>
    </Link>
  );
}
