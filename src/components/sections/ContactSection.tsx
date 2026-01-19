"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ContactForm, SocialIcons } from "@/components/ui";
import { CONTACT_INFO } from "@/lib/constants";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-[#0D0D0D]">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/shapes/main.svg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 opacity-20 mix-blend-luminosity">
          <Image
            src="/images/shapes/vector1.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-[100px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <h2 className="text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3">
            Contact us
          </h2>
          <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto">
            Get in touch with us to discuss your project requirements
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-10 items-start">
          {/* Person Image - Hidden on mobile, visible on lg+ */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-[365px] h-[500px] rounded-[30px] overflow-hidden bg-gradient-to-b from-[#FBDD97]/20 to-transparent">
              <Image
                src="/images/contact/person.svg"
                alt="Contact representative"
                fill
                sizes="365px"
                className="object-contain object-bottom"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center w-full"
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info - Shows first on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-5 sm:space-y-6 lg:space-y-8 order-first lg:order-none"
          >
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/images/icons/email.png"
                  alt=""
                  width={50}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="gold-text-gradient font-black text-lg sm:text-xl lg:text-2xl">
                  Email
                </p>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white font-bold text-base sm:text-lg lg:text-xl hover:text-[#FBDD97] transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/images/icons/phone.png"
                  alt=""
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="gold-text-gradient font-black text-lg sm:text-xl lg:text-2xl">
                  Phone
                </p>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="text-white font-bold text-base sm:text-lg lg:text-xl hover:text-[#FBDD97] transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/images/icons/address.png"
                  alt=""
                  width={40}
                  height={55}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="gold-text-gradient font-black text-lg sm:text-xl lg:text-2xl">
                  Address
                </p>
                <p className="text-white font-bold text-base sm:text-lg lg:text-xl whitespace-pre-line">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-4 sm:pt-6 lg:pt-8">
              <SocialIcons />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
