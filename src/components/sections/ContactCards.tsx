import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { Container } from "@/components/shared/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

const phone = SITE.phones[0];

const CARDS = [
  { icon: Phone, title: "Phone", value: phone, href: `tel:${phone}` },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: `+${SITE.whatsapp}`,
    href: `https://wa.me/${SITE.whatsapp}`,
    whatsapp: true,
  },
  { icon: Mail, title: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MapPin, title: "Location", value: SITE.footerAddress, href: undefined },
] as const;

export function ContactCards() {
  return (
    <Section spacing="sm">
      <Container size="xl">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {CARDS.map((c, i) => {
            const Icon = c.icon;
            const isWhatsApp = "whatsapp" in c;
            const body = (
              <div className="flex h-full flex-col items-center rounded-2xl border border-border bg-card p-5 text-center shadow-soft transition-shadow hover:shadow-elegant sm:p-7">
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-xl",
                    isWhatsApp ? "bg-[#25D366]/10 text-[#25D366]" : "bg-accent/10 text-accent",
                  )}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-bold sm:text-lg">{c.title}</h3>
                <p
                  className={cn(
                    "mt-2 break-all text-sm font-semibold",
                    isWhatsApp ? "text-[#1da851]" : "text-secondary",
                  )}
                >
                  {c.value}
                </p>
              </div>
            );
            return (
              <AnimatedSection key={c.title} delay={i * 0.08} className="h-full">
                {c.href ? (
                  <a
                    href={c.href}
                    className="block h-full"
                    {...(isWhatsApp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {body}
                  </a>
                ) : (
                  body
                )}
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
