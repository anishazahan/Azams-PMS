import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

const HEADER_OFFSET = -100;

export function setLenisInstance(instance: Lenis | null) {
  lenisInstance = instance;
}

export function scrollToTop(duration = 1.4) {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { duration });
    return;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function scrollToSelector(selector: string, duration = 1.4) {
  const el = document.querySelector<HTMLElement>(selector);
  if (!el) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(el, { duration, offset: HEADER_OFFSET });
    return;
  }

  const top = el.getBoundingClientRect().top + window.scrollY + HEADER_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}
