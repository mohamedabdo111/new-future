import { Mail, Phone } from "lucide-react";
import { SITE } from "@/constants/site";
import { Container } from "@/components/shared/Container";

export function TopHeader() {
  return (
    <div className="hidden md:block bg-ocean-deep text-white/90 text-xs">
      <Container size="xl">
        <div className="flex items-center justify-between gap-6 py-2.5">
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail className="h-3.5 w-3.5 text-accent" />
            <span>{SITE.email}</span>
          </a>
          <div className="flex items-center gap-5">
            {SITE.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-3.5 w-3.5 text-accent" />
                <span>{p}</span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
