"use client";

import type { BlogPost } from "@/types";
import { ArrowUpRight, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex h-full flex-col justify-between rounded-sm border border-slate-800 bg-slate-900/60 p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-sky-500/50 hover:bg-slate-900/90 outline-none"
    >
      {/* Tactical Corner Crosshairs */}
      <div className="pointer-events-none absolute left-1.5 top-1.5 font-mono text-[9px] text-sky-500/40">
        +
      </div>
      <div className="pointer-events-none absolute right-1.5 top-1.5 font-mono text-[9px] text-sky-500/40">
        +
      </div>
      <div className="pointer-events-none absolute bottom-1.5 left-1.5 font-mono text-[9px] text-sky-500/40">
        +
      </div>
      <div className="pointer-events-none absolute bottom-1.5 right-1.5 font-mono text-[9px] text-sky-500/40">
        +
      </div>

      <div>
        {/* Category Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3.5">
          <span className="rounded-sm border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase text-sky-400">
            {post.category}
          </span>
          <ArrowUpRight
            className="size-4 text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-400"
            aria-hidden="true"
          />
        </div>

        {/* Title */}
        <h3 className="mt-4 text-xl font-bold text-white transition-colors group-hover:text-sky-300 leading-snug">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-slate-300">
          {post.excerpt}
        </p>
      </div>

      {/* Metadata Footer */}
      <div className="mt-6 flex flex-col gap-3 border-t border-slate-800/80 pt-4 font-mono text-xs text-slate-400">
        <div className="flex items-center gap-1.5 text-slate-400">
          <User className="size-3 text-sky-400" />
          <span className="truncate">{post.author}</span>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-500">
          <span className="flex items-center gap-1">
            <Calendar className="size-3 text-slate-400" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="size-3 text-slate-400" />
            {post.readTime}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
