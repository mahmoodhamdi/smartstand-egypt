# 🚀 Phase 1: Project Setup - Complete Prompt for Claude Code

## 📋 Mission
Initialize and configure the Smart Stand Egypt landing page project with Next.js 14, TypeScript, and Tailwind CSS.

## 🔑 Credentials & Access

### GitHub
```
Token: [YOUR_TOKEN]
Repository Name: smartstand-egypt
```

### System
```
Linux Password (if needed): 0101
```

## 📁 Working Directory
```
/home/user/projects/smartstand-egypt
```

---

## Milestone 1.1: Initialize Repository

### Tasks
1. **Create GitHub Repository**
```bash
# Configure git
git config --global user.name "mahmoodhamdi"
git config --global user.email "mahmoodhamdi@users.noreply.github.com"

# Create repository using GitHub CLI or API
curl -H "Authorization: token [YOUR_TOKEN]" \
     -d '{"name":"smartstand-egypt","description":"Smart Stand Egypt - Marketing Solutions Landing Page","private":false}' \
     https://api.github.com/user/repos
```

2. **Initialize Next.js Project**
```bash
npx create-next-app@latest smartstand-egypt --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd smartstand-egypt
```

3. **Additional Dependencies**
```bash
npm install framer-motion lucide-react clsx tailwind-merge
npm install -D @types/node
```

4. **Initial Commit & Push**
```bash
git remote add origin https://[YOUR_TOKEN]@github.com/mahmoodhamdi/smartstand-egypt.git
git add .
git commit -m "Initial commit: Next.js 14 with TypeScript and Tailwind"
git push -u origin main
```

### Verification
- [ ] Repository exists on GitHub
- [ ] Next.js app runs with `npm run dev`
- [ ] TypeScript compiles without errors

---

## Milestone 1.2: Configure Project

### 1. Tailwind Configuration (`tailwind.config.ts`)
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: "#FBF7D3",
          DEFAULT: "#FBDD97",
          dark: "#906F1E",
          alt: "#FEF8C5",
        },
        brand: {
          black: "#000000",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Albert Sans", "sans-serif"],
      },
      borderRadius: {
        card: "30px",
        button: "25px",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(180deg, #FBF7D3 0%, #906F1E 50.481%, #FBDD97 100%)",
        "gold-text-gradient": "linear-gradient(180deg, #FEF8C5 0%, #906F1E 50.481%, #FBDD97 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
```

### 2. Global Styles (`src/app/globals.css`)
```css
@import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;700;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Albert Sans', sans-serif;
  }
}

