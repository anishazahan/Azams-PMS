"use client";

import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/constants/site";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const cards = [
  {
    icon: MapPin,
    title: "Head Command Office",
    lines: [
      SITE.address.line1,
      SITE.address.line2,
      `${SITE.address.city} ${SITE.address.postalCode}, ${SITE.address.country}`,
    ],
  },
  {
    icon: Phone,
    title: "Direct Voice Telemetry",
    lines: SITE.phones,
  },
  {
    icon: Mail,
    title: "Corporate Email Desk",
    lines: [SITE.email],
  },
  {
    icon: Clock,
    title: "SLA Response Windows",
    lines: [
      "We reply within 1 business day",
      "24x7 help desk for active clients",
    ],
  },
];

export const ContactInfoCards = () => {
  return (
    <div className="flex flex-wrap gap-5 ">
      {cards.map((card, i) => {
        const IconComponent = card.icon;

        return (
          <Reveal key={card.title} delay={i * 0.08}>
            <div className="group relative flex h-full flex-col justify-between rounded-sm border border-slate-800 bg-slate-900/60 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-sky-500/50 hover:bg-slate-900/90">
              {/* Tactical Corner Crosshairs */}
              <div className="pointer-events-none absolute left-1.5 top-1.5 font-mono text-[9px] text-sky-500/40">
                +
              </div>
              <div className="pointer-events-none absolute right-1.5 top-1.5 font-mono text-[9px] text-sky-500/40">
                +
              </div>
              <div className="pointer-events-none absolute bottom-1.5 left-1.5 font-mono text-[9px] text-sky-500/40">
                +
              </div>
              <div className="pointer-events-none absolute bottom-1.5 right-1.5 font-mono text-[9px] text-sky-500/40">
                +
              </div>

              <div>
                {/* Header Icon & Monospace Tag */}
                <div className="mb-5 flex items-center justify-between border-b border-slate-800/80 pb-3.5">
                  <div className="flex size-10 items-center justify-center rounded-sm border border-sky-500/30 bg-sky-500/10 text-sky-400 transition-colors group-hover:border-sky-500/60 group-hover:bg-sky-500/20">
                    <IconComponent className="size-5" />
                  </div>
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                    INFO // 0{i + 1}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-base font-bold text-white transition-colors group-hover:text-sky-300">
                  {card.title}
                </h3>

                {/* Content Lines */}
                <div className="mt-2.5 flex flex-col gap-1 font-sans text-xs sm:text-sm leading-relaxed text-slate-300">
                  {card.lines.map((line) => (
                    <p key={line} className="break-words">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              {/* Tactical Footer Tag */}
              <div className="mt-6 border-t border-slate-800/80 pt-3 font-mono text-[10px] text-slate-500">
                VERIFIED LOCATION & CONTACT
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
};

export default ContactInfoCards;
