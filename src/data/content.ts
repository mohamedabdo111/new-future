import {
  Anchor, Ship, Wrench, Utensils, Fuel, HardHat, Users, Waves,
  Globe2, Shield, Clock, Award, TrendingUp, Package, LifeBuoy,
  Compass, Eye, Leaf, ShieldCheck,
} from "lucide-react";
import portAgency from "@/assets/site/service-port-agency.webp";
import galley from "@/assets/site/service-galley.webp";
import bonded from "@/assets/site/service-bonded.webp";
import safety from "@/assets/site/service-safety.webp";
import engineDeck from "@/assets/site/service-engine-deck.webp";
import crewRotation from "@/assets/site/service-crew-rotation.webp";
import diving from "@/assets/site/service-diving.webp";
import bunkering from "@/assets/site/service-bunkering.webp";
import canalTransit from "@/assets/site/service-canal-transit.webp";

export const EGYPTIAN_PORTS = [
  "Port Said", "Suez Canal", "Suez", "Alexandria",
  "Damietta Port", "Adabiya", "Safaga", "Sokhna Port",
] as const;

export const SERVICES = [
  {
    icon: Ship,
    title: "Port Agency & Husbandry",
    desc: "Our on-ground team handles arrivals, paperwork, and authorities so your vessel clears quickly and departs on schedule, with every port movement tracked closely.",
    image: portAgency,
  },
  {
    icon: Utensils,
    title: "Galley Provisions",
    desc: "Fresh produce, frozen items, and dry goods of dependable quality, packed and delivered right to the ship's kitchen at any Egyptian port.",
    image: galley,
  },
  {
    icon: Package,
    title: "Bonded Goods",
    desc: "Duty-free items for the crew, including tobacco, drinks, sweets, clothing, fragrances, and stationery, all cleared through customs before delivery.",
    image: bonded,
  },
  {
    icon: HardHat,
    title: "Safety & Life-Saving Gear",
    desc: "We supply and service firefighting systems and lifesaving equipment that meet SOLAS requirements, with proper certification.",
    image: safety,
  },
  {
    icon: Wrench,
    title: "Engine & Deck Supplies",
    desc: "A broad range of machinery spares, deck items, hand tools, valves, and electrical parts, sourced by IMPA/ISSA codes.",
    image: engineDeck,
  },
  {
    icon: Users,
    title: "Crew Change",
    desc: "We coordinate crew changes, sign-on and sign-off, including visas, security permits, and transport to and from the airport.",
    image: crewRotation,
  },
  {
    icon: Waves,
    title: "Diving & Hull Services",
    desc: "Certified divers clean hulls, polish propellers, and carry out underwater video inspections without sending the vessel to dry dock.",
    image: diving,
  },
  {
    icon: Fuel,
    title: "Bunkering, Lubricants & Fresh Water",
    desc: "Dependable fuel, lubricant and fresh water supply at all Egyptian ports, offered at competitive prices.",
    image: bunkering,
  },
  {
    icon: LifeBuoy,
    title: "Canal Transit Support",
    desc: "Round-the-clock assistance for Suez Canal passage, so vessels get through quickly with minimal waiting.",
    image: canalTransit,
  },
] as const;

export const BONDED_CATEGORIES = [
  "Tobacco and Soft Drinks",
  "Sweets and Snacks",
  "Clothing and Travel Items",
  "Gifts, Fragrances, and Beauty Products",
  "Books and Office Supplies",
  "Juices and Beverages",
] as const;

export const STATS = [
  { value: new Date().getFullYear() - 1986, suffix: "+", label: "Years of Experience", icon: Award },
  { value: 4800, suffix: "+", label: "Vessels Served", icon: Ship },
  { value: 8, suffix: "", label: "Egyptian Ports", icon: Globe2 },
  { value: 24, suffix: "/7", label: "Operations", icon: Clock },
] as const;

export const WHY_US = [
  { icon: Clock, title: "24/7 Operations", desc: "Round-the-clock service coordination across every Egyptian port." },
  { icon: Shield, title: "ISO Certified", desc: "ISO 9001, 14001, 22000 & OHSAS 18001 quality standards." },
  { icon: Globe2, title: "Damietta Port Office", desc: "Serving every major Egyptian harbor from Damietta Port." },
  { icon: Anchor, title: "Fast Turnaround", desc: "Efficient Suez Canal transits and port calls, every time." },
] as const;

export const CERTIFICATIONS = [
  { icon: ShieldCheck, code: "ISO 9001:2015", desc: "Quality Management" },
  { icon: Leaf, code: "ISO 14001", desc: "Environmental Management" },
  { icon: Utensils, code: "ISO 22000", desc: "Food Safety Management" },
  { icon: HardHat, code: "OHSAS 18001:2007", desc: "Occupational Health & Safety" },
] as const;

export const CORE_VALUES = [
  {
    icon: Compass,
    title: "Our Mission",
    text: "Fast, reliable ship supply and port services, delivered by an ISO-certified team that stays with you until delivery is signed off.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be the first choice for ship supply in Egyptian ports, growing step by step with partners wherever our clients call.",
  },
] as const;
