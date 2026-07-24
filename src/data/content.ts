import {
  Anchor, Ship, Wrench, Utensils, Fuel, HardHat, Users, Waves,
  Globe2, Shield, Clock, Award, TrendingUp, Package, LifeBuoy, Building2,
  Compass, Eye, Leaf, ShieldCheck,
} from "lucide-react";
import shippingService from "@/assets/our-services/Shipping-Service.png";
import freshProvision from "@/assets/our-services/Fresh-Provision.png";
import bondedStores from "@/assets/our-services/Bonded-Stores.png";
import safetyEquipment from "@/assets/our-services/Safety-Equipment.png";
import engineDeck from "@/assets/our-services/Engine-Deck.png";
import crewChange from "@/assets/our-services/Crew-Change.png";
import underWater from "@/assets/our-services/UnderWater.png";
import bunker from "@/assets/service-bunker.jpg";
import heroShip from "@/assets/hero-ship.jpg";

export const EGYPTIAN_PORTS = [
  "Port Said", "Suez Canal", "Suez", "Alexandria",
  "Damietta Port", "Adabiya", "Safaga", "Sokhna Port",
] as const;

export const SERVICES = [
  {
    icon: Ship,
    title: "Shipping Services / Agency",
    desc: "First-class attendance and unique shipping agency facilities. Our local team ensures smooth, fast clearance of vessels with meticulous follow-up on port movements.",
    image: shippingService,
  },
  {
    icon: Utensils,
    title: "Fresh Provision Supply",
    desc: "High-quality fresh, frozen, and dry provisions delivered directly to the vessel's galley across all Egyptian ports.",
    image: freshProvision,
  },
  {
    icon: Package,
    title: "Bonded Stores Supply",
    desc: "Cigarettes, beverages, confectionery, apparel, perfumes, cosmetics, books and stationery — fully bonded and customs cleared.",
    image: bondedStores,
  },
  {
    icon: HardHat,
    title: "Safety Equipment Supply",
    desc: "Supply and certified servicing of marine firefighting equipment and SOLAS-compliant life-saving appliances.",
    image: safetyEquipment,
  },
  {
    icon: Wrench,
    title: "Engine & Deck Store Supply",
    desc: "All types of deck and engine stores, tools, valves, and electrical equipment according to IMPA/ISSA catalogs.",
    image: engineDeck,
  },
  {
    icon: Users,
    title: "Crew Change Services",
    desc: "Smooth arrangement of sign-on/sign-off procedures — including visas, security clearances, and airport transfers.",
    image: crewChange,
  },
  {
    icon: Waves,
    title: "Underwater Services",
    desc: "Hull cleaning, propeller polishing, and underwater CCTV inspections performed by certified divers.",
    image: underWater,
  },
  {
    icon: Fuel,
    title: "Bunker & Fuel Trading",
    desc: "Reliable bunker fuel supply and lubricants across every Egyptian port with competitive rates.",
    image: bunker,
  },
  {
    icon: LifeBuoy,
    title: "Suez Canal Transit",
    desc: "24/7 transit services in the Suez Canal ensuring fast and efficient turnaround for vessels.",
    image: heroShip,
  },
] as const;

export const BONDED_CATEGORIES = [
  "Cigarettes and Soft Drinks",
  "Confectionery and Snacks",
  "Apparel and Travel Goods",
  "Gifts, Perfumes, and Cosmetics",
  "Books and Stationery",
  "Beverages and Juices",
] as const;

export const STATS = [
  { value: 25, suffix: "+", label: "Years of Excellence", icon: Award },
  { value: 4800, suffix: "+", label: "Vessels Served", icon: Ship },
  { value: 8, suffix: "", label: "Egyptian Ports", icon: Globe2 },
  { value: 24, suffix: "/7", label: "Operations", icon: Clock },
] as const;

export const WHY_US = [
  { icon: Clock, title: "24/7 Operations", desc: "Round-the-clock service coordination across every Egyptian port." },
  { icon: Shield, title: "ISO Certified", desc: "ISO 9001, 14001, 22000 & OHSAS 18001 quality standards." },
  { icon: Globe2, title: "4 Main Offices", desc: "Port Said, Alexandria, Suez/Sokhna & Damietta coverage." },
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
    text: "Facing the challenges! We develop and expand our services by adopting and integrating international quality management standards, enhancing our team's ability to respond to customer needs in a timely and effective manner, while fully maintaining customer satisfaction.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "We aspire to be your partners — serving your fleet anywhere around the world. Accordingly, we are developing a wide network of offices in major ports located on shipping routes to serve you.",
  },
] as const;

export const FLEET = [
  { icon: Ship, title: "Container Support", desc: "End-to-end services for container vessels of all sizes." },
  { icon: Fuel, title: "Tanker Servicing", desc: "Specialized handling for oil, chemical, and gas carriers." },
  { icon: Package, title: "Bulk Carriers", desc: "Efficient bulk cargo operations and stevedoring." },
  { icon: Building2, title: "Offshore Support", desc: "Dedicated logistics for offshore rigs and platforms." },
] as const;

export const TESTIMONIALS = [
  {
    name: "Captain James Whitaker",
    role: "Master, MV Northern Star",
    quote: "New Future Marine's team turned around our Port Said call in half the expected time. Impeccable coordination and quality provisions.",
  },
  {
    name: "Anna Krüger",
    role: "Operations Director, Neptune Shipping",
    quote: "Their reliability across every Egyptian port is unmatched. We consider them a true extension of our fleet operations.",
  },
  {
    name: "Rajiv Menon",
    role: "Fleet Manager, Trident Tankers",
    quote: "From bunker fuel to underwater services, one call handles everything — rare in this industry.",
  },
] as const;
