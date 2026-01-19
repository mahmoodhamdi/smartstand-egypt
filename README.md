# Smart Stand Egypt - Landing Page

A modern, responsive landing page for **Smart Stand Egypt** - a marketing solutions company based in Cairo, Egypt.

## Live Demo

Deploy to Vercel: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mahmoodhamdi/smartstand-egypt)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Features

- Responsive design (320px - 1920px+)
- Smooth scroll navigation
- Interactive card carousels
- Contact form
- SEO optimized (meta tags, Open Graph, structured data)
- Performance optimized

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/mahmoodhamdi/smartstand-egypt.git

# Navigate to project directory
cd smartstand-egypt

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm run start
```

## Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

Or use the CLI:

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Option 2: Static Export

```bash
# Add to next.config.ts: output: 'export'
npm run build
# Upload the 'out' folder to any static hosting
```

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   └── MobileMenu.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── CapabilitiesSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── PartnersSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── ServiceCard.tsx
│       ├── ProjectCard.tsx
│       └── ...
├── lib/
│   ├── constants.ts
│   └── utils.ts
├── hooks/
│   └── useScrollAnimation.ts
└── types/
    └── index.ts
```

## Design Specifications

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Gold Light | #FBF7D3 | Gradient start |
| Gold | #FBDD97 | Gradient end |
| Gold Dark | #906F1E | Gradient middle |
| Black | #000000 | Cards, text |
| White | #FFFFFF | Background |

### Typography

- **Font**: Albert Sans
- **Weights**: 400, 500, 600, 700, 900

### Border Radius

- Cards: 30px
- Buttons: 25px

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## License

Private project for Smart Stand Egypt.

## Contact

- **Email**: info@smartstand-eg.com
- **Phone**: +20 155555 00 73
- **Address**: 88 Joseph Tito, 5th floor, Al nozha - Cairo
