import {
  Bug,
  Building2,
  Factory,
  Home,
  Radio,
  ShieldCheck,
  Sparkles,
  Trees,
  Waves,
  Wrench,
  Zap,
} from "lucide-react";

export const OPERATIONAL_MODES = [
  {
    id: "mep",
    title: "MEP & Technical Ops",
    icon: Wrench,
    metric: "99.98% Uptime",
    status: "Active Monitoring",
    description:
      "HVAC, electrical grids, and mechanical health tracked with zero-downtime precision.",
    badgeColor: "text-sky-400 border-sky-500/30 bg-sky-500/10",
  },
  {
    id: "security",
    title: "Smart Security",
    icon: ShieldCheck,
    metric: "24/7 Live Patrol",
    status: "Perimeter Locked",
    description:
      "Multi-layered physical security combined with smart visitor authentication systems.",
    badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  },
  {
    id: "housekeeping",
    title: "Precision Cleaning",
    icon: Sparkles,
    metric: "15,000+ Staff",
    status: "Audit Compliant",
    description:
      "Hospitality-grade mechanized sanitation and automated compliance scheduling.",
    badgeColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
  },
];

export const REGIONAL_HUBS = [
  {
    id: "north",
    region: "NORTH ZONE",
    primaryHub: "Delhi-NCR & Haryana",
    sqft: "6.5M Sq. Ft.",
    workforce: "4,800+ Staff",
    keyClients: "Fortune 500 Corporate Towers & Tech Parks",
    activeNodes: ["Gurugram", "Noida", "New Delhi", "Chandigarh"],
    status: "COMMAND CENTER ACTIVE",
    accent: "text-sky-400 border-sky-500/30 bg-sky-500/10",
  },
  {
    id: "west",
    region: "WEST ZONE",
    primaryHub: "Mumbai & Pune Metro",
    sqft: "7.2M Sq. Ft.",
    workforce: "5,500+ Staff",
    keyClients: "Financial Hubs, Luxury Commercial & Residential",
    activeNodes: ["Mumbai Central", "BKC", "Navi Mumbai", "Pune"],
    status: "LIVE SURVEILLANCE",
    accent: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  },
  {
    id: "south",
    region: "SOUTH ZONE",
    primaryHub: "Bengaluru & Hyderabad",
    sqft: "5.1M Sq. Ft.",
    workforce: "3,900+ Staff",
    keyClients: "IT Campuses & Specialized Industrial Hubs",
    activeNodes: ["Bengaluru", "Hyderabad", "Chennai"],
    status: "AUTOMATED LOGISTICS",
    accent: "text-purple-400 border-purple-500/30 bg-purple-500/10",
  },
  {
    id: "east",
    region: "EAST ZONE",
    primaryHub: "Kolkata Hub (HQ)",
    sqft: "2.8M Sq. Ft.",
    workforce: "2,000+ Staff",
    keyClients: "Commercial Headquarters & Healthcare Infra",
    activeNodes: ["Kolkata", "Howrah", "Durgapur"],
    status: "FOUNDATIONAL REGION",
    accent: "text-amber-400 border-amber-500/30 bg-amber-500/10",
  },
];

export const HOTSPOTS = [
  {
    id: "hvac",
    name: "Central HVAC & Chillers",
    x: "32%",
    y: "28%",
    icon: Wrench,
    metric: "100% Thermal Balance",
    detail:
      "Automated BMS monitoring with predictive compressor vibration alerts.",
  },
  {
    id: "security",
    name: "Perimeter Gate Control",
    x: "70%",
    y: "75%",
    icon: ShieldCheck,
    metric: "ANPR Activated",
    detail: "Automated vehicle badge verification and digital visitor logging.",
  },
  {
    id: "power",
    name: "High-Voltage DG Power",
    x: "22%",
    y: "65%",
    icon: Zap,
    metric: "< 8 Sec Cutover",
    detail: "Dual-redundant fuel logging and emergency grid failover testing.",
  },
  {
    id: "surveillance",
    name: "Central Command Room",
    x: "55%",
    y: "42%",
    icon: Radio,
    metric: "24/7 CCTV Telemetry",
    detail:
      "AI-driven motion analytics integrated with incident escalation dispatch.",
  },
];

export const PROPERTY_TYPES = [
  { id: "commercial", label: "Commercial IT/Office", icon: Building2 },
  { id: "residential", label: "Premium Residential", icon: Home },
  { id: "industrial", label: "Industrial/Logistics", icon: Factory },
];

export const SQFT_RANGES = [
  "< 100k Sq.Ft",
  "100k - 500k Sq.Ft",
  "500k - 1M+ Sq.Ft",
];

