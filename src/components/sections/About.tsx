import { Section } from "@/components/shared/Section";
import { Container } from "@/components/shared/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { CheckCircle2, Anchor } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { CTAButton } from "@/components/shared/CTAButton";
import portImg from "@/assets/welcome.png";

const HIGHLIGHTS = [
  "4 main offices across Egypt: Port Said, Alexandria, Suez/Sokhna & Damietta",
  "24/7 Suez Canal transit and full ship supply services",
  "ISO 9001, 14001, 22000 & OHSAS 18001 certified",
  "Fast, efficient turnaround with meticulous port follow-up",
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
                alt="Panoramic view of Port Said commercial harbor"
                loading="lazy"
                width={1600}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 sm:-right-8 flex items-center gap-4 rounded-2xl bg-card p-5 shadow-elegant border border-border">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-accent">
                <Anchor className="h-7 w-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Around the Clock</div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="slideLeft">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
              Welcome
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1]">
              Your Premium Partner in{" "}
              <span className="text-gradient-primary">Egyptian Ports</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Welcome to New Future Marine Services. We are your premium partner in Egyptian ports,
              offering extensive ship supply and maritime agency services. Port Said is home to our
              head office, providing full supply, husbandry, crew change and 24/7 Suez Canal transit
              for fast and efficient vessel turnaround.
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
                <CTAButton withArrow>Learn About Us</CTAButton>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}
