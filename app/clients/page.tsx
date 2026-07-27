import { ClientSectorGrid } from "@/components/sections/clients/ClientSectorGrid";
import { RegionalPresence } from "@/components/sections/clients/RegionalPresence";
import ContactCTA from "@/components/sections/home/ContactCTA";
import { TestimonialSection } from "@/components/sections/home/TestimonialsPreview";
import PageHero from "@/components/sections/shared/PageHero";
import { StatsBand } from "@/components/sections/shared/StatsBand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Partnerships & Regional Nodes | Amaze PMS",
  description:
    "200+ client partners across commercial, residential, retail, and industrial properties, spanning 20+ million sq. ft. pan-India.",
};

const ClientsPage = () => {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100">
      <PageHero
        eyebrow="ENTERPRISE PARTNERSHIPS"
        title="Trusted by 200+ Properties, Pan-India."
        description="From IT tech parks to residential townships, our client partnerships span every asset class and scale."
      />
      <StatsBand />
      <ClientSectorGrid />
      <RegionalPresence />
      <TestimonialSection />
      <ContactCTA
        eyebrow="FACILITY RECRUITMENT HUB"
        title={
          <>
            Looking to recruit staff for <br />
            <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              your commercial facility?
            </span>
          </>
        }
        description="Book a consultation with our workforce directors to deploy trained security marshals, MEP engineers, or mechanized housekeeping teams."
      />
    </main>
  );
};

export default ClientsPage;
