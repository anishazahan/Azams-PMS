import { GraduationCap, TrendingUp, MapPinned, Award } from "lucide-react";
import type { ValueItem } from "@/types";

export const CAREER_BENEFITS: ValueItem[] = [
  {
    title: "Structured Training",
    description:
      "Every role starts with SOP-based onboarding — from security drills to MEP certifications — before day-one deployment.",
    icon: GraduationCap,
  },
  {
    title: "Real Career Growth",
    description:
      "Site supervisors and regional managers are promoted from within; our leadership pipeline runs bottom-up.",
    icon: TrendingUp,
  },
  {
    title: "Pan-India Mobility",
    description:
      "Opportunities across Telangana, Andhra Pradesh, Karnataka, Tamil Nadu, and Odisha as we expand client sites.",
    icon: MapPinned,
  },
  {
    title: "Recognition & Rewards",
    description:
      "Monthly performance audits feed directly into incentive programs for site teams and supervisors.",
    icon: Award,
  },
];
