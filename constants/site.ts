import type { NavItem } from "@/types";
import { ROUTES } from "./routes";

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
  { label: "Home", href: ROUTES.HOME },
  { label: "About", href: ROUTES.ABOUT },
  { label: "Services", href: ROUTES.SERVICES },
  { label: "Clients", href: ROUTES.CLIENTS },
  { label: "Careers", href: ROUTES.CAREERS },
  { label: "Blog", href: ROUTES.BLOG },
];

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: ROUTES.ABOUT },
    { label: "Our Clients", href: ROUTES.CLIENTS },
    { label: "Testimonials", href: ROUTES.TESTIMONIALS },
    { label: "Careers", href: ROUTES.CAREERS },
  ],
  resources: [
    { label: "Services", href: ROUTES.SERVICES },
    { label: "Blog", href: ROUTES.BLOG },
    { label: "Contact", href: ROUTES.CONTACT },
  ],
};
