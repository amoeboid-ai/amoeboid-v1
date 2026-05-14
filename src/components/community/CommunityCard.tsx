import Link from "next/link";
import { CATEGORY_LABELS, type Article } from "@/lib/community";
import { PlaceholderMedia } from "./PlaceholderMedia";
import { cn } from "@/lib/cn";

/**
 * Single feed card on /community. Routes to /community/[slug]. Forthcoming
 * cards show a dashed thumbnail and a "Forthcoming" badge; finished cards
 * show the editorial hero placeholder slot.
 */
export function CommunityCard({ article }: { article: Article }) {
  const isForthcoming = article.forthcoming === true;
  return (
    <Link
      href={`/community/${article.slug}`}
      className="group flex flex-col gap-4 focus-visible:outline focus-visible:outline-1 focus-visible:outline-ink focus-visible:outline-offset-4"
    >
      <PlaceholderMedia
        ratio="16/9"
        label={isForthcoming ? "Forthcoming" : "Hero · 16:9"}
        className={cn(
          "transition-colors",
          !isForthcoming && "group-hover:border-ink"
        )}
      />
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <span className="font-mono-util text-ink-mute">
            {CATEGORY_LABELS[article.category]} · {article.ref}
          </span>
          {isForthcoming && (
            <span
              className={cn(
                "inline-flex items-center font-mono-util",
                "px-2 py-0.5 rounded-full border border-ink-faint",
                "text-ink-mute"
              )}
            >
              Forthcoming
            </span>
          )}
        </div>
        <h3 className="font-display font-medium text-[19px] leading-[1.25] tracking-[-0.012em] text-ink">
          {article.title}
        </h3>
        <p className="font-sans text-[14px] leading-[1.5] text-ink-soft">
          {article.subtitle}
        </p>
        <span className="font-mono-util text-ink-mute mt-1">
          {article.dateLabel}
        </span>
      </div>
    </Link>
  );
}
