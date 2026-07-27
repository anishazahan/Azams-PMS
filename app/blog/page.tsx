import BlogCard from "@/components/sections/blog/BlogCard";
import ContactCTA from "@/components/sections/home/ContactCTA";
import PageHero from "@/components/sections/shared/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { BLOG_POSTS } from "@/data/blog";
import type { Metadata } from "next";

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
      <ContactCTA
        eyebrow="FACILITY KNOWLEDGE DIRECTORY"
        title={
          <>
            Need customized SOPs for <br />
            <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              your enterprise property?
            </span>
          </>
        }
        description="Book a technical audit with our chief engineers to benchmark your current property operations against industry-leading facility metrics."
      />
    </>
  );
}