export const CLIENT_LOGOS = [
  "DLF CyberCity",
  "Godrej Properties",
  "Prestige Group",
  "Tata Realty",
  "Embassy TechVillage",
  "Brigade Group",
  "Oberoi Realty",
  "Hiranandani",
  "RMZ Corp",
  "K Raheja Corp",
];

export const CASE_STUDIES = [
  {
    id: "tech-park",
    title: "1.8M Sq. Ft. IT Park Operational Overhaul",
    category: "COMMERCIAL IT PARK",
    location: "Bengaluru, Karnataka",
    metrics: [
      { label: "Energy Cost Reduced", value: "18.4%" },
      { label: "Uptime Guaranteed", value: "99.99%" },
      { label: "Personnel Deployed", value: "450+ Staff" },
    ],
    summary:
      "Integrated MEP management and automated HVAC chiller balancing reduced peak energy demand while ensuring 100% SLA compliance across 14 commercial towers.",
    tagColor: "text-sky-400 border-sky-500/30 bg-sky-500/10",
  },
  {
    id: "commercial-tower",
    title: "Grade-A Financial Headquarters Security",
    category: "FINANCIAL HUB",
    location: "BKC, Mumbai",
    metrics: [
      { label: "Visitor Throughput", value: "12K/Day" },
      { label: "Incident Rate", value: "0.00%" },
      { label: "Guarding Force", value: "220+ Guards" },
    ],
    summary:
      "Deployed ex-servicemen security teams backed by AI license plate recognition and digital visitor credentialing for zero perimeter vulnerabilities.",
    tagColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  },
  {
    id: "township",
    title: "Premium 250-Acre Residential Township",
    category: "RESIDENTIAL ESTATE",
    location: "Gurugram, Haryana",
    metrics: [
      { label: "Landscape Cover", value: "45 Acres" },
      { label: "Resident Rating", value: "4.92/5.0" },
      { label: "Water Recycled", value: "100%" },
    ],
    summary:
      "Complete integrated facilities execution covering horticulture, automated irrigation, pool chemistry management, and mechanized sanitation.",
    tagColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
  },
];

export const SERVICES_DATA = [
  {
    id: "mep",
    title: "MEP & Technical Operations",
    category: "ENGINEERING",
    icon: Wrench,
    summary:
      "Comprehensive mechanical, electrical, and plumbing engineering designed for zero operational downtime in high-density facilities.",
    stats: [
      { label: "SLA Compliance", value: "99.9%" },
      { label: "Response Time", value: "< 15 Mins" },
      { label: "Certified Engineers", value: "1,200+" },
    ],
    features: [
      "24/7 HVAC & Chiller Plant Management",
      "High-Voltage Electrical Grid & DG Set Audits",
      "Automated Water Treatment & Plumbing Diagnostics",
      "Predictive Maintenance via IoT Sensor Logging",
    ],
    tagColor: "text-sky-400 border-sky-500/30 bg-sky-500/10",
  },
  {
    id: "security",
    title: "Smart Security & Guarding",
    category: "PROTECTION",
    icon: ShieldCheck,
    summary:
      "Multi-layered physical security combined with digital visitor management systems and emergency protocols.",
    stats: [
      { label: "Active Guards", value: "5,000+" },
      { label: "Incident Rate", value: "< 0.01%" },
      { label: "Coverage", value: "24/7/365" },
    ],
    features: [
      "Ex-Servicemen & Trained Guard Deployment",
      "AI-Powered License Plate & Visitor Tracking",
      "Perimeter Surveillance & Emergency Quick Response",
      "Command Center Remote Incident Escalation",
    ],
    tagColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  },
  {
    id: "housekeeping",
    title: "Precision Housekeeping",
    category: "SANITATION",
    icon: Sparkles,
    summary:
      "Hospitality-grade mechanized cleaning routines engineered for corporate headquarters, IT parks, and residential complexes.",
    stats: [
      { label: "Daily Sq. Ft.", value: "20M+" },
      { label: "Audit Rating", value: "4.9/5.0" },
      { label: "Eco-Chemicals", value: "100%" },
    ],
    features: [
      "Automated Floor Scrubbing & High-Reach Glazing",
      "Hospital-Grade Color-Coded Microfiber Systems",
      "Scheduled Deep Sanitization & Odor Control",
      "Waste Segregation & Green Compliance Audits",
    ],
    tagColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
  },
  {
    id: "pest",
    title: "Eco Pest Management",
    category: "HYGIENE",
    icon: Bug,
    summary:
      "Scientific, non-toxic pest containment protocols targeted for commercial kitchens, server rooms, and public concourses.",
    stats: [
      { label: "Safety Rating", value: "100% Non-Toxic" },
      { label: "Compliance", value: "HACCP Approved" },
      { label: "Frequency", value: "Tailored SLAs" },
    ],
    features: [
      "Zero-Chemical Electronic Rodent Monitoring",
      "Termite & Wood Borer Eradication Guarantees",
      "Odourless Organic Gel Treatments",
      "Regular Bio-Audit Reports & Documentation",
    ],
    tagColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
  },
  {
    id: "landscape",
    title: "Horticulture & Gardening",
    category: "ENVIRONMENT",
    icon: Trees,
    summary:
      "Architectural landscape management, indoor air-purifying plant installations, and automated drip irrigation systems.",
    stats: [
      { label: "Green Cover", value: "2.5M Sq. Ft." },
      { label: "Water Saved", value: "35% (Drip)" },
      { label: "Botanists", value: "85+ On-Roll" },
    ],
    features: [
      "Corporate Indoor Air Hygiene Greenery Solutions",
      "Automated Weather-Sensing Irrigation Networks",
      "Seasonal Floral Design & Lawn Turf Maintenance",
      "Soil Nutrient Diagnostics & Organic Composting",
    ],
    tagColor: "text-teal-400 border-teal-500/30 bg-teal-500/10",
  },
  {
    id: "pool",
    title: "Pool & Aquatic Care",
    category: "MAINTENANCE",
    icon: Waves,
    summary:
      "Precision chemical balancing, filtration overhaul, and life-safety oversight for residential and club pools.",
    stats: [
      { label: "pH Balance", value: "Automated" },
      { label: "Lifeguards", value: "Certified" },
      { label: "Clearance", value: "Daily Audits" },
    ],
    features: [
      "Automated Chlorine & pH Dosing Controllers",
      "Sand Filter Backwashing & Pump Overhauls",
      "Certified Lifeguard & Rescue Personnel Patrols",
      "Tile Scrubbing & Algae Prevention Regimens",
    ],
    tagColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  },
];

