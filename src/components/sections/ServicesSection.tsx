"use client";

import React from "react";
import Image from "next/image";
import { SectionTitle, ServiceCard } from "@/components/ui";
import { SERVICES } from "@/lib/constants";

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative py-16 lg:py-20 overflow-hidden bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <Image
          src="/images/shapes/main.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-[100px]">
        {/* Section Header */}
        <SectionTitle
          title="Services"
          subtitle="Smart Stand is a leading provider of a wide range of services"
          variant="light"
          className="mb-12"
        />

        {/* Services Carousel */}
        <div
          className="flex gap-4 lg:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory items-end justify-start lg:justify-center scrollbar-hide"
        >
          {SERVICES.slice(0, 5).map((service, index) => {
            const variant = index === 2 ? "main" : (index === 1 || index === 3) ? "side" : "edge";
            return (
              <div key={service.id} className="flex-shrink-0 snap-center">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  variant={variant}
                />
              </div>
            );
          })}
        </div>

        {/* Slider Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-8 h-2 gold-gradient rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
