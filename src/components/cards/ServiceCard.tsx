import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { staggerItem } from "@/components/shared/AnimatedSection";

export const serviceSlug = (title: string) =>
  title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  image: string;
}

export function ServiceCard({ icon: Icon, title, desc, image }: ServiceCardProps) {
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -6 }}
      id={serviceSlug(title)}
      className="group relative flex scroll-mt-40 flex-col overflow-hidden rounded-3xl bg-card shadow-soft transition-shadow hover:shadow-elegant"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/70 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl glass">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
        <Link
          to="/our-services"
          hash={serviceSlug(title)}
          className="mt-auto inline-flex w-fit items-center gap-1.5 pt-2 text-sm font-semibold text-secondary transition-colors hover:text-accent"
        >
          Details <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
