import { Section } from "@/components/layout";
import { Hero, Body } from "@/components/typography";

export const metadata = {
  title: "Community — Amoeboid",
  description: "Community — Amoeboid.",
};

/**
 * /community — placeholder route. Page resolves cleanly with header/footer chrome.
 * Content briefed separately (build-dev-1.2 §2.3).
 */
export default function CommunityPage() {
  return (
    <Section pad="default">
      <Hero>Community</Hero>
      <Body tone="soft" className="mt-6 max-w-prose">
        More soon.
      </Body>
    </Section>
  );
}
