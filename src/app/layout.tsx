import type { Metadata, Viewport } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";

// Use Next.js font optimization - prevents render-blocking
const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-albert-sans",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://smartstand-egypt.vercel.app'),
  title: {
    default: "Smart Stand Egypt - Marketing Solutions",
    template: "%s | Smart Stand Egypt",
  },
  description: "Smart Stand Egypt is a pioneering company that excels in providing effective marketing solutions. We deliver outstanding promotional strategies to help expedite sales and foster significant growth.",
  keywords: [
    "marketing solutions",
    "advertising Egypt",
    "promotional strategies",
    "smart stand",
    "Cairo marketing",
    "brand promotion",
    "marketing agency Egypt",
    "display stands",
    "brand activation",
  ],
  authors: [{ name: "Smart Stand Egypt" }],
  creator: "Smart Stand Egypt",
  publisher: "Smart Stand Egypt",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smartstand-egypt.vercel.app",
    siteName: "Smart Stand Egypt",
    title: "Smart Stand Egypt - Marketing Solutions",
    description: "Pioneering marketing solutions for businesses across the globe.",
    images: [
      {
        url: "/images/logo/Logo.svg",
        width: 294,
        height: 57,
        alt: "Smart Stand Egypt Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Smart Stand Egypt - Marketing Solutions",
    description: "Pioneering marketing solutions for businesses across the globe.",
    images: ["/images/logo/Logo.svg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/images/logo/logo-icon.svg",
    shortcut: "/images/logo/logo-icon.svg",
    apple: "/images/logo/logo-icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#906F1E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={albertSans.variable}>
      <head>
        {/* Preconnect for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload critical images for LCP */}
        <link rel="preload" as="image" href="/images/shapes/main.svg" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Smart Stand Egypt",
              url: "https://smartstand-egypt.vercel.app",
              logo: "https://smartstand-egypt.vercel.app/images/logo/Logo.svg",
              description: "Marketing solutions company in Egypt providing effective promotional strategies",
              address: {
                "@type": "PostalAddress",
                streetAddress: "88 Joseph Tito, 5th floor",
                addressLocality: "Al nozha",
                addressRegion: "Cairo",
                addressCountry: "EG",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+20-155555-0073",
                contactType: "customer service",
                email: "info@smartstand-eg.com",
              },
            }),
          }}
        />
      </head>
      <body className={`${albertSans.className} antialiased`}>{children}</body>
    </html>
  );
}
