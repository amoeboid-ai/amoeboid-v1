import { ContactForm } from "./ContactForm";
import { Section } from "@/components/layout";
import { Hero, Body } from "@/components/typography";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Contact — Amoeboid",
  description: "Start an engagement with Amoeboid — an editorial AI studio.",
};

export default function ContactPage() {
  return (
    <Section pad="default">
      <Hero>Contact</Hero>
      <Body tone="soft" className="mt-6 max-w-prose">
        A short note is enough. Tell us what you&rsquo;re trying to make and we&rsquo;ll
        write back within two working days.
      </Body>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7">
          <ContactForm fallbackEmail={SITE.contactEmail} />
        </div>
        <aside className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <span className="font-mono-util text-ink-mute block mb-2">
              Direct
            </span>
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="font-display font-medium text-[20px] tracking-[-0.012em] text-ink hover:opacity-70 transition-opacity"
            >
              {SITE.contactEmail}
            </a>
          </div>
          <div>
            <span className="font-mono-util text-ink-mute block mb-2">
              Studio
            </span>
            <Body tone="soft" className="max-w-[28ch]">
              Brooklyn / London. Engagements run remote first, week-by-week.
            </Body>
          </div>
        </aside>
      </div>
    </Section>
  );
}
