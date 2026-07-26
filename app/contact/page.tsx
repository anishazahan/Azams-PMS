import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/shared/PageHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactInfoCards from "@/components/sections/contact/ContactInfoCards";
import MapPanel from "@/components/sections/contact/MapPanel";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Amaze PMS for security, housekeeping, technical, and integrated facility management services across India.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's talk about your property."
        description="Share a few details and our team will map out a service blueprint — usually within one business day."
      />

      <section className="relative pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <ContactForm />
            <div className="flex flex-col gap-10">
              <MapPanel />
              <ContactInfoCards />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
