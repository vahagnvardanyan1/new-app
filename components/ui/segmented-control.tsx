import { cn } from "@/lib/utils/cn";

export type SegmentedOption<TValue extends string> = {
  value: TValue;
  label: string;
};

type SegmentedControlProps<TValue extends string> = {
  value: TValue;
  options: SegmentedOption<TValue>[];
  onValueChange: (args: { value: TValue }) => void;
  className?: string;
};

export const SegmentedControl = <TValue extends string>({
  value,
  options,
  onValueChange,
  className,
}: SegmentedControlProps<TValue>) => {
  return (
    <div
      role="tablist"
      aria-label="Billing cycle"
      className={cn("flex gap-2 rounded-full bg-[color-mix(in_srgb,var(--foreground)_6%,transparent)] p-1", className)}
    >
      {options.map((option) => {
        const isActive = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={cn(
              "flex-1 rounded-full px-4 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              isActive ? "bg-(--accent) text-white" : "text-muted hover:bg-[color-mix(in_srgb,var(--foreground)_8%,transparent)]",
            )}
            onClick={() => onValueChange({ value: option.value })}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};


