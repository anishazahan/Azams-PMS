import { Compass, ClipboardList, Users2, LineChart } from "lucide-react";
import type { ProcessStep } from "@/types";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Assess",
    description:
      "We audit your property — footfall, assets, risk areas, and existing service gaps — before proposing a single fix.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Design",
    description:
      "A tailored service blueprint is built: staffing plans, SOPs, escalation matrices, and reporting cadence.",
    icon: ClipboardList,
  },
  {
    step: "03",
    title: "Deploy",
    description:
      "Trained, uniformed teams are onboarded on-site with supervisors accountable for day-one performance.",
    icon: Users2,
  },
  {
    step: "04",
    title: "Optimise",
    description:
      "Monthly audits, digital reporting, and client reviews keep service quality improving quarter over quarter.",
    icon: LineChart,
  },
];
