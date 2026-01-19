"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle, ProjectCard, SliderDots } from "@/components/ui";
import { PROJECTS } from "@/lib/constants";

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="relative py-16 lg:py-24 overflow-hidden bg-[#0D0D0D]">
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

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Projects"
            subtitle="Smart Stand is a leading provider of a wide range of services"
            variant="light"
            className="mb-12 lg:mb-16"
          />
        </motion.div>

        {/* Projects Carousel - Horizontal scroll with snap */}
        <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth">
          <div className="flex gap-3 sm:gap-4 lg:gap-6 items-end justify-start lg:justify-center px-4 sm:px-6 lg:px-[100px] min-w-max pb-6">
            {PROJECTS.map((project, index) => {
              // Determine card variant based on position
              // 0=edge, 1=side, 2=main, 3=side, 4=edge
              const variant = index === 2 ? "main" : (index === 1 || index === 3) ? "side" : "edge";

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 snap-center"
                >
                  <ProjectCard
                    title={project.title}
                    image={project.image}
                    variant={variant}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Slider Dots */}
        <div className="mt-8 lg:mt-12">
          <SliderDots total={3} active={0} />
        </div>
      </div>
    </section>
  );
};
