import { Wordmark } from "@/components/marks/Wordmark";
import { LoginForm } from "./login-form";

export const metadata = {
  title: "Sign in",
  description: "Internal access.",
};

export default function LoginPage() {
  return (
    <main className="flex-1 flex items-center justify-center px-6 py-20 bg-paper">
      <div className="w-full max-w-[420px] bg-paper border border-ink-line rounded-[18px] px-8 py-10 shadow-[0_18px_40px_-24px_rgba(12,12,12,0.18)]">
        <div className="flex items-center justify-center mb-7">
          <Wordmark size={22} />
        </div>

        <h1 className="font-display font-medium text-[clamp(28px,3vw,36px)] leading-[1.1] tracking-[-0.024em] text-ink text-center">
          Sign in
        </h1>
        <p className="mt-2 text-center font-display text-[15px] leading-[1.5] tracking-[-0.005em] text-ink-soft">
          Internal access
        </p>

        <div className="mt-8">
          <LoginForm />
        </div>

        <p className="mt-8 text-center font-mono-util text-ink-mute">
          Amoeboid v1 · internal access
        </p>
      </div>
    </main>
  );
}
