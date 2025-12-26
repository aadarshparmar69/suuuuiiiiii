import { motion, useInView } from "framer-motion";
import { useRef, ReactNode, forwardRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(
  ({ children, className = "", delay = 0, direction = "up" }, forwardedRef) => {
    const internalRef = useRef(null);
    const ref = forwardedRef || internalRef;
    const isInView = useInView(internalRef, { once: true, margin: "-100px" });

    const getInitialPosition = () => {
      switch (direction) {
        case "up": return { opacity: 0, y: 40 };
        case "down": return { opacity: 0, y: -40 };
        case "left": return { opacity: 0, x: 40 };
        case "right": return { opacity: 0, x: -40 };
        case "none": return { opacity: 0 };
        default: return { opacity: 0, y: 40 };
      }
    };

    const getFinalPosition = () => {
      switch (direction) {
        case "up":
        case "down": return { opacity: 1, y: 0 };
        case "left":
        case "right": return { opacity: 1, x: 0 };
        case "none": return { opacity: 1 };
        default: return { opacity: 1, y: 0 };
      }
    };

    return (
      <motion.div
        ref={internalRef}
        initial={getInitialPosition()}
        animate={isInView ? getFinalPosition() : getInitialPosition()}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }
);

AnimatedSection.displayName = "AnimatedSection";

interface StaggeredContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggeredContainer = forwardRef<HTMLDivElement, StaggeredContainerProps>(
  ({ children, className = "", staggerDelay = 0.1 }, forwardedRef) => {
    const internalRef = useRef(null);
    const isInView = useInView(internalRef, { once: true, margin: "-50px" });

    return (
      <motion.div
        ref={internalRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: staggerDelay,
            },
          },
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }
);

StaggeredContainer.displayName = "StaggeredContainer";

interface StaggeredItemProps {
  children: ReactNode;
  className?: string;
}

export const StaggeredItem = forwardRef<HTMLDivElement, StaggeredItemProps>(
  ({ children, className = "" }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }
);

StaggeredItem.displayName = "StaggeredItem";
