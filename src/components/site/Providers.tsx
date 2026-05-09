"use client";

import type { ReactNode } from "react";
import { AdaptiveProvider } from "@/components/adaptive/AdaptiveContext";

export function Providers({ children }: { children: ReactNode }) {
  return <AdaptiveProvider>{children}</AdaptiveProvider>;
}
