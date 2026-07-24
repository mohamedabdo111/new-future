import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { WhyUs } from "@/components/sections/WhyUs";
import { Certificates } from "@/components/sections/Certificates";
import { Testimonials } from "@/components/sections/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "New Future Marine Services Co. — Marine Supply & Shipping Agency in Egypt" },
      {
        name: "description",
        content:
          "Reliable ship supply and maritime agency across all Egyptian ports — Port Said, Suez, Alexandria, Damietta and more. 24/7 Suez Canal transit and full ship supply services.",
      },
      { property: "og:title", content: "New Future Marine Services Co. — Marine Supply & Shipping Agency in Egypt" },
      {
        property: "og:description",
        content:
          "Premium ship supply, agency and crew change services across every Egyptian port, around the clock.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      {/* <Stats /> */}
      {/* <WhyUs /> */}
      {/* <Certificates /> */}
      {/* <Testimonials /> */}
    </>
  );
}
