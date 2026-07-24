import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/shared/Section";
import { Container } from "@/components/shared/Container";
import { AnimatedSection, staggerItem } from "@/components/shared/AnimatedSection";
import { PageHero } from "@/components/shared/PageHero";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { SERVICES, BONDED_CATEGORIES, EGYPTIAN_PORTS } from "@/data/content";
import ourServicesHero from "@/assets/our-services/our-services.png";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const Route = createFileRoute("/our-services")({
  head: () => ({
    meta: [
      { title: "Our Services — New Future Marine Services Co." },
      {
        name: "description",
        content:
          "Shipping agency, fresh provisions, bonded stores, safety equipment, engine & deck stores, crew change, underwater and bunker services across every Egyptian port.",
      },
      { property: "og:title", content: "Maritime & Supply Services — New Future Marine" },
      { property: "og:description", content: "Full marine services across all Egyptian ports — 24/7." },
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
        eyebrow="What We Offer"
        title={<>Our Maritime & <span className="italic text-accent">Supply Services</span></>}
        subtitle="Shipping agency and full supply services in all Egyptian ports."
      />

      <Section spacing="md">
        <Container size="xl">
          <AnimatedSection className="text-center mb-10">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We provide shipping agency and full supply services in all Egyptian ports:
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {EGYPTIAN_PORTS.map((p) => (
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
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Bonded Stores</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight">
                Comprehensive <span className="text-gradient-primary">Bonded Categories</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We supply a wide range of bonded goods, fully customs cleared and delivered on schedule.
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
