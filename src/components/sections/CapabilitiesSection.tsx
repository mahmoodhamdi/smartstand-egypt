import React from "react";
import { SectionTitle, CapabilityCard, Button } from "@/components/ui";
import { CAPABILITIES } from "@/lib/constants";

export const CapabilitiesSection: React.FC = () => {
  return (
    <section id="capabilities" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-[100px]">
        {/* Section Header */}
        <SectionTitle
          title="Capabilities"
          subtitle="Smart Stand is a leading provider of a wide range of services"
          className="mb-12"
        />

        {/* Capabilities Grid - 2x4 */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6 mb-12">
          {CAPABILITIES.slice(0, 8).map((capability) => (
            <CapabilityCard
              key={capability.id}
              title={capability.title}
              description={capability.description}
            />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-black rounded-card p-6 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-white font-black text-xl lg:text-3xl mb-4">
                Ready to Transform Your Marketing Strategy?
              </h3>
              <p className="text-white font-bold text-sm lg:text-base max-w-lg">
                Our comprehensive suite of services is designed to help you achieve your marketing goals
                and drive significant growth in your target market.
              </p>
            </div>

            <Button variant="gold" size="lg" className="flex-shrink-0">
              Contact Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
