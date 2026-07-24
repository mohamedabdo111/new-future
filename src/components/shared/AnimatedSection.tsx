import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "fadeUp" | "fadeIn" | "scale" | "slideLeft" | "slideRight";

const variants: Record<Variant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.9 } },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  },
  slideRight: {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  },
};

interface AnimatedSectionProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  stagger?: boolean;
  className?: string;
  as?: "div" | "section" | "article" | "ul" | "li";
}

export function AnimatedSection({
  children,
  variant = "fadeUp",
  delay = 0,
  stagger,
  className,
  as = "div",
}: AnimatedSectionProps) {
  const MotionTag = motion[as];
  const v = stagger
    ? {
        hidden: {},
        show: { transition: { staggerChildren: 0.12, delayChildren: delay } },
      }
    : variants[variant];

  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={v}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

export const staggerItem: Variants = variants.fadeUp;
