import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

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
