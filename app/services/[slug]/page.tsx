import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES, getServiceBySlug } from "@/data/services";
import ServiceDetailHero from "@/components/sections/services/ServiceDetailHero";
import ServiceFeatures from "@/components/sections/services/ServiceFeatures";
import ServiceDeliverables from "@/components/sections/services/ServiceDeliverables";
import RelatedServices from "@/components/sections/services/RelatedServices";
import CTASection from "@/components/sections/shared/CTASection";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceDetailHero service={service} />
      <ServiceFeatures service={service} />
      <ServiceDeliverables service={service} />
      <RelatedServices currentSlug={service.slug} />
      <CTASection
        title={`Ready to bring ${service.shortName} in-house?`}
        description="Talk to our team about staffing, SOPs, and rollout timelines for your property."
      />
    </>
  );
}
