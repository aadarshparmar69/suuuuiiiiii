import { motion, useInView, Variants, TargetAndTransition } from "framer-motion";
import { useRef, ReactNode, useState, useEffect } from "react";
import { easings } from "@/hooks/useScrollAnimations";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  scale?: boolean;
  blur?: boolean;
  once?: boolean;
}

export const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 40,
  scale = false,
  blur = false,
  once = true,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const getInitial = () => {
    const initial: TargetAndTransition = { opacity: 0 };
    
    switch (direction) {
      case "up": initial.y = distance; break;
      case "down": initial.y = -distance; break;
      case "left": initial.x = distance; break;
      case "right": initial.x = -distance; break;
    }
    
    if (scale) initial.scale = 0.95;
    if (blur) initial.filter = "blur(10px)";
    
    return initial;
  };

  const getAnimate = () => {
    const animate: TargetAndTransition = { opacity: 1 };
    
    if (direction === "up" || direction === "down") animate.y = 0;
    if (direction === "left" || direction === "right") animate.x = 0;
    if (scale) animate.scale = 1;
    if (blur) animate.filter = "blur(0px)";
    
    return animate;
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? getAnimate() : getInitial()}
      transition={{ 
        duration, 
        delay, 
        ease: easings.smooth 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Staggered grid/list container
interface StaggeredRevealProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export const StaggeredReveal = ({
  children,
  className = "",
  staggerDelay = 0.1,
  once = true,
}: StaggeredRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Individual item for staggered reveal
interface StaggeredItemProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export const StaggeredItem = ({
  children,
  className = "",
  direction = "up",
}: StaggeredItemProps) => {
  const getInitial = () => {
    switch (direction) {
      case "up": return { y: 30 };
      case "down": return { y: -30 };
      case "left": return { x: 30 };
      case "right": return { x: -30 };
      default: return { y: 30 };
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, ...getInitial() },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.5, ease: easings.smooth },
    },
  };

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
};

// Parallax wrapper for hero sections
interface ParallaxWrapperProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export const ParallaxWrapper = ({
  children,
  className = "",
  speed = 0.5,
}: ParallaxWrapperProps) => {
  const ref = useRef(null);
  
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
};

// Text reveal animation (word by word)
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export const TextReveal = ({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.03,
}: TextRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const word: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: easings.smooth },
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={word} className="inline-block mr-[0.25em]">
          {w}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Counter animation
interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter = ({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isInView ? (
          <CounterAnimation value={value} duration={duration} />
        ) : (
          "0"
        )}
      </motion.span>
      {suffix}
    </motion.span>
  );
};

const CounterAnimation = ({ value, duration }: { value: number; duration: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const durationMs = duration * 1000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  return <>{count.toLocaleString()}</>;
};