export const TESTIMONIALS = [
  {
    id: "dlf-cybercity",
    author: "Vikramjit Sharma",
    role: "VP - Infrastructure & Asset Mgmt",
    company: "DLF CyberCity Towers",
    propertyType: "Grade-A Commercial Park",
    location: "Gurugram, NCR",
    avatarInitial: "VS",
    rating: 5,
    auditScore: "99.8% SLA Score",
    quote:
      "Amaze PMS completely transformed our facility operations across 2.4 Million Sq. Ft. Their MEP predictive maintenance reduced our chiller downtime to virtually zero during peak summer months.",
    keyMetrics: [
      { label: "Chiller Downtime", value: "0.00%" },
      { label: "Energy Optimization", value: "-14.2%" },
      { label: "Audit Rating", value: "A+ Grade" },
    ],
    tagColor: "text-sky-400 border-sky-500/30 bg-sky-500/10",
  },
  {
    id: "godrej-properties",
    author: "Ananya Deshmukh",
    role: "Head of Facility Operations",
    company: "Godrej Living",
    propertyType: "Luxury Residential Township",
    location: "Mumbai, Maharashtra",
    avatarInitial: "AD",
    rating: 5,
    auditScore: "4.95/5.0 Resident CSAT",
    quote:
      "Managing 200+ security personnel and mechanized housekeeping across a 180-acre estate requires discipline. Amaze PMS's digital shift tracking gave us complete visibility and accountability.",
    keyMetrics: [
      { label: "Resident CSAT", value: "4.95 / 5" },
      { label: "Gate Response", value: "< 45 Secs" },
      { label: "Staff Retention", value: "94%" },
    ],
    tagColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  },
  {
    id: "embassy-park",
    author: "Rajesh K. Nair",
    role: "Director - Corporate Real Estate",
    company: "Embassy TechVillage",
    propertyType: "Enterprise IT Campus",
    location: "Bengaluru, Karnataka",
    avatarInitial: "RN",
    rating: 5,
    auditScore: "100% Statutory Compliant",
    quote:
      "When hosting Fortune 500 tech clients, facility compliance is non-negotiable. Amaze PMS provides instant digital access to every labor, PF, and safety audit document without delay.",
    keyMetrics: [
      { label: "Statutory Audit", value: "100% Compliant" },
      { label: "Helpdesk SLA", value: "99.4%" },
      { label: "Daily Footfall", value: "28K People" },
    ],
    tagColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
  },
];
