# 📄 Phase 3: Page Sections - Complete Prompt for Claude Code

## 📋 Mission
Build all page sections for the Smart Stand Egypt landing page using the components created in Phase 2.

## 📍 Prerequisites
- Phase 1 & 2 must be completed
- All UI components should be working
- Assets should be available in public folder

---

## Milestone 3.1: Header/Hero Section

### File: `src/components/sections/HeroSection.tsx`

```typescript
import React from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui";
import { COMPANY_INFO } from "@/lib/constants";

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background with Pattern */}
      <div className="absolute inset-0">
        {/* Main Shape Background */}
        <Image
          src="/images/shapes/main-shape.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-30 mix-blend-luminosity">
          <Image
            src="/images/shapes/pattern-1.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
      
      {/* Header */}
      <Header />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-[100px] pt-[214px]">
        <div className="max-w-[685px]">
          {/* Subtitle */}
          <p className="text-white font-black text-2xl mb-4">
            {COMPANY_INFO.tagline}
          </p>
          
          {/* Main Headline */}
          <h1 className="text-white font-black text-5xl lg:text-[64px] leading-tight mb-8">
            Your vision,<br />
            our creative expertise.
          </h1>
          
          {/* CTA Button */}
          <Button variant="gold" size="lg">
            Let's Get Started
          </Button>
        </div>
      </div>
      
      {/* Hero Image */}
      <div className="absolute right-0 bottom-0 w-[960px] h-[544px] hidden lg:block">
        <Image
          src="/images/hero/main-photo.png"
          alt="Smart Stand Egypt"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Slider Dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
        <Image
          src="/images/hero/slides.png"
          alt="Slides indicator"
          width={193}
          height={28}
        />
      </div>
    </section>
  );
};
```

### Verification
- [ ] Hero background displays
- [ ] Header with navigation works
- [ ] Hero content positioned correctly
- [ ] Hero image displays on desktop
- [ ] Slider dots visible

---

## Milestone 3.2: About Section

### File: `src/components/sections/AboutSection.tsx`

```typescript
import React from "react";
import Image from "next/image";
import { SectionTitle, Button } from "@/components/ui";
import { COMPANY_INFO } from "@/lib/constants";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-[100px]">
        {/* Section Title */}
        <SectionTitle
          title="About Smart Stand Egypt"
          className="mb-12"
        />
        
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative w-full h-[452px] rounded-card overflow-hidden">
            <Image
              src="/images/about/yolo-image.png"
              alt="About Smart Stand Egypt"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Text Content */}
          <div className="space-y-6">
            <div className="text-black font-black text-base leading-relaxed whitespace-pre-line">
              {COMPANY_INFO.description}
            </div>
            
            {/* CTA Button */}
            <Button variant="gold" size="lg">
              Contact Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
```

### Verification
- [ ] Section title displays
- [ ] Image renders with mask
- [ ] Text content formatted correctly
- [ ] CTA button works

---

## Milestone 3.3: Services Section

### File: `src/components/sections/ServicesSection.tsx`

```typescript
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { SectionTitle, ServiceCard } from "@/components/ui";
import { SERVICES } from "@/lib/constants";

export const ServicesSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <Image
          src="/images/shapes/main-shape.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 opacity-30 mix-blend-luminosity">
          <Image
            src="/images/shapes/pattern-1.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 lg:px-[100px]">
        {/* Section Header */}
        <SectionTitle
          title="Services"
          subtitle="Smart Stand is a leading provider of a wide range of services"
          variant="light"
          className="mb-12"
        />
        
        {/* Services Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Edge Card - Left */}
          <div className="flex-shrink-0 snap-center">
            <ServiceCard
              title={SERVICES[0]?.title || "Lockers"}
              description={SERVICES[0]?.description || "Smart Stand is a leading provider of a wide range of services"}
              icon="/images/services/locker-3.png"
              iconBg="/images/services/ellipse-3.png"
              variant="edge"
            />
          </div>
          
          {/* Side Card - Left */}
          <div className="flex-shrink-0 snap-center">
            <ServiceCard
              title={SERVICES[1]?.title || "Lockers"}
              description={SERVICES[1]?.description || "Smart Stand is a leading provider of a wide range of services"}
              icon="/images/services/locker-2.png"
              iconBg="/images/services/ellipse-2.png"
              variant="side"
            />
          </div>
          
          {/* Main Card - Center */}
          <div className="flex-shrink-0 snap-center">
            <ServiceCard
              title={SERVICES[2]?.title || "Lockers"}
              description={SERVICES[2]?.description || "Smart Stand is a leading provider of a wide range of services"}
              icon="/images/services/locker-1.png"
              iconBg="/images/services/ellipse-1.png"
              variant="main"
            />
          </div>
          
          {/* Side Card - Right */}
          <div className="flex-shrink-0 snap-center">
            <ServiceCard
              title={SERVICES[3]?.title || "Lockers"}
              description={SERVICES[3]?.description || "Smart Stand is a leading provider of a wide range of services"}
              icon="/images/services/locker-2.png"
              iconBg="/images/services/ellipse-2.png"
              variant="side"
            />
          </div>
          
          {/* Edge Card - Right */}
          <div className="flex-shrink-0 snap-center">
            <ServiceCard
              title={SERVICES[4]?.title || "Lockers"}
              description={SERVICES[4]?.description || "Smart Stand is a leading provider of a wide range of services"}
              icon="/images/services/locker-3.png"
              iconBg="/images/services/ellipse-3.png"
              variant="edge"
            />
          </div>
        </div>
        
        {/* Slider Indicator */}
        <div className="flex justify-center mt-8">
          <Image
            src="/images/hero/slides.png"
            alt="Slides indicator"
            width={190}
            height={28}
          />
        </div>
      </div>
    </section>
  );
};
```

