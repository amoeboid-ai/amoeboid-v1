"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

/**
 * ContactForm — mailto-fallback form (Section 3.4). Decision on
 * Formspree / Resend / Netlify Forms is deferred; submit composes a
 * mailto: with the form values URL-encoded so the page is usable today.
 */
export function ContactForm({ fallbackEmail }: { fallbackEmail: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Enquiry — ${name || "Amoeboid"}`;
    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");
    const href = `mailto:${fallbackEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(lines)}`;
    window.location.href = href;
  }

  const inputClass = cn(
    "w-full bg-paper-2 border border-ink-line rounded-[10px]",
    "px-4 py-3",
    "font-sans text-[15px] text-ink placeholder:text-ink-mute",
    "focus:outline-none focus:border-ink transition-colors"
  );
  const labelClass = "font-mono-util text-ink-mute block mb-2";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="cf-name" className={labelClass}>
          Name
        </label>
        <input
          id="cf-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="cf-email" className={labelClass}>
          Email
        </label>
        <input
          id="cf-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="cf-company" className={labelClass}>
          Company <span className="text-ink-faint">(optional)</span>
        </label>
        <input
          id="cf-company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="cf-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="cf-message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={cn(inputClass, "resize-y min-h-[140px]")}
        />
      </div>
      <div className="pt-2">
        <button
          type="submit"
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-6 py-3",
            "bg-ink text-paper font-mono-util text-[11px] tracking-[0.16em]",
            "hover:bg-ink/90 transition-colors"
          )}
        >
          Send enquiry
        </button>
      </div>
    </form>
  );
}
