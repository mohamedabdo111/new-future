import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/shared/PageHero";
import { Contact } from "@/components/sections/Contact";
import { ContactCards } from "@/components/sections/ContactCards";
import contactHero from "@/assets/site/contact-hero.webp";

export const Route = createFileRoute("/get-in-touch")({
  head: () => ({
    meta: [
      { title: "Contact Us — Parisco Co." },
      {
        name: "description",
        content:
          "Reach Parisco Co. at Damietta Port, Office No. 17, Egypt. On call day and night for ship supply, port agency and Suez Canal transit support.",
      },
      { property: "og:title", content: "Contact Parisco Co." },
      { property: "og:description", content: "We're on call day and night at every Egyptian port." },
      { property: "og:type", content: "website" },
    ],
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
