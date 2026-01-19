"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { id: "1", name: "LG", logo: "/images/partners/lg.webp" },
  { id: "2", name: "Red Bull", logo: "/images/partners/redbull.webp" },
  { id: "3", name: "Bosch", logo: "/images/partners/bosch.webp" },
  { id: "4", name: "TCL", logo: "/images/partners/tcl.webp" },
  { id: "5", name: "Panasonic", logo: "/images/partners/panasonic.webp" },
  { id: "6", name: "Philips", logo: "/images/partners/philips.webp" },
  { id: "7", name: "Nestle", logo: "/images/partners/nestle.webp" },
  { id: "8", name: "L'Oreal", logo: "/images/partners/loreal.webp" },
  { id: "9", name: "Shell", logo: "/images/partners/shell.webp" },
  { id: "10", name: "Mobil", logo: "/images/partners/mobil.webp" },
  { id: "11", name: "GE", logo: "/images/partners/ge.webp" },
  { id: "12", name: "Hoover", logo: "/images/partners/hoover.webp" },
  { id: "13", name: "La Germania", logo: "/images/partners/la-germania.webp" },
  { id: "14", name: "Koldair", logo: "/images/partners/koldair.webp" },
  { id: "15", name: "YOLO", logo: "/images/partners/yolo.webp" },
  { id: "16", name: "Nova", logo: "/images/partners/nova.webp" },
  { id: "17", name: "Othaim", logo: "/images/partners/othaim.webp" },
  { id: "18", name: "Olive One", logo: "/images/partners/olive-one.webp" },
  { id: "19", name: "Rowa", logo: "/images/partners/rowa.webp" },
  { id: "20", name: "SAIB", logo: "/images/partners/saib.webp" },
];

export const PartnersSection: React.FC = () => {
  return (
    <section id="partners" className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-black font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3">
            Our Success Partners
          </h2>
          <p className="text-black/70 text-sm sm:text-base max-w-xl mx-auto">
            We are proud to collaborate with trusted partners who share our vision
          </p>
        </motion.div>

        {/* Partners Grid - FIXED EQUAL SIZES */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 max-w-5xl mx-auto"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              {/* Fixed Size Card Container */}
              <div className="relative w-full aspect-[4/3] bg-white rounded-xl sm:rounded-2xl border-2 border-gray-100 shadow-sm hover:shadow-lg hover:border-[#FBDD97]/50 transition-all duration-300 overflow-hidden">
                {/* Image Container with Padding */}
                <div className="absolute inset-3 sm:inset-4 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="(max-width: 640px) 150px, (max-width: 1024px) 180px, 200px"
                    className="object-contain p-2"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
