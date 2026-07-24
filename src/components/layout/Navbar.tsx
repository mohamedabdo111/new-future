import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants/site";
import { CTAButton } from "@/components/shared/CTAButton";
import { Container } from "@/components/shared/Container";
import { TopHeader } from "@/components/layout/TopHeader";
import logo from "@/assets/logo/marine-services.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <TopHeader />
      <div
        className={cn(
          "transition-all duration-300",
          scrolled ? "glass shadow-soft py-2" : "bg-white/80 backdrop-blur-md py-3",
        )}
      >
        <Container size="xl">
          <div className="flex items-center justify-between gap-6">
            <Link to="/" className="flex items-center shrink-0">
              <img
                src={logo}
                alt="New Future Marine Services Co."
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "text-primary bg-primary/10" }}
                  inactiveProps={{ className: "text-foreground/80 hover:text-primary hover:bg-primary/5" }}
                  className="rounded-full px-4 py-2 text-sm font-medium transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Link to="/get-in-touch">
                <CTAButton variant="primary" size="sm">Get a Quote</CTAButton>
              </Link>
            </div>

            <button
              aria-label="Toggle menu"
              className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden overflow-hidden mt-3 rounded-2xl bg-card shadow-elegant border border-border"
              >
                <div className="flex flex-col p-3">
                  {NAV_LINKS.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-primary/5"
                    >
                      {l.label}
                    </Link>
                  ))}
                  <Link to="/get-in-touch" onClick={() => setOpen(false)}>
                    <CTAButton className="mt-2 w-full" size="sm">Get a Quote</CTAButton>
                  </Link>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </Container>
      </div>
    </motion.header>
  );
}
