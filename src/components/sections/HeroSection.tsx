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

  // Auto-slide every 5 seconds
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

      {/* Gold Wave Shape - Top */}
      <div className="absolute top-0 left-0 right-0 z-[2] pointer-events-none">
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-[80px] sm:h-[120px] lg:h-[160px]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="goldGradientTop" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FBF7D3" />
              <stop offset="50%" stopColor="#906F1E" />
              <stop offset="100%" stopColor="#FBDD97" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 L1440,0 L1440,80 Q1200,180 720,100 Q240,20 0,120 L0,0 Z"
            fill="url(#goldGradientTop)"
          />
        </svg>
      </div>

      {/* Gold Wave Shape - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] pointer-events-none">
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-[80px] sm:h-[120px] lg:h-[160px]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="goldGradientBottom" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FBDD97" />
              <stop offset="50%" stopColor="#906F1E" />
              <stop offset="100%" stopColor="#FBF7D3" />
            </linearGradient>
          </defs>
          <path
            d="M0,200 L1440,200 L1440,120 Q1200,20 720,100 Q240,180 0,80 L0,200 Z"
            fill="url(#goldGradientBottom)"
          />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-[5] container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="flex flex-col lg:flex-row items-center min-h-screen pt-28 sm:pt-32 pb-24 lg:pt-0 lg:pb-0">

          {/* Left Side - Text Content (40%) */}
          <div className="w-full lg:w-[45%] xl:w-[40%] z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="text-center lg:text-left"
              >
                {/* Subtitle */}
                <p className="text-[#FBDD97] text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">
                  {slides[currentSlide].subtitle}
                </p>

                {/* Title */}
                <h1 className="text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-tight mb-6 sm:mb-8">
                  {slides[currentSlide].title}
                </h1>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={cn(
                    "gold-gradient text-white font-bold",
                    "text-base sm:text-lg",
                    "px-8 sm:px-10 py-3 sm:py-4",
                    "rounded-full shadow-lg",
                    "w-full sm:w-auto"
                  )}
                >
                  Let&apos;s Get Started
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side - Image (60%) */}
          <div className="w-full lg:w-[55%] xl:w-[60%] mt-8 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[60vh] xl:h-[70vh]"
              >
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  fill
                  priority
                  className="object-contain object-center lg:object-right"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Bottom Center */}
      <div className="absolute bottom-12 sm:bottom-16 lg:bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3">
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
