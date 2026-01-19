"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle, ContactForm, SocialIcons } from "@/components/ui";
import { CONTACT_INFO } from "@/lib/constants";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-16 lg:py-24 overflow-hidden bg-[#0D0D0D]">
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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-[100px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Contact us"
            variant="light"
            className="mb-12 lg:mb-16"
          />
        </motion.div>

        {/* Content Grid - stacks vertically on mobile */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {/* Person Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative w-full max-w-[365px] h-[498px] rounded-card overflow-hidden mx-auto"
          >
            <Image
              src="/images/contact/person.svg"
              alt="Contact representative"
              fill
              sizes="365px"
              className="object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info - shows first on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 sm:space-y-6 lg:space-y-8 order-first lg:order-none"
          >
            {/* Email */}
            <div className="flex items-start gap-4">
              <Image
                src="/images/icons/email.png"
                alt="Email"
                width={50}
                height={40}
                className="flex-shrink-0"
              />
              <div>
                <p className="gold-text-gradient font-black text-lg lg:text-xl">Email</p>
                <p className="text-white font-bold text-base lg:text-xl">{CONTACT_INFO.email}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <Image
                src="/images/icons/phone.png"
                alt="Phone"
                width={50}
                height={50}
                className="flex-shrink-0"
              />
              <div>
                <p className="gold-text-gradient font-black text-lg lg:text-xl">Phone</p>
                <p className="text-white font-bold text-base lg:text-xl">{CONTACT_INFO.phone}</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <Image
                src="/images/icons/address.png"
                alt="Address"
                width={40}
                height={55}
                className="flex-shrink-0"
              />
              <div>
                <p className="gold-text-gradient font-black text-lg lg:text-xl">Address</p>
                <p className="text-white font-bold text-base lg:text-xl whitespace-pre-line">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-4 lg:pt-8">
              <SocialIcons />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
