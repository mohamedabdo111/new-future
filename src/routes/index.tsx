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
      { title: "Parisco Co. — Ship Supply & Marine Services in Egypt" },
      {
        name: "description",
        content:
          "Parisco Co. is a ship chandler and husbandry agent handling vessel supplies, crew changes and Suez Canal passage at every major Egyptian port — open day and night from Damietta Port.",
      },
      { property: "og:title", content: "Parisco Co. — Ship Supply & Marine Services You Can Count On" },
      {
        property: "og:description",
        content: "Marine services and marine supplies across Egypt's main harbors, 24/7.",
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
