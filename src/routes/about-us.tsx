import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { Section } from "@/components/shared/Section";
import { Container } from "@/components/shared/Container";
import { AnimatedSection, staggerItem } from "@/components/shared/AnimatedSection";
import { PageHero } from "@/components/shared/PageHero";
import { Certificates } from "@/components/sections/Certificates";
import { CORE_VALUES, EGYPTIAN_PORTS } from "@/data/content";
import { motion } from "framer-motion";
import portImg from "@/assets/site/company-profile-map.webp";
import aboutHero from "@/assets/site/about-hero.webp";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/about-us")({
  head: () =>
    pageMeta({
      title: "About Us — Parisco Co.",
      description:
        "Parisco Co. provides marine services and marine supplies from its office at Damietta Port, supporting vessels across every major Egyptian harbor, 24/7.",
      path: "/about-us",
      image: "/og/about.jpg",
      imageAlt: "About Parisco Co. — Marine support from Damietta Port, 24/7",
      ogTitle: "About Parisco Co. — Marine Services & Marine Supplies",
      ogDescription: "A dedicated team at Damietta Port delivering top-tier marine support at any hour.",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        image={aboutHero}
        eyebrow="Get to Know Us"
        title={<>About the <span className="italic text-accent">Company</span></>}
        subtitle="A dedicated team at Damietta Port delivering top-tier marine support at any hour."
      />

      <Section spacing="lg">
        <Container size="xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <AnimatedSection variant="slideRight" className="relative">
              <div className="overflow-hidden rounded-3xl shadow-elegant">
                <img src={portImg} alt="Map of Egypt marking the ports we serve" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection variant="slideLeft">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Who We Are</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight">
                A Dependable Partner for <span className="text-gradient-primary">Egypt's Harbors</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Since 1986, Parisco Co. has provided marine services and marine supplies from its office at Damietta Port. We coordinate everything from vessel supply and husbandry agency work to crew changes and nonstop canal transit support, so every ship gets turned around quickly and without fuss.
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">What Drives Us</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
              Built on Clear <span className="text-gradient-primary">Purpose</span>
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
