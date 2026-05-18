import Link from "next/link";
import { Container, Section, Hairline } from "@/components/layout";
import {
  Hero,
  SectionDisplay,
  SubDisplay,
  Body,
  Eyebrow,
  Mono,
  Dim,
} from "@/components/typography";
import { CTAGroup } from "@/components/cta/CTAGroup";
import { Reveal, HoverLift } from "@/components/motion/Reveal";
import { Placeholder } from "@/components/site/Placeholder";
import { cn } from "@/lib/cn";

export default function Home() {
  return (
    <>
      {/* ============================== 01 HERO ============================== */}
      <Section as="section" pad="none" className="pt-14">
        <Reveal step={1} className="pb-9 border-b border-ink-line">
          <Hero>Adaptive Creative AI.</Hero>
        </Reveal>

        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between sm:gap-12 pt-7 pb-16">
          <Reveal step={2} className="flex-1">
            <p className="font-sans font-normal text-[clamp(22px,1.7vw,28px)] leading-[1.5] tracking-[-0.012em] text-ink-soft max-w-[48ch]">
              A brand-calibrated creative AI production system — orchestrated across Sense, Form, Reach, and Adapt, directed by human creativity.
            </p>
          </Reveal>
          <Reveal step={3} className="sm:pb-1.5 shrink-0">
            <CTAGroup pattern="homepage" />
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2.2fr_1fr] gap-5 pb-16">
          <Reveal step={4}>
            <HoverLift>
              <Placeholder
                variant="paper"
                label="Featured"
                aspect="aspect-[16/9]"
                caption={
                  <>
                    <div className="font-display font-medium text-[22px] leading-[1.2] tracking-[-0.018em] text-ink max-w-[22ch]">
                      Editorial moment — Sense / Form / Reach
                    </div>
                    <div className="font-mono-util text-ink-mute whitespace-nowrap">
                      16:9 · Still or Motion
                    </div>
                  </>
                }
              >
                <video
                  aria-hidden="true"
                  src="/media/hero/featured/hyrst-loop.mp4"
                  poster="/media/hero/featured/poster.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="hero-video absolute inset-0 w-full h-full object-cover"
                />
                <img
                  aria-hidden="true"
                  src="/media/hero/featured/poster.jpg"
                  alt=""
                  className="hero-poster absolute inset-0 w-full h-full object-cover hidden"
                />
              </Placeholder>
            </HoverLift>
          </Reveal>
          <Reveal step={5}>
            <HoverLift>
              <Placeholder
                variant="paper"
                label="Orchestration"
                centerLabel="Drop secondary visual"
                aspect="aspect-[4/5] lg:aspect-[4/5]"
                caption={
                  <>
                    <div className="font-display font-medium text-[22px] leading-[1.2] tracking-[-0.018em] text-ink max-w-[22ch]">
                      Four Products. One system.
                    </div>
                    <div className="font-mono-util text-ink-mute whitespace-nowrap">
                      4:5 · Static
                    </div>
                  </>
                }
              />
            </HoverLift>
          </Reveal>
        </div>
      </Section>

      {/* ============================== 01.5 PLAIN ON-RAMP ============================== */}
      <Section as="section" pad="none" className="py-[80px] border-b border-ink-line">
        <Reveal step={0}>
          <p className="font-display font-medium text-[clamp(22px,2.1vw,32px)] leading-[1.3] tracking-[-0.016em] text-ink max-w-[64ch]">
            Your brand, calibrated once and compounding — every cycle of work sharpens it instead of resetting to zero. Still, motion, spatial, sonic, produced against a substrate that holds coherent at scale.
          </p>
        </Reveal>
      </Section>

      {/* ============================== 02 PRODUCTS PREVIEW ============================== */}
      <Section as="section" pad="none" id="products" className="py-[120px] border-b border-ink-line">
        <Reveal step={0} className="mb-7">
          <Eyebrow>Section 02 · Four Products</Eyebrow>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-end mb-14">
          <Reveal step={1}>
            <SectionDisplay className="max-w-[18ch]">
              Four Products. <Dim>One calibrated stack.</Dim>
            </SectionDisplay>
          </Reveal>
          <Reveal step={2}>
            <Body className="max-w-[46ch]" tone="soft">
              Sense reads. Form makes. Reach scales. Adapt closes the loop. Each is independently engageable; together they orchestrate a single calibration through every cycle of work.
            </Body>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              href: "/sense",
              variant: "sense" as const,
              label: "Sense",
              corner: "P—01",
              center: "Research register",
              meta: ["Reading layer", "05 Systems"],
              title: "Sense",
              copy: "Brand, audience, cultural, competitive, and format intelligence — structured as substrate the rest of the stack composes against.",
              link: "Open Sense",
            },
            {
              href: "/form",
              variant: "form" as const,
              label: "Form",
              corner: "P—02",
              center: undefined,
              meta: ["Making layer", "04 Systems"],
              title: "Form",
              copy: "Still, motion, spatial, and sonic. Hero-grade craft across four media shapes, calibrated — not generic.",
              link: "Open Form",
              innerFrame: false,
              media: (
                <>
                  <video
                    aria-hidden="true"
                    src="/media/hero/form/form-loop.mp4"
                    poster="/media/hero/form/poster.jpg"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="hero-video absolute inset-0 w-full h-full object-cover"
                  />
                  <img
                    aria-hidden="true"
                    src="/media/hero/form/poster.jpg"
                    alt=""
                    className="hero-poster absolute inset-0 w-full h-full object-cover hidden"
                  />
                </>
              ),
            },
            {
              href: "/reach",
              variant: "reach" as const,
              label: "Reach",
              corner: "P—03",
              center: "Broadcast register",
              meta: ["Activation layer", "03 Systems"],
              title: "Reach",
              copy: "Variant production, channel activation, and performance — brand calibration carried through every variant and platform.",
              link: "Open Reach",
              dark: true,
              reachGrid: true,
            },
            {
              href: "/adapt",
              variant: "adapt" as const,
              label: "Adapt",
              corner: "P—04",
              center: "Closing register",
              meta: ["Loop-closer layer", "03 Systems"],
              title: "Adapt",
              copy: "A continuous loop-closer. Reads signal across Sense, Form, Reach, and the field — refreshes the calibration substrate, briefs what shifted, and composes the next cycle's adjustments.",
              link: "Open Adapt",
            },
          ].map((tile, i) => (
            <Reveal key={tile.href} step={(i + 2) as 2 | 3 | 4 | 5}>
              <Link
                href={tile.href}
                className="group flex flex-col gap-[18px] no-underline text-ink"
              >
                <HoverLift>
                  <Placeholder
                    variant={tile.variant}
                    label={tile.label}
                    corner={tile.corner}
                    centerLabel={tile.center}
                    aspect="aspect-[4/5]"
                    rounded="rounded-[14px]"
                    innerFrame={tile.innerFrame}
                    reachGrid={tile.reachGrid}
                    dark={tile.dark}
                  >
                    {tile.media}
                  </Placeholder>
                </HoverLift>
                <div className="flex items-baseline justify-between font-mono-util text-ink-mute">
                  <span>{tile.meta[0]}</span>
                  <span>{tile.meta[1]}</span>
                </div>
                <SubDisplay as="h3" className="!text-[clamp(28px,2.4vw,36px)] !leading-[1.1] !tracking-[-0.024em]">
                  {tile.title}
                </SubDisplay>
                <Body className="max-w-[36ch] text-[15px] !leading-[1.55]" tone="soft">
                  {tile.copy}
                </Body>
                <span className="mt-1 inline-flex items-center gap-2 font-display font-medium text-[14px] tracking-[-0.005em] text-ink">
                  {tile.link}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal step={5} className="mt-14 pt-6 border-t border-ink-line">
          <div className="flex flex-wrap items-center justify-between gap-6 font-mono-util text-ink-mute">
            <span>04 Products · 15 Systems · Modular entry</span>
            <Link href="/products" className="text-ink hover:opacity-70 transition-opacity">
              Open Products hub →
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* ============================== 03 ENGAGE AT ANY SCALE ============================== */}
      <Section as="section" pad="none" id="engage" className="py-[100px] border-b border-ink-line">
        <Reveal step={0} className="mb-7">
          <Eyebrow>Section 03 · Modular entry</Eyebrow>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-end mb-14">
          <Reveal step={1}>
            <SectionDisplay className="!text-[clamp(32px,4vw,52px)] !leading-[1.06] max-w-[16ch]">
              Engage at <Dim>any scale.</Dim>
            </SectionDisplay>
          </Reveal>
          <Reveal step={2}>
            <Body className="max-w-[50ch]" tone="soft">
              Start with a single System. A single Product. Or the full orchestration.{" "}
              <strong className="text-ink font-medium">Brand Calibration compounds whichever path you start on.</strong>
            </Body>
          </Reveal>
        </div>

        <Reveal step={3}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-ink-line">
            {[
              { href: "/sense#systems", ix: "Entry 01 · System", h: "Start with Sense Brand Intelligence", p: "Establish your brand calibration foundation." },
              { href: "/form#systems", ix: "Entry 02 · Product", h: "Start with Form Still", p: "Produce a single campaign with us." },
              { href: "/adapt", ix: "Entry 03 · Loop-closer", h: "Start with Adapt", p: "Established brand? Engage Adapt directly to keep calibration current as the field moves." },
              { href: "/products", ix: "Entry 04 · Orchestration", h: "Start with the full stack", p: "Orchestrated engagement across all four Products." },
            ].map((row, i, arr) => (
              <Link
                key={row.href}
                href={row.href}
                className={cn(
                  "flex flex-col gap-3 py-7 pr-7 transition-[padding-left] hover:pl-1.5",
                  "border-b md:border-b-0 md:border-r border-ink-line",
                  i === arr.length - 1 && "lg:border-r-0 lg:pr-0",
                  i === arr.length - 1 && "border-b-0",
                  // Tighten right-border on the md 2-col row: 2nd cell drops border-r at md
                  i % 2 === 1 && "md:border-r-0 lg:border-r",
                  // Last cell on lg keeps no border-r (already handled above)
                )}
              >
                <Mono>{row.ix}</Mono>
                <h4 className="font-display font-medium text-[clamp(20px,1.7vw,24px)] leading-[1.2] tracking-[-0.018em] text-ink max-w-[16ch]">
                  {row.h}
                </h4>
                <p className="font-display text-[14.5px] leading-[1.5] tracking-[-0.005em] text-ink-soft max-w-[28ch]">
                  {row.p}
                </p>
              </Link>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ============================== 04 THE SYSTEM ============================== */}
      <Section as="section" pad="none" id="system" className="py-[140px] border-b border-ink-line">
        <Reveal step={0} className="mb-7">
          <Eyebrow>Section 04 · The system</Eyebrow>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
          <div>
            <Reveal step={1}>
              <SectionDisplay className="max-w-[16ch]">
                The orchestration <Dim>is the product.</Dim>
              </SectionDisplay>
            </Reveal>
            <Reveal step={2} className="mt-6">
              <Body className="max-w-[46ch]" tone="soft">
                <strong className="text-ink font-medium">Four Products. One brand-calibrated system. Each cycle sharpens the substrate.</strong>
              </Body>
              <Body className="mt-3.5 max-w-[46ch]" tone="soft">
                Sense calibrates the brand substrate. Form, Reach, and Adapt operate against it — producing the work, surfacing it, and tracking how it lands. Adapt closes the loop: it reads signal from across the system, refreshes the substrate at cycle close, and composes forward direction for what comes next.
              </Body>
              <Body className="mt-3.5 max-w-[46ch]" tone="soft">
                The result is a creative production system where calibration compounds, never resets.
              </Body>
              <Link
                href="/adapt"
                className="mt-7 inline-flex items-center gap-2.5 font-display font-medium text-[15px] tracking-[-0.005em] text-ink border-b border-ink pb-1 hover:opacity-70 transition-opacity"
              >
                Open Adapt
                <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>

          <Reveal step={3}>
            <div className="flex flex-col gap-2 p-7 bg-paper-2 border border-ink-line rounded-[14px]" aria-hidden="true">
              {[
                { code: "P—01", name: "Sense", sub: "Calibrates the substrate" },
                { code: "P—02", name: "Form", sub: "Makes the work" },
                { code: "P—03", name: "Reach", sub: "Carries it to channel" },
                { code: "P—04", name: "Adapt", sub: "Closes the loop · refreshes substrate", loop: true },
              ].map((l) => (
                <div
                  key={l.code}
                  className={cn(
                    "grid grid-cols-[64px_1fr_auto] gap-[18px] items-center px-5 py-[18px] bg-paper border border-ink-line rounded-[10px]",
                    l.loop && "ring-1 ring-ink/10"
                  )}
                >
                  <span className="font-mono-util text-ink-mute">{l.code}</span>
                  <span className="font-display font-medium text-[17px] tracking-[-0.012em] text-ink">
                    {l.name}
                    <span className="block font-display font-normal text-[13px] tracking-[-0.005em] text-ink-soft mt-0.5">
                      {l.sub}
                    </span>
                  </span>
                  <span className="font-mono-util text-ink-mute flex items-center gap-1">
                    {l.loop ? (
                      <>
                        <span aria-hidden className="inline-block w-4 h-px bg-ink-faint" />
                        <span aria-hidden>↺</span>
                      </>
                    ) : (
                      <span aria-hidden>→</span>
                    )}
                  </span>
                </div>
              ))}
              <p className="mt-3 px-2 font-display text-[13px] leading-[1.5] tracking-[-0.005em] text-ink-soft">
                Adapt reads signal across the other three — and the wider field — then feeds a refreshed substrate forward into the next cycle.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ============================== 05 FEATURED WORK ============================== */}
      <Section as="section" pad="none" id="work" className="py-[140px] border-b border-ink-line">
        <Reveal step={0} className="mb-7">
          <Eyebrow>Section 05 · Featured work</Eyebrow>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-end mb-14">
          <Reveal step={1}>
            <SectionDisplay className="max-w-[14ch]">
              In the field. <Dim>Brand-first.</Dim>
            </SectionDisplay>
          </Reveal>
          <Reveal step={2}>
            <Body className="max-w-[44ch]" tone="soft">
              Each case carries its own register — not Amoeboid&rsquo;s chrome. Outcomes measured against business motion, not deliverable count.
            </Body>
          </Reveal>
        </div>

        <Reveal step={3}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {[
              { span: "md:col-span-7", v: "vis-a" as const, badge: "F—03 / Sonance", center: "Premium audio · product film", ix: "Case 01", cat: "Premium audio", h: "An identity carried from page to environment." },
              { span: "md:col-span-5", v: "vis-b" as const, badge: "R—01 / DTC", center: "900+ calibrated variants", ix: "Case 02", cat: "Consumer / DTC", h: "One master into nine hundred calibrated variants.", dark: true },
              { span: "md:col-span-5", v: "vis-c" as const, badge: "S—01 / Industrial", center: "Substrate sample", ix: "Case 03", cat: "Industrial", h: "Re-coding a 40-year voice without breaking it.", innerFrame: true },
              { span: "md:col-span-7", v: "vis-d" as const, badge: "R—03 / SaaS", center: "Closed loop · two launches", ix: "Case 04", cat: "SaaS / B2B", h: "Closed loop across two product launches.", dark: true },
            ].map((c, i) => (
              <Link
                key={i}
                href="/work"
                className={cn("flex flex-col gap-3.5 no-underline text-ink", c.span)}
              >
                <HoverLift>
                  <Placeholder
                    variant={c.v}
                    badge={c.badge}
                    centerLabel={c.center}
                    aspect="aspect-[4/3]"
                    rounded="rounded-[12px]"
                    dark={c.dark}
                    innerFrame={c.innerFrame}
                  />
                </HoverLift>
                <div className="flex items-baseline justify-between font-mono-util text-ink-mute">
                  <span>{c.ix}</span>
                  <span>{c.cat}</span>
                </div>
                <h3 className="font-display font-medium text-[clamp(20px,1.7vw,26px)] leading-[1.2] tracking-[-0.018em] text-ink max-w-[26ch]">
                  {c.h}
                </h3>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal step={4} className="mt-14 pt-6 border-t border-ink-line">
          <div className="flex flex-wrap items-center justify-between gap-6 font-mono-util text-ink-mute">
            <span>Selected · 04 cases surfaced</span>
            <Link href="/work" className="text-ink border-b border-ink pb-0.5 hover:opacity-70 transition-opacity">
              Open Work index →
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* ============================== 06 CALIBRATION MOAT ============================== */}
      <Section as="section" surface="paper-2" pad="none" id="moat" className="py-[140px] border-b border-ink-line">
        <Reveal step={0} className="mb-6">
          <Eyebrow>Section 06 · Brand Calibration</Eyebrow>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.2fr] gap-16 lg:gap-24 items-start">
          <Reveal step={1}>
            <SectionDisplay className="max-w-[14ch]">
              Calibration <Dim>is the moat.</Dim>
            </SectionDisplay>
          </Reveal>
          <Reveal step={2} className="space-y-4">
            <Body className="max-w-[50ch]" tone="soft">
              <strong className="text-ink font-medium">Output is downstream of substrate.</strong> Volume without coherence is the dominant failure mode of AI-assisted production today — cheap variants, eroded brands, untracked drift.
            </Body>
            <Body className="max-w-[50ch]" tone="soft">
              Brand Calibration is the layer that resolves it. A substrate that reads voice, register, audience, and format accurately enough to enforce coherence at variant volume — and that{" "}
              <strong className="text-ink font-medium">sharpens through the engagement</strong> rather than degrading. Format Intelligence is its forward edge: research-investment proof that the calibration keeps reading.
            </Body>
            <Body className="max-w-[50ch]" tone="soft">
              Every cycle adds to the calibration. The calibration never resets. <strong className="text-ink font-medium">Adapt — the loop-closer running continuously beneath the work — is the mechanism that makes the substrate compound rather than reset.</strong> That is the durable asset.
            </Body>
          </Reveal>
        </div>
        <Reveal step={3} className="mt-16 pt-6 border-t border-ink-line">
          <div className="flex gap-14 flex-wrap">
            {[
              { k: "Cycles compounded", v: "Designed for 25+ engagement scale" },
              { k: "Calibration retention", v: "100% · substrate carried cross-cycle" },
              { k: "Forward edge", v: "Format Intelligence · S—05" },
            ].map((s) => (
              <div key={s.k}>
                <Mono className="block mb-1.5">{s.k}</Mono>
                <span className="font-display font-medium text-[15px] tracking-[-0.008em] text-ink">{s.v}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ============================== 07 CLOSING CTA ============================== */}
      <Section as="section" pad="none" id="start" className="py-[160px] pb-[180px] border-b border-ink-line">
        <Reveal step={0} className="mb-7">
          <Eyebrow>Section 07 · Start</Eyebrow>
        </Reveal>
        <Reveal step={1}>
          <h2 className="font-display font-medium text-[clamp(48px,6.4vw,96px)] leading-[1.02] tracking-[-0.034em] text-ink max-w-[18ch]">
            Compose an engagement. <Dim>Begin where the work begins.</Dim>
          </h2>
        </Reveal>
        <Reveal step={2} className="mt-16 pt-8 border-t border-ink-line">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <Body className="max-w-[40ch] text-[15px]" tone="soft">
              Open a structured intake. A partner replies within two business days. Adaptive, the on-site assistant, can route a question first if you prefer.
            </Body>
            <CTAGroup pattern="engagement-first" />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
