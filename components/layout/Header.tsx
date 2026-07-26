"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/constants/site";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import MobileMenu from "@/components/layout/MobileMenu";

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
      <header className="fixed inset-x-0 top-0 z-50">
        <motion.div
          className={cn(
            "mx-auto mt-3 flex max-w-[1280px] items-center justify-between rounded-full px-4 py-2.5 transition-colors duration-500 sm:mt-4 sm:px-6",
            scrolled
              ? "glass glass-border shadow-soft"
              : "border border-transparent bg-transparent"
          )}
        >
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full px-2 py-1 text-lg font-semibold tracking-tight text-foreground"
          >
            <span className="flex size-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary-400 to-accent-400 text-sm font-bold text-background">
              A
            </span>
            {SITE.name}
          </Link>

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
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                    isActive
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-white/[0.07]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" size="sm">
              Get in touch
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex size-10 items-center justify-center rounded-full text-foreground lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </motion.div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} pathname={pathname} />
    </>
  );
}
