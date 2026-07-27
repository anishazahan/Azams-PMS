"use client";

import Button from "@/components/ui/Button";
import { NAV_ITEMS, SITE } from "@/constants/site";
import { scrollToSelector, scrollToTop } from "@/lib/lenis";
import { EASE_PREMIUM } from "@/lib/motion";
import { getHomeSectionId } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect, type MouseEvent } from "react";

export default function MobileMenu({
  open,
  onClose,
  pathname,
  scrollActiveHref,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
  scrollActiveHref: string | null;
}) {
  const isHome = pathname === "/";

  const handleNavClick = (event: MouseEvent, item: NavItem) => {
    if (!isHome) return;

    if (item.href === "/") {
      event.preventDefault();
      scrollToTop();
      window.history.replaceState(null, "", "/");
      onClose();
      return;
    }

    const sectionId = getHomeSectionId(item.href);
    if (sectionId) {
      event.preventDefault();
      onClose();
      // Let the drawer's close animation clear before scrolling.
      setTimeout(() => {
        scrollToSelector(`#${sectionId}`);
        window.history.replaceState(null, "", `/#${sectionId}`);
      }, 300);
    }
  };
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    onClose();
  }, [pathname]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE_PREMIUM }}
        >
          <div className="flex items-center justify-between px-6 pt-6">
            <span className="text-lg font-semibold text-foreground">
              {SITE.name}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="flex size-10 items-center justify-center rounded-full border border-surface-border text-foreground"
              aria-label="Close menu"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <nav className="mt-16 flex flex-col gap-2 px-6">
            {NAV_ITEMS.map((item, i) => {
              const isActive = isHome
                ? item.href === (scrollActiveHref ?? "/")
                : item.href === "/"
                  ? false
                  : pathname.startsWith(item.href);
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 * i,
                    duration: 0.5,
                    ease: EASE_PREMIUM,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item)}
                    className={cn(
                      "block border-b border-surface-border py-3 text-xl font-medium tracking-tight",
                      isActive ? "text-foreground" : "text-muted",
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <motion.div
            className="mt-10 px-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.08 * NAV_ITEMS.length,
              duration: 0.5,
              ease: EASE_PREMIUM,
            }}
          >
            <Button
              href="/contact"
              size="lg"
              variant="tactical"
              withArrow
              className="w-full font-mono text-xs uppercase tracking-wider"
            >
              Request Audit
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
