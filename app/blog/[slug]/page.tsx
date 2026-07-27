import ContactCTA from "@/components/sections/home/ContactCTA";
import Container from "@/components/ui/Container";
import {
  GridBackdrop,
  MeshBackdrop,
} from "@/components/ui/DecorativeBackground";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import { BLOG_POSTS, getBlogPostBySlug } from "@/data/blog";
import { Calendar, ChevronRight, Clock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) return { title: "Post not found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-40 sm:pt-48">
        <GridBackdrop />
        <MeshBackdrop className="opacity-50" />
        <Container className="relative">
          <Reveal className="mb-8 flex items-center gap-2 text-sm text-muted">
            <Link href="/blog" className="hover:text-foreground">
              Blog
            </Link>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <span className="text-foreground">{post.category}</span>
          </Reveal>

          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <Reveal>
              <Eyebrow>{post.category}</Eyebrow>
            </Reveal>
            <TextReveal
              as="h1"
              text={post.title}
              className="text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl"
            />
            <Reveal
              delay={0.15}
              className="flex items-center gap-5 text-sm text-muted"
            >
              <span>{post.author}</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="size-3.5" aria-hidden="true" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5" aria-hidden="true" />
                {post.readTime}
              </span>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative pb-24 sm:pb-32">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            {post.content.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-lg leading-relaxed text-foreground/85">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

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
    </>
  );
}
