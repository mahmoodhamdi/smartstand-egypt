import { NavItem, Service, Partner, Project, Capability, ContactInfo, SocialLink } from "@/types";

// ============================================
// NAVIGATION ITEMS
// ============================================
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Projects", href: "#projects" },
  { label: "Contact us", href: "#contact" },
];

// ============================================
// COMPANY INFO (REAL DATA)
// ============================================
export const COMPANY_INFO = {
  name: "Smart Stand Egypt",
  tagline: "Integrated Display Solutions",
  description: "Smart Stand Egypt is a pioneering company that excels in providing effective marketing solutions to our esteemed partners across the globe.",
  fullDescription: `Smart Stand Egypt is a pioneering company that excels in providing effective marketing solutions to our esteemed partners across the globe. We strive to deliver outstanding promotional strategies that help to expedite sales and foster significant growth in the market.

Our vast range of advertising services is designed to offer utmost convenience to our customers, and we have spared no effort in bringing to you the most exceptional and exclusive offers available in the industry. Our main goal is to exceed our clients' expectations and provide them with the highest level of service possible.

At Smart Stand Egypt, we offer a comprehensive suite of advertising services that cater to various requirements and preferences. Our integrated designs are created to perfection, ensuring that they captivate the audience's attention and make a lasting impression.`,
};

// ============================================
// SERVICES (REAL DATA FROM WEBSITE)
// ============================================
export const SERVICES: Service[] = [
  {
    id: "1",
    title: "Floorstands",
    description: "Our floorstands are designed to provide an attractive and effective way to showcase products and attract customers' attention. We offer a range of customizable options to ensure that our floorstands meet the unique needs and requirements of our clients.",
    icon: "/images/services/locker1.svg",
  },
  {
    id: "2",
    title: "Booths",
    description: "Our customized booth design and construction services create functional and visually appealing exhibition booths that effectively showcase your brand and products. Our team of experts works closely with our clients to understand their specific requirements.",
    icon: "/images/services/locker2.svg",
  },
  {
    id: "3",
    title: "Lockers",
    description: "Our lockers provide a safe and secure way for customers to store their belongings while shopping. We offer a range of customizable options to ensure that our lockers meet the unique needs and requirements of our clients.",
    icon: "/images/services/locker3.svg",
  },
  {
    id: "4",
    title: "Store Racks",
    description: "Our store racks are designed to maximize space and enhance product visibility. We offer a range of customizable options to ensure that our store racks meet the unique needs and requirements of our clients.",
    icon: "/images/services/locker1.svg",
  },
  {
    id: "5",
    title: "Countertops",
    description: "Our countertops provide an attractive and functional space for product displays and customer service. We offer a range of customizable options to ensure that our countertops meet the unique needs and requirements of our clients.",
    icon: "/images/services/locker2.svg",
  },
];

// ============================================
// PARTNERS (REAL DATA - 20+ COMPANIES)
// ============================================
export const PARTNERS: Partner[] = [
  { id: "1", name: "LG", logo: "/images/partners/lg.webp" },
  { id: "2", name: "RedBull", logo: "/images/partners/redbull.webp" },
  { id: "3", name: "Bosch", logo: "/images/partners/bosch.webp" },
  { id: "4", name: "TCL", logo: "/images/partners/tcl.webp" },
  { id: "5", name: "Panasonic", logo: "/images/partners/panasonic.webp" },
  { id: "6", name: "Philips", logo: "/images/partners/philips.webp" },
  { id: "7", name: "Nestle", logo: "/images/partners/nestle.webp" },
  { id: "8", name: "L'Oreal", logo: "/images/partners/loreal.webp" },
  { id: "9", name: "Shell", logo: "/images/partners/shell.webp" },
  { id: "10", name: "Mobil", logo: "/images/partners/mobil.webp" },
  { id: "11", name: "GE", logo: "/images/partners/ge.webp" },
  { id: "12", name: "Hoover", logo: "/images/partners/hoover.webp" },
  { id: "13", name: "La Germania", logo: "/images/partners/la-germania.webp" },
  { id: "14", name: "Koldair", logo: "/images/partners/koldair.webp" },
  { id: "15", name: "YOLO", logo: "/images/partners/yolo.webp" },
  { id: "16", name: "Nova", logo: "/images/partners/nova.webp" },
  { id: "17", name: "Othaim", logo: "/images/partners/othaim.webp" },
  { id: "18", name: "Olive One", logo: "/images/partners/olive-one.webp" },
  { id: "19", name: "Rowa", logo: "/images/partners/rowa.webp" },
  { id: "20", name: "SAIB", logo: "/images/partners/saib.webp" },
];

// ============================================
// PROJECTS (REAL DATA FROM WEBSITE)
// ============================================
export const PROJECTS: Project[] = [
  { id: "1", title: "El Ezaby Pharmacy", image: "/images/projects/el-ezaby.webp" },
  { id: "2", title: "Yolo Cosmetics", image: "/images/projects/yolo.webp" },
  { id: "3", title: "LG Egypt", image: "/images/projects/lg.webp" },
  { id: "4", title: "BOSCH", image: "/images/projects/bosch.webp" },
  { id: "5", title: "Abdullah Al-Othaim Markets", image: "/images/projects/othaim.webp" },
];