### Verification
- [ ] Background pattern displays
- [ ] All 5 service cards render
- [ ] Cards have correct sizing
- [ ] Carousel scrolls horizontally
- [ ] Slider dots visible

---

## Milestone 3.4: Capabilities Section

### File: `src/components/sections/CapabilitiesSection.tsx`

```typescript
import React from "react";
import { SectionTitle, CapabilityCard, Button } from "@/components/ui";
import { CAPABILITIES } from "@/lib/constants";

export const CapabilitiesSection: React.FC = () => {
  return (
    <section id="capabilities" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-[100px]">
        {/* Section Header */}
        <SectionTitle
          title="Capabilities"
          subtitle="Smart Stand is a leading provider of a wide range of services"
          className="mb-12"
        />
        
        {/* Capabilities Grid - 2x4 */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {CAPABILITIES.slice(0, 8).map((capability) => (
            <CapabilityCard
              key={capability.id}
              title={capability.title}
              description={capability.description}
            />
          ))}
        </div>
        
        {/* CTA Banner */}
        <div className="bg-black rounded-card p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-white font-black text-2xl lg:text-3xl mb-4">
                Ready to Transform Your Marketing Strategy?
              </h3>
              <p className="text-white font-black text-base max-w-lg">
                Our laser cutting services allow us to create intricate and
                Our laser cutting services allow us to create intricate and
                Our laser cutting services allow us to create intricate
              </p>
            </div>
            
            <Button variant="gold" size="lg">
              Contact Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
```

### Verification
- [ ] 8 capability cards in 2x4 grid
- [ ] Cards styled correctly
- [ ] CTA banner displays
- [ ] Responsive layout works

---

## Milestone 3.5: Projects Section

### File: `src/components/sections/ProjectsSection.tsx`

```typescript
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { SectionTitle, ProjectCard } from "@/components/ui";
import { PROJECTS } from "@/lib/constants";

export const ProjectsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <Image
          src="/images/shapes/main-shape.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 opacity-30 mix-blend-luminosity">
          <Image
            src="/images/shapes/pattern-1.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 lg:px-[100px]">
        {/* Section Header */}
        <SectionTitle
          title="Projects"
          subtitle="Smart Stand is a leading provider of a wide range of services"
          variant="light"
          className="mb-12"
        />
        
        {/* Projects Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide items-end"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Edge Card - Left (Healthy & Tasty) */}
          <div className="flex-shrink-0 snap-center">
            <ProjectCard
              title="Healthy & Tasty"
              image="/images/projects/healthy-tasty.png"
              variant="edge"
            />
          </div>
          
          {/* Side Card - Left (Yolo) */}
          <div className="flex-shrink-0 snap-center">
            <ProjectCard
              title="Yolo"
              image="/images/projects/yolo.png"
              variant="side"
            />
          </div>
          
          {/* Main Card - Center (LG Egypt) */}
          <div className="flex-shrink-0 snap-center">
            <ProjectCard
              title="LG Egypt"
              image="/images/projects/lg.png"
              variant="main"
            />
          </div>
          
          {/* Side Card - Right (Haier) */}
          <div className="flex-shrink-0 snap-center">
            <ProjectCard
              title="Haier"
              image="/images/projects/haier.png"
              variant="side"
            />
          </div>
          
          {/* Edge Card - Right (Bosch) */}
          <div className="flex-shrink-0 snap-center">
            <ProjectCard
              title="Bosch"
              image="/images/projects/bosch.png"
              variant="edge"
            />
          </div>
        </div>
        
        {/* Slider Indicator */}
        <div className="flex justify-center mt-8">
          <Image
            src="/images/hero/slides.png"
            alt="Slides indicator"
            width={190}
            height={28}
          />
        </div>
      </div>
    </section>
  );
};
```

