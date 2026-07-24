import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { staggerItem } from "@/components/shared/AnimatedSection";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  invert?: boolean;
}

export function FeatureCard({ icon: Icon, title, desc, invert }: FeatureCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4 }}
      className={
        invert
          ? "flex flex-col gap-4 rounded-2xl glass-dark p-7"
          : "flex flex-col gap-4 rounded-2xl bg-card p-7 shadow-soft border border-border/60"
      }
    >
      <div
        className={
          invert
            ? "flex h-14 w-14 items-center justify-center rounded-xl bg-accent/20 text-accent"
            : "flex h-14 w-14 items-center justify-center rounded-xl gradient-primary text-white"
        }
      >
        <Icon className="h-7 w-7" />
      </div>
      <h3 className={invert ? "text-lg font-bold text-white" : "text-lg font-bold text-foreground"}>
        {title}
      </h3>
      <p className={invert ? "text-sm text-white/70 leading-relaxed" : "text-sm text-muted-foreground leading-relaxed"}>
        {desc}
      </p>
    </motion.div>
  );
}
