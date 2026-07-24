import { Section } from "@/components/shared/Section";
import { Container } from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { FLEET } from "@/data/content";

export function Fleet() {
  return (
    <Section id="fleet" spacing="lg">
      <Container size="xl">
        <Heading
          eyebrow="Capabilities"
          title={<>Every Vessel, Every Class — <span className="text-gradient-primary">Fully Supported</span></>}
          subtitle="Our teams have deep operational experience across the full spectrum of commercial vessels."
        />
        <AnimatedSection stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FLEET.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </AnimatedSection>
      </Container>
    </Section>
  );
}