// ============================================
// CAPABILITIES (REAL DATA FROM WEBSITE)
// ============================================
export const CAPABILITIES: Capability[] = [
  {
    id: "1",
    title: "Laser Cutting",
    description: "Our laser cutting services allow us to create intricate and precise designs on various materials, such as metal, wood, and acrylic. With our state-of-the-art technology, we can produce custom designs and patterns with incredible precision and accuracy.",
  },
  {
    id: "2",
    title: "Woodwork & Metalwork",
    description: "Our woodwork and metalwork capabilities enable us to produce durable and long-lasting structures, such as display stands and exhibition booths. We use high-quality materials and the latest techniques.",
  },
  {
    id: "3",
    title: "Acrylic Fabrication",
    description: "Our acrylic fabrication services allow us to create a range of products, from simple designs to complex shapes and sizes. We use advanced machinery to ensure highest quality.",
  },
  {
    id: "4",
    title: "Painting & Printing",
    description: "Our painting and printing capabilities enable us to add vibrant colors and designs to our products. We use high-quality paints and inks to ensure long-lasting finishes.",
  },
  {
    id: "5",
    title: "Cladding",
    description: "Our cladding services allow us to enhance the appearance and functionality of structures. We use a range of materials, including metal and wood, to create beautiful solutions.",
  },
  {
    id: "6",
    title: "Electrostatic Painting",
    description: "Our electrostatic painting services offer a highly effective and efficient way of painting metal surfaces. Our skilled technicians use advanced equipment for high-quality finishes.",
  },
];

// ============================================
// CONTACT INFO (REAL DATA)
// ============================================
export const CONTACT_INFO: ContactInfo = {
  address: "Kamal Hassan Ali, Sheraton Al Matar\nEl Nozha, Cairo, Egypt",
  phone: "+20 155 555 0073",
  email: "info@smartstand-eg.com",
};

// Additional contact info
export const CONTACT_EXTENDED = {
  address: {
    street: "Kamal Hassan Ali",
    area: "Sheraton Al Matar",
    district: "El Nozha",
    city: "Cairo",
    country: "Egypt",
    full: "Kamal Hassan Ali, Sheraton Al Matar, El Nozha, Cairo, Egypt",
    mapUrl: "https://goo.gl/maps/Ve5q14VYzbRB7PWZ9",
  },
  phones: [
    { number: "+20 155 555 0073", link: "tel:+201555550073" },
    { number: "+20 100 427 0088", link: "tel:+201004270088" },
  ],
  emails: [
    "info@smartstand-eg.com",
    "sales@smartstand-eg.com",
  ],
  workingHours: "Sun - Thu: 9:00 AM - 5:00 PM",
};

// ============================================
// SOCIAL MEDIA LINKS
// ============================================
export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Facebook", url: "https://www.facebook.com/smartstandegypt", icon: "/images/icons/facebook.png" },
  { platform: "Instagram", url: "https://www.instagram.com/smartstandegypt", icon: "/images/icons/instagram.png" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/company/smartstandegypt", icon: "/images/icons/linkedin.png" },
];

// ============================================
// ASSETS
// ============================================
export const ASSETS = {
  logo: {
    full: "/images/logo/logo-full.svg",
    icon: "/images/logo/logo-icon.svg",
  },
  hero: {
    mainPhoto: "/images/hero/lg.webp",
    slides: [
      "/images/hero/bosch.webp",
      "/images/hero/lg.webp",
      "/images/hero/healthy-tasty.webp",
    ],
  },
  about: {
    image: "/images/about/about-image.webp",
    lgEgypt: "/images/about/lg-egypt.webp",
    elEzaby: "/images/about/el-ezaby.webp",
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

// ============================================
// HERO SLIDES (FROM WEBSITE)
// ============================================
export const HERO_SLIDES = [
  {
    id: "1",
    subtitle: "Innovative strategies that drive global success",
    title: "Your Partner in Growth",
    image: "/images/hero/bosch.webp",
    cta: { text: "Explore Our Work", href: "#projects" },
  },
  {
    id: "2",
    subtitle: "Turning Ideas into Impact",
    title: "Your vision, our creative expertise.",
    image: "/images/hero/lg.webp",
    cta: { text: "Let's Get Started", href: "#contact" },
  },
  {
    id: "3",
    subtitle: "Partnering with you for unstoppable growth",
    title: "Building Success Together",
    image: "/images/hero/healthy-tasty.webp",
    cta: { text: "Explore Our Work", href: "#projects" },
  },
];

// ============================================
// CTA SECTION
// ============================================
export const CTA_SECTION = {
  title: "Ready to Transform Your Marketing Strategy?",
  description: "Contact us today to discover how our innovative solutions can help your business achieve remarkable growth and success in the market.",
  buttonText: "Contact Us Now",
  buttonHref: "#contact",
};

// ============================================
// SCROLLING TICKER TEXT
// ============================================
export const TICKER_TEXT = "Laser cutting - Woodwork and metalwork - Acrylic fabrication - Painting and printing - Cladding - Electrostatic painting - ";
