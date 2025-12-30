import { Container } from "@/components/ui/container";
import type { LogoItem } from "@/content/marketing";
import { logos } from "@/content/marketing";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";

type LogoMarqueeProps = {
  items?: LogoItem[];
  className?: string;
  copy: {
    badge: string;
  };
};

export const LogoMarquee = ({ items = logos, className, copy }: LogoMarqueeProps) => {
  const duplicated = [...items, ...items, ...items];

  return (
    <section className={cn("relative w-full overflow-hidden bg-background py-12 md:py-16", className)}>
      <Container>
        <div className="mb-12 flex items-center justify-center gap-3 md:mb-16">
          <div className="h-px flex-1 bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--foreground)_55%,transparent))] opacity-30" />
          <div className="rounded-full border border-[color-mix(in_srgb,var(--foreground)_35%,transparent)] px-3 py-1">
            <span className="text-[10px] font-medium uppercase tracking-wider text-[color-mix(in_srgb,var(--foreground)_65%,transparent)]">
              {copy.badge}
            </span>
          </div>
          <div className="h-px flex-1 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--foreground)_55%,transparent),transparent)] opacity-30" />
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-[linear-gradient(90deg,var(--background),transparent)] md:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-[linear-gradient(270deg,var(--background),transparent)] md:w-40" />

          <div className="flex items-center gap-12 md:gap-16 lg:gap-20 marquee-x">
            {duplicated.map((logo, index) => (
              <Link key={`${logo.label}-${index}`} href={logo.href} target="_blank" rel="noopener noreferrer">
                <span
                key={`${logo.label}-${index}`}
                className="shrink-0 whitespace-nowrap text-base font-medium tracking-wider text-[color-mix(in_srgb,var(--foreground)_45%,transparent)] transition hover:text-[color-mix(in_srgb,var(--foreground)_75%,transparent)] md:text-lg lg:text-xl"
              >
                {logo.label}
              </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};


