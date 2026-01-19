"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle, PartnerCard } from "@/components/ui";
import { PARTNERS } from "@/lib/constants";

export const PartnersSection: React.FC = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-white">
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
            title="Our Success Partners"
            className="mb-12 lg:mb-16"
          />
        </motion.div>

        {/* Partners Grid - responsive gap */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <PartnerCard
                name={partner.name}
                logo={partner.logo}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
