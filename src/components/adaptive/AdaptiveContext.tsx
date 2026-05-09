"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface AdaptiveContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const AdaptiveCtx = createContext<AdaptiveContextValue | null>(null);

export function AdaptiveProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);
  const value = useMemo(() => ({ isOpen, open, close, toggle }), [isOpen, open, close, toggle]);
  return <AdaptiveCtx.Provider value={value}>{children}</AdaptiveCtx.Provider>;
}

export function useAdaptive(): AdaptiveContextValue {
  const ctx = useContext(AdaptiveCtx);
  if (!ctx) {
    // Permissive fallback — allows components to render without provider during static analysis.
    return {
      isOpen: false,
      open: () => {},
      close: () => {},
      toggle: () => {},
    };
  }
  return ctx;
}
