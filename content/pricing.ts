export type CreditsBillingCycle = "monthly" | "annual" | "one-time";
export type StorageBillingCycle = "monthly" | "annual";

export type PricingFeatureItem = {
  label: string;
};

export type PricingCardContent = {
  title: "Credits" | "Storage";
  description: string;
  features: PricingFeatureItem[];
};

export const creditsCard: PricingCardContent = {
  title: "Credits",
  description:
    "Credits ⚡ power the generative features of Fuser. Credits do not expire, and unused credits will roll over to the next billing cycle.",
  features: [
    { label: "7,750 images*" },
    { label: "130 videos" },
    { label: "110 3D models" },
    { label: "550 audio generations" },
    { label: "70 million words" },
  ],
};

export const storageCard: PricingCardContent = {
  title: "Storage",
  description:
    "Cloud storage for your projects and creations, accessible from anywhere and on any device, with unlimited projects and canvases.",
  features: [
    { label: "11,120 images*" },
    { label: "1,000 videos" },
    { label: "7,150 3D models" },
    { label: "5,000 audio files" },
    { label: "Unlimited text and chat" },
  ],
};

export const creditsRange = {
  min: 2000,
  max: 100000,
  step: 1000,
  defaultValue: 30000,
} as const;

export const storageRange = {
  min: 5,
  max: 500,
  step: 5,
  defaultValue: 5,
} as const;


