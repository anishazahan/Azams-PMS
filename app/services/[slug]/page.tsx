import { RelatedServices } from "@/components/sections/services/RelatedServices";
import { ServiceDeliverables } from "@/components/sections/services/ServiceDeliverables";
import { ServiceDetailHero } from "@/components/sections/services/ServiceDetailHero";
import { ServiceFeatures } from "@/components/sections/services/ServiceFeatures";
import CTASection from "@/components/sections/shared/CTASection";
import { SERVICES, getServiceBySlug } from "@/data/services";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () => {
  return SERVICES.map((service) => ({ slug: service.slug }));
};

export const generateMetadata = async ({
  params,
}: ServicePageProps): Promise<Metadata> => {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.name} | Amaze PMS`,
    description: service.description,
  };
};

const ServiceDetailPage = async ({ params }: ServicePageProps) => {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100">
      <ServiceDetailHero service={service} />
      <ServiceFeatures service={service} />
      <ServiceDeliverables service={service} />
      <RelatedServices currentSlug={service.slug} />
      <CTASection
        title={`Ready to deploy ${service.shortName || service.name} for your property?`}
        description="Connect with our technical operations directors for a zero-cost site feasibility audit and SLA proposal."
      />
    </main>
  );
};

export default ServiceDetailPage;
