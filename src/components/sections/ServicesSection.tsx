"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { useCarousel } from "@/hooks/useCarousel";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "1",
    title: "Floorstands",
    description: "Our floorstands are designed to provide an attractive and effective way to showcase products.",
    icon: "/images/services/floorstands.webp",
  },
  {
    id: "2",
    title: "Booths",
    description: "Our customized booth design services create functional and visually appealing exhibition booths.",
    icon: "/images/services/booths.webp",
  },
  {
    id: "3",
    title: "Lockers",
    description: "Our lockers provide a safe and secure way for customers to store their belongings.",
    icon: "/images/services/lockers.webp",
  },
  {
    id: "4",
    title: "Store Racks",
    description: "Our store racks are designed to maximize space and enhance product visibility.",
    icon: "/images/services/store-racks.webp",
  },
  {
    id: "5",
    title: "Countertops",
    description: "Our countertops provide an attractive and functional space for product displays.",
    icon: "/images/services/countertops.webp",
  },
];

export const ServicesSection: React.FC = () => {
  const { scrollRef, activeIndex, scrollToIndex } = useCarousel({
    itemCount: services.length,
    initialIndex: 2,
  });

  return (
    <section id="services" className="relative py-12 sm:py-16 lg:py-24 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image src="/images/shapes/main.svg" alt="" fill className="object-cover" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 px-4"
        >
          <h2 className="text-white font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 sm:mb-3">
            Services
          </h2>
          <p className="text-white/70 text-xs sm:text-sm md:text-base max-w-md mx-auto">
            Smart Stand is a leading provider of a wide range of services
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className={cn(
              "flex items-center gap-3 sm:gap-4 lg:gap-6",
              "overflow-x-auto scrollbar-hide scroll-smooth",
              "snap-x snap-mandatory",
              "py-4 sm:py-6"
            )}
            style={{
              paddingLeft: "max(1rem, calc(50vw - 600px))",
              paddingRight: "max(1rem, calc(50vw - 600px))",
            }}
          >
            {services.map((service, index) => (
              <div key={service.id} className="snap-center">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  isActive={activeIndex === index}
                  onClick={() => scrollToIndex(index)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4 sm:mt-6">
          {services.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={cn(
                "rounded-full transition-all duration-300",
                index === activeIndex
                  ? "w-6 sm:w-8 h-2 sm:h-3 gold-gradient"
                  : "w-2 sm:w-3 h-2 sm:h-3 bg-white/40 hover:bg-white/60"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
