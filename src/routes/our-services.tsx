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
import { Check, MapPin } from "lucide-react";
import { Heading } from "@/components/shared/Heading";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/our-services")({
  head: () => ({
    meta: [
      { title: "Our Services — Parisco Co." },
      {
        name: "description",
        content:
          "Port agency, galley provisions, bonded goods, safety gear, engine & deck supplies, crew change, diving & hull services, bunkering and Suez Canal transit support across every Egyptian port.",
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

      <Section spacing="sm" className="pt-20 pb-16">
        <Container size="xl">
          <Heading
            eyebrow="Where We Operate"
            title={<>Ports <span className="text-gradient-primary">We Serve</span></>}
            subtitle="From our head office at Damietta Port, our team covers every major Egyptian harbor, day and night."
            className="mb-10"
          />
          <AnimatedSection stagger className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
            {SERVICE_PORTS.map((p) => {
              const isHq = p === "Damietta";
              return (
                <motion.div
                  key={p}
                  variants={staggerItem}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl border p-4 transition-all hover:-translate-y-0.5 hover:shadow-elegant",
                    isHq
                      ? "border-transparent gradient-primary text-white shadow-elegant"
                      : "border-border/60 bg-card text-foreground shadow-soft",
                  )}
                >
                  <div
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
                      isHq ? "bg-white/15 text-accent" : "bg-primary/10 text-primary",
                    )}
                  >
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">{p}</span>
                    {isHq && (
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-white/70">
                        Head Office
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatedSection>
        </Container>
      </Section>

      <Section tone="muted" spacing="md">
        <Container size="xl">
          <Heading
            eyebrow="What We Offer"
            title={<>Our <span className="text-gradient-primary">Services</span></>}
            subtitle="Everything your vessel needs in port, handled by one team."
          />
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
