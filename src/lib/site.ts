export const SITE = {
  name: "Amoeboid",
  tagline: "Create Differently",
  contactEmail: "hello@amoeboid.ai",
  copyright: "© Amoeboid 2026",
} as const;

export interface NavItem {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}

export const NAV: NavItem[] = [
  {
    href: "/products",
    label: "Products",
    children: [
      { href: "/sense", label: "Sense" },
      { href: "/form", label: "Form" },
      { href: "/reach", label: "Reach" },
      { href: "/adapt", label: "Adapt" },
    ],
  },
  { href: "/work", label: "Work" },
  { href: "/company", label: "Company" },
  { href: "/community", label: "Community" },
];

export const FOOTER_NAV: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Products",
    links: [
      { href: "/products", label: "Products hub" },
      { href: "/sense", label: "Sense" },
      { href: "/form", label: "Form" },
      { href: "/reach", label: "Reach" },
      { href: "/adapt", label: "Adapt" },
    ],
  },
  {
    heading: "Studio",
    links: [
      { href: "/work", label: "Work" },
      { href: "/company", label: "Company" },
      { href: "/community", label: "Community" },
    ],
  },
  {
    heading: "Engage",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "mailto:hello@amoeboid.ai", label: "Email the team" },
    ],
  },
];
