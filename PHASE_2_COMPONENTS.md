# 🧩 Phase 2: UI Components - Complete Prompt for Claude Code

## 📋 Mission
Create all reusable UI components for the Smart Stand Egypt landing page following the design specifications.

## 📍 Prerequisites
- Phase 1 must be completed
- Project should be running without errors
- All assets should be available

## 🎨 Design Reference
- **Figma URL**: https://www.figma.com/design/iH6Brh7jhmDEzdej6uVlQy/Untitled?node-id=17-134
- **Primary Colors**: Gold gradient (#FBF7D3 → #906F1E → #FBDD97)
- **Font**: Albert Sans (Black 900, Bold 700)
- **Border Radius**: Cards 30px, Buttons 25px

---

## Milestone 2.1: Button Component

### File: `src/components/ui/Button.tsx`

```typescript
"use client";

import React from "react";
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
      gold: "gold-gradient text-white hover:opacity-90 hover:shadow-lg",
      white: "bg-white text-black hover:bg-gray-100",
      black: "bg-black text-white hover:bg-gray-900",
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };
    
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
```

### Test Button
```tsx
// In any component:
<Button variant="gold" size="lg">Let's Get Started</Button>
<Button variant="white" size="md">Learn More</Button>
```

### Verification
- [ ] Gold gradient displays correctly
- [ ] All size variants work
- [ ] Hover states work
- [ ] TypeScript has no errors

---

## Milestone 2.2: Card Components

### Base Card: `src/components/ui/Card.tsx`

```typescript
import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "white" | "black";
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "white", children, ...props }, ref) => {
    const variants = {
      white: "bg-white",
      black: "bg-black text-white",
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-card overflow-hidden",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
```

### Service Card: `src/components/ui/ServiceCard.tsx`

```typescript
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  variant?: "main" | "side" | "edge";
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  iconBg,
  variant = "main",
  className,
}) => {
  const sizeClasses = {
    main: "w-[395px] h-[474px]",
    side: "w-[295px] h-[402px]",
    edge: "w-[237px] h-[323px]",
  };
  
  const bgClasses = {
    main: "bg-white",
    side: "bg-black",
    edge: "bg-black",
  };
  
  const textClasses = {
    main: "text-black",
    side: "text-white",
    edge: "text-white",
  };
  
  const titleSizes = {
    main: "text-4xl",
    side: "text-3xl",
    edge: "text-2xl",
  };
  
  const iconSizes = {
    main: { wrapper: 168, icon: 92 },
    side: { wrapper: 125, icon: 69 },
    edge: { wrapper: 101, icon: 55 },
  };

  return (
    <div
      className={cn(
        "rounded-card flex flex-col items-center pt-8 pb-6 px-4",
        sizeClasses[variant],
        bgClasses[variant],
        className
      )}
    >
      {/* Icon Circle */}
      <div
        className="relative rounded-full flex items-center justify-center mb-6"
        style={{
          width: iconSizes[variant].wrapper,
          height: iconSizes[variant].wrapper,
        }}
      >
        <Image
          src={iconBg}
          alt=""
          fill
          className="object-cover"
        />
        <Image
          src={icon}
          alt={title}
          width={iconSizes[variant].icon}
          height={iconSizes[variant].icon}
          className="relative z-10"
        />
      </div>
      
      {/* Title */}
      <h3
        className={cn(
          "font-black text-center mb-4",
          titleSizes[variant],
          variant === "main" ? "text-black" : "gold-text-gradient"
        )}
      >
        {title}
      </h3>
      
      {/* Description */}
      <p
        className={cn(
          "text-center mb-6 px-4",
          variant === "edge" ? "text-xs" : "text-sm",
          textClasses[variant]
        )}
      >
        {description}
      </p>
      
      {/* Button */}
      <Button
        variant={variant === "main" ? "gold" : "white"}
        size={variant === "edge" ? "sm" : "md"}
        className="mt-auto"
      >
        Learn More
      </Button>
    </div>
  );
};
```

### Project Card: `src/components/ui/ProjectCard.tsx`

```typescript
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

interface ProjectCardProps {
  title: string;
  image: string;
  variant?: "main" | "side" | "edge";
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  variant = "side",
  className,
}) => {
  const sizeClasses = {
    main: "w-[395px] h-[474px]",
    side: "w-[295px] h-[402px]",
    edge: "w-[237px] h-[323px]",
  };
  
  const bgClasses = {
    main: "bg-white",
    side: "bg-black",
    edge: "bg-black",
  };
  
  const imageSizes = {
    main: { width: 395, height: 308 },
    side: { width: 295, height: 260 },
    edge: { width: 237, height: 205 },
  };

  return (
    <div
      className={cn(
        "rounded-card overflow-hidden flex flex-col",
        sizeClasses[variant],
        bgClasses[variant],
        className
      )}
    >
      {/* Image */}
      <div className="relative w-full" style={{ height: imageSizes[variant].height }}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="flex flex-col items-center justify-center flex-1 p-4">
        <h3
          className={cn(
            "font-black text-center mb-4",
            variant === "main" ? "text-4xl text-black" : "text-2xl text-white"
          )}
        >
          {title}
        </h3>
        
        <Button
          variant={variant === "main" ? "gold" : "white"}
          size={variant === "edge" ? "sm" : "md"}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};
```

### Capability Card: `src/components/ui/CapabilityCard.tsx`

```typescript
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

interface CapabilityCardProps {
  title: string;
  description: string;
  className?: string;
}

export const CapabilityCard: React.FC<CapabilityCardProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-white border-2 border-black rounded-card p-6 w-[502px] h-[215px] flex flex-col",
        className
      )}
    >
      {/* Title Button */}
      <Button variant="gold" size="md" className="self-center mb-4">
        {title}
      </Button>
      
      {/* Description */}
      <p className="text-black text-center text-base font-black">
        {description}
      </p>
    </div>
  );
};
```

### Partner Card: `src/components/ui/PartnerCard.tsx`

```typescript
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PartnerCardProps {
  name: string;
  logo: string;
  className?: string;
}

export const PartnerCard: React.FC<PartnerCardProps> = ({
  name,
  logo,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-white border-2 border-black rounded-card w-[272px] h-[133px] flex items-center justify-center p-4",
        className
      )}
    >
      <Image
        src={logo}
        alt={name}
        width={180}
        height={90}
        className="object-contain"
      />
    </div>
  );
};
```

### Verification
- [ ] All card variants render correctly
- [ ] Images load properly
- [ ] Responsive sizing works
- [ ] TypeScript has no errors

---

## Milestone 2.3: Typography Components

### Section Title: `src/components/ui/SectionTitle.tsx`

```typescript
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
    <div className={cn("text-center", className)}>
      <h2 className={cn("font-black text-6xl mb-2", textColor)}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("font-black text-base", textColor)}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
```

### Verification
- [ ] Light and dark variants work
- [ ] Font sizes match design
- [ ] Subtitle renders when provided

---

## Milestone 2.4: Form Components

### Input: `src/components/ui/Input.tsx`

```typescript
import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-white font-black text-2xl mb-2">
            {label}
          </label>
        )}
        <div className="border-b border-white pb-2">
          <input
            ref={ref}
            className={cn(
              "w-full bg-transparent text-white outline-none",
              className
            )}
            {...props}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
```

### Textarea: `src/components/ui/Textarea.tsx`

```typescript
import React from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-white font-black text-2xl mb-2">
            {label}
          </label>
        )}
        <div className="border-b border-white pb-2">
          <textarea
            ref={ref}
            className={cn(
              "w-full bg-transparent text-white outline-none resize-none",
              className
            )}
            rows={3}
            {...props}
          />
        </div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
```

### Contact Form: `src/components/ui/ContactForm.tsx`

```typescript
"use client";

import React, { useState } from "react";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Button } from "./Button";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-black rounded-card p-8 w-[295px]">
      <div className="space-y-6">
        <Input
          label="Name:"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <Input
          label="Email:"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <Textarea
          label="Message:"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        
        <Button variant="gold" size="md" type="submit" className="w-full">
          Send Messages
        </Button>
      </div>
    </form>
  );
};
```

### Verification
- [ ] Form inputs styled correctly
- [ ] Form state management works
- [ ] Submit handler fires
- [ ] Validation works

---

## Milestone 2.5: Navigation Components

### Navigation: `src/components/layout/Navigation.tsx`

```typescript
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";

export const Navigation: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Home");
  
  return (
    <nav className="flex items-center gap-8">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={() => setActiveItem(item.label)}
          className={cn(
            "text-white font-bold text-[15px] transition-all duration-300",
            activeItem === item.label
              ? "gold-gradient px-4 py-1 rounded-button"
              : "hover:opacity-80"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
```

### Mobile Menu: `src/components/layout/MobileMenu.tsx`

```typescript
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="lg:hidden">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-2"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center transition-all duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white"
        >
          <X size={32} />
        </button>
        
        <nav className="flex flex-col items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-white font-bold text-2xl hover:gold-text-gradient transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
```

### Social Icons: `src/components/ui/SocialIcons.tsx`

```typescript
import React from "react";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/lib/constants";

export const SocialIcons: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.platform}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 transition-transform hover:scale-110"
        >
          <Image
            src={social.icon}
            alt={social.platform}
            width={48}
            height={48}
          />
        </a>
      ))}
    </div>
  );
};
```

### Header: `src/components/layout/Header.tsx`

```typescript
import React from "react";
import Image from "next/image";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";

export const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 lg:px-[100px] py-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="relative w-[200px] lg:w-[294px] h-[40px] lg:h-[57px]">
          <Image
            src="/images/logo/logo-full.png"
            alt="Smart Stand Egypt"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <Navigation />
        </div>
        
        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
};
```

### Export Index: `src/components/ui/index.ts`

```typescript
export { Button } from "./Button";
export { Card } from "./Card";
export { ServiceCard } from "./ServiceCard";
export { ProjectCard } from "./ProjectCard";
export { CapabilityCard } from "./CapabilityCard";
export { PartnerCard } from "./PartnerCard";
export { SectionTitle } from "./SectionTitle";
export { Input } from "./Input";
export { Textarea } from "./Textarea";
export { ContactForm } from "./ContactForm";
export { SocialIcons } from "./SocialIcons";
```

### Verification
- [ ] Desktop navigation works
- [ ] Mobile menu opens/closes
- [ ] Active states display correctly
- [ ] Social icons link correctly

---

## ✅ Phase 2 Completion Checklist

- [ ] Button component with all variants
- [ ] Card base component
- [ ] ServiceCard component
- [ ] ProjectCard component
- [ ] CapabilityCard component
- [ ] PartnerCard component
- [ ] SectionTitle component
- [ ] Input component
- [ ] Textarea component
- [ ] ContactForm component
- [ ] Navigation component
- [ ] MobileMenu component
- [ ] SocialIcons component
- [ ] Header component
- [ ] All components exported from index
- [ ] No TypeScript errors
- [ ] All code committed and pushed
- [ ] PROGRESS.md updated

---

## 🔄 After Completion

1. Update `PROGRESS.md` with completion status
2. Test all components in isolation
3. Commit: `git commit -m "Phase 2 Complete: All UI components"`
4. Push: `git push`
5. Proceed to Phase 3: `docs/prompts/PHASE_3_SECTIONS.md`

