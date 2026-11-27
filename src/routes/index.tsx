import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { WhyUs } from "@/components/sections/WhyUs";
import { Certificates } from "@/components/sections/Certificates";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta({
      title: "Parisco Co. — Ship Supply & Marine Services in Egypt",
      description:
        "Parisco Co. is a ship chandler and husbandry agent handling vessel supplies, crew changes and Suez Canal passage at every major Egyptian port — open day and night from Damietta Port.",
      path: "/",
      image: "/og/home.jpg",
      imageAlt: "Parisco Co. — Ship Supply & Marine Services You Can Count On",
      ogTitle: "Parisco Co. — Ship Supply & Marine Services You Can Count On",
      ogDescription: "Ship chandler, husbandry agent and crew change services across Egypt's main harbors, 24/7.",
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
    </>
  );
}
