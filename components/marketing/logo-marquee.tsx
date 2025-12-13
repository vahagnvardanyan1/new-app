import { Container } from "@/components/ui/container";
import type { LogoItem } from "@/content/marketing";
import { logos } from "@/content/marketing";
import { cn } from "@/lib/utils/cn";

type LogoMarqueeProps = {
  items?: LogoItem[];
  className?: string;
};

export const LogoMarquee = ({ items = logos, className }: LogoMarqueeProps) => {
  const duplicated = [...items, ...items, ...items];

  return (
    <section className={cn("relative w-full overflow-hidden bg-[var(--background)] py-12 md:py-16", className)}>
      <Container>
        <div className="mb-12 flex items-center justify-center gap-3 md:mb-16">
          <div className="h-px flex-1 bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--foreground)_55%,transparent))] opacity-30" />
          <div className="rounded-full border border-[color-mix(in_srgb,var(--foreground)_35%,transparent)] px-3 py-1">
            <span className="text-[10px] font-medium uppercase tracking-wider text-[color-mix(in_srgb,var(--foreground)_65%,transparent)]">
              Used by folks at
            </span>
          </div>
          <div className="h-px flex-1 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--foreground)_55%,transparent),transparent)] opacity-30" />
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-[linear-gradient(90deg,var(--background),transparent)] md:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-[linear-gradient(270deg,var(--background),transparent)] md:w-40" />

          <div className="flex items-center gap-12 md:gap-16 lg:gap-20 marquee-x">
            {duplicated.map((logo, index) => (
              <span
                key={`${logo.label}-${index}`}
                className="flex-shrink-0 whitespace-nowrap text-base font-medium tracking-wider text-[color-mix(in_srgb,var(--foreground)_45%,transparent)] transition hover:text-[color-mix(in_srgb,var(--foreground)_75%,transparent)] md:text-lg lg:text-xl"
              >
                {logo.label}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};


