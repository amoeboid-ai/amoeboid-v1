"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "@/components/marks/Wordmark";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/cn";
import { useAdaptive } from "@/components/adaptive/AdaptiveContext";
import { MobileNav } from "@/components/site/MobileNav";

/**
 * Header — identical on every page per Phase 1 spec.
 * Lockup left (wordmark only "amoeboid", 22px, weight 700), nav right
 * (Products / Engine / Work / Company + pill Contact).
 * Active route gets aria-current="page" + 1px ink underline.
 * ≤720px non-active, non-Contact links collapse.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const { open: openAdaptive } = useAdaptive();

  return (
    <header className="sticky top-0 z-30 bg-paper/85 backdrop-blur-md border-b border-ink-line">
      <div
        className="mx-auto flex w-full items-center justify-between gutter"
        style={{ maxWidth: "var(--container-max)", height: 72 }}
      >
        <Link href="/" aria-label="Amoeboid home" className="inline-flex">
          <Wordmark size={22} />
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-7">
          <ul className="hidden md:flex items-center gap-7">
            {NAV.map((item) => {
              const active = pathname?.startsWith(item.href) ?? false;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "font-mono-util tracking-[0.16em] uppercase text-[11px]",
                      "text-ink-soft hover:text-ink transition-colors",
                      active &&
                        "text-ink relative after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-px after:bg-ink"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <MobileNav />
          <button
            type="button"
            onClick={openAdaptive}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-2",
              "bg-ink text-paper font-mono-util text-[11px] tracking-[0.16em]",
              "hover:bg-ink/90 transition-colors"
            )}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
