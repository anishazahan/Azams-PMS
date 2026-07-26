import type { Metadata } from "next";
import PageHero from "@/components/sections/shared/PageHero";
import FounderStory from "@/components/sections/about/FounderStory";
import MissionVision from "@/components/sections/about/MissionVision";
import Timeline from "@/components/sections/about/Timeline";
import StatsBand from "@/components/sections/shared/StatsBand";
import CTASection from "@/components/sections/shared/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 2001 by a Certified Security Practitioner and Indian Navy veteran, Amaze PMS delivers integrated facility management across 20+ million sq. ft. pan-India.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Amaze"
        title="Two decades of disciplined facility operations."
        description="From a single security contract in 2001 to a 15,000-strong workforce managing 20+ million sq. ft. pan-India — our story is one of consistency, not shortcuts."
      />
      <FounderStory />
      <MissionVision />
      <Timeline />
      <StatsBand />
      <CTASection
        title="See how we'd run your property."
        description="Share a few details about your site and our team will map out a service blueprint within 48 hours."
      />
    </>
  );
}
