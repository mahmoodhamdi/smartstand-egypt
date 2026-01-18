import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Stand Egypt - Marketing Solutions",
  description: "Smart Stand Egypt is a pioneering company that excels in providing effective marketing solutions to partners across the globe.",
  keywords: ["marketing", "advertising", "Egypt", "promotional", "smart stand", "display stands", "brand activation"],
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
