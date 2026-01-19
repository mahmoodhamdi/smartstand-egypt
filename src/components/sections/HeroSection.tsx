"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui";
import { SliderDots } from "@/components/ui/SliderDots";
import { COMPANY_INFO } from "@/lib/constants";
import { scrollToContact } from "@/lib/smoothScroll";

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#0D0D0D]">
      {/* Background Layers */}
      <div className="absolute inset-0">
        {/* Gold Shape Background */}
        <Image
          src="/images/shapes/main.svg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-luminosity">
          <Image
            src="/images/shapes/vector1.svg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Header */}
      <Header />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-[100px] pt-24 sm:pt-28 lg:pt-[200px]">
        <motion.div
          className="max-w-full lg:max-w-[685px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Subtitle */}
          <p className="text-white font-black text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-4">
            {COMPANY_INFO.tagline}
          </p>

          {/* Main Headline */}
          <h1 className="text-white font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-tight mb-4 sm:mb-6 lg:mb-8">
            Your vision,<br />
            our creative expertise.
          </h1>

          {/* CTA Button */}
          <Button
            variant="gold"
            size="lg"
            className="w-full sm:w-auto"
            onClick={scrollToContact}
          >
            Let&apos;s Get Started
          </Button>
        </motion.div>
      </div>

      {/* Hero Image - Desktop Only */}
      <motion.div
        className="absolute right-0 bottom-0 w-[400px] md:w-[600px] lg:w-[800px] xl:w-[960px] h-[280px] md:h-[380px] lg:h-[480px] xl:h-[544px] hidden md:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <Image
          src="/images/hero/main-photo.png"
          alt="Smart Stand Egypt"
          fill
          sizes="(max-width: 768px) 400px, (max-width: 1024px) 600px, (max-width: 1280px) 800px, 960px"
          className="object-cover object-top"
          priority
        />
      </motion.div>

      {/* Slider Dots */}
      <div className="absolute bottom-8 lg:bottom-16 left-1/2 -translate-x-1/2 z-20">
        <SliderDots total={3} active={0} />
      </div>
    </section>
  );
};
