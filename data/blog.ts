import type { BlogPost } from "@/types";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "integrated-facility-management-explained",
    title: "What Integrated Facility Management Really Means",
    excerpt:
      "Why bundling security, housekeeping, and technical services under one provider outperforms managing five separate vendors.",
    category: "Facility Management",
    author: "Amaze Editorial Team",
    date: "2026-05-12",
    readTime: "5 min read",
    content: [
      "Most large properties still juggle separate vendors for security, cleaning, and technical maintenance — each with its own contract, escalation path, and reporting format. Integrated Facility Management (IFM) consolidates these under a single accountable partner.",
      "The operational benefit is straightforward: one help desk, one SLA framework, and one point of escalation. When a housekeeping issue overlaps with a technical fault — a leaking pipe damaging flooring, for example — a single provider coordinates the fix instead of two vendors pointing at each other.",
      "At Amaze, every core service — security, housekeeping, MEP, landscaping, pest control, help desk, and parking — is delivered by our own trained workforce, not subcontracted. That means consistent standards, a single audit trail, and faster resolution across the board.",
    ],
  },
  {
    slug: "preventive-maintenance-reduces-downtime",
    title: "How Preventive Maintenance Cuts Downtime by Half",
    excerpt:
      "A look at how structured PM calendars for HVAC and electrical systems prevent costly breakdowns before they start.",
    category: "Technical Services",
    author: "Amaze Editorial Team",
    date: "2026-04-02",
    readTime: "4 min read",
    content: [
      "Reactive maintenance — fixing equipment only after it fails — is the most expensive way to run a facility. Emergency repairs cost more, take longer, and often mean unplanned downtime for occupants.",
      "Preventive Maintenance (PM) flips this model. Every mechanical, electrical, and plumbing asset is placed on a maintenance calendar based on manufacturer guidance and usage patterns, with technicians inspecting and servicing equipment before failure occurs.",
      "Across our managed properties, structured PM calendars have consistently reduced unplanned downtime, extended asset life, and made maintenance budgets far more predictable for facility owners.",
    ],
  },
  {
    slug: "security-staffing-best-practices",
    title: "Building a Security Team That Actually Performs Under Pressure",
    excerpt:
      "Why leadership pedigree, training discipline, and clear SOPs matter more than headcount alone.",
    category: "Security",
    author: "Amaze Editorial Team",
    date: "2026-02-18",
    readTime: "6 min read",
    content: [
      "It's tempting to measure a security contract purely by guard count. But the properties with the fewest incidents aren't the ones with the most guards — they're the ones with the clearest protocols and the most disciplined leadership.",
      "Our security operations are led by ex-servicemen and certified security practitioners who bring military-grade SOPs to civilian facility management: structured shift briefings, documented incident reporting, and rehearsed emergency response drills.",
      "The result is a security team that performs consistently under pressure, not just on paper — because the standard was set by people who have operated under real pressure before.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
