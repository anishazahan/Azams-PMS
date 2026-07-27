"use client";

import { useEffect, useState } from "react";

interface ScrollSpySection {
  id: string;
  href: string;
}

export function useScrollSpy(sections: ScrollSpySection[], enabled: boolean) {
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const targets = sections
      .map((section) => ({ href: section.href, el: document.getElementById(section.id) }))
      .filter((target): target is { href: string; el: HTMLElement } => target.el !== null);

    if (targets.length === 0) return;

    const intersecting = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            intersecting.add(entry.target);
          } else {
            intersecting.delete(entry.target);
          }
        }

        // If more than one section is inside the detection band at once,
        // prefer whichever appears later on the page.
        let next: string | null = null;
        for (const target of targets) {
          if (intersecting.has(target.el)) next = target.href;
        }
        setActiveHref(next);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    targets.forEach((target) => observer.observe(target.el));
    return () => observer.disconnect();
  }, [sections, enabled]);

  return enabled ? activeHref : null;
}
