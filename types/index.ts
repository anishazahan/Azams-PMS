import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  heroDescription: string;
  features: string[];
  deliverables: { title: string; description: string }[];
  stat: { value: string; label: string };
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export interface ClientLogo {
  name: string;
  sector: string;
}

export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export interface RegionPresence {
  state: string;
  cities: string[];
}
