import type { Metadata } from "next";
import PageHero from "@/components/sections/shared/PageHero";
import CareerBenefits from "@/components/sections/careers/CareerBenefits";
import JobListings from "@/components/sections/careers/JobListings";
import CTASection from "@/components/sections/shared/CTASection";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join a 15,000+ strong workforce across security, housekeeping, technical, and facility management roles pan-India.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build your career on real operations."
        description="From site supervisors to regional operations managers, our teams grow from the ground up — trained, promoted, and retained."
      />
      <CareerBenefits />
      <JobListings />
      <CTASection
        title="Don't see the right role?"
        description="We're always hiring disciplined operators. Send your resume and we'll reach out when a fit opens up."
        primaryLabel="Email your resume"
        primaryHref="mailto:info@amazepms.com?subject=Career%20Enquiry"
        secondaryLabel="Learn about Amaze"
        secondaryHref="/about"
      />
    </>
  );
}
