"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Frontend-only newsletter signup. Decision on backend (Formspree / Resend /
 * Netlify Forms) deferred per v2 handoff. Submit shows inline success.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="font-display font-medium text-[18px] tracking-[-0.012em] text-ink">
        Thanks — we&rsquo;ll be in touch.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-[520px]"
    >
      <label htmlFor="nl-email" className="sr-only">
        Email
      </label>
      <input
        id="nl-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@studio.com"
        className={cn(
          "flex-1 bg-paper-2 border border-ink-line rounded-full",
          "px-5 py-3",
          "font-sans text-[15px] text-ink placeholder:text-ink-mute",
          "focus:outline-none focus:border-ink transition-colors"
        )}
      />
      <button
        type="submit"
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3",
          "bg-ink text-paper font-mono-util text-[11px] tracking-[0.16em]",
          "hover:bg-ink/90 transition-colors"
        )}
      >
        Subscribe
      </button>
    </form>
  );
}
