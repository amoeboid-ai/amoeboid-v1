import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { NebulaFilterDefs } from "@/components/marks/NebulaFilterDefs";
import { AdaptiveWidget } from "@/components/adaptive/AdaptiveWidget";
import { Providers } from "@/components/site/Providers";
import { createClient } from "@/lib/supabase/server";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amoeboid.ai"),
  title: {
    default: "Amoeboid — Create Differently",
    template: "%s · Amoeboid",
  },
  description:
    "Amoeboid is an editorial AI studio that turns one product into a season of campaign-quality outputs. Sense, Form, Reach, Adapt — directed by human creativity.",
  openGraph: {
    title: "Amoeboid — Create Differently",
    description:
      "An editorial AI studio that turns one product into a season of campaign-quality outputs.",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html
      lang="en"
      className={`${interTight.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink antialiased">
        <Providers>
          <NebulaFilterDefs />
          <SiteHeader initialAuthed={!!user} />
          <main className="flex-1 flex flex-col">{children}</main>
          <SiteFooter />
          <AdaptiveWidget />
        </Providers>
      </body>
    </html>
  );
}
