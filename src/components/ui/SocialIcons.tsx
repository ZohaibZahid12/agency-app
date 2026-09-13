import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.36C16.2 4.32 15.19 4.24 14 4.24c-2.45 0-4.13 1.5-4.13 4.24V10.5H7.36v3h2.51V21h3.63Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.15" cy="6.85" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H4.06V20h2.88V8.5ZM5.5 4a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 5.5 4ZM20 13.4c0-3.3-1.76-4.84-4.11-4.84-1.9 0-2.75 1.05-3.22 1.79V8.5H9.79c.04.85 0 11.5 0 11.5h2.88v-6.42c0-.34.02-.69.13-.93.28-.68.9-1.39 1.96-1.39 1.38 0 1.94 1.05 1.94 2.6V20H20v-6.6Z" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.53 3H20.5l-6.49 7.42L21.7 21h-6.32l-4.95-6.47L4.73 21H1.75l6.94-7.93L1 3h6.48l4.47 5.9L17.53 3Zm-1.11 16.17h1.64L7.66 4.74H5.9l10.52 14.43Z" />
    </svg>
  );
}
