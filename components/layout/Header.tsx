"use client";

import MobileMenu from "@/components/layout/MobileMenu";
import Button from "@/components/ui/Button";
import { NAV_ITEMS, SITE } from "@/constants/site";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 16);
  });

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6">
          <motion.div
            className={cn(
              "relative flex items-center justify-between rounded-sm px-4 py-2.5 transition-all duration-300 sm:px-6",
              scrolled
                ? "border border-slate-800 bg-slate-950/85 shadow-2xl backdrop-blur-xl"
                : "border border-slate-800/40 bg-slate-950/40 backdrop-blur-md",
            )}
          >
            {/* Tactical Corner Crosshairs */}
            <div className="pointer-events-none absolute left-1 top-1 font-mono text-[9px] text-sky-500/40">
              +
            </div>
            <div className="pointer-events-none absolute right-1 top-1 font-mono text-[9px] text-sky-500/40">
              +
            </div>
            <div className="pointer-events-none absolute bottom-1 left-1 font-mono text-[9px] text-sky-500/40">
              +
            </div>
            <div className="pointer-events-none absolute bottom-1 right-1 font-mono text-[9px] text-sky-500/40">
              +
            </div>

            {/* Brand Logo & Live Telemetry Badge */}
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="group flex items-center gap-2.5 rounded-sm text-base font-extrabold tracking-tight text-white uppercase"
              >
                <div className="flex size-8 items-center justify-center rounded-sm border border-sky-500/40 bg-sky-500/20 font-mono text-sm font-bold text-sky-400 transition-colors group-hover:bg-sky-500/30">
                  A
                </div>
                <span className="font-mono text-sm font-bold tracking-wider">
                  {SITE.name}
                </span>
              </Link>

              {/* Status Ticker Indicator */}
              <div className="hidden items-center gap-1.5 rounded-sm border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] text-emerald-400 sm:flex">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                <span className="uppercase tracking-widest">ONLINE</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 lg:flex">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative rounded-sm px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors duration-200",
                      isActive
                        ? "font-semibold text-sky-400"
                        : "text-slate-400 hover:text-slate-200",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-sharp"
                        className="absolute inset-0 rounded-sm border border-sky-500/40 bg-sky-500/10"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <div className="hidden lg:block">
                <Button
                  href="/contact"
                  size="sm"
                  className="group rounded-sm bg-sky-400 font-mono text-xs uppercase tracking-wider text-slate-950 hover:bg-sky-300"
                >
                  <span>Request Audit</span>
                  <ArrowUpRight className="ml-1 size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Button>
              </div>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="flex size-9 items-center justify-center rounded-sm border border-slate-800 bg-slate-900/80 text-slate-200 transition-colors hover:border-slate-700 hover:bg-slate-800 lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-4" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
