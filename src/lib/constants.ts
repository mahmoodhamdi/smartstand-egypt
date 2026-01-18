import { NavItem, Service, Partner, Project, Capability, ContactInfo, SocialLink } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Projects", href: "#projects" },
  { label: "Contact us", href: "#contact" },
];

export const COMPANY_INFO = {
  name: "Smart Stand Egypt",
  tagline: "Your vision, our creative expertise.",
  description: `Smart Stand Egypt is a pioneering company that excels in providing effective marketing solutions to our esteemed partners across the globe. We strive to deliver outstanding promotional strategies that help to expedite sales and foster significant growth in the market.

Our vast range of advertising services is designed to offer utmost convenience to our customers, and we have spared no effort in bringing to you the most exceptional and exclusive offers available in the industry.

Our main goal is to exceed our clients' expectations and provide them with the highest level of service possible.

At Smart Stand Egypt, we offer a comprehensive suite of advertising services.`,
};

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "Lockers",
    description: "Smart Stand is a leading provider of a wide range of services",
    icon: "/images/services/locker1.svg",
  },
  {
    id: "2",
    title: "Display Stands",
    description: "Professional display stands for showcasing products effectively",
    icon: "/images/services/locker2.svg",
  },
  {
    id: "3",
    title: "Promotional Materials",
    description: "High-quality promotional materials for your marketing campaigns",
    icon: "/images/services/locker3.svg",
  },
  {
    id: "4",
    title: "Brand Activation",
    description: "Engaging brand activation solutions to connect with customers",
    icon: "/images/services/locker1.svg",
  },
  {
    id: "5",
    title: "Event Solutions",
    description: "Complete event solutions for exhibitions and trade shows",
    icon: "/images/services/locker2.svg",
  },
];

export const PARTNERS: Partner[] = [
  { id: "1", name: "RedBull", logo: "/images/partners/redbull.png" },
  { id: "2", name: "ELARABY", logo: "/images/partners/elaraby.png" },
  { id: "3", name: "Bosch", logo: "/images/partners/bosch.png" },
  { id: "4", name: "TCL", logo: "/images/partners/tcl.png" },
  { id: "5", name: "LG", logo: "/images/partners/lg.png" },
];

export const PROJECTS: Project[] = [
  { id: "1", title: "Healthy & Tasty", image: "/images/projects/healthy-tasty.png" },
  { id: "2", title: "Yolo", image: "/images/projects/yolo.png" },
  { id: "3", title: "LG Egypt", image: "/images/projects/lg.png" },
  { id: "4", title: "Haier", image: "/images/projects/haier.png" },
  { id: "5", title: "Bosch", image: "/images/projects/bosch.png" },
];

export const CAPABILITIES: Capability[] = [
  {
    id: "1",
    title: "Laser Cutting",
    description: "Our laser cutting services allow us to create intricate and precise designs.",
  },
  {
    id: "2",
    title: "CNC Routing",
    description: "Advanced CNC routing for complex shapes and patterns.",
  },
  {
    id: "3",
    title: "3D Printing",
    description: "State-of-the-art 3D printing for prototypes and final products.",
  },
  {
    id: "4",
    title: "Large Format Printing",
    description: "High-quality large format printing for banners and displays.",
  },
  {
    id: "5",
    title: "Vinyl Cutting",
    description: "Precision vinyl cutting for signage and decorative applications.",
  },
  {
    id: "6",
    title: "Metal Fabrication",
    description: "Custom metal fabrication for durable display solutions.",
  },
  {
    id: "7",
    title: "Acrylic Works",
    description: "Expert acrylic fabrication for modern and elegant displays.",
  },
  {
    id: "8",
    title: "LED Solutions",
    description: "Innovative LED lighting solutions for impactful displays.",
  },
];

export const CONTACT_INFO: ContactInfo = {
  address: "88 Joseph Tito, 5th floor\nAl nozha - Cairo",
  phone: "+20 155555 00 73",
  email: "info@smartstand-eg.com",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Facebook", url: "#", icon: "/images/icons/facebook.png" },
  { platform: "Instagram", url: "#", icon: "/images/icons/instagram.png" },
  { platform: "LinkedIn", url: "#", icon: "/images/icons/linkedin.png" },
];

export const ASSETS = {
  logo: {
    full: "/images/logo/logo-full.svg",
    icon: "/images/logo/logo-icon.svg",
  },
  hero: {
    mainPhoto: "/images/hero/main-photo.png",
  },
  about: {
    image: "/images/about/about-image.png",
  },
  contact: {
    person: "/images/contact/person.svg",
  },
  shapes: {
    main: "/images/shapes/main.svg",
    vector1: "/images/shapes/vector1.svg",
    vector2: "/images/shapes/vector2.svg",
    vector3: "/images/shapes/vector3.svg",
  },
};
