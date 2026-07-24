import { Section } from "@/components/shared/Section";
import { Container } from "@/components/shared/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import type { ReactNode } from "react";

interface PageHeroProps {
  image: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
}

export function PageHero({ image, eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <Section
      spacing="sm"
      className="relative pt-40 pb-16 min-h-[60vh] flex items-center bg-transparent"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>
      <Container size="xl" className="relative z-10">
        <AnimatedSection>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-white max-w-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{subtitle}</p>
          )}
        </AnimatedSection>
      </Container>
    </Section>
  );
}
