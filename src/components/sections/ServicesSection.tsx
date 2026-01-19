"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle, ServiceCard } from "@/components/ui";
import { Carousel } from "@/components/ui/Carousel";
import { SERVICES } from "@/lib/constants";

export const ServicesSection: React.FC = () => {
  // Determine card variant based on position
  // 0=edge, 1=side, 2=main, 3=side, 4=edge
  const getVariant = (index: number): "main" | "side" | "edge" => {
    if (index === 2) return "main";
    if (index === 1 || index === 3) return "side";
    return "edge";
  };

  return (
    <section id="services" className="relative py-16 lg:py-24 overflow-x-hidden bg-[#0D0D0D]">
      {/* Background Layers */}
      <div className="absolute inset-0">
        {/* Gold Shape Background */}
        <Image
          src="/images/shapes/main.svg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          loading="lazy"
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

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Services"
            subtitle="Smart Stand is a leading provider of a wide range of services"
            variant="light"
            className="mb-12 lg:mb-16"
          />
        </motion.div>

        {/* Services Carousel with synced dots */}
        <Carousel>
          {SERVICES.slice(0, 5).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                variant={getVariant(index)}
              />
            </motion.div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
