import type { Metadata, Viewport } from "next";
import "./globals.css";

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
        url: "/images/logo/logo-full.svg",
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
    images: ["/images/logo/logo-full.svg"],
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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Smart Stand Egypt",
              url: "https://smartstand-egypt.vercel.app",
              logo: "https://smartstand-egypt.vercel.app/images/logo/logo-full.svg",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
