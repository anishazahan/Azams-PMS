import {
  ArrowLeft,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  ShieldCheck,
  User,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import ContactCTA from "@/components/sections/home/ContactCTA";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { BLOG_POSTS, getBlogPostBySlug } from "@/data/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () => {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
};

export const generateMetadata = async ({
  params,
}: BlogPostPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) return { title: "Post Not Found | Amaze PMS" };

  return {
    title: `${post.title} | Amaze PMS Insights`,
    description: post.excerpt,
  };
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 pt-36 sm:pt-44">
      {/* Background Laser Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Hero Header Section */}
      <section className="relative overflow-hidden pb-12 sm:pb-16">
        <Container className="relative z-10 max-w-4xl">
          {/* Breadcrumbs */}
          <Reveal className="mb-6 flex items-center gap-2 font-mono text-xs text-slate-400">
            <Link href="/blog" className="transition-colors hover:text-sky-400">
              INSIGHTS DIRECTORY
            </Link>
            <ChevronRight
              className="size-3.5 text-slate-600"
              aria-hidden="true"
            />
            <span className="text-sky-400 font-semibold uppercase">
              {post.category}
            </span>
          </Reveal>

          {/* Back Action */}
          <Reveal className="mb-8">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 font-mono text-xs text-slate-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Back to Insights</span>
            </Link>
          </Reveal>

          {/* Eyebrow & Title */}
          <div className="flex flex-col gap-5">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-sky-400 backdrop-blur-md w-fit">
                <BookOpen className="size-3.5 text-sky-400" />
                <span>{post.category} </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-balance text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl">
                {post.title}
              </h1>
            </Reveal>

            {/* Author & Date Telemetry */}
            <Reveal
              delay={0.15}
              className="flex flex-wrap items-center gap-6 border-y border-slate-800 py-4 font-mono text-xs text-slate-400"
            >
              {post.author && (
                <span className="flex items-center gap-1.5 text-slate-300">
                  <User className="size-3.5 text-sky-400" aria-hidden="true" />
                  {post.author}
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Calendar
                  className="size-3.5 text-sky-400"
                  aria-hidden="true"
                />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5 text-sky-400" aria-hidden="true" />
                {post.readTime}
              </span>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Article Content Section */}
      <section className="relative pb-24 sm:pb-32">
        <Container className="relative z-10 max-w-4xl">
          <div className="relative rounded-sm border border-slate-800 bg-slate-900/60 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
            {/* Tactical Corner Crosshairs */}
            <div className="pointer-events-none absolute left-2 top-2 font-mono text-[10px] text-sky-500/40">
              +
            </div>
            <div className="pointer-events-none absolute right-2 top-2 font-mono text-[10px] text-sky-500/40">
              +
            </div>
            <div className="pointer-events-none absolute bottom-2 left-2 font-mono text-[10px] text-sky-500/40">
              +
            </div>
            <div className="pointer-events-none absolute bottom-2 right-2 font-mono text-[10px] text-sky-500/40">
              +
            </div>

            <div className="flex flex-col gap-6 text-sm sm:text-base leading-relaxed text-slate-300">
              {post.content.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="leading-relaxed">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            {/* Quality Governance Footer */}
            <div className="mt-10 flex items-center gap-2 border-t border-slate-800/80 pt-5 font-mono text-xs text-slate-400">
              <ShieldCheck className="size-4 text-emerald-400" />
              <span>
                Standard Operating Procedure (SOP) Verified by Amaze Quality
                Board
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Dynamic CTA */}
      <ContactCTA
        eyebrow="TECHNICAL CONSULTATION"
        title={
          <>
            Need customized MEP SOPs for <br />
            <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              your facility infrastructure?
            </span>
          </>
        }
        description="Book a zero-cost technical audit with our chief engineers to evaluate your current MEP, HVAC, and power grid health."
      />
    </main>
  );
};

export default BlogPostPage;
