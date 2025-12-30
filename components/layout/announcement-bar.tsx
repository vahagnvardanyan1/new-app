"use client";

import { useMemo, useState } from "react";

import { useInterval } from "@/lib/hooks/use-interval";
import { cn } from "@/lib/utils/cn";

type AnnouncementBarCopy = {
  limitedOffer: string;
  expiresPrefix: string;
  saleText: string;
  endsAtIso: string;
  units: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
};

type AnnouncementBarProps = {
  className?: string;
  copy: AnnouncementBarCopy;
};

const clampNonNegative = ({ value }: { value: number }) => Math.max(0, value);

const formatCountdown = ({ ms, units }: { ms: number; units: AnnouncementBarCopy["units"] }) => {
  const totalSeconds = Math.floor(clampNonNegative({ value: ms }) / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad2 = ({ value }: { value: number }) => String(value).padStart(2, "0");

  return `${days}${units.days} ${pad2({ value: hours })}${units.hours} ${pad2({ value: minutes })}${units.minutes} ${pad2({ value: seconds })}${units.seconds}`;
};

export const AnnouncementBar = ({ className, copy }: AnnouncementBarProps) => {
  const [nowMs, setNowMs] = useState(() => Date.now());

  const endsAtMs = useMemo(() => {
    const t = Date.parse(copy.endsAtIso);
    return Number.isFinite(t) ? t : 0;
  }, [copy.endsAtIso]);

  const remainingMs = endsAtMs - nowMs;
  const shouldTick = remainingMs > 0;

  useInterval({
    callback: () => setNowMs(Date.now()),
    delayMs: shouldTick ? 1000 : null,
  });

  const countdownLabel = useMemo(() => {
    return formatCountdown({ ms: remainingMs, units: copy.units });
  }, [copy.units, remainingMs]);

  return (
    <div
      className={cn(
        "fixed left-0 right-0 top-0 z-60 h-12 overflow-hidden",
        "border-b border-[color-mix(in_srgb,var(--accent)_30%,transparent)]",
        "bg-[color-mix(in_srgb,var(--background)_65%,var(--accent)_22%)] text-foreground backdrop-blur-md",
        className,
      )}
    >
      <div className="mx-auto flex h-full max-w-5xl items-center justify-center gap-2 px-2 sm:gap-3 sm:px-6">
        <span className="hidden h-2 w-2 rounded-full bg-(--accent) sm:inline-block" aria-hidden />

        <span className="shrink-0 inline-flex items-center rounded-full border border-[color-mix(in_srgb,var(--accent)_35%,transparent)] bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-(--accent)">
          {copy.limitedOffer}
        </span>

        <span className="shrink-0 inline-flex whitespace-nowrap items-center rounded-full border border-[color-mix(in_srgb,var(--foreground)_12%,transparent)] bg-[color-mix(in_srgb,var(--background)_55%,transparent)] px-3 py-1 text-xs font-medium">
          <span className="hidden whitespace-nowrap text-[color-mix(in_srgb,var(--foreground)_70%,transparent)] sm:inline">
            {copy.expiresPrefix}
          </span>
          <span className="hidden mx-2 text-[color-mix(in_srgb,var(--foreground)_40%,transparent)] sm:inline" aria-hidden>
            •
          </span>
          <span className="tabular-nums text-foreground">{countdownLabel}</span>
        </span>

        <span className="ml-2 hidden min-w-0 truncate text-sm font-semibold text-foreground sm:block">{copy.saleText}</span>
      </div>
    </div>
  );
};


