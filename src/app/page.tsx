import { Section } from "@/components/layout";
import { Hero, Body, Eyebrow } from "@/components/typography";
import { CTAGroup } from "@/components/cta/CTAGroup";

/**
 * Placeholder homepage. Real Phase 1 build follows in the next commit.
 */
export default function Home() {
  return (
    <Section>
      <Eyebrow>Section 01 · Hero</Eyebrow>
      <Hero className="mt-6">Adaptive Creative AI Production.</Hero>
      <Body className="mt-8 max-w-[60ch]" tone="soft">
        A creative production system calibrated to brand, format, and scale —
        built and orchestrated across Sense, Form, and Reach.
      </Body>
      <div className="mt-10">
        <CTAGroup pattern="homepage" />
      </div>
    </Section>
  );
}
