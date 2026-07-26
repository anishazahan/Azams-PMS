import { Users, Building2, Handshake, MapPin } from "lucide-react";
import type { StatItem } from "@/types";

export const STATS: StatItem[] = [
  {
    value: 15000,
    suffix: "+",
    label: "Trained professionals",
    icon: Users,
  },
  {
    value: 20,
    suffix: "M+",
    label: "Sq. ft. under management",
    icon: Building2,
  },
  {
    value: 200,
    suffix: "+",
    label: "Valued client partners",
    icon: Handshake,
  },
  {
    value: 5,
    suffix: "",
    label: "States served pan-India",
    icon: MapPin,
  },
];
