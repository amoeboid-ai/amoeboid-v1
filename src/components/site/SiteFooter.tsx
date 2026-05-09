import Link from "next/link";
import { Lockup } from "@/components/marks/Lockup";
import { Container } from "@/components/layout";
import { Body, Mono } from "@/components/typography";
import { FOOTER_NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Global Footer — paper-2 surface, lockup top-left, columned nav, hairline tag bottom.
 * Uses Lockup with static symbol per "static at footer scale" spec.
 */
export function SiteFooter() {
  return (
    <footer className="bg-paper-2 text-ink mt-auto">
      <Container className="py-[80px] md:py-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <Lockup variant="horizontal" symbolSize={48} wordmarkSize={28} staticSymbol />
            <Body className="mt-8 max-w-md" tone="soft">
              An editorial AI studio. We turn one product into a season of campaign-quality outputs — calibrated to brand, format, and scale.
            </Body>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {FOOTER_NAV.map((col) => (
              <div key={col.heading}>
                <Mono className="block text-ink-mute mb-5">{col.heading}</Mono>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => {
                    const isExternal = link.href.startsWith("mailto:") || link.href.startsWith("http");
                    if (isExternal) {
                      return (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            className="text-ink hover:text-ink-soft transition-colors text-[15px]"
                          >
                            {link.label}
                          </a>
                        </li>
                      );
                    }
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-ink hover:text-ink-soft transition-colors text-[15px]"
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-ink-line">
        <Container>
          <div
            className={cn(
              "flex flex-col md:flex-row md:items-center justify-between gap-3",
              "py-6"
            )}
          >
            <Mono>{SITE.copyright}</Mono>
            <Mono className="text-ink-mute">Create Differently · v1 proto</Mono>
          </div>
        </Container>
      </div>
    </footer>
  );
}
