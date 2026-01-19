import {
  HeroSection,
  AboutSection,
  ServicesSection,
  CapabilitiesSection,
  ProjectsSection,
  PartnersSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CapabilitiesSection />
      <ProjectsSection />
      <PartnersSection />
      <ContactSection />
    </main>
  );
}
