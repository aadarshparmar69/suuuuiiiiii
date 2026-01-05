import { useRef } from "react";
import { useScroll, useTransform, useSpring, useInView, MotionValue } from "framer-motion";

// Professional easing curves
export const easings = {
  smooth: [0.22, 1, 0.36, 1] as const,
  smoothOut: [0.25, 0.1, 0.25, 1] as const,
  smoothIn: [0.4, 0, 0.2, 1] as const,
  bounce: [0.68, -0.55, 0.265, 1.55] as const,
  snap: [0.5, 0, 0.2, 1] as const,
  gentle: [0.4, 0, 0.2, 1] as const,
  elastic: [0.175, 0.885, 0.32, 1.275] as const,
};

// Spring configs for natural motion
export const springConfigs = {
  gentle: { stiffness: 100, damping: 30, mass: 1 },
  smooth: { stiffness: 150, damping: 25, mass: 0.8 },
  snappy: { stiffness: 300, damping: 35, mass: 0.5 },
  bouncy: { stiffness: 400, damping: 20, mass: 0.8 },
  slow: { stiffness: 50, damping: 20, mass: 1.5 },
};

// Parallax scroll hook for hero sections
export const useParallax = (distance: number = 100) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, distance]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  
  return { ref, y, opacity, scale, scrollYProgress };
};

// Hook for parallax effects with depth and direction
export const useParallaxDepth = (speed: number = 0.5, direction: "up" | "down" = "up") => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const multiplier = direction === "up" ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed * multiplier, -100 * speed * multiplier]);
  const smoothY = useSpring(y, springConfigs.gentle);

  return { ref, y: smoothY, scrollProgress: scrollYProgress };
};

// Smooth reveal hook for sections
export const useSmoothReveal = (options?: {
  threshold?: number;
  triggerOnce?: boolean;
  margin?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: options?.triggerOnce ?? true, 
    margin: (options?.margin ?? "-80px") as any,
    amount: options?.threshold ?? 0.1,
  });
  
  return { ref, isInView };
};

// Stagger reveal hook for lists/grids
export const useStaggerReveal = (itemCount: number, baseDelay: number = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Use exponential decay for more natural staggering
  const getDelay = (index: number) => {
    const decayFactor = 0.85;
    return baseDelay * (1 - Math.pow(decayFactor, index + 1)) / (1 - decayFactor);
  };
  
  return { ref, isInView, getDelay };
};

// Scroll-linked progress for sticky sections
export const useScrollProgress = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  
  return { ref, progress: scrollYProgress, smoothProgress };
};

// Hook for scroll-linked opacity and scale
export const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60]);

  return { ref, opacity, scale, y, scrollProgress: scrollYProgress };
};

// Motion variants for consistent animations
export const fadeInUp = {
  hidden: { opacity: 0, y: 60, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: easings.smooth }
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: easings.smooth }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -60, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easings.smooth }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 60, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easings.smooth }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: easings.smooth }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: easings.smooth }
  }
};

// Reveal from scale with blur
export const blurReveal = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(12px)" },
  visible: { 
    opacity: 1, 
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easings.smooth }
  }
};

// Slide up with spring
export const springUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 15,
    }
  }
};

// Card hover animations
export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -8,
    transition: { duration: 0.3, ease: easings.gentle }
  }
};

// Float animation for decorative elements
export const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }
};

// Pulse glow effect
export const pulseGlow = {
  scale: [1, 1.05, 1],
  opacity: [0.5, 0.8, 0.5],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }
};

// Clip reveal animation
export const clipReveal = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)" },
  visible: { 
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.9, ease: easings.smooth }
  }
};

// Text reveal variants
export const textRevealContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.025,
      delayChildren: 0.05,
    },
  },
};

export const textRevealWord = {
  hidden: { opacity: 0, y: "100%" },
  visible: { 
    opacity: 1, 
    y: "0%",
    transition: { duration: 0.5, ease: easings.smooth }
  },
};

// Rotate in animation
export const rotateIn = {
  hidden: { opacity: 0, rotate: -5, scale: 0.95 },
  visible: { 
    opacity: 1, 
    rotate: 0, 
    scale: 1,
    transition: { duration: 0.7, ease: easings.smooth }
  },
};

// Generate stagger delays for natural feel
export const getStaggerDelay = (index: number, total: number, duration: number = 0.5): number => {
  const progress = index / Math.max(total - 1, 1);
  return progress * duration * (1 - Math.pow(1 - progress, 2));
};
