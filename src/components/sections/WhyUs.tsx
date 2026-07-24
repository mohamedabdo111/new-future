import { Section } from "@/components/shared/Section";
import { Container } from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { WHY_US } from "@/data/content";

export function WhyUs() {
  return (
    <Section spacing="lg" tone="muted">
      <Container size="xl">
        <Heading
          eyebrow="Why Choose Us"
          title={<>Built for <span className="text-gradient-primary">Reliability</span> at Sea</>}
          subtitle="Every service is engineered around one goal: keeping your vessels moving without disruption."
        />
        <AnimatedSection stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </AnimatedSection>
      </Container>
    </Section>
  );
}
