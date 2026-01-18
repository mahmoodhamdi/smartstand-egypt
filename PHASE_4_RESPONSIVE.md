# 📱 Phase 4: Responsive Design & Animations - Complete Prompt for Claude Code

## 📋 Mission
Make the Smart Stand Egypt landing page fully responsive across all devices and add smooth animations.

## 📍 Prerequisites
- Phases 1, 2 & 3 must be completed
- All sections should be working on desktop
- Run `npm run dev` to verify current state

---

## Milestone 4.1: Mobile Responsive (320px - 768px)

### Global Mobile Styles

Update `src/app/globals.css`:

```css
@layer utilities {
  /* Hide scrollbar for carousels */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  /* Mobile text sizes */
  @media (max-width: 768px) {
    .mobile-title {
      @apply text-3xl;
    }
    
    .mobile-subtitle {
      @apply text-lg;
    }
    
    .mobile-text {
      @apply text-sm;
    }
  }
}
```

### Update Section Title Component

```typescript
// src/components/ui/SectionTitle.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  variant?: "light" | "dark";
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  variant = "dark",
  className,
}) => {
  const textColor = variant === "dark" ? "text-black" : "text-white";
  
  return (
    <div className={cn("text-center px-4", className)}>
      <h2 className={cn(
        "font-black mb-2",
        "text-3xl sm:text-4xl md:text-5xl lg:text-6xl", // Responsive font size
        textColor
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "font-black",
          "text-sm sm:text-base", // Responsive font size
          textColor
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
```

### Mobile Hero Section Update

```typescript
// Update src/components/sections/HeroSection.tsx
export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/shapes/main-shape.png"
          alt=""
          fill
          className="object-cover"
          priority
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
      
      <Header />
      
      {/* Content - Mobile First */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-[100px] pt-32 lg:pt-[214px]">
        <div className="max-w-full lg:max-w-[685px]">
          {/* Subtitle */}
          <p className="text-white font-black text-lg sm:text-xl lg:text-2xl mb-4">
            {COMPANY_INFO.tagline}
          </p>
          
          {/* Main Headline */}
          <h1 className="text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight mb-8">
            Your vision,<br />
            our creative expertise.
          </h1>
          
          {/* CTA Button */}
          <Button variant="gold" size="lg" className="w-full sm:w-auto">
            Let's Get Started
          </Button>
        </div>
      </div>
      
      {/* Hero Image - Hidden on mobile */}
      <div className="absolute right-0 bottom-0 w-[60%] h-[40%] lg:w-[960px] lg:h-[544px] hidden md:block">
        <Image
          src="/images/hero/main-photo.png"
          alt="Smart Stand Egypt"
          fill
          className="object-cover object-left"
        />
      </div>
      
      {/* Slider Dots */}
      <div className="absolute bottom-8 lg:bottom-20 left-1/2 -translate-x-1/2">
        <Image
          src="/images/hero/slides.png"
          alt="Slides indicator"
          width={150}
          height={22}
          className="lg:w-[193px] lg:h-[28px]"
        />
      </div>
    </section>
  );
};
```

### Mobile About Section

```typescript
// Update src/components/sections/AboutSection.tsx
export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[100px]">
        <SectionTitle
          title="About Smart Stand Egypt"
          className="mb-8 lg:mb-12"
        />
        
        {/* Content - Stack on mobile, grid on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[452px] rounded-card overflow-hidden order-2 lg:order-1">
            <Image
              src="/images/about/yolo-image.png"
              alt="About Smart Stand Egypt"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Text Content */}
          <div className="space-y-4 lg:space-y-6 order-1 lg:order-2">
            <div className="text-black font-black text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {COMPANY_INFO.description}
            </div>
            
            <Button variant="gold" size="lg" className="w-full sm:w-auto">
              Contact Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
```

### Mobile Services Section

```typescript
// Update src/components/sections/ServicesSection.tsx
export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative py-12 lg:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/images/shapes/main-shape.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 opacity-30 mix-blend-luminosity">
          <Image src="/images/shapes/pattern-1.png" alt="" fill className="object-cover" />
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-[100px]">
        <SectionTitle
          title="Services"
          subtitle="Smart Stand is a leading provider of a wide range of services"
          variant="light"
          className="mb-8 lg:mb-12"
        />
        
        {/* Mobile: Vertical scroll, Desktop: Horizontal */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center lg:overflow-x-auto lg:pb-8 lg:snap-x lg:snap-mandatory scrollbar-hide">
          {/* Cards - All same size on mobile, varied on desktop */}
          {SERVICES.map((service, index) => {
            const variant = index === 2 ? "main" : (index === 0 || index === 4 ? "edge" : "side");
            return (
              <div key={service.id} className="flex-shrink-0 w-full lg:w-auto snap-center">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  iconBg="/images/services/ellipse-1.png"
                  variant={variant}
                  className="w-full lg:w-auto mx-auto"
                />
              </div>
            );
          })}
        </div>
        
        {/* Slider - Only on desktop */}
        <div className="hidden lg:flex justify-center mt-8">
          <Image src="/images/hero/slides.png" alt="" width={190} height={28} />
        </div>
      </div>
    </section>
  );
};
```

