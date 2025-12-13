export type FooterLink = {
  label: string;
  href: string;
};

export type FooterContact = {
  label: string;
  href: string;
};

export type FooterSocialKey = "instagram" | "facebook" | "linkedin";

export type FooterSocialLink = {
  key: FooterSocialKey;
  label: string;
  href: string;
};

export type FooterContactKey = "mail" | "phone" | "location";

export type FooterContactItem = {
  key: FooterContactKey;
  label: string;
  href: string;
};

export const footerQuickLinks: FooterLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const footerServices: FooterLink[] = [
  { label: "IT Support", href: "#it-support" },
  { label: "Automation", href: "#automation" },
  { label: "Marketing", href: "#marketing" },
  { label: "Consulting", href: "#consulting" },
  { label: "Development", href: "#development" },
];

export const footerSocial: FooterLink[] = [
  { label: "Instagram", href: "#instagram" },
  { label: "Facebook", href: "#facebook" },
  { label: "LinkedIn", href: "#linkedin" },
];

export const footerSocialLinks: FooterSocialLink[] = [
  { key: "instagram", label: "Instagram", href: "#instagram" },
  { key: "facebook", label: "Facebook", href: "#facebook" },
  { key: "linkedin", label: "LinkedIn", href: "#linkedin" },
];

export const footerContactItems: FooterContactItem[] = [
  { key: "mail", label: "hello@agency.com", href: "mailto:hello@agency.com" },
  { key: "phone", label: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { key: "location", label: "San Francisco, CA", href: "#location" },
];


