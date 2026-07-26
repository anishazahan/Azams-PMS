import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FOOTER_LINKS, NAV_ITEMS, SITE } from "@/constants/site";
import Container from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

const socials = [
  { icon: FacebookIcon, href: SITE.socials.facebook, label: "Facebook" },
  { icon: InstagramIcon, href: SITE.socials.instagram, label: "Instagram" },
  { icon: LinkedInIcon, href: SITE.socials.linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-surface-border bg-surface">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <span className="flex size-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary-400 to-accent-400 text-sm font-bold text-background">
                A
              </span>
              {SITE.name}
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              {SITE.description}
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-surface-border text-muted transition-colors duration-300 hover:border-white/20 hover:text-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Navigate</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors duration-300 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {FOOTER_LINKS.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors duration-300 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Get in touch</h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-muted">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary-300" aria-hidden="true" />
                <span>
                  {SITE.address.line1}, {SITE.address.line2}, {SITE.address.city}{" "}
                  {SITE.address.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-primary-300" aria-hidden="true" />
                <a href={`tel:${SITE.phones[0].replace(/\s/g, "")}`} className="hover:text-foreground">
                  {SITE.phones[0]}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-primary-300" aria-hidden="true" />
                <a href={`mailto:${SITE.email}`} className="hover:text-foreground">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-surface-border pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            A division of {SITE.parentGroup}
          </p>
        </div>
      </Container>
    </footer>
  );
}
