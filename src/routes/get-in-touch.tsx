import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/shared/PageHero";
import { Contact } from "@/components/sections/Contact";
import aboutHero from "@/assets/contact-us.png";

export const Route = createFileRoute("/get-in-touch")({
  head: () => ({
    meta: [
      { title: "Contact Us — New Future Marine Services Co." },
      {
        name: "description",
        content:
          "Get in touch with New Future Marine Services. Head office at Rialto Tower, Port Said, Egypt. Available 24/7 for ship supply, agency and Suez Canal transit.",
      },
      { property: "og:title", content: "Contact New Future Marine Services Co." },
      { property: "og:description", content: "Reach our team 24/7 for marine supply and agency services in Egypt." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        image={aboutHero}
        eyebrow="Contact"
        title={<>Contact Our <span className="italic text-accent">Team</span></>}
        subtitle="We're available 24/7 across every Egyptian port. Reach out for quotes, coordination or support."
      />
      <Contact showMap />
    </>
  );
}
