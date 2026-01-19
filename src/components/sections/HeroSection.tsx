"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    subtitle: "Innovative strategies that drive global success",
    title: "Your Partner in Growth",
    image: "/images/hero/bosch.webp",
  },
  {
    id: 2,
    subtitle: "Turning Ideas into Impact",
    title: "Your vision, our creative expertise.",
    image: "/images/hero/lg.webp",
  },
  {
    id: 3,
    subtitle: "Partnering with you for unstoppable growth",
    title: "Building Success Together",
    image: "/images/hero/healthy-tasty.webp",
  },
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-black overflow-hidden">
      {/* Header */}
      <Header />

      {/* Background Shape - Always visible */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/shapes/main.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hero Image - FIXED FOR MOBILE */}
      <div className="absolute inset-0 z-[1]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {/* Mobile: Full background image with overlay */}
            <div className="block md:hidden absolute inset-0">
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
              />
              {/* Dark overlay for text readability on mobile */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
            </div>

            {/* Desktop: Image on right side */}
            <div className="hidden md:block absolute right-0 bottom-0 w-[50%] lg:w-[55%] h-[70%] lg:h-[80%]">
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                priority
                className="object-contain object-right-bottom"
                sizes="(max-width: 1024px) 50vw, 55vw"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full max-w-xl lg:max-w-2xl pt-20 sm:pt-24 pb-32 sm:pb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Subtitle */}
              <p className="text-[#FBDD97] text-sm sm:text-base lg:text-lg mb-2 sm:mb-3">
                {slides[currentSlide].subtitle}
              </p>

              {/* Title */}
              <h1 className="text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 sm:mb-8">
                {slides[currentSlide].title}
              </h1>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="gold-gradient text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-[25px] shadow-lg w-full sm:w-auto"
              >
                Let&apos;s Get Started
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators - Bottom center */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={cn(
              "rounded-full transition-all duration-300",
              index === currentSlide
                ? "w-8 sm:w-10 h-2.5 sm:h-3 gold-gradient"
                : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/50 hover:bg-white/70"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
