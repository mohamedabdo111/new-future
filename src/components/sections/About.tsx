import { Section } from "@/components/shared/Section";
import { Container } from "@/components/shared/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { CheckCircle2, Anchor } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { CTAButton } from "@/components/shared/CTAButton";
import portImg from "@/assets/site/home-welcome.webp";

const HIGHLIGHTS = [
  "Since 1986, based at Damietta Port and serving harbors across Egypt",
  "Provisions, bonded stores, deck and engine stores, fresh water and spare parts delivery, plus Suez Canal transit support, day and night",
  "Quality and safety certifications: ISO 9001, ISO 14001, ISO 22000, OHSAS 18001",
  "Fast turnaround, with our team at the quayside until delivery is signed off",
];

export function About() {
  return (
    <Section spacing="lg">
      <Container size="xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <AnimatedSection variant="slideRight" className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={portImg}
                alt="Crew receiving supplies by crane net from a supply boat alongside the ship"
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 sm:-right-8 flex items-center gap-4 rounded-2xl bg-card p-5 shadow-elegant border border-border">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-accent">
                <Anchor className="h-7 w-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Open 24/7</div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="slideLeft">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
              About Us
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1]">
              Ship Supply and Port Services at{" "}
              <span className="text-gradient-primary">Damietta, Port Said, Suez and Alexandria.</span>{" "}
              24/7
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Parisco is a ship supply and marine services company based at Damietta Port. We supply
              vessels, handle daily port husbandry and crew changes, and support Suez Canal transits,
              24 hours a day, so your ship spends less time in port.
            </p>
            <ul className="mt-8 grid gap-3">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-sm text-foreground/85">{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/about-us">
                <CTAButton withArrow>Our Story</CTAButton>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}
