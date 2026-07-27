import { ROUTES } from "@/constants/routes";

// Sections that exist on the home page and double as scroll-triggered nav
// targets — scrolling into one highlights its matching nav item, and
// clicking that nav item while already on "/" smooth-scrolls + updates the
// hash instead of triggering a full route navigation.
export const HOME_SCROLL_SECTIONS = [
  { id: "services", href: ROUTES.SERVICES },
  { id: "clients", href: ROUTES.CLIENTS },
];

export function getHomeSectionId(href: string) {
  return HOME_SCROLL_SECTIONS.find((section) => section.href === href)?.id ?? null;
}
