/**
 * Community content registry (build-dev-1.4).
 *
 * The finished Field Note F—01 ships with rendered body JSX inside
 * src/app/community/[slug]/articles/DriftResetInflation.tsx. Every
 * other entry uses the shared "Forthcoming" stub.
 */

export type Category = "field-note" | "reading-list" | "showcase";

export interface Article {
  slug: string;
  category: Category;
  ref: string;          // F—01, R—02, S—01 …
  title: string;
  subtitle: string;
  dateLabel: string;    // "May 2026" or "Forthcoming"
  readTime?: string;    // "5 min read"
  forthcoming?: boolean;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  "field-note": "Field note",
  "reading-list": "Reading list",
  showcase: "Showcase",
};

export const FILTERS: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "field-note", label: "Field notes" },
  { id: "reading-list", label: "Reading list" },
  { id: "showcase", label: "Showcase" },
];

export const ARTICLES: Article[] = [
  {
    slug: "drift-reset-inflation",
    category: "field-note",
    ref: "F—01",
    title: "Drift, Reset, Inflation.",
    subtitle:
      "Three failure modes of AI-assisted creative production — and what they share in common.",
    dateLabel: "May 2026",
    readTime: "5 min read",
  },
  {
    slug: "format-intelligence",
    category: "field-note",
    ref: "F—02",
    title: "Format Intelligence as a forward edge.",
    subtitle:
      "On research-investment as the substrate's leading indicator.",
    dateLabel: "Forthcoming",
    forthcoming: true,
  },
  {
    slug: "brand-calibration-compounds",
    category: "field-note",
    ref: "F—03",
    title: "Why brand calibration compounds.",
    subtitle: "The durable asset, and what it's measured against.",
    dateLabel: "Forthcoming",
    forthcoming: true,
  },
  {
    slug: "reading-anthropic-calibration",
    category: "reading-list",
    ref: "R—01",
    title: "Reading: Anthropic on calibrated systems.",
    subtitle:
      "Substrate as infrastructure — adjacent thinking from a frontier lab.",
    dateLabel: "Forthcoming",
    forthcoming: true,
  },
  {
    slug: "reading-editorial-ai-field",
    category: "reading-list",
    ref: "R—02",
    title: "Reading: editorial AI in the field.",
    subtitle:
      "Field notes on what others in the editorial AI space are publishing.",
    dateLabel: "Forthcoming",
    forthcoming: true,
  },
  {
    slug: "maren-substrate-sample",
    category: "showcase",
    ref: "S—01",
    title: "Maren — substrate sample.",
    subtitle:
      "An internal brand calibration substrate, read end-to-end.",
    dateLabel: "Forthcoming",
    forthcoming: true,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
