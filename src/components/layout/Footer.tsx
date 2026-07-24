import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Container } from "@/components/shared/Container";
import { NAV_LINKS, SITE } from "@/constants/site";
import { EGYPTIAN_PORTS } from "@/data/content";
import logo from "@/assets/logo/marine-services.png";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ocean-deep text-white/80">
      <Container size="xl" className="py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex">
              <img
                src={logo}
                alt={SITE.name}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
              {SITE.description}
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-white/70">
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 hover:text-accent transition-colors">
                <Mail className="h-4 w-4 text-accent" /> {SITE.email}
              </a>
              {SITE.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Phone className="h-4 w-4 text-accent" /> {p}
                </a>
              ))}
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span>{SITE.address}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Navigate</h4>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-white/60 hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Egyptian Ports</h4>
            <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-white/60">
              {EGYPTIAN_PORTS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <span>© {year} {SITE.name}. All rights reserved.</span>
          <span>Crafted for modern marine operations.</span>
        </div>
      </Container>
    </footer>
  );
}
