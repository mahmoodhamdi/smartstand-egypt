import React from "react";
import Image from "next/image";
import { SectionTitle, ContactForm, SocialIcons } from "@/components/ui";
import { CONTACT_INFO } from "@/lib/constants";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-16 lg:py-20 overflow-hidden bg-black">
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
          title="Contact us"
          variant="light"
          className="mb-12"
        />

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Person Image */}
          <div className="hidden lg:block relative w-full max-w-[365px] h-[498px] rounded-card overflow-hidden mx-auto">
            <Image
              src="/images/contact/person.svg"
              alt="Contact"
              fill
              className="object-cover"
            />
          </div>

          {/* Contact Form */}
          <div className="flex justify-center">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-6 lg:space-y-8">
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
          </div>
        </div>
      </div>
    </section>
  );
};
