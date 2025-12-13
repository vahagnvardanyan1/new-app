"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils/cn";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  once?: boolean;
};

export const Reveal = ({ children, className, delayMs = 0, once = true }: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const style = useMemo(() => {
    return {
      transitionDelay: `${delayMs}ms`,
    } as const;
  }, [delayMs]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.1,
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={(node) => {
        ref.current = node;
      }}
      className={cn("reveal", isVisible ? "reveal-visible" : null, className)}
      style={style}
      data-state={isVisible ? "visible" : "hidden"}
    >
      {children}
    </div>
  );
};


