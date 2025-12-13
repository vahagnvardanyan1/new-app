import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type AnchorButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = NativeButtonProps | AnchorButtonProps;

const variantClassNameMap: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--accent)] text-white shadow-[0_12px_40px_rgba(74,144,226,0.25)] hover:brightness-110",
  secondary:
    "bg-[color-mix(in_srgb,var(--foreground)_6%,transparent)] text-[var(--foreground)] border border-[var(--border)] hover:bg-[color-mix(in_srgb,var(--foreground)_10%,transparent)]",
  ghost:
    "bg-transparent text-[var(--foreground)] hover:bg-[color-mix(in_srgb,var(--foreground)_8%,transparent)]",
};

export const Button = (props: ButtonProps) => {
  const { className, variant = "primary", children, ...rest } = props;
  const baseClassName = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:pointer-events-none disabled:opacity-50",
    variantClassNameMap[variant],
    className,
  );

  if ("href" in rest) {
    // Only extract props relevant to <a>, to avoid type errors.
    // Destructure href and all Anchor-specific props, exclude Button-specific ones.
    // We'll use a type assertion to ensure rest is AnchorButtonProps
    // since the discriminated union already guarantees it.
    const { href, ...anchorProps } = rest as AnchorButtonProps;
    return (
      <a className={baseClassName} href={href} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = rest;

  return (
    <button type={type} className={baseClassName} {...buttonProps}>
      {children}
    </button>
  );
};


