import { Section } from "@/components/shared/Section";
import { Container } from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading";
import { AnimatedSection, staggerItem } from "@/components/shared/AnimatedSection";
import { TESTIMONIALS } from "@/data/content";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <Section spacing="lg">
      <Container size="xl">
        <Heading
          eyebrow="Testimonials"
          title={<>What Our <span className="text-gradient-primary">Partners Say</span></>}
        />
        <AnimatedSection stagger className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <motion.blockquote
              key={t.name}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="relative flex flex-col gap-5 rounded-3xl bg-card p-8 shadow-soft border border-border/60"
            >
              <Quote className="h-10 w-10 text-accent/50" />
              <p className="text-foreground leading-relaxed">"{t.quote}"</p>
              <footer className="mt-2 border-t border-border pt-4">
                <div className="font-bold text-primary">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </footer>
            </motion.blockquote>
          ))}
        </AnimatedSection>
      </Container>
    </Section>
  );
}
