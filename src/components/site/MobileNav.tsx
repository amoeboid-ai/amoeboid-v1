"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useId, useCallback } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Wordmark } from "@/components/marks/Wordmark";
import { NAV } from "@/lib/site";
import { useAdaptive } from "@/components/adaptive/AdaptiveContext";
import { cn } from "@/lib/cn";

/**
 * MobileNav — typographic 'Menu' trigger + full-screen paper-2 overlay.
 * Visible only below md (768px), where the desktop nav collapses.
 *
 * Overlay is portaled to document.body. The site header has
 * backdrop-blur-md; backdrop-filter creates a new containing block for
 * fixed descendants, which would clip a fixed-positioned overlay rendered
 * inside the header to the header's 72px box. Portaling escapes that.
 *
 * Behaviour:
 *  - Tap Menu / press Esc / tap Close to dismiss
 *  - Body scroll lock while open
 *  - Minimal focus trap (Tab cycles within overlay, returns to trigger on close)
 *  - prefers-reduced-motion: instant fade, no slide
 *  - aria-expanded on trigger, role=dialog + aria-modal on overlay
 *  - Uses 100dvh-equivalent (inset:0 from a body-portaled fixed element) for
 *    iOS Safari reliability under dynamic toolbar resizing
 */
export function MobileNav() {
  const pathname = usePathname();
  const { isOpen: adaptiveOpen } = useAdaptive();
  const prefersReduced = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const overlayId = useId();

  // SSR-safe portal target
  useEffect(() => setMounted(true), []);

  // Close the mobile menu when the Adaptive widget opens — only one full-screen
  // surface visible at any time (Section 4.1, build-dev-1.2).
  useEffect(() => {
    if (adaptiveOpen) setIsOpen(false);
  }, [adaptiveOpen]);

  const close = useCallback(() => setIsOpen(false), []);
  const open = useCallback(() => setIsOpen(true), []);

  // Body scroll lock + focus management while open
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Focus the Close button on open
    requestAnimationFrame(() => closeRef.current?.focus());
    return () => {
      document.body.style.overflow = prevOverflow;
      // Restore focus to the trigger on close
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  // Esc to close + minimal Tab focus trap
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const root = overlayRef.current;
      if (!root) return;
      const focusable = root.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  const linkClass = cn(
    "block w-full font-display font-medium",
    "text-[clamp(40px,11vw,56px)] leading-[1.05] tracking-[-0.024em] text-ink",
    "py-3" // 44pt+ tap target via line-height + padding
  );

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={open}
        aria-expanded={isOpen}
        aria-controls={overlayId}
        aria-label="Open menu"
        className={cn(
          "md:hidden inline-flex items-center",
          "font-display font-medium text-[15px] tracking-[-0.005em] text-ink",
          "hover:opacity-70 transition-opacity"
        )}
      >
        Menu
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                id={overlayId}
                ref={overlayRef}
                role="dialog"
                aria-modal="true"
                aria-label="Site navigation"
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
                animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: prefersReduced ? 0.15 : 0.26, ease: [0.2, 0.7, 0.2, 1] }}
                style={{ height: "100dvh" }}
                className={cn(
                  "fixed inset-0 z-40 md:hidden",
                  "bg-[#EEEBE5] text-ink",
                  "flex flex-col"
                )}
              >
            <div
              className="flex items-center justify-between gutter"
              style={{ height: 72 }}
            >
              <Link
                href="/"
                onClick={close}
                aria-label="Amoeboid home"
                className="inline-flex"
              >
                <Wordmark size={22} />
              </Link>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close menu"
                className={cn(
                  "font-display font-medium text-[15px] tracking-[-0.005em] text-ink",
                  "hover:opacity-70 transition-opacity"
                )}
              >
                Close
              </button>
            </div>

            <nav
              aria-label="Mobile primary"
              className="flex-1 flex flex-col justify-start gutter pt-8"
            >
              <ul className="flex flex-col gap-2">
                {NAV.map((item) => {
                  const active = pathname?.startsWith(item.href) ?? false;
                  if (item.children?.length) {
                    return (
                      <li key={item.href}>
                        <details className="group">
                          <summary
                            className={cn(
                              linkClass,
                              "list-none flex items-center justify-between cursor-pointer",
                              active && "underline underline-offset-[6px] decoration-1"
                            )}
                          >
                            <span>{item.label}</span>
                            <span
                              aria-hidden
                              className="font-mono-util text-ink-mute transition-transform group-open:rotate-45"
                            >
                              +
                            </span>
                          </summary>
                          <ul className="pl-4 pb-3 flex flex-col gap-1">
                            <li>
                              <Link
                                href={item.href}
                                onClick={close}
                                className="block py-2 font-display text-[20px] tracking-[-0.005em] text-ink-soft hover:text-ink"
                              >
                                {item.label} hub
                              </Link>
                            </li>
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={close}
                                  className="block py-2 font-display text-[20px] tracking-[-0.005em] text-ink-soft hover:text-ink"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </details>
                      </li>
                    );
                  }
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={close}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          linkClass,
                          active && "underline underline-offset-[6px] decoration-1"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10 pt-7 border-t border-ink-line">
                <Link
                  href="/contact"
                  onClick={close}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-5 py-2.5",
                    "bg-ink text-paper font-mono-util text-[11px] tracking-[0.16em]",
                    "hover:bg-ink/90 transition-colors"
                  )}
                >
                  Contact
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>,
          document.body
        )}
    </>
  );
}
