import { ShieldCheck, Target, Handshake, Award } from "lucide-react";
import type { ValueItem } from "@/types";

export const VALUES: ValueItem[] = [
  {
    title: "Integrity First",
    description:
      "Founded by a Certified Security Practitioner and Indian Navy veteran, discipline and accountability run through every service line.",
    icon: ShieldCheck,
  },
  {
    title: "Precision Delivery",
    description:
      "SOP-driven operations with documented checklists and audits — nothing is left to informal judgement.",
    icon: Target,
  },
  {
    title: "Partnership Mindset",
    description:
      "200+ client relationships sustained through transparent reporting and proactive communication, not just contracts.",
    icon: Handshake,
  },
  {
    title: "In-House Expertise",
    description:
      "Every service — from security to MEP to landscaping — is delivered by our own trained workforce, not subcontracted.",
    icon: Award,
  },
];
