"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Wordmark } from "@/components/marks/Wordmark";
import { NAV, type NavItem } from "@/lib/site";
import { cn } from "@/lib/cn";
import { useAdaptive } from "@/components/adaptive/AdaptiveContext";
import { MobileNav } from "@/components/site/MobileNav";
import { createClient } from "@/lib/supabase/client";

/**
 * Header — identical on every page.
 *
 * Left:  wordmark
 * Centre nav (≥md): Products (dropdown · Sense/Form/Reach/Adapt) · Work · Company · Community
 * Right cluster:    Login | Sign out (depends on auth state) · Talk to Adaptive (primary pill)
 * Mobile (<md):     Same right cluster, Adaptive label collapses · Menu trigger
 *
 * Auth pill: layout.tsx fetches the session server-side and passes
 * initialAuthed in; the header subscribes to onAuthStateChange to keep
 * the pill in sync after sign-in / sign-out without a full reload.
 *
 * Pill labels render in literal sentence case ("Login" / "Sign out" /
 * "Talk to Adaptive"). Both the top-level menu links and the right-
 * cluster pills use the shared .nav-label token so the header reads
 * as one typographic system.
 */
export function SiteHeader({ initialAuthed = false }: { initialAuthed?: boolean }) {
  const pathname = usePathname();
  const router = useRouter();
  const { open: openAdaptive } = useAdaptive();
  const [productsOpen, setProductsOpen] = useState(false);
  const [authed, setAuthed] = useState(initialAuthed);
  const [signingOut, setSigningOut] = useState(false);
  const supabase = useMemo(() => createClient(), []);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthed(!!session);
    });
    return () => subscription.unsubscribe();
  }, [supabase]);

  async function handleSignOut() {
    if (signingOut) return;
    setSigningOut(true);
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

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

          {/* Auth pill — Login (link) when signed out, Sign out (button) when signed in */}
          {authed ? (
            <button
              type="button"
              onClick={handleSignOut}
              disabled={signingOut}
              aria-label="Sign out"
              className={cn(
                "inline-flex items-center gap-2 rounded-full",
                "px-3 py-3 md:px-4 md:py-3",
                "bg-paper text-ink border border-ink",
                "nav-label",
                "hover:bg-ink hover:text-paper transition-colors",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                "max-[359px]:px-2"
              )}
            >
              <span className="max-[359px]:sr-only">
                {signingOut ? "Signing out…" : "Sign out"}
              </span>
              <svg
                viewBox="0 0 16 16"
                width="13"
                height="13"
                fill="none"
                aria-hidden="true"
                className="hidden max-[359px]:inline-block"
              >
                <path
                  d="M6 2.5H3.5A1 1 0 0 0 2.5 3.5v9a1 1 0 0 0 1 1H6M10 5l3 3-3 3M13 8H6"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ) : (
            <Link
              href="/login"
              aria-label="Login"
              className={cn(
                "inline-flex items-center gap-2 rounded-full",
                "px-3 py-3 md:px-4 md:py-3",
                "bg-paper text-ink border border-ink",
                "nav-label",
                "hover:bg-ink hover:text-paper transition-colors",
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
          )}

          {/* Talk to Adaptive — primary pill */}
          <button
            type="button"
            onClick={openAdaptive}
            data-adaptive-trigger
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-3",
              "bg-ink text-paper nav-label",
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
            "nav-label",
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
          "nav-label",
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
