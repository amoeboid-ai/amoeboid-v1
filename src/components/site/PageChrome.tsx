import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

/**
 * Small page-chrome primitives used across product / engine / work / company pages.
 */

export function Crumb({
  parent,
  parentHref,
  current,
}: {
  parent: string;
  parentHref: string;
  current: string;
}) {
  return (
    <span className="inline-flex items-center gap-3.5 font-mono-util text-ink-mute">
      <span aria-hidden className="inline-block h-px w-7 bg-ink-faint" />
      <span>
        <Link href={parentHref} className="text-ink hover:opacity-70 transition-opacity">
          {parent}
        </Link>
        {" / "}
        {current}
      </span>
    </span>
  );
}

export function NumberedLabel({
  prefix,
  label,
}: {
  prefix: string;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-3.5 font-mono-util text-ink-mute">
      <span aria-hidden className="inline-block h-px w-7 bg-ink-faint" />
      <span>
        {prefix} · {label}
      </span>
    </span>
  );
}

export interface SystemListItem {
  num: string;
  name: string;
  desc: string;
  includes?: string[];
}

export function SystemList({
  heading,
  items,
  className,
}: {
  heading: string;
  items: SystemListItem[];
  className?: string;
}) {
  return (
    <div className={cn("mt-8 pt-7 border-t border-ink-line", className)}>
      <h4 className="font-mono-util text-ink-mute mb-4">{heading}</h4>
      <ol className="flex flex-col">
        {items.map((s) => (
          <li
            key={s.num}
            className="grid grid-cols-[64px_minmax(0,1.1fr)_minmax(0,1.2fr)] gap-5 py-4 border-t border-ink-line first:border-t-0 items-baseline"
          >
            <span className="font-mono-util text-ink-mute">{s.num}</span>
            <span className="font-display font-medium text-[17px] tracking-[-0.012em] text-ink">
              {s.name}
            </span>
            <span className="font-display text-[14.5px] leading-[1.55] tracking-[-0.005em] text-ink-soft">
              {s.desc}
            </span>
            {s.includes && (
              <ul className="col-start-2 col-span-2 -mt-1 flex flex-wrap gap-x-4 gap-y-1 font-mono-util text-ink-mute">
                {s.includes.map((inc) => (
                  <li key={inc}>· {inc}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ArrowLink({
  href,
  children,
  variant = "underline",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "underline" | "plain";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 font-display font-medium text-[15px] tracking-[-0.005em] text-ink",
        variant === "underline" && "border-b border-ink pb-0.5",
        "hover:opacity-70 transition-opacity",
        className
      )}
    >
      {children}
      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
    </Link>
  );
}
