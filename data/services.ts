import {
  Shield,
  SprayCan,
  Wrench,
  Flower2,
  Bug,
  Headset,
  ParkingSquare,
  Droplets,
} from "lucide-react";
import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    slug: "security-services",
    name: "Security Services",
    shortName: "Security",
    icon: Shield,
    tagline: "Trained personnel, disciplined protocols.",
    description:
      "Manned guarding, access control, and surveillance operations led by ex-servicemen and certified security practitioners.",
    heroDescription:
      "Our security division is built on military-grade discipline, standard operating procedures, and rigorous supervision — protecting people, assets, and premises around the clock across every property we manage.",
    features: [
      "Trained security guards and supervisors",
      "Access control & visitor management",
      "CCTV monitoring and incident reporting",
      "Fire safety and emergency response drills",
      "Quick Reaction Teams for escalations",
      "Ex-servicemen leadership at site level",
    ],
    deliverables: [
      {
        title: "24x7 Manned Guarding",
        description:
          "Round-the-clock deployment of vetted, uniformed security personnel with documented SOPs for every shift.",
      },
      {
        title: "Access & Visitor Control",
        description:
          "Structured entry management, ID verification, and visitor logging to keep every premise accountable.",
      },
      {
        title: "Surveillance & Reporting",
        description:
          "CCTV monitoring paired with daily incident and occurrence reports shared with facility stakeholders.",
      },
    ],
    stat: { value: "15,000+", label: "Security professionals deployed" },
  },
  {
    slug: "housekeeping-services",
    name: "House Keeping Services",
    shortName: "Housekeeping",
    icon: SprayCan,
    tagline: "Spotless spaces, every single day.",
    description:
      "End-to-end cleaning and hygiene management for commercial, residential, and industrial properties.",
    heroDescription:
      "From daily upkeep to specialised deep cleaning, our housekeeping teams maintain consistently pristine environments using structured checklists, quality audits, and modern equipment.",
    features: [
      "Daily housekeeping & floor care",
      "Deep cleaning and sanitisation",
      "Washroom hygiene management",
      "Waste management & segregation",
      "Façade and high-rise glass cleaning",
      "Housekeeping supervisors and QA audits",
    ],
    deliverables: [
      {
        title: "Scheduled Cleaning Cycles",
        description:
          "Checklist-driven daily, weekly, and monthly cleaning cycles tailored to each property's footfall.",
      },
      {
        title: "Deep Sanitisation",
        description:
          "Periodic deep-cleaning and sanitisation programs for high-touch and high-risk zones.",
      },
      {
        title: "Quality Audits",
        description:
          "Independent QA walkthroughs and hygiene scorecards shared with property managers monthly.",
      },
    ],
    stat: { value: "20M+", label: "Sq. ft. kept spotless" },
  },
  {
    slug: "technical-services",
    name: "Technical Services",
    shortName: "Technical (MEP)",
    icon: Wrench,
    tagline: "MEP operations that never skip a beat.",
    description:
      "Mechanical, electrical, and plumbing operations and maintenance delivered by certified in-house technicians.",
    heroDescription:
      "We run the mechanical heart of every property — HVAC, electrical systems, plumbing, DG sets, and utilities — with preventive maintenance schedules that minimise downtime and extend asset life.",
    features: [
      "HVAC operations & maintenance",
      "Electrical systems & DG set upkeep",
      "Plumbing and fire-fighting systems",
      "Preventive maintenance scheduling",
      "Energy & utility monitoring",
      "24x7 technical helpdesk response",
    ],
    deliverables: [
      {
        title: "Preventive Maintenance",
        description:
          "Structured PM calendars for HVAC, electrical, and plumbing assets to prevent breakdowns before they happen.",
      },
      {
        title: "Certified Technicians",
        description:
          "In-house, trained MEP technicians available on rotational shifts with escalation matrices.",
      },
      {
        title: "Asset Lifecycle Tracking",
        description:
          "Digital logs of asset health, service history, and utility consumption for informed CAPEX planning.",
      },
    ],
    stat: { value: "200+", label: "Facilities under MEP care" },
  },
  {
    slug: "landscaping-services",
    name: "Landscaping Services",
    shortName: "Landscaping",
    icon: Flower2,
    tagline: "Grounds that reflect your standards.",
    description:
      "Garden design, horticulture, and grounds maintenance that keep outdoor spaces healthy and presentable year-round.",
    heroDescription:
      "Our horticulture teams manage lawns, gardens, and green cover with a maintenance calendar built around seasonal cycles, irrigation efficiency, and long-term plant health.",
    features: [
      "Lawn & garden maintenance",
      "Seasonal planting and pruning",
      "Irrigation system management",
      "Tree care and canopy management",
      "Horticulture waste composting",
      "Landscape design consultation",
    ],
    deliverables: [
      {
        title: "Grounds Maintenance",
        description:
          "Routine mowing, pruning, and bed maintenance keeping green spaces consistently presentable.",
      },
      {
        title: "Irrigation Efficiency",
        description:
          "Scheduled irrigation management that balances plant health with water conservation targets.",
      },
      {
        title: "Seasonal Planning",
        description:
          "Planting calendars aligned to season, soil, and climate for landscapes that thrive year-round.",
      },
    ],
    stat: { value: "100+", label: "Green campuses maintained" },
  },
  {
    slug: "pest-control-services",
    name: "Pest Control Services",
    shortName: "Pest Control",
    icon: Bug,
    tagline: "Proactive, documented, compliant.",
    description:
      "Integrated pest management programs covering common and specialised pest categories across facility types.",
    heroDescription:
      "We follow Integrated Pest Management principles — combining inspection, prevention, and treatment — to keep properties compliant and pest-free without disrupting daily operations.",
    features: [
      "Integrated Pest Management (IPM)",
      "Rodent and termite control",
      "Scheduled inspection programs",
      "Food-safe treatment protocols",
      "Compliance documentation",
      "Emergency pest response",
    ],
    deliverables: [
      {
        title: "Scheduled Treatments",
        description:
          "Periodic treatment cycles mapped to pest risk levels and facility type, from offices to warehouses.",
      },
      {
        title: "Compliance Reporting",
        description:
          "Detailed inspection and treatment records to support audits and regulatory compliance.",
      },
      {
        title: "Rapid Response",
        description:
          "On-call teams for urgent infestation control with minimal disruption to operations.",
      },
    ],
    stat: { value: "99%", label: "Client retention on contract renewal" },
  },
  {
    slug: "help-desk-management",
    name: "Help Desk Management",
    shortName: "Help Desk",
    icon: Headset,
    tagline: "One number for every facility need.",
    description:
      "Centralised help desk operations that log, track, and resolve facility requests with clear accountability.",
    heroDescription:
      "Our help desk teams act as the single point of contact for occupants and stakeholders — logging tickets, coordinating vendors, and tracking resolution against defined SLAs.",
    features: [
      "Centralised ticketing & tracking",
      "SLA-based issue resolution",
      "Vendor & escalation coordination",
      "Occupant communication management",
      "Monthly performance reporting",
      "Multi-shift help desk coverage",
    ],
    deliverables: [
      {
        title: "Single Point of Contact",
        description:
          "One consolidated help desk for all facility-related requests, complaints, and coordination.",
      },
      {
        title: "SLA Tracking",
        description:
          "Every ticket tracked against response and resolution SLAs with automated escalation.",
      },
      {
        title: "Reporting Dashboards",
        description:
          "Monthly ticket analytics shared with facility managers to identify recurring issues.",
      },
    ],
    stat: { value: "24/7", label: "Help desk availability" },
  },
  {
    slug: "parking-management",
    name: "Parking Management",
    shortName: "Parking",
    icon: ParkingSquare,
    tagline: "Organised access, zero bottlenecks.",
    description:
      "End-to-end parking operations including access control, valet coordination, and space optimisation.",
    heroDescription:
      "We manage the full parking lifecycle — entry and exit systems, valet operations, signage, and space allocation — to keep vehicle movement smooth even at peak occupancy.",
    features: [
      "Automated entry/exit management",
      "Valet & visitor parking coordination",
      "Space allocation & signage",
      "Traffic flow optimisation",
      "Parking staff supervision",
      "Incident and dispute handling",
    ],
    deliverables: [
      {
        title: "Access Systems",
        description:
          "Boom barriers, ticketing, and access card systems managed and maintained by trained operators.",
      },
      {
        title: "Peak-Hour Flow",
        description:
          "Traffic marshalling and space allocation strategies designed for high-occupancy periods.",
      },
      {
        title: "Valet Operations",
        description:
          "Trained valet teams for premium properties with strict vehicle handling protocols.",
      },
    ],
    stat: { value: "50+", label: "Parking facilities managed" },
  },
  {
    slug: "facility-utility-management",
    name: "Facility & Utility Management",
    shortName: "Facility & Utility",
    icon: Droplets,
    tagline: "STP, WTP, and every supporting utility.",
    description:
      "Operations for STP & WTP plants, swimming pools, and additional office support and deep-cleaning services.",
    heroDescription:
      "Beyond the core services, we operate and maintain the utility backbone of a property — sewage and water treatment plants, swimming pools, and specialised office support — ensuring compliance and continuity.",
    features: [
      "STP & WTP plant operations",
      "Swimming pool maintenance",
      "Office support services",
      "Specialised deep cleaning",
      "Compliance & regulatory reporting",
      "Utility consumption optimisation",
    ],
    deliverables: [
      {
        title: "STP & WTP Operations",
        description:
          "Licensed operators managing treatment plants with compliance logs and quality testing.",
      },
      {
        title: "Pool & Amenity Care",
        description:
          "Water quality management and equipment upkeep for pools and shared amenity spaces.",
      },
      {
        title: "Office Support",
        description:
          "Pantry, mailroom, and administrative support services layered onto core FM contracts.",
      },
    ],
    stat: { value: "20+", label: "Years of facility operations" },
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
