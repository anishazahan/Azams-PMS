"use client";

import Button from "@/components/ui/Button";
import { NAV_ITEMS, SITE } from "@/constants/site";
import { EASE_PREMIUM } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
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
              const isActive =
                item.href === "/"
                  ? pathname === "/"
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
                    className={cn(
                      "block border-b border-surface-border py-4 text-3xl font-medium tracking-tight",
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
            <Button href="/contact" size="lg" className="w-full">
              Get in touch
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
