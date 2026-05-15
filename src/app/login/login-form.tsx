"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/cn";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const disabled = submitting || !email.trim() || !password;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (disabled) return;
    setSubmitting(true);
    setError(null);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (signInError) {
      if (/invalid login credentials/i.test(signInError.message)) {
        setError("Invalid email or password");
      } else {
        setError("Sign-in failed. Please try again.");
      }
      setSubmitting(false);
      return;
    }

    const params = new URLSearchParams(
      typeof window !== "undefined" ? window.location.search : ""
    );
    const next = params.get("next") ?? "/";
    router.push(next);
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <label className="flex flex-col gap-2">
        <span className="font-mono-util text-ink-mute">Email</span>
        <input
          type="email"
          required
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={cn(
            "w-full bg-paper border border-ink-line rounded-[10px] px-3.5 py-3",
            "font-display font-medium text-[15px] tracking-[-0.005em] text-ink",
            "placeholder:text-ink-mute focus:outline-none focus:border-ink transition-colors"
          )}
          placeholder="you@amoeboid.xyz"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-mono-util text-ink-mute">Password</span>
        <input
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={cn(
            "w-full bg-paper border border-ink-line rounded-[10px] px-3.5 py-3",
            "font-display font-medium text-[15px] tracking-[-0.005em] text-ink",
            "placeholder:text-ink-mute focus:outline-none focus:border-ink transition-colors"
          )}
        />
      </label>

      <button
        type="submit"
        disabled={disabled}
        className={cn(
          "mt-1 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5",
          "bg-ink text-paper nav-label",
          "hover:bg-ink/90 transition-colors",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
      >
        {submitting ? "Signing in…" : "Sign in"}
      </button>

      {error && (
        <p
          role="alert"
          className="font-display text-[14px] leading-[1.5] tracking-[-0.005em] text-ink-soft text-center"
        >
          {error}
        </p>
      )}
    </form>
  );
}
