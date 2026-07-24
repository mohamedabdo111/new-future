import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  children: ReactNode;
  spacing?: "sm" | "md" | "lg";
  tone?: "default" | "muted" | "dark";
}

const spacing = {
  sm: "py-16",
  md: "py-24",
  lg: "py-32",
};

const tones = {
  default: "bg-background",
  muted: "bg-muted/40",
  dark: "bg-ocean-deep text-white",
};

export function Section({ id, children, spacing: s = "md", tone = "default", className, ...rest }: SectionProps) {
  return (
    <section id={id} className={cn("relative overflow-hidden", spacing[s], tones[tone], className)} {...rest}>
      {children}
    </section>
  );
}
