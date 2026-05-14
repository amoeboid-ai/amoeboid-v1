import Link from "next/link";
import type { ReactNode } from "react";
import { Section } from "@/components/layout";
import { PlaceholderMedia } from "./PlaceholderMedia";
import { CATEGORY_LABELS, type Article } from "@/lib/community";

/**
 * Shared chrome for every /community/[slug] article — breadcrumb, title,
 * subtitle, byline row, hero placeholder, body slot, and end matter.
 *
 * The reading column tightens to ~720px regardless of viewport, per
 * build-dev-1.4 §5. Body is rendered through `.article-md` (see globals.css).
 */
export function ArticleShell({
  article,
  children,
}: {
  article: Article;
  children: ReactNode;
}) {
  const isForthcoming = article.forthcoming === true;
  return (
    <Section pad="default" fullBleed>
      <article className="mx-auto w-full" style={{ maxWidth: 720 }}>
        <div className="gutter md:px-0">
          {/* Breadcrumb / metadata */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono-util text-ink-mute">
            <Link
              href="/community"
              className="text-ink-mute hover:text-ink transition-colors"
            >
              ← Community
            </Link>
            <span aria-hidden>·</span>
            <span>{CATEGORY_LABELS[article.category]}</span>
            <span aria-hidden>·</span>
            <span>{article.ref}</span>
            <span aria-hidden>·</span>
            <span>{article.dateLabel}</span>
          </div>

          {/* Title + subtitle */}
          <h1
            className="mt-8 font-display font-medium text-ink"
            style={{
              fontSize: "clamp(28px, 3.4vw, 32px)",
              lineHeight: 1.15,
              letterSpacing: "-0.018em",
            }}
          >
            {article.title}
          </h1>
          <p className="mt-4 font-sans text-[17px] leading-[1.5] text-ink-soft">
            {article.subtitle}
          </p>

          {/* Byline + read time */}
          <div className="mt-6 flex items-center gap-2 font-mono-util text-ink-mute">
            <span>By Amoeboid</span>
            {article.readTime && (
              <>
                <span aria-hidden>·</span>
                <span>{article.readTime}</span>
              </>
            )}
            {isForthcoming && (
              <>
                <span aria-hidden>·</span>
                <span>Forthcoming</span>
              </>
            )}
          </div>

          {/* Hero placeholder */}
          <div className="mt-10">
            <PlaceholderMedia
              ratio="16/9"
              label="Hero · 16:9 · still or motion"
              sub="Placeholder — slot for editorial visual"
            />
          </div>

          {/* Body */}
          <div className="article-md mt-12">{children}</div>

          {/* End matter */}
          <hr className="mt-20 border-0 h-px bg-ink-line" />
          <div className="mt-6 mb-2 flex items-center justify-between font-mono-util text-ink-mute">
            <span>End · {CATEGORY_LABELS[article.category]} {article.ref}</span>
            <a
              href="#subscribe"
              className="text-ink-mute hover:text-ink transition-colors"
            >
              Share · Subscribe → ↗
            </a>
          </div>
        </div>
      </article>
    </Section>
  );
}
