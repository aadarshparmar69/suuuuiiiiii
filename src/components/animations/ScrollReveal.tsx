import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";
import { easings, springConfigs } from "@/hooks/useScrollAnimations";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  blur?: boolean;
  scale?: boolean;
  rotate?: boolean;
  once?: boolean;
  threshold?: number;
}

export const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 60,
  blur = true,
  scale = false,
  rotate = false,
  once = true,
  threshold = 0.15,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { y: distance };
      case "down": return { y: -distance };
      case "left": return { x: distance };
      case "right": return { x: -distance };
      default: return {};
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...getInitialPosition(),
        filter: blur ? "blur(8px)" : "blur(0px)",
        scale: scale ? 0.95 : 1,
        rotate: rotate ? -3 : 0,
      }}
      animate={isInView ? {
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        rotate: 0,
      } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: easings.smooth,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Parallax wrapper for depth effects
interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

export const Parallax = ({
  children,
  className = "",
  speed = 0.3,
  direction = "up",
}: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const multiplier = direction === "up" ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed * multiplier, -100 * speed * multiplier]);
  const smoothY = useSpring(y, springConfigs.gentle);

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
};

// Staggered container for children animations
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
}

export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.08,
  delayChildren = 0.1,
  once = true,
}: StaggerContainerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger item for use within StaggerContainer
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export const StaggerItem = ({
  children,
  className = "",
  direction = "up",
}: StaggerItemProps) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { y: 40 };
      case "down": return { y: -40 };
      case "left": return { x: 40 };
      case "right": return { x: -40 };
    }
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...getInitialPosition(), filter: "blur(4px)" },
        visible: { 
          opacity: 1, 
          x: 0, 
          y: 0, 
          filter: "blur(0px)",
          transition: { duration: 0.6, ease: easings.smooth }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Scale on scroll effect
interface ScaleOnScrollProps {
  children: ReactNode;
  className?: string;
  scaleRange?: [number, number];
}

export const ScaleOnScroll = ({
  children,
  className = "",
  scaleRange = [0.85, 1],
}: ScaleOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Magnetic hover effect
interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export const Magnetic = ({
  children,
  className = "",
  strength = 0.3,
}: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    el.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Clip path reveal
interface ClipRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
}

export const ClipReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: ClipRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10%" });

  const getClipPath = () => {
    switch (direction) {
      case "up": return { hidden: "inset(100% 0% 0% 0%)", visible: "inset(0% 0% 0% 0%)" };
      case "down": return { hidden: "inset(0% 0% 100% 0%)", visible: "inset(0% 0% 0% 0%)" };
      case "left": return { hidden: "inset(0% 100% 0% 0%)", visible: "inset(0% 0% 0% 0%)" };
      case "right": return { hidden: "inset(0% 0% 0% 100%)", visible: "inset(0% 0% 0% 0%)" };
    }
  };

  const clipPaths = getClipPath();

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: clipPaths.hidden }}
      animate={isInView ? { clipPath: clipPaths.visible } : {}}
      transition={{ duration: 1, delay, ease: easings.smooth }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
