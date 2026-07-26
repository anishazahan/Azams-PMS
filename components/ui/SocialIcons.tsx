import type { SVGProps } from "react";

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8.1h2.72l.41-3.15h-3.13V7.75c0-.91.25-1.53 1.56-1.53h1.67V3.4A22.4 22.4 0 0 0 14.02 3.2c-2.4 0-4.05 1.47-4.05 4.16v2.39H7.24v3.15h2.73V21z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5a1.94 1.94 0 1 0 0-3.88 1.94 1.94 0 0 0 0 3.88ZM5.2 10.4h3.48V20H5.2zM10.98 10.4h3.34v1.31h.05c.47-.87 1.6-1.78 3.3-1.78 3.53 0 4.18 2.28 4.18 5.24V20h-3.48v-4.5c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.16-1.73 2.37V20h-3.48z" />
    </svg>
  );
}
