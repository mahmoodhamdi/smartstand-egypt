import dynamic from "next/dynamic";
import { HeroSection, AboutSection } from "@/components/sections";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";

// Lazy load below-the-fold sections for better performance
const ServicesSection = dynamic(
  () =>
    import("@/components/sections/ServicesSection").then(
      (mod) => mod.ServicesSection
    ),
  {
    loading: () => (
      <div className="min-h-[600px] bg-[#0D0D0D] animate-pulse" />
    ),
  }
);

const CapabilitiesSection = dynamic(
  () =>
    import("@/components/sections/CapabilitiesSection").then(
      (mod) => mod.CapabilitiesSection
    ),
  {
    loading: () => <div className="min-h-[600px] bg-white animate-pulse" />,
  }
);

const ProjectsSection = dynamic(
  () =>
    import("@/components/sections/ProjectsSection").then(
      (mod) => mod.ProjectsSection
    ),
  {
    loading: () => (
      <div className="min-h-[600px] bg-[#0D0D0D] animate-pulse" />
    ),
  }
);

const PartnersSection = dynamic(
  () =>
    import("@/components/sections/PartnersSection").then(
      (mod) => mod.PartnersSection
    ),
  {
    loading: () => <div className="min-h-[300px] bg-white animate-pulse" />,
  }
);

const ContactSection = dynamic(
  () =>
    import("@/components/sections/ContactSection").then(
      (mod) => mod.ContactSection
    ),
  {
    loading: () => (
      <div className="min-h-[600px] bg-[#0D0D0D] animate-pulse" />
    ),
  }
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ErrorBoundary>
        <ServicesSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <CapabilitiesSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <ProjectsSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <PartnersSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <ContactSection />
      </ErrorBoundary>
    </main>
  );
}
