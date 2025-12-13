type ClampArgs = {
  value: number;
  min: number;
  max: number;
};

export const clamp = ({ value, min, max }: ClampArgs) => Math.min(max, Math.max(min, value));

type PercentArgs = {
  value: number;
  min: number;
  max: number;
};

export const getPercent = ({ value, min, max }: PercentArgs) => {
  if (max <= min) return 0;
  const clamped = clamp({ value, min, max });
  return ((clamped - min) / (max - min)) * 100;
};


