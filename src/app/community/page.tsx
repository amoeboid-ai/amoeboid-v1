import { Section, Hairline } from "@/components/layout";
import { Hero, Body, Mono } from "@/components/typography";
import { CommunityFeed } from "@/components/community/CommunityFeed";
import { NewsletterForm } from "@/components/community/NewsletterForm";

export const metadata = {
  title: "Community — Amoeboid",
  description:
    "Where Amoeboid thinks out loud, points at what matters, and shows what it's making.",
};

export default function CommunityPage() {
  return (
    <>
      <Section pad="default">
        <div className="flex flex-col gap-6 max-w-[64ch]">
          <Mono className="text-ink-mute">
            Field notes · Reading list · Showcase
          </Mono>
          <Hero>Community.</Hero>
          <Body tone="soft" className="text-[clamp(18px,1.6vw,22px)] leading-[1.4]">
            Where Amoeboid thinks out loud, points at what matters, and shows
            what it&rsquo;s making.
          </Body>
        </div>

        <div className="mt-16 md:mt-24">
          <CommunityFeed />
        </div>
      </Section>

      <Section pad="default" surface="paper-2">
        <div className="flex flex-col gap-6 max-w-[640px]">
          <Mono className="text-ink-mute">Subscribe to Field notes.</Mono>
          <h2 className="font-display font-medium text-[clamp(26px,3vw,40px)] leading-[1.1] tracking-[-0.018em] text-ink">
            Notes from the studio, in your inbox.
          </h2>
          <Body tone="soft" className="max-w-[52ch]">
            Long-form thinking, reading lists, and showcase pieces — sent on
            cadence, never broadcast.
          </Body>
          <div className="mt-2">
            <NewsletterForm />
          </div>
        </div>
        <Hairline className="mt-20 opacity-0" />
      </Section>
    </>
  );
}
