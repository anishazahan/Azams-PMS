import type { ClientLogo } from "@/types";

// Representative sector categories Amaze PMS serves across its 200+ client
// partnerships — shown as sector marks rather than named brands.
export const CLIENT_SECTORS: ClientLogo[] = [
  { name: "IT & Tech Parks", sector: "Commercial" },
  { name: "Residential Townships", sector: "Residential" },
  { name: "Retail & Malls", sector: "Retail" },
  { name: "Corporate Offices", sector: "Commercial" },
  { name: "Industrial Estates", sector: "Industrial" },
  { name: "Hospitality Chains", sector: "Hospitality" },
  { name: "Healthcare Campuses", sector: "Healthcare" },
  { name: "Educational Institutes", sector: "Education" },
  { name: "Mixed-Use Developments", sector: "Commercial" },
  { name: "Logistics & Warehousing", sector: "Industrial" },
];

export const REGIONS = [
  { state: "Telangana", cities: ["Hyderabad", "Warangal"] },
  { state: "Andhra Pradesh", cities: ["Visakhapatnam", "Vijayawada"] },
  { state: "Karnataka", cities: ["Bengaluru", "Mysuru"] },
  { state: "Tamil Nadu", cities: ["Chennai", "Coimbatore"] },
  { state: "Odisha", cities: ["Bhubaneswar"] },
];
