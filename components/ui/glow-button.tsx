import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";
import Link from "next/link";

type GlowButtonSize = "sm" | "md";

type SharedProps = {
  children: ReactNode;
  className?: string;
  size?: GlowButtonSize;
};

type GlowAnchorProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type GlowNativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type GlowButtonProps = GlowAnchorProps | GlowNativeButtonProps;

const sizeClassNameMap: Record<GlowButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm gap-1.5",
  md: "px-5 py-2 text-sm gap-2",
};

export const GlowButton = ({ className, size = "md", children, ...props }: GlowButtonProps) => {
  const contentClassName = cn(
    "relative flex items-center justify-center rounded-full overflow-hidden",
    "bg-[color-mix(in_srgb,var(--accent)_20%,transparent)]",
    sizeClassNameMap[size],
  );

  const innerBorderClassName = cn(
    "absolute inset-0 rounded-full p-[1.5px]",
    "bg-(--accent)",
  );

  const innerFillClassName = cn(
    "h-full w-full rounded-full",
    "bg-[color-mix(in_srgb,var(--background)_65%,transparent)]",
  );

  const outerGlowClassName = cn(
    "absolute -inset-1 rounded-full blur-sm transition-opacity duration-300",
    "bg-(--accent) opacity-50 group-hover:opacity-100",
  );

  const shineClassName = cn(
    "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent",
    "translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700",
  );

  const baseClassName = cn("group relative inline-flex select-none", className);

  if ("href" in props) {
    const { href, ...anchorProps } = props as GlowAnchorProps;
    return (
      <Link href={href} className={baseClassName} {...anchorProps}>
        <span className={outerGlowClassName} aria-hidden="true" />
        <span className={innerBorderClassName} aria-hidden="true">
          <span className={innerFillClassName} />
        </span>
        <span className={contentClassName}>
          <span className={shineClassName} aria-hidden="true" />
          <span className="relative text-white">{children}</span>
        </span>
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props;
  return (
    <button type={type} className={baseClassName} {...buttonProps}>
      <span className={outerGlowClassName} aria-hidden="true" />
      <span className={innerBorderClassName} aria-hidden="true">
        <span className={innerFillClassName} />
      </span>
      <span className={contentClassName}>
        <span className={shineClassName} aria-hidden="true" />
        <span className="relative text-white">{children}</span>
      </span>
    </button>
  );
};


