import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import homeHero from "@/assets/site/home-hero.webp";
import aboutHero from "@/assets/site/about-hero.webp";
import servicesHero from "@/assets/site/services-hero.webp";
import canalTransit from "@/assets/site/service-canal-transit.webp";
import { Container } from "@/components/shared/Container";
import { CTAButton } from "@/components/shared/CTAButton";
import { cn } from "@/lib/utils";

const HERO_SLIDES = [
  { src: homeHero, alt: "Bulk carrier at anchor with an orange tugboat alongside" },
  { src: aboutHero, alt: "Aerial view of a cargo vessel under way at sea" },
  { src: servicesHero, alt: "Aerial view of a busy Egyptian commercial port" },
  { src: canalTransit, alt: "Container ship transiting the Suez Canal with a pilot boat" },
] as const;

const SLIDE_INTERVAL_MS = 6000;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const goTo = (next: number) => {
    setIndex((next + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <AnimatePresence mode="sync" initial={false}>
          <motion.img
            key={HERO_SLIDES[index].src}
            src={HERO_SLIDES[index].src}
            alt={HERO_SLIDES[index].alt}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
            width={1920}
            height={1080}
          />
        </AnimatePresence>
        <div className="absolute inset-0 gradient-hero" />
      </motion.div>

      <motion.div
        aria-hidden
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] top-[25%] h-64 w-64 rounded-full bg-accent/20 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[5%] bottom-[15%] h-72 w-72 rounded-full bg-secondary/30 blur-3xl"
      />

      <motion.div style={{ opacity }} className="relative flex min-h-[100svh] items-center pt-32 pb-28 sm:pb-40">
        <Container size="xl">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Your Partner on the Water
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9 }}
              className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] text-white"
            >
              Ship Supply & Marine Services{" "}
              <span className="italic text-accent">You Can Count On</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/85"
            >
              Open <span className="font-semibold text-accent">day and night</span>, we handle vessel
              supplies, agency work, crew changes, and canal passage at every major Egyptian port.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Link to="/our-services">
                <CTAButton size="lg" withArrow>
                  See What We Do
                </CTAButton>
              </Link>
              <Link to="/about-us">
                <CTAButton size="lg" variant="glass">
                  <PlayCircle className="h-5 w-5" /> Meet the Team
                </CTAButton>
              </Link>
            </motion.div>
          </div>
        </Container>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => goTo(index - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full glass text-white transition hover:bg-white/20"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2 rounded-full glass px-3 py-2" role="tablist" aria-label="Hero slides">
            {HERO_SLIDES.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === index ? "w-6 bg-accent" : "w-2 bg-white/50 hover:bg-white/80",
                )}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next slide"
            onClick={() => goTo(index + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full glass text-white transition hover:bg-white/20"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <motion.div
          aria-hidden
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="hidden h-11 w-11 items-center justify-center rounded-full glass text-white sm:flex"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </div>
    </section>
  );
}
