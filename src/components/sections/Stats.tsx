import { Section } from "@/components/shared/Section";
import { Container } from "@/components/shared/Container";
import { AnimatedSection, staggerItem } from "@/components/shared/AnimatedSection";
import { STATS } from "@/data/content";
import { useCountUp } from "@/hooks/useCountUp";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

function StatCard({ icon: Icon, value, suffix, label }: {
  icon: LucideIcon; value: number; suffix: string; label: string;
}) {
  const { ref, value: v } = useCountUp(value);
  return (
    <motion.div variants={staggerItem} className="flex flex-col items-center gap-3 rounded-2xl glass-dark p-8 text-center">
      <Icon className="h-8 w-8 text-accent" />
      <div className="text-4xl sm:text-5xl font-bold text-white">
        <span ref={ref}>{v}</span>
        <span>{suffix}</span>
      </div>
      <div className="text-xs uppercase tracking-[0.25em] text-white/70">{label}</div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <Section tone="dark" spacing="md" className="relative">
      {/* Animated background */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
      />
      <Container size="xl">
        <AnimatedSection stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </AnimatedSection>
      </Container>
    </Section>
  );
}
