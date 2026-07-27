import FounderStory from "@/components/sections/about/FounderStory";
import MissionVision from "@/components/sections/about/MissionVision";
import Timeline from "@/components/sections/about/Timeline";
import ContactCTA from "@/components/sections/home/ContactCTA";
import PageHero from "@/components/sections/shared/PageHero";
import StatsBand from "@/components/sections/shared/StatsBand";
import type { Metadata } from "next";

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
      <ContactCTA
        eyebrow="STRATEGIC PARTNERSHIP"
        title={
          <>
            Partner with India’s Most <br />
            <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              Disciplined Facility Partner.
            </span>
          </>
        }
        description="Schedule an executive meeting with our operations board to discuss nationwide property management, multi-site technical audits, or customized SLA deployments."
      />
    </>
  );
}
