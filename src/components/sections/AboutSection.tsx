import React from "react";
import Image from "next/image";
import { SectionTitle, Button } from "@/components/ui";
import { COMPANY_INFO } from "@/lib/constants";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-[100px]">
        {/* Section Title */}
        <SectionTitle
          title="About Smart Stand Egypt"
          className="mb-12"
        />

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative w-full h-[300px] lg:h-[452px] rounded-card overflow-hidden">
            <Image
              src="/images/about/about-image.png"
              alt="About Smart Stand Egypt"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div className="text-black font-bold text-sm lg:text-base leading-relaxed whitespace-pre-line">
              {COMPANY_INFO.description}
            </div>

            {/* CTA Button */}
            <Button variant="gold" size="lg">
              Contact Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
