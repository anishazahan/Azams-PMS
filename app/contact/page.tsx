import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactInfoCards } from "@/components/sections/contact/ContactInfoCards";
import { MapPanel } from "@/components/sections/contact/MapPanel";
import { PageHero } from "@/components/sections/shared/PageHero";
import Container from "@/components/ui/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Technical Audit | Amaze PMS",
  description:
    "Get in touch with Amaze PMS for security, housekeeping, technical, and integrated facility management services across India.",
};

const ContactPage = () => {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100">
      <PageHero
        border
        eyebrow="GET IN TOUCH"
        title="Let's Talk About Your Property."
        description="Share a few details and our engineering team will map out a custom facility service blueprint — usually within one business day."
      />

      <section className="relative w-full overflow-hidden  border-slate-800 bg-slate-950 pb-24 sm:pb-32">
        {/* Background Laser Grid */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        <Container className="relative z-10">
          {/* Alignment Fix: items-start ensures left/right columns adjust to their natural content height */}
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
            <div className="h-fit w-full">
              <ContactForm />
            </div>

            <div className="flex h-fit flex-col gap-10">
              <MapPanel />
              <ContactInfoCards />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ContactPage;
