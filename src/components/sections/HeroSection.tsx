import React from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui";
import { COMPANY_INFO } from "@/lib/constants";

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black">
      {/* Background with Pattern */}
      <div className="absolute inset-0">
        {/* Main Shape Background */}
        <Image
          src="/images/shapes/main.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Header */}
      <Header />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-[100px] pt-[150px] lg:pt-[214px]">
        <div className="max-w-[685px]">
          {/* Subtitle */}
          <p className="text-white font-black text-xl lg:text-2xl mb-4">
            {COMPANY_INFO.tagline}
          </p>

          {/* Main Headline */}
          <h1 className="text-white font-black text-4xl lg:text-[64px] leading-tight mb-8">
            Your vision,<br />
            our creative expertise.
          </h1>

          {/* CTA Button */}
          <Button variant="gold" size="lg">
            Let&apos;s Get Started
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="absolute right-0 bottom-0 w-[500px] lg:w-[960px] h-[300px] lg:h-[544px] hidden md:block">
        <Image
          src="/images/hero/main-photo.png"
          alt="Smart Stand Egypt"
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-10 lg:bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-8 h-2 gold-gradient rounded-full"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
      </div>
    </section>
  );
};
