"use client";

import Container from "@/components/ui/Container";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/ui/SocialIcons";
import { FOOTER_LINKS, NAV_ITEMS, SITE } from "@/constants/site";
import {
  Activity,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const socials = [
  { icon: FacebookIcon, href: SITE.socials.facebook, label: "Facebook" },
  { icon: InstagramIcon, href: SITE.socials.instagram, label: "Instagram" },
  { icon: LinkedInIcon, href: SITE.socials.linkedin, label: "LinkedIn" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const primaryPhone = SITE.phones?.[0] || "+91 98765 43210";
  const formattedPhone = primaryPhone.replace(/\s/g, "");

  return (
    <footer className="relative w-full overflow-hidden border-t border-slate-800 bg-slate-950 text-slate-100">
      {/* Background Laser Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Ambient Radial Accent */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 size-[35rem] -translate-x-1/2 bg-sky-600/10 blur-[180px]" />

      <Container className="relative z-10 pt-16 pb-12 sm:pt-20">
        {/* Live System Status Ticker */}
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4 rounded-sm border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-md">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="uppercase tracking-wider">
              AMAZE OPERATIONS GRID: ALL PAN-INDIA NODES ACTIVE
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
            <Activity className="size-3.5 text-sky-400" />
            <span>24/7 CENTRAL COMMAND SYNCED</span>
          </div>
        </div>

        {/* Main Footer Layout */}
        <div className="relative rounded-sm border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-xl sm:p-10">
          <div className="pointer-events-none absolute left-2 top-2 font-mono text-[10px] text-sky-500/40">
            +
          </div>
          <div className="pointer-events-none absolute right-2 top-2 font-mono text-[10px] text-sky-500/40">
            +
          </div>
          <div className="pointer-events-none absolute bottom-2 left-2 font-mono text-[10px] text-sky-500/40">
            +
          </div>
          <div className="pointer-events-none absolute bottom-2 right-2 font-mono text-[10px] text-sky-500/40">
            +
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Column 1: Brand & Enterprise Profile */}
            <div className="flex flex-col gap-5 lg:col-span-4">
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-sm border border-sky-500/40 bg-sky-500/20 font-mono text-base font-bold text-sky-400">
                  A
                </div>
                <span className="font-mono text-lg font-extrabold tracking-tight text-white uppercase">
                  {SITE.name}
                </span>
              </Link>

              <p className="max-w-sm text-xs leading-relaxed text-slate-300">
                {SITE.description ||
                  "Next-generation integrated facility management platform engineered for commercial, residential, and industrial infrastructure across India."}
              </p>

              {/* Social Channels */}
              <div className="flex items-center gap-2 pt-2">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group flex size-9 items-center justify-center rounded-sm border border-slate-800 bg-slate-950/80 text-slate-400 transition-all duration-300 hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-400"
                  >
                    <Icon className="size-4 transition-transform group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="lg:col-span-2">
              <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400">
                {"// NAVIGATE"}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5 font-mono text-xs">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between text-slate-300 transition-colors duration-200 hover:text-sky-400"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Corporate Links */}
            <div className="lg:col-span-2">
              <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400">
                {"// COMPANY"}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5 font-mono text-xs">
                {FOOTER_LINKS.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between text-slate-300 transition-colors duration-200 hover:text-sky-400"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Telemetry */}
            <div className="lg:col-span-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400">
                {"// CENTRAL CONTACT"}
              </h3>
              <ul className="mt-4 flex flex-col gap-3.5 text-xs text-slate-300">
                <li className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 size-4 shrink-0 text-sky-400"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed">
                    {SITE.address.line1}, {SITE.address.line2},{" "}
                    {SITE.address.city} {SITE.address.postalCode}
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Phone
                    className="size-4 shrink-0 text-sky-400"
                    aria-hidden="true"
                  />
                  <a
                    href={`tel:${formattedPhone}`}
                    className="font-mono transition-colors hover:text-sky-400"
                  >
                    {primaryPhone}
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Mail
                    className="size-4 shrink-0 text-sky-400"
                    aria-hidden="true"
                  />
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-mono transition-colors hover:text-sky-400"
                  >
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-6 font-mono text-xs text-slate-500 sm:flex-row">
          <p>
            © {currentYear} {SITE.legalName}. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <ShieldCheck className="size-3.5 text-emerald-400" />
            <span>A division of {SITE.parentGroup}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
