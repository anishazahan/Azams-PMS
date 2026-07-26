import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/constants/site";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import IconBadge from "@/components/ui/IconBadge";

const cards = [
  {
    icon: MapPin,
    title: "Head Office",
    lines: [
      SITE.address.line1,
      SITE.address.line2,
      `${SITE.address.city} ${SITE.address.postalCode}, ${SITE.address.country}`,
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: SITE.phones,
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [SITE.email],
  },
  {
    icon: Clock,
    title: "Response Time",
    lines: ["We reply within 1 business day", "24x7 help desk for active clients"],
  },
];

export default function ContactInfoCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {cards.map((card, i) => (
        <Reveal key={card.title} delay={i * 0.08}>
          <GlassCard className="h-full">
            <IconBadge icon={card.icon} />
            <h3 className="mt-5 text-base font-semibold text-foreground">
              {card.title}
            </h3>
            <div className="mt-2 flex flex-col gap-0.5 text-sm text-muted">
              {card.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </GlassCard>
        </Reveal>
      ))}
    </div>
  );
}
