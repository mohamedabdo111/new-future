import { Section } from "@/components/shared/Section";
import { Container } from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading";
import { AnimatedSection, staggerItem } from "@/components/shared/AnimatedSection";
import { CERTIFICATIONS } from "@/data/content";
import { motion } from "framer-motion";

export function Certificates() {
  return (
    <Section tone="muted" spacing="lg">
      <Container size="xl">
        <Heading
          eyebrow="Certifications"
          title={<>Accredited by <span className="text-gradient-primary">International Standards</span></>}
          subtitle="We uphold globally recognized ISO management systems across quality, environment, food safety and occupational health."
        />
        <AnimatedSection stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((c) => (
            <motion.div
              key={c.code}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center gap-4 rounded-3xl bg-card p-8 text-center shadow-soft border border-border/60"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary text-white">
                <c.icon className="h-8 w-8" />
              </div>
              <h3 className="text-base font-bold text-primary">{c.code}</h3>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </AnimatedSection>
      </Container>
    </Section>
  );
}
