import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/shared/Section";
import { Container } from "@/components/shared/Container";
import { AnimatedSection, staggerItem } from "@/components/shared/AnimatedSection";
import { PageHero } from "@/components/shared/PageHero";
import { Certificates } from "@/components/sections/Certificates";
import { CORE_VALUES, EGYPTIAN_PORTS } from "@/data/content";
import { motion } from "framer-motion";
import portImg from "@/assets/about-us/company-profile.png";
import aboutHero from "@/assets/about-us/about-us-hero.png";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — New Future Marine Services Co." },
      {
        name: "description",
        content:
          "New Future Marine Services operates 4 main offices across Egypt: Port Said, Alexandria, Suez/Sokhna & Damietta — delivering full ship supply, agency and 24/7 Suez Canal transit services.",
      },
      { property: "og:title", content: "About New Future Marine Services Co." },
      { property: "og:description", content: "Four offices across Egypt. Full ship supply, agency and Suez Canal transit services, 24/7." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        image={aboutHero}
        eyebrow="Who We Are"
        title={<>About Our <span className="italic text-accent">Company</span></>}
        subtitle="Four strategic offices across Egypt delivering premium marine services around the clock."
      />

      <Section spacing="lg">
        <Container size="xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <AnimatedSection variant="slideRight" className="relative">
              <div className="overflow-hidden rounded-3xl shadow-elegant">
                <img src={portImg} alt="Egyptian port operations" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection variant="slideLeft">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Company Profile</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight">
                A trusted network across every <span className="text-gradient-primary">Egyptian port</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                New Future Marine Services Co. consists of 4 main offices located in Egypt — Port Said, Alexandria, Suez/Sokhna and Damietta. Port Said is our head office, from which we offer full ship supply services, shipping agency, crew change, and 24/7 transit services in the Suez Canal, ensuring a fast and efficient turnaround for ships.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {EGYPTIAN_PORTS.map((p) => (
                  <div key={p} className="flex items-center gap-2 rounded-xl bg-muted/50 px-4 py-3 text-sm font-medium">
                    <MapPin className="h-4 w-4 text-accent" />
                    {p}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      <Section tone="muted" spacing="lg">
        <Container size="xl">
          <AnimatedSection className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Values & Vision</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
              Guided by <span className="text-gradient-primary">Purpose</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection stagger className="grid gap-6 md:grid-cols-2">
            {CORE_VALUES.map((v) => (
              <motion.div
                key={v.title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="flex flex-col gap-5 rounded-3xl bg-card p-8 sm:p-10 shadow-soft border border-border/60"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary text-white">
                  <v.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </AnimatedSection>
        </Container>
      </Section>

      <Certificates />
    </>
  );
}
