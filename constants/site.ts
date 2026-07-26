import type { NavItem } from "@/types";

export const SITE = {
  name: "Amaze PMS",
  legalName: "Amaze Property Management Solutions Pvt Ltd",
  tagline: "A one-stop solution for every property management need.",
  description:
    "Amaze Property Management Solutions delivers integrated security, housekeeping, technical, and facility services across 20+ million sq.ft. of managed property, pan-India.",
  url: "https://www.amazepms.com",
  foundedYear: 2001,
  parentGroup: "ACTION Group of Companies",
  email: "info@amazepms.com",
  phones: ["+91 91006 94137", "+91 99085 38137"],
  address: {
    line1: "4th Floor, High Mark Chambers",
    line2: "Khajaguda X Road, Cyberabad",
    city: "Hyderabad",
    postalCode: "500008",
    country: "India",
  },
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Clients", href: "/clients" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Clients", href: "/clients" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Careers", href: "/careers" },
  ],
  resources: [
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};
