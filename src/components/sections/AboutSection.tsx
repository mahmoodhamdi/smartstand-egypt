"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle, Button } from "@/components/ui";
import { COMPANY_INFO } from "@/lib/constants";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-16 lg:py-24 overflow-hidden bg-white">
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
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="About Smart Stand Egypt"
            className="mb-12 lg:mb-16"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full h-[300px] lg:h-[452px] rounded-card overflow-hidden"
          >
            <Image
              src="/images/about/about-image.png"
              alt="About Smart Stand Egypt"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="text-black font-bold text-sm lg:text-base leading-relaxed whitespace-pre-line">
              {COMPANY_INFO.description}
            </div>

            {/* CTA Button */}
            <Button variant="gold" size="lg">
              Contact Us Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
