export const SITE = {
  name: "Parisco Co.",
  shortName: "Parisco",
  url: "https://parisco-marinesupplies.com",
  founded: 1986,
  registration: "10E9j",
  tagline: "Marine Services & Marine Supplies",
  description:
    "Ship chandler, husbandry agent and crew change services covering Egypt's main harbors, Port Said, Suez Canal, Suez, Alexandria, Damietta, Adabiya, Safaga, and Sokhna, available 24 hours a day.",
  email: "info@parisco-marinesupplies.com",
  phones: ["+201062082228"],
  whatsapp: "201062082228",
  contactPerson: "Mohab El Hlily",
  address: "Egypt — Damietta Port, Office No. 17",
  footerAddress: "Damietta Port, Office No. 17, Egypt",
  mapEmbed:
    "https://www.google.com/maps?q=Damietta+Port+Egypt&hl=en&z=13&output=embed",
} as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Our Services", to: "/our-services" },
  { label: "Contact Us", to: "/get-in-touch" },
] as const;
