"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle, CapabilityCard, Button } from "@/components/ui";
import { CAPABILITIES } from "@/lib/constants";
import { scrollToContact } from "@/lib/smoothScroll";

export const CapabilitiesSection: React.FC = () => {
  return (
    <section id="capabilities" className="relative py-16 lg:py-24 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/shapes/vector1.svg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-[100px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Capabilities"
            subtitle="Smart Stand is a leading provider of a wide range of services"
            className="mb-12 lg:mb-16"
          />
        </motion.div>

        {/* Capabilities Grid - 1 col mobile, 2 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mb-8 lg:mb-12">
          {CAPABILITIES.slice(0, 8).map((capability, index) => (
            <motion.div
              key={capability.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CapabilityCard
                title={capability.title}
                description={capability.description}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-black rounded-card p-4 sm:p-6 lg:p-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-white font-black text-lg sm:text-xl lg:text-3xl mb-2 sm:mb-4">
                Ready to Transform Your Marketing Strategy?
              </h3>
              <p className="text-white font-bold text-xs sm:text-sm lg:text-base max-w-lg">
                Our comprehensive suite of services is designed to help you achieve your marketing goals
                and drive significant growth in your target market.
              </p>
            </div>

            <Button variant="gold" size="lg" className="flex-shrink-0 w-full sm:w-auto" onClick={scrollToContact}>
              Contact Us Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
