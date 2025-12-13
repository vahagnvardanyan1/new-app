"use client";

import { useId, useMemo } from "react";

import { cn } from "@/lib/utils/cn";
import { getPercent } from "@/lib/utils/range";

import styles from "./range-slider.module.css";

type RangeSliderProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onValueChange: (args: { value: number }) => void;
  className?: string;
};

export const RangeSlider = ({ label, value, min, max, step, onValueChange, className }: RangeSliderProps) => {
  const id = useId();
  const progress = useMemo(() => getPercent({ value, min, max }), [max, min, value]);

  return (
    <div className={cn("w-full", className)}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onValueChange({ value: Number(e.target.value) })}
        className={cn("w-full cursor-pointer", styles.range)}
        style={
          {
            ["--progress" as never]: `${progress}%`,
          } as React.CSSProperties
        }
      />
    </div>
  );
};


