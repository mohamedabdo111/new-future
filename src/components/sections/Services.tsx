import { Section } from "@/components/shared/Section";
import { Container } from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { SERVICES } from "@/data/content";

export function Services() {
  return (
    <Section id="services" tone="muted" spacing="lg">
      <Container size="xl">
        <Heading
          eyebrow="Our Offer"
          title={<>A Full Range of <span className="text-gradient-primary">Marine Solutions</span></>}
          subtitle="From the bow to the engine room and from one port to the next, everything your fleet needs under one roof."
        />
        <AnimatedSection stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </AnimatedSection>
      </Container>
    </Section>
  );
}
