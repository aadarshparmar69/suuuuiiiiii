import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { easings } from "@/hooks/useScrollAnimations";

interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
}

export const TextReveal = ({
  children,
  className = "",
  as: Component = "p",
  delay = 0,
  staggerDelay = 0.025,
  once = true,
}: TextRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10%" });
  
  const words = useMemo(() => children.split(" "), [children]);

  return (
    <Component ref={ref as any} className={`${className} overflow-hidden`}>
      <motion.span
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: staggerDelay,
              delayChildren: delay,
            },
          },
        }}
        className="inline"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: {
                  y: "0%",
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    ease: easings.smooth,
                  },
                },
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </motion.span>
    </Component>
  );
};

// Character by character reveal
interface CharacterRevealProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
}

export const CharacterReveal = ({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.015,
  once = true,
}: CharacterRevealProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: "-10%" });
  
  const characters = useMemo(() => children.split(""), [children]);

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {characters.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
          variants={{
            hidden: { y: 20, opacity: 0, filter: "blur(4px)" },
            visible: {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                duration: 0.4,
                ease: easings.smooth,
              },
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Line reveal animation
interface LineRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
}

export const LineReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: LineRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10%" });

  const getInitialTransform = () => {
    switch (direction) {
      case "up": return { y: "110%" };
      case "down": return { y: "-110%" };
      case "left": return { x: "110%" };
      case "right": return { x: "-110%" };
    }
  };

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={getInitialTransform()}
        animate={isInView ? { x: 0, y: 0 } : getInitialTransform()}
        transition={{
          duration: 0.8,
          delay,
          ease: easings.smooth,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Gradient text with animated reveal
interface GradientTextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export const GradientTextReveal = ({
  children,
  className = "",
  delay = 0,
  once = true,
}: GradientTextRevealProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: "-10%" });

  return (
    <motion.span
      ref={ref}
      className={`gradient-text ${className}`}
      initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
      animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: easings.smooth,
      }}
    >
      {children}
    </motion.span>
  );
};