### Verification
- [ ] Background pattern displays
- [ ] All 5 project cards render
- [ ] Card images load correctly
- [ ] Carousel functionality works

---

## Milestone 3.6: Partners Section

### File: `src/components/sections/PartnersSection.tsx`

```typescript
import React from "react";
import { SectionTitle, PartnerCard } from "@/components/ui";
import { PARTNERS } from "@/lib/constants";

export const PartnersSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-[100px]">
        {/* Section Header */}
        <SectionTitle
          title="Our Success Partners"
          className="mb-12"
        />
        
        {/* Partners Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {PARTNERS.map((partner) => (
            <PartnerCard
              key={partner.id}
              name={partner.name}
              logo={partner.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
```

### Verification
- [ ] Section title displays
- [ ] All 5 partner logos render
- [ ] Cards styled correctly
- [ ] Responsive layout works

---

## Milestone 3.7: Contact Section

### File: `src/components/sections/ContactSection.tsx`

```typescript
import React from "react";
import Image from "next/image";
import { SectionTitle, ContactForm, SocialIcons } from "@/components/ui";
import { CONTACT_INFO } from "@/lib/constants";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <Image
          src="/images/shapes/main-shape.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 opacity-30 mix-blend-luminosity">
          <Image
            src="/images/shapes/pattern-1.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 lg:px-[100px]">
        {/* Section Header */}
        <SectionTitle
          title="Contuct us"
          variant="light"
          className="mb-12"
        />
        
        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Person Image */}
          <div className="hidden lg:block relative w-[365px] h-[498px] rounded-card overflow-hidden">
            <Image
              src="/images/contact/person.png"
              alt="Contact"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Contact Form */}
          <div className="flex justify-center">
            <ContactForm />
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-start gap-4">
              <Image
                src="/images/icons/email-icon.png"
                alt="Email"
                width={60}
                height={45}
              />
              <div>
                <p className="gold-text-gradient font-black text-xl">Email</p>
                <p className="text-white font-black text-xl">{CONTACT_INFO.email}</p>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-start gap-4">
              <Image
                src="/images/icons/phone-icon.png"
                alt="Phone"
                width={63}
                height={63}
              />
              <div>
                <p className="gold-text-gradient font-black text-xl">Phone</p>
                <p className="text-white font-black text-xl">{CONTACT_INFO.phone}</p>
              </div>
            </div>
            
            {/* Address */}
            <div className="flex items-start gap-4">
              <Image
                src="/images/icons/address-icon.png"
                alt="Address"
                width={48}
                height={64}
              />
              <div>
                <p className="gold-text-gradient font-black text-xl">Adress</p>
                <p className="text-white font-black text-xl whitespace-pre-line">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="pt-8">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
```

### Verification
- [ ] Background pattern displays
- [ ] Contact form works
- [ ] Contact info styled correctly
- [ ] Social icons display
- [ ] Person image displays on desktop

---

## Assemble Main Page

### File: `src/app/page.tsx`

```typescript
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ContactSection } from "@/components/sections/ContactSection";

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
```

### Export Sections Index: `src/components/sections/index.ts`

```typescript
export { HeroSection } from "./HeroSection";
export { AboutSection } from "./AboutSection";
export { ServicesSection } from "./ServicesSection";
export { CapabilitiesSection } from "./CapabilitiesSection";
export { ProjectsSection } from "./ProjectsSection";
export { PartnersSection } from "./PartnersSection";
export { ContactSection } from "./ContactSection";
```

---

## ✅ Phase 3 Completion Checklist

- [ ] HeroSection with header and background
- [ ] AboutSection with image and text
- [ ] ServicesSection with carousel
- [ ] CapabilitiesSection with grid and CTA
- [ ] ProjectsSection with carousel
- [ ] PartnersSection with logos
- [ ] ContactSection with form and info
- [ ] Main page assembled
- [ ] All sections exported
- [ ] Page runs without errors
- [ ] Smooth scroll navigation works
- [ ] All code committed and pushed
- [ ] PROGRESS.md updated

---

## 🔄 After Completion

1. Test the full page flow
2. Check all sections render
3. Verify navigation links
4. Commit: `git commit -m "Phase 3 Complete: All page sections"`
5. Push: `git push`
6. Proceed to Phase 4: `docs/prompts/PHASE_4_RESPONSIVE.md`

