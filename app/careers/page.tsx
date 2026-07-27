import { CareerBenefits } from "@/components/sections/careers/CareerBenefits";
import { JobListings } from "@/components/sections/careers/JobListings";
import ContactCTA from "@/components/sections/home/ContactCTA";
import PageHero from "@/components/sections/shared/PageHero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Talent Acquisition | Amaze PMS",
  description:
    "Join a 15,000+ strong workforce across security, housekeeping, technical, and facility management roles pan-India.",
};

const CareersPage = () => {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100">
      <PageHero
        eyebrow="RECRUITMENT & TALENT GRID"
        title="Build Your Career on Real Operations."
        description="From site supervisors to regional operations directors, our teams grow bottom-up — trained with military SOPs, promoted, and retained."
      />
      <CareerBenefits />
      <JobListings />
      <ContactCTA
        eyebrow="TALENT ACQUISITION"
        title={
          <>
            Don’t see your role listed? <br />
            <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              Submit your profile to our talent pool.
            </span>
          </>
        }
        description="We are continuously recruiting certified chief engineers, security marshals, and facility managers across 20+ metropolitan nodes in India."
      />
    </main>
  );
};

export default CareersPage;