### Mobile Capabilities Section

```typescript
// Update src/components/sections/CapabilitiesSection.tsx
export const CapabilitiesSection: React.FC = () => {
  return (
    <section id="capabilities" className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[100px]">
        <SectionTitle
          title="Capabilities"
          subtitle="Smart Stand is a leading provider of a wide range of services"
          className="mb-8 lg:mb-12"
        />
        
        {/* Grid: 1 col mobile, 2 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-8 lg:mb-12">
          {CAPABILITIES.slice(0, 8).map((capability) => (
            <CapabilityCard
              key={capability.id}
              title={capability.title}
              description={capability.description}
              className="w-full"
            />
          ))}
        </div>
        
        {/* CTA Banner */}
        <div className="bg-black rounded-card p-6 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 text-center lg:text-left">
            <div>
              <h3 className="text-white font-black text-xl sm:text-2xl lg:text-3xl mb-4">
                Ready to Transform Your Marketing Strategy?
              </h3>
              <p className="text-white font-black text-sm lg:text-base max-w-lg mx-auto lg:mx-0">
                Our laser cutting services allow us to create intricate and
                precise designs for your marketing needs.
              </p>
            </div>
            
            <Button variant="gold" size="lg" className="w-full sm:w-auto flex-shrink-0">
              Contact Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
```

### Mobile Contact Section

```typescript
// Update src/components/sections/ContactSection.tsx
export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-12 lg:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/images/shapes/main-shape.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 opacity-30 mix-blend-luminosity">
          <Image src="/images/shapes/pattern-1.png" alt="" fill className="object-cover" />
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-[100px]">
        <SectionTitle
          title="Contact us"
          variant="light"
          className="mb-8 lg:mb-12"
        />
        
        {/* Content: Stack on mobile, grid on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 items-start">
          {/* Person Image - Hidden on mobile */}
          <div className="hidden lg:block relative w-[365px] h-[498px] rounded-card overflow-hidden">
            <Image src="/images/contact/person.png" alt="Contact" fill className="object-cover" />
          </div>
          
          {/* Contact Form */}
          <div className="w-full flex justify-center order-2 lg:order-none">
            <ContactForm />
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-none w-full">
            {/* Email */}
            <div className="flex items-start gap-4">
              <Image src="/images/icons/email-icon.png" alt="Email" width={48} height={36} className="lg:w-[60px] lg:h-[45px]" />
              <div>
                <p className="gold-text-gradient font-black text-lg lg:text-xl">Email</p>
                <p className="text-white font-black text-base lg:text-xl break-all">{CONTACT_INFO.email}</p>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-start gap-4">
              <Image src="/images/icons/phone-icon.png" alt="Phone" width={50} height={50} className="lg:w-[63px] lg:h-[63px]" />
              <div>
                <p className="gold-text-gradient font-black text-lg lg:text-xl">Phone</p>
                <p className="text-white font-black text-base lg:text-xl">{CONTACT_INFO.phone}</p>
              </div>
            </div>
            
            {/* Address */}
            <div className="flex items-start gap-4">
              <Image src="/images/icons/address-icon.png" alt="Address" width={38} height={51} className="lg:w-[48px] lg:h-[64px]" />
              <div>
                <p className="gold-text-gradient font-black text-lg lg:text-xl">Address</p>
                <p className="text-white font-black text-base lg:text-xl whitespace-pre-line">{CONTACT_INFO.address}</p>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="pt-4 lg:pt-8">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
```

### Verification Milestone 4.1
- [ ] All sections display correctly on mobile (320px)
- [ ] All sections display correctly on small mobile (375px)
- [ ] All sections display correctly on large mobile (425px)
- [ ] Text is readable on all screen sizes
- [ ] Buttons are tappable (min 44px touch target)
- [ ] Forms are usable on mobile
- [ ] Navigation works on mobile

---

## Milestone 4.2: Tablet Responsive (768px - 1024px)

### Key Tablet Adjustments

```css
/* Add to globals.css */
@layer utilities {
  @media (min-width: 768px) and (max-width: 1024px) {
    .tablet-grid-2 {
      @apply grid-cols-2;
    }
    
    .tablet-px {
      @apply px-8;
    }
  }
}
```

### Update Card Components for Tablet