@layer components {
  .gold-gradient {
    background: linear-gradient(180deg, #FBF7D3 0%, #906F1E 50.481%, #FBDD97 100%);
  }
  
  .gold-text-gradient {
    background: linear-gradient(180deg, #FEF8C5 0%, #906F1E 50.481%, #FBDD97 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .section-pattern {
    position: relative;
    overflow: hidden;
  }
  
  .section-pattern::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.3;
    mix-blend-mode: luminosity;
  }
}

@layer utilities {
  .text-shadow {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
}
```

### 3. Next.js Configuration (`next.config.js`)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.figma.com',
        pathname: '/api/**',
      },
    ],
  },
};

module.exports = nextConfig;
```

### Verification
- [ ] Custom colors work in Tailwind
- [ ] Fonts load correctly
- [ ] Gradients render properly

---

## Milestone 1.3: Download Assets

### Asset URLs from Figma (Valid for 7 days)

#### Logo & Branding
```typescript
export const ASSETS = {
  logo: {
    full: "https://www.figma.com/api/mcp/asset/35aff292-0cdc-46e9-9e34-6ab2f2bcccb5",
    icon: "https://www.figma.com/api/mcp/asset/4d1f42cd-aeaa-487a-9fc0-caaf7f1eecd1",
  },
  
  // Background Shapes
  shapes: {
    main: "https://www.figma.com/api/mcp/asset/09320b48-9d8c-4f9e-8aab-1c9d8c893db4",
    vector1: "https://www.figma.com/api/mcp/asset/37de8a92-4822-492a-95fa-d22d5c07ba57",
    vector2: "https://www.figma.com/api/mcp/asset/d9f555a0-6adb-47f7-97ff-25754e1f04a0",
    vector3: "https://www.figma.com/api/mcp/asset/82d770a0-b10c-4b2b-8458-d5642a1a6d2e",
    vector4: "https://www.figma.com/api/mcp/asset/a85d501d-c32b-4aa8-9fd9-d24b756744c4",
    vector5: "https://www.figma.com/api/mcp/asset/c9414c60-5e37-4980-b708-b59f4b132b6c",
  },
  
  // Hero Section
  hero: {
    mainPhoto: "https://www.figma.com/api/mcp/asset/5c8e744e-805e-41fa-9b13-aa09586bcf95",
    slides: "https://www.figma.com/api/mcp/asset/003561ca-027a-4978-9070-f96a4837eca5",
    slidesAlt: "https://www.figma.com/api/mcp/asset/34e50648-05c5-4eda-9582-df09fe6a8a5b",
  },
  
  // About Section
  about: {
    yoloImage: "https://www.figma.com/api/mcp/asset/4b4df542-083d-4edd-b6ef-670326a57d4a",
    yoloMask: "https://www.figma.com/api/mcp/asset/f3bfd97f-377e-41a8-9321-c3d338e399ed",
  },
  
  // Services Icons
  services: {
    ellipse1: "https://www.figma.com/api/mcp/asset/eca209c7-cabc-4380-a5d4-e449ff00511c",
    ellipse2: "https://www.figma.com/api/mcp/asset/ab27bd5d-b5dd-4dfd-9e16-711d8792ec38",
    ellipse3: "https://www.figma.com/api/mcp/asset/eb4eb7e6-05d3-42ca-9025-11d8d96264cc",
    locker1: "https://www.figma.com/api/mcp/asset/df8593f7-cac5-4732-9c6f-dbed2ff4664b",
    locker2: "https://www.figma.com/api/mcp/asset/85454f02-282e-486c-8f96-75b3e2002dbe",
    locker3: "https://www.figma.com/api/mcp/asset/8f36fe7f-1442-4a32-9ece-96389f7e3b2c",
  },
  
  // Partners Logos
  partners: {
    lg: "https://www.figma.com/api/mcp/asset/e185d123-9163-4b18-8107-1263fc06729d",
    elaraby: "https://www.figma.com/api/mcp/asset/f5db41da-a538-486e-b8b7-ec72fc559f74",
    bosch: "https://www.figma.com/api/mcp/asset/90672016-6460-4e8f-bac7-daa6697d90f7",
    tcl: "https://www.figma.com/api/mcp/asset/88349001-7f9d-41f4-b7bb-05c49badac09",
    redBull: "https://www.figma.com/api/mcp/asset/52f73e0a-c4d6-455b-926f-1cb5adb08319",
  },
  
  // Projects Images
  projects: {
    lgProject: "https://www.figma.com/api/mcp/asset/3bfd4f26-7e0a-4f74-8e86-a88d7a780a33",
    lgMask: "https://www.figma.com/api/mcp/asset/82c5e5fb-dda1-47a6-8cd5-e0cbfba38228",
    yolo: "https://www.figma.com/api/mcp/asset/4b4df542-083d-4edd-b6ef-670326a57d4a",
    yoloMask: "https://www.figma.com/api/mcp/asset/d8cb6f82-94e4-430b-880b-cea5fbf3afaf",
    haier: "https://www.figma.com/api/mcp/asset/c59849c4-ea5b-4dcb-81dd-bbbcec6e96cc",
    healthyTasty: "https://www.figma.com/api/mcp/asset/f3a3b3a8-6b18-42e6-9dd2-454f0dbe601f",
    healthyTastyMask: "https://www.figma.com/api/mcp/asset/8a3c16c2-d8c9-40ad-b80b-f841d02ae73e",
    bosch: "https://www.figma.com/api/mcp/asset/0e3af4a1-6bb0-4b61-8ae7-d6eb0a977227",
  },
  
  // Contact Section
  contact: {
    personImage: "https://www.figma.com/api/mcp/asset/26bdf5a5-65a2-4a93-9f7a-96b75b0c3789",
    personMask: "https://www.figma.com/api/mcp/asset/8b139757-6d1f-4bcb-bc71-e11811ad658f",
    facebook: "https://www.figma.com/api/mcp/asset/1cbe1d4f-6d95-4564-a276-086e7c92a4c7",
    instagram: "https://www.figma.com/api/mcp/asset/e6e1046f-adc5-4c0d-bafa-e7e088b40200",
    linkedin: "https://www.figma.com/api/mcp/asset/6cf64ce2-afc0-44bf-b266-04daf8a14441",
    social: "https://www.figma.com/api/mcp/asset/016e9eda-0767-46ef-b3e8-b7e3d723435b",
    addressIcon: "https://www.figma.com/api/mcp/asset/5d9209e9-b067-4747-9586-5dfbc875896f",
    phoneIcon: "https://www.figma.com/api/mcp/asset/f126296c-3ad3-45e3-9f49-7fb1df096451",
    emailIcon: "https://www.figma.com/api/mcp/asset/a8b13646-c83b-43f2-b6ac-b5d698c8d660",
  },
};
```

### Download Script
```bash
#!/bin/bash
# Create directories
mkdir -p public/images/{logo,partners,projects,services,icons,shapes,hero,about,contact}

# Download function
download_asset() {
  local url=$1
  local dest=$2
  curl -L "$url" -o "$dest"
}

# Download all assets (run this in project root)
# Logo
download_asset "${ASSETS.logo.full}" "public/images/logo/logo-full.png"

# ... (continue for all assets)
```

### Verification
- [ ] All assets downloaded
- [ ] Assets organized in correct folders
- [ ] Images load in browser

---

## Milestone 1.4: Setup Project Structure

### Create Folder Structure
```bash
mkdir -p src/components/{layout,sections,ui}
mkdir -p src/{lib,hooks,types,styles}
```

### Create Base Files

#### `src/types/index.ts`
```typescript
export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  image: string;
  link?: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
```

#### `src/lib/constants.ts`
```typescript
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
    icon: "/images/services/locker.png",
  },
  // Add more services...
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
  // Add 7 more capabilities...
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
  { platform: "Other", url: "#", icon: "/images/icons/social.png" },
];
```

#### `src/lib/utils.ts`
```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

#### `src/app/layout.tsx`
```typescript
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Stand Egypt - Marketing Solutions",
  description: "Smart Stand Egypt is a pioneering company that excels in providing effective marketing solutions.",
  keywords: ["marketing", "advertising", "Egypt", "promotional", "smart stand"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
```

### Commit & Push
```bash
git add .
git commit -m "Phase 1 Complete: Project setup and configuration"
git push
```

### Update Progress
After completing Phase 1, update `/docs/PROGRESS.md`:
- Mark all Phase 1 milestones as ✅ Complete
- Update timestamps
- Add session log entry

---

## ✅ Phase 1 Completion Checklist

- [ ] GitHub repository created and accessible
- [ ] Next.js project initialized with TypeScript
- [ ] Tailwind CSS configured with custom theme
- [ ] Custom fonts (Albert Sans) configured
- [ ] All assets downloaded and organized
- [ ] Project structure created
- [ ] Constants and types defined
- [ ] Base layout configured
- [ ] All code committed and pushed
- [ ] PROGRESS.md updated

---

## 🔄 After Completion

1. Update `PROGRESS.md` with completion status
2. Proceed to Phase 2: `docs/prompts/PHASE_2_COMPONENTS.md`

---

## 📝 Notes for Claude Code

### Best Practices to Follow
1. **Run verification after each step** - Don't proceed if something fails
2. **Commit frequently** - After each milestone
3. **Test locally** - Run `npm run dev` to verify changes
4. **Update progress** - Keep PROGRESS.md current
5. **Handle errors gracefully** - If something fails, try alternative approaches

### If You Need to Resume
1. Check `PROGRESS.md` for current status
2. Verify what's already done
3. Continue from the last incomplete task

### Common Issues & Solutions
- **Git auth fails**: Use the token in the URL format
- **npm install fails**: Try `npm cache clean --force` then retry
- **Assets expired**: Regenerate from Figma using the MCP tool

