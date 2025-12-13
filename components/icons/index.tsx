import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  title?: string;
};

export const IconArrowRight = ({ title = "Arrow right", ...props }: IconProps) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d="M5 12h12m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconSun = ({ title = "Light mode", ...props }: IconProps) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
        stroke="currentColor"
        strokeWidth={2}
      />
      <path
        d="M12 2v2m0 16v2M4 12H2m20 0h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
};

export const IconMoon = ({ title = "Dark mode", ...props }: IconProps) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d="M21 13.3A8.3 8.3 0 0 1 10.7 3a6.9 6.9 0 1 0 10.3 10.3Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconMenu = ({ title = "Menu", ...props }: IconProps) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
};

export const IconX = ({ title = "Close", ...props }: IconProps) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
};

export const IconCheck = ({ title = "Check", ...props }: IconProps) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconInstagram = ({ title = "Instagram", ...props }: IconProps) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z"
        stroke="currentColor"
        strokeWidth={2}
      />
      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth={2} />
      <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth={3} strokeLinecap="round" />
    </svg>
  );
};

export const IconFacebook = ({ title = "Facebook", ...props }: IconProps) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v3H8v3h2v6h3v-6h2.2l.8-3H13V9c0-.6.4-1 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const IconLinkedIn = ({ title = "LinkedIn", ...props }: IconProps) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d="M6 9H3v12h3V9Z"
        fill="currentColor"
      />
      <path
        d="M4.5 7.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"
        fill="currentColor"
      />
      <path
        d="M21 21h-3v-6.1c0-1.5-.6-2.5-2-2.5-1.1 0-1.7.7-2 1.4-.1.3-.1.7-.1 1.1V21h-3s.04-10 0-12h3v1.7c.4-.6 1.2-1.7 3-1.7 2.2 0 4.1 1.5 4.1 4.8V21Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const IconMail = ({ title = "Email", ...props }: IconProps) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth={2} />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
    </svg>
  );
};

export const IconPhone = ({ title = "Phone", ...props }: IconProps) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d="M7 4h3l1 5-2 1c1 2.7 3.3 5 6 6l1.1-2 4.9 1v3c0 1.1-.9 2-2 2C10.8 20 4 13.2 4 5c0-1.1.9-2 2-2Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconMapPin = ({ title = "Location", ...props }: IconProps) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d="M12 22s7-4.5 7-12a7 7 0 1 0-14 0c0 7.5 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth={2}
      />
      <path d="M12 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="currentColor" />
    </svg>
  );
};


