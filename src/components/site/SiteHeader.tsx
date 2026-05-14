"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Wordmark } from "@/components/marks/Wordmark";
import { NAV, type NavItem } from "@/lib/site";
import { cn } from "@/lib/cn";
import { useAdaptive } from "@/components/adaptive/AdaptiveContext";
import { MobileNav } from "@/components/site/MobileNav";

/**
 * Header — identical on every page.
 *
 * Left:  wordmark
 * Centre nav (≥md): Products (dropdown · Sense/Form/Reach) · Engine · Work · Company · Community
 * Right cluster:    Login (ghost) · Talk to Adaptive (primary pill)
 * Mobile (<md):     Login (compact) · Adaptive (pill) · Menu trigger
 *
 * Talk to Adaptive opens the Adaptive widget anchored to the header
 * top-right (see AdaptiveWidget). The old Contact pill is removed and
 * now lives in the footer (FOOTER_NAV) and on /contact.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const { open: openAdaptive } = useAdaptive();
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-paper/85 backdrop-blur-md border-b border-ink-line">
      <div
        className="mx-auto flex w-full items-center justify-between gutter"
        style={{ maxWidth: "var(--container-max)", height: 72 }}
      >
        <Link href="/" aria-label="Amoeboid home" className="inline-flex">
          <Wordmark size={22} />
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-3 sm:gap-5 md:gap-7">
          <ul className="hidden md:flex items-center gap-7">
            {NAV.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                pathname={pathname ?? ""}
                productsOpen={productsOpen}
                setProductsOpen={setProductsOpen}
              />
            ))}
          </ul>

          <MobileNav />

          {/* Login — ghost, inner side of Talk to Adaptive */}
          <Link
            href="#"
            aria-label="Login"
            className={cn(
              "inline-flex items-center gap-2 rounded-full",
              "px-3 py-2 md:px-4 md:py-2",
              "bg-paper text-ink border border-ink",
              "font-mono-util text-[11px] tracking-[0.16em]",
              "hover:bg-ink hover:text-paper transition-colors",
              // Hide label below 360px, show icon only
              "max-[359px]:px-2"
            )}
          >
            <span className="max-[359px]:sr-only">Login</span>
            <svg
              viewBox="0 0 16 16"
              width="13"
              height="13"
              fill="none"
              aria-hidden="true"
              className="hidden max-[359px]:inline-block"
            >
              <circle cx="8" cy="5.5" r="2.8" stroke="currentColor" strokeWidth="1.3" />
              <path
                d="M2.5 13.5c1-2.7 3.2-4 5.5-4s4.5 1.3 5.5 4"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
          </Link>

          {/* Talk to Adaptive — primary pill */}
          <button
            type="button"
            onClick={openAdaptive}
            data-adaptive-trigger
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-2",
              "bg-ink text-paper font-mono-util text-[11px] tracking-[0.16em]",
              "hover:bg-ink/90 transition-colors"
            )}
          >
            <span className="hidden md:inline">Talk to Adaptive</span>
            <span className="md:hidden">Adaptive</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

function NavLink({
  item,
  pathname,
  productsOpen,
  setProductsOpen,
}: {
  item: NavItem;
  pathname: string;
  productsOpen: boolean;
  setProductsOpen: (v: boolean) => void;
}) {
  const active = pathname.startsWith(item.href);

  if (item.children?.length) {
    return (
      <li
        className="relative"
        onMouseEnter={() => setProductsOpen(true)}
        onMouseLeave={() => setProductsOpen(false)}
        onFocus={() => setProductsOpen(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) setProductsOpen(false);
        }}
      >
        <Link
          href={item.href}
          aria-current={active ? "page" : undefined}
          aria-haspopup="menu"
          aria-expanded={productsOpen}
          className={cn(
            "font-display font-medium text-[14px] tracking-[-0.005em]",
            "text-ink-soft hover:text-ink transition-colors",
            active &&
              "text-ink relative after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-px after:bg-ink"
          )}
        >
          {item.label}
        </Link>
        {productsOpen && (
          <div
            role="menu"
            className={cn(
              "absolute left-1/2 -translate-x-1/2 top-full pt-3",
              "min-w-[180px]"
            )}
          >
            <ul
              className={cn(
                "bg-paper border border-ink-line rounded-[14px]",
                "shadow-[0_18px_40px_-24px_rgba(12,12,12,0.35)]",
                "py-2"
              )}
            >
              {item.children.map((child) => (
                <li key={child.href}>
                  <Link
                    role="menuitem"
                    href={child.href}
                    className={cn(
                      "block px-4 py-2",
                      "font-display font-medium text-[14px] tracking-[-0.005em]",
                      "text-ink-soft hover:text-ink hover:bg-paper-2 transition-colors"
                    )}
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    );
  }

  return (
    <li>
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
}
