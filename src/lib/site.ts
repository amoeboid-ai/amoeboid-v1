export const SITE = {
  name: "Amoeboid",
  tagline: "Create Differently",
  contactEmail: "hello@amoeboid.ai",
  copyright: "© Amoeboid 2026",
} as const;

export const NAV = [
  { href: "/products", label: "Products" },
  { href: "/engine", label: "Engine" },
  { href: "/work", label: "Work" },
  { href: "/company", label: "Company" },
] as const;

export const FOOTER_NAV: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Products",
    links: [
      { href: "/products", label: "Products hub" },
      { href: "/sense", label: "Sense" },
      { href: "/form", label: "Form" },
      { href: "/reach", label: "Reach" },
    ],
  },
  {
    heading: "Studio",
    links: [
      { href: "/engine", label: "Engine" },
      { href: "/work", label: "Work" },
      { href: "/company", label: "Company" },
    ],
  },
  {
    heading: "Engage",
    links: [
      { href: "/contact", label: "Start an engagement" },
      { href: "mailto:hello@amoeboid.ai", label: "Email the team" },
    ],
  },
];