```typescript
// Update CapabilityCard for tablet
export const CapabilityCard: React.FC<CapabilityCardProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-white border-2 border-black rounded-card p-4 lg:p-6",
        "w-full", // Full width on mobile
        "md:w-auto", // Auto on tablet+
        "h-auto lg:h-[215px]",
        "flex flex-col",
        className
      )}
    >
      <Button variant="gold" size="md" className="self-center mb-3 lg:mb-4 text-sm lg:text-base">
        {title}
      </Button>
      
      <p className="text-black text-center text-sm lg:text-base font-black">
        {description}
      </p>
    </div>
  );
};
```

### Verification Milestone 4.2
- [ ] Grid layouts work on tablet
- [ ] Cards scale appropriately
- [ ] Navigation fits on tablet
- [ ] Images scale correctly
- [ ] Touch interactions work

---

## Milestone 4.3: Animations

### Install Framer Motion (if not already)
```bash
npm install framer-motion
```

### Create Animation Hook: `src/hooks/useScrollAnimation.ts`

```typescript
"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  
  return { ref, isInView };
};
```

### Create Animation Wrapper: `src/components/ui/AnimatedSection.tsx`

```typescript
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  direction = "up",
}) => {
  const { ref, isInView } = useScrollAnimation();
  
  const directionOffset = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
  };
  
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : directionOffset[direction].y,
        x: isInView ? 0 : directionOffset[direction].x,
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
```

### Create Staggered Animation: `src/components/ui/AnimatedList.tsx`

```typescript
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedListProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
}

export const AnimatedList: React.FC<AnimatedListProps> = ({
  children,
  className,
  staggerDelay = 0.1,
}) => {
  const { ref, isInView } = useScrollAnimation();
  
  return (
    <motion.div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 30,
          }}
          transition={{
            duration: 0.5,
            delay: index * staggerDelay,
            ease: "easeOut",
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};
```

### Add Hover Animations to Button

```typescript
// Update Button component
"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "white" | "black";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "gold", size = "md", children, ...props }, ref) => {
    const baseStyles = "font-bold rounded-button transition-all duration-300 inline-flex items-center justify-center";
    
    const variants = {
      gold: "gold-gradient text-white",
      white: "bg-white text-black",
      black: "bg-black text-white",
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };
    
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
```

### Add Card Hover Effects

```typescript
// Update Card components with hover
"use client";

import { motion } from "framer-motion";

// In ServiceCard, ProjectCard, etc.
<motion.div
  whileHover={{ 
    y: -10,
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
  }}
  transition={{ duration: 0.3 }}
  className={cn(...)}
>
  {/* card content */}
</motion.div>
```

### Update Sections with Animations

Example for AboutSection:

```typescript
"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[100px]">
        <AnimatedSection>
          <SectionTitle title="About Smart Stand Egypt" className="mb-8 lg:mb-12" />
        </AnimatedSection>
        
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <AnimatedSection direction="left" delay={0.2}>
            <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[452px] rounded-card overflow-hidden">
              <Image src="/images/about/yolo-image.png" alt="" fill className="object-cover" />
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="right" delay={0.4}>
            <div className="space-y-4 lg:space-y-6">
              <div className="text-black font-black text-sm sm:text-base leading-relaxed">
                {COMPANY_INFO.description}
              </div>
              <Button variant="gold" size="lg">Contact Us Now</Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
```

### Smooth Scroll Setup

```typescript
// Add to layout.tsx
import { useEffect } from "react";

// Or add to globals.css
html {
  scroll-behavior: smooth;
}
```

### Verification Milestone 4.3
- [ ] Scroll animations work smoothly
- [ ] Button hover effects work
- [ ] Card hover effects work
- [ ] No janky or laggy animations
- [ ] Animations disabled for users who prefer reduced motion
- [ ] Performance is good (60fps)

---

## ✅ Phase 4 Completion Checklist

- [ ] Mobile responsive (320px - 768px)
- [ ] Tablet responsive (768px - 1024px)
- [ ] Desktop looks correct (1024px+)
- [ ] All animations implemented
- [ ] Smooth scroll navigation
- [ ] Touch-friendly interactions
- [ ] No horizontal scroll on mobile
- [ ] All images responsive
- [ ] Forms work on all devices
- [ ] Performance optimized
- [ ] All code committed and pushed
- [ ] PROGRESS.md updated

---

## 🔄 After Completion

1. Test on real devices if possible
2. Use Chrome DevTools device emulation
3. Check performance with Lighthouse
4. Commit: `git commit -m "Phase 4 Complete: Responsive design and animations"`
5. Push: `git push`
6. Proceed to Phase 5: `docs/prompts/PHASE_5_DEPLOY.md`

