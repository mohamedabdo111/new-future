import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/shared/Section";
import { Container } from "@/components/shared/Container";
import { AnimatedSection, staggerItem } from "@/components/shared/AnimatedSection";
import { PageHero } from "@/components/shared/PageHero";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { SERVICES, BONDED_CATEGORIES } from "@/data/content";

const SERVICE_PORTS = ["Port Said", "Suez Canal", "Suez", "Alexandria", "Damietta", "Adabiya", "Safaga", "Sokhna"] as const;
import ourServicesHero from "@/assets/site/services-hero.webp";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const Route = createFileRoute("/our-services")({
  head: () => ({
    meta: [
      { title: "Our Services — Parisco Co." },
      {
        name: "description",
        content:
          "Port agency, galley provisions, bonded goods, safety gear, engine & deck supplies, crew rotation, diving & hull services, bunkering and Suez Canal transit support across every Egyptian port.",
      },
      { property: "og:title", content: "Marine Services & Supplies — Parisco Co." },
      { property: "og:description", content: "Marine support, end to end, at every Egyptian harbor — 24/7." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        image={ourServicesHero}
        eyebrow="Our Expertise"
        title={<>Marine Support, <span className="italic text-accent">End to End</span></>}
        subtitle="From port agency to complete vessel supply, we keep your ship moving smoothly through every Egyptian harbor."
      />

      <Section spacing="md">
        <Container size="xl">
          <AnimatedSection className="text-center mb-10">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ports we serve:
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {SERVICE_PORTS.map((p) => (
                <span key={p} className="rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">
                  {p}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      <Section tone="muted" spacing="lg">
        <Container size="xl">
          <AnimatedSection stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </AnimatedSection>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container size="xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <AnimatedSection variant="slideRight">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Duty-Free Range</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight">
                Everything Your Crew Needs, <span className="text-gradient-primary">Duty-Cleared</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                A wide selection of bonded items, cleared by customs and delivered on time.
              </p>
            </AnimatedSection>

            <AnimatedSection variant="slideLeft" stagger className="grid gap-3 sm:grid-cols-2">
              {BONDED_CATEGORIES.map((cat) => (
                <motion.div
                  key={cat}
                  variants={staggerItem}
                  className="flex items-center gap-3 rounded-2xl bg-card p-4 shadow-soft border border-border/60"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-accent">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{cat}</span>
                </motion.div>
              ))}
            </AnimatedSection>
          </div>
        </Container>
      </Section>
    </>
  );
}
