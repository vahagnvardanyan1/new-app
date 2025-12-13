export type FeatureItem = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

export const features: FeatureItem[] = [
  {
    title: "Iterative Design",
    description: "Refine concepts across copy, UI, and implementation with a fast feedback loop.",
    image: {
      src: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1600&q=80",
      alt: "Abstract gradient background",
    },
  },
  {
    title: "Production Engineering",
    description: "Ship reliable systems with pragmatic architecture, testing, and performance budgets.",
    image: {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
      alt: "Code editor on a laptop",
    },
  },
  {
    title: "Human-Centered UX",
    description: "Design flows that reduce friction, increase clarity, and improve conversion.",
    image: {
      src: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?auto=format&fit=crop&w=1600&q=80",
      alt: "UX sketches and wireframes",
    },
  },
  {
    title: "Brand Systems",
    description: "Build a cohesive identity that looks premium across web, product, and marketing.",
    image: {
      src: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1600&q=80",
      alt: "Brand identity materials on a desk",
    },
  },
  {
    title: "Performance First",
    description: "Optimize what matters: Core Web Vitals, perceived speed, and accessibility.",
    image: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
      alt: "Analytics dashboard",
    },
  },
  {
    title: "Launch & Iterate",
    description: "Go live with confidence, then iterate with data-driven improvements.",
    image: {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
      alt: "Circuit board close-up",
    },
  },
];


