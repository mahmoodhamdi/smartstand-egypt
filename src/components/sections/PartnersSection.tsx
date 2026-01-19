import React from "react";
import { SectionTitle, PartnerCard } from "@/components/ui";
import { PARTNERS } from "@/lib/constants";

export const PartnersSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-[100px]">
        {/* Section Header */}
        <SectionTitle
          title="Our Success Partners"
          className="mb-12"
        />

        {/* Partners Grid */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {PARTNERS.map((partner) => (
            <PartnerCard
              key={partner.id}
              name={partner.name}
              logo={partner.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
