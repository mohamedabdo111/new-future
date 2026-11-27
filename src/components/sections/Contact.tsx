import { useState } from "react";
import { Section } from "@/components/shared/Section";
import { Container } from "@/components/shared/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { CTAButton } from "@/components/shared/CTAButton";
import { SITE } from "@/constants/site";
import { Mail, Phone, MapPin, Send, Building2, User, FileCheck2 } from "lucide-react";

const FIELDS = [
  { name: "name", label: "Full name", type: "text", required: true },
  { name: "email", label: "Email address", type: "email", required: true },
  { name: "vessel", label: "Company / Vessel name", type: "text", required: true },
  { name: "port", label: "Port", type: "text", required: true },
  { name: "eta", label: "ETA", type: "text", required: true },
] as const;

interface ContactProps {
  showMap?: boolean;
  compact?: boolean;
}

export function Contact({ showMap = false, compact = false }: ContactProps) {
  const [sent, setSent] = useState(false);
  return (
    <Section id="contact" spacing={compact ? "md" : "lg"} tone="muted">
      <Container size="xl">
        <div className="grid overflow-hidden rounded-3xl shadow-elegant lg:grid-cols-2">
          <AnimatedSection variant="slideRight" className="bg-card p-8 sm:p-12">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
              Request a Quote
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Send Your Requisition</h2>
            <p className="mt-3 text-muted-foreground">
              Send us your port, ETA and requisition list. We reply within 6 hours.
            </p>

            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="mt-8 flex flex-col gap-6"
            >
              {FIELDS.map((f) => (
                <div key={f.name} className="flex flex-col gap-2">
                  <label htmlFor={f.name} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    required={f.required}
                    className="border-b border-border bg-transparent py-2 text-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>
              ))}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Requisition list / message
                </label>
                <textarea
                  id="message" name="message" rows={4}
                  className="border-b border-border bg-transparent py-2 text-foreground outline-none transition-colors focus:border-primary resize-none"
                />
              </div>
              <div>
                <CTAButton type="submit" variant="accent" withArrow>
                  {sent ? "Request Sent" : "Request a Quote"}
                </CTAButton>
              </div>
            </form>
          </AnimatedSection>

          <AnimatedSection variant="slideLeft" className="relative gradient-primary p-8 sm:p-12 text-white overflow-hidden">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
            <span className="relative text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Find Us
            </span>
            <h3 className="relative mt-3 text-3xl sm:text-4xl font-bold leading-tight">
              Speak with<br />Us Today
            </h3>

            <div className="relative mt-8 flex flex-col gap-5">
              <ContactRow icon={<Building2 />} label={`${SITE.name} — ${SITE.tagline}`} />
              <ContactRow icon={<User />} label={SITE.contactPerson} />
              <ContactRow icon={<FileCheck2 />} label={`Commercial Registration & License No. ${SITE.registration}`} />
              <ContactRow icon={<MapPin />} label={SITE.address} />
              <ContactRow icon={<Mail />} label={SITE.email} href={`mailto:${SITE.email}`} />
              {SITE.phones.map((p) => (
                <ContactRow key={p} icon={<Phone />} label={p} href={`tel:${p.replace(/\s/g, "")}`} />
              ))}
            </div>

            <div className="relative mt-8 flex items-center gap-3 text-sm text-white/70">
              <Send className="h-4 w-4" />
              <span>Reachable around the clock, in any time zone</span>
            </div>
          </AnimatedSection>
        </div>

        {showMap && (
          <AnimatedSection className="mt-10 overflow-hidden rounded-3xl shadow-elegant border border-border">
            <iframe
              title="Office location — Damietta Port"
              src={SITE.mapEmbed}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </AnimatedSection>
        )}
      </Container>
    </Section>
  );
}

function ContactRow({ icon, label, href }: { icon: React.ReactNode; label: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/15 text-accent">
        {icon}
      </div>
      <span className="pt-2 text-sm text-white/90">{label}</span>
    </div>
  );
  return href ? <a href={href} className="hover:text-accent transition-colors">{content}</a> : content;
}
