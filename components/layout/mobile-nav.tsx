"use client";

import { useEffect, useId, useState } from "react";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { IconMenu, IconX } from "@/components/icons";
import { GlowButton } from "@/components/ui/glow-button";
import type { NavItem } from "@/content/marketing";
import { cn } from "@/lib/utils/cn";

type MobileNavProps = {
  items: NavItem[];
  className?: string;
};

export const MobileNav = ({ items, className }: MobileNavProps) => {
  const dialogId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    if (prefersReducedMotion) {
      setIsOpen(false);
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <div className={cn("lg:hidden", className)}>
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--border) bg-[color-mix(in_srgb,var(--background)_65%,transparent)] text-foreground backdrop-blur-md transition hover:bg-[color-mix(in_srgb,var(--foreground)_8%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label="Open menu"
        aria-controls={dialogId}
        aria-expanded={isOpen}
        onClick={open}
      >
        <IconMenu className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id={dialogId}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-60 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div aria-hidden="true" className="absolute inset-0 bg-background opacity-95 backdrop-blur-xl" />
            <button
              type="button"
              className="absolute inset-0 z-10 cursor-default bg-transparent"
              aria-label="Close menu"
              onClick={close}
            />

            <motion.div
              className="relative z-20 flex h-full flex-col items-center justify-between px-6 py-12"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="flex w-full justify-end">
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-(--border) bg-[color-mix(in_srgb,var(--background)_65%,transparent)] text-foreground backdrop-blur-md transition hover:bg-[color-mix(in_srgb,var(--foreground)_8%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label="Close menu"
                  onClick={close}
                >
                  <IconX className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex flex-col items-center gap-8">
                {items.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="cursor-pointer text-[2rem] font-semibold tracking-tight text-foreground transition-colors hover:text-(--accent) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    onClick={close}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                className="flex w-full max-w-sm flex-col items-center gap-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="#login"
                  className="cursor-pointer text-sm text-muted transition-colors hover:text-foreground"
                  onClick={close}
                >
                  Login
                </a>
                <GlowButton href="#pricing" className="w-full" onClick={close}>
                  Get Started
                </GlowButton>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};


