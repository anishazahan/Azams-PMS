import type { Metadata } from "next";
import { BLOG_POSTS } from "@/data/blog";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/sections/shared/PageHero";
import BlogCard from "@/components/sections/blog/BlogCard";
import CTASection from "@/components/sections/shared/CTASection";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on integrated facility management, preventive maintenance, and security operations from the Amaze PMS team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes from the field."
        description="Practical perspectives on running facilities at scale — from our operations, security, and technical teams."
      />

      <section className="relative pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.08}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
