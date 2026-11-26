import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/shared/PageHero";
import { Contact } from "@/components/sections/Contact";
import { ContactCards } from "@/components/sections/ContactCards";
import contactHero from "@/assets/site/contact-hero.webp";

export const Route = createFileRoute("/get-in-touch")({
  head: () =>
    pageMeta({
      title: "Contact Us — Parisco Co.",
      description:
        "Reach Parisco Co. at Damietta Port, Office No. 17, Egypt. On call day and night for ship supply, port agency and Suez Canal transit support.",
      path: "/get-in-touch",
      image: "/og/contact.jpg",
      imageAlt: "Contact Parisco Co. — Request a quote, we're on call 24/7",
      ogTitle: "Contact Parisco Co. — Request a Quote",
      ogDescription: "Send us your port, ETA and requisition list. We're on call day and night at every Egyptian port.",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        image={contactHero}
        eyebrow="Let's Talk"
        title={<>Reach Out to <span className="italic text-accent">Our Team</span></>}
        subtitle="We're on call day and night at every Egyptian port. Write to us for pricing, planning, or any support your vessel needs."
      />
      <ContactCards />
      <Contact showMap />
    </>
  );
}
