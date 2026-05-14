"use client";

import { useState } from "react";
import { ARTICLES, FILTERS, type Category } from "@/lib/community";
import { CommunityCard } from "./CommunityCard";
import { cn } from "@/lib/cn";

type FilterId = "all" | Category;

export function CommunityFeed() {
  const [active, setActive] = useState<FilterId>("all");

  const filtered =
    active === "all"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === active);

  return (
    <div className="flex flex-col gap-10">
      {/* Filter bar — horizontally scrollable on narrow viewports */}
      <div
        role="tablist"
        aria-label="Filter community"
        className={cn(
          "flex items-center gap-2 overflow-x-auto",
          "[&::-webkit-scrollbar]:hidden [scrollbar-width:none]",
          "-mx-2 px-2 pb-1"
        )}
      >
        {FILTERS.map((f) => {
          const isActive = f.id === active;
          return (
            <button
              key={f.id}
              role="tab"
              aria-selected={isActive}
              type="button"
              onClick={() => setActive(f.id)}
              className={cn(
                "shrink-0 inline-flex items-center rounded-full",
                "px-4 py-2 border",
                "font-mono-util text-[11px] tracking-[0.16em]",
                "transition-colors duration-200",
                isActive
                  ? "bg-ink text-paper border-ink"
                  : "bg-paper text-ink border-ink-line hover:border-ink"
              )}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {filtered.map((a) => (
          <CommunityCard key={a.slug} article={a} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="font-sans text-[15px] text-ink-soft">
          Nothing in this category yet.
        </p>
      )}
    </div>
  );
}
