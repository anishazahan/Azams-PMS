import { BlogCard } from "@/components/sections/blog/BlogCard";
import ContactCTA from "@/components/sections/home/ContactCTA";

import PageHero from "@/components/sections/shared/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { BLOG_POSTS } from "@/data/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Field Insights | Amaze PMS",
  description:
    "Insights on integrated facility management, preventive maintenance, and security operations from the Amaze PMS team.",
};

const BlogPage = () => {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100">
      <PageHero
        border
        eyebrow="FIELD INSIGHTS DIRECTORY"
        title="Notes From the Field."
        description="Practical perspectives on running facilities at scale — from our operations, security, and technical engineering teams."
      />

      <section className="relative w-full overflow-hidden  border-slate-800 bg-slate-950 py-20 sm:py-28">
        {/* Background Laser Grid */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        <Container className="relative z-10">
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
    </main>
  );
};

export default BlogPage;
