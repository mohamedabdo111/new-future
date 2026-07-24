export const SITE = {
  name: "New Future Marine Services Co.",
  shortName: "New Future Marine",
  tagline: "Reliable Marine Supply & Shipping Agency in Egypt",
  description:
    "Premium ship supply and maritime agency across all Egyptian ports — Port Said, Suez Canal, Suez, Alexandria, Damietta, Adabiya, Safaga & Sokhna. Services around the clock, 24/7.",
  email: "info@newfuture-marine.com",
  phones: ["+2 01224230917", "+2 01124151415", "+2 01025216524"],
  address:
    "Rialto Tower, Intersection of Ougina & Al-Bazar St, 2nd Floor, Port Said, Egypt.",
  mapEmbed:
    "https://www.google.com/maps?q=Port+Said+Egypt+port&hl=en&z=13&output=embed",
} as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Our Services", to: "/our-services" },
  { label: "Contact Us", to: "/get-in-touch" },
] as const;
