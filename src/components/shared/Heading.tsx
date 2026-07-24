import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { AnimatedSection } from "./AnimatedSection";

interface HeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
  invert?: boolean;
}

export function Heading({ eyebrow, title, subtitle, align = "center", className, invert }: HeadingProps) {
  return (
    <AnimatedSection
      className={cn(
        "flex flex-col gap-4 mb-14",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.25em]",
            invert ? "text-accent" : "text-secondary",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] max-w-3xl",
          invert ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg max-w-2xl leading-relaxed",
            invert ? "text-white/75" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
