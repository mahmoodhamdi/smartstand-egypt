"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/ui/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@smartstand-eg.com",
    href: "mailto:info@smartstand-eg.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+20 155 555 0073",
    href: "tel:+201555550073",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Kamal Hassan Ali, Sheraton Al Matar\nEl Nozha, Cairo, Egypt",
    href: "https://goo.gl/maps/Ve5q14VYzbRB7PWZ9",
  },
];

const socialLinks = [
  { name: "Facebook", icon: "/images/icons/facebook.png", url: "https://facebook.com/smartstandegypt" },
  { name: "Instagram", icon: "/images/icons/instagram.png", url: "https://instagram.com/smartstandegypt" },
  { name: "LinkedIn", icon: "/images/icons/linkedin.png", url: "https://linkedin.com/company/smartstandegypt" },
];

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-28 bg-black overflow-hidden">
      {/* Background Shape */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image src="/images/shapes/main.svg" alt="" fill className="object-cover" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3">
            Contact us
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-md mx-auto">
            Get in touch with us to discuss your project requirements
          </p>
        </motion.div>

        {/* Content - TWO COLUMNS ONLY (Form + Info) */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12 xl:gap-16 max-w-4xl mx-auto">

          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0"
          >
            <ContactForm />
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0 space-y-6"
          >
            {/* Contact Items */}
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 group"
              >
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full gold-gradient flex items-center justify-center flex-shrink-0 shadow-lg">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                {/* Text */}
                <div className="pt-1">
                  <p className="text-[#FBDD97] font-bold text-sm sm:text-base mb-1">
                    {item.label}
                  </p>
                  <p className="text-white text-sm sm:text-base group-hover:text-[#FBDD97] transition-colors whitespace-pre-line leading-relaxed">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 pt-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shadow-lg transition-transform"
                  aria-label={`Visit our ${social.name}`}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
