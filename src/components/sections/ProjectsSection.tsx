"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle, ProjectCard } from "@/components/ui";
import { Carousel } from "@/components/ui/Carousel";
import { PROJECTS } from "@/lib/constants";

export const ProjectsSection: React.FC = () => {
  // Determine card variant based on position
  // 0=edge, 1=side, 2=main, 3=side, 4=edge
  const getVariant = (index: number): "main" | "side" | "edge" => {
    if (index === 2) return "main";
    if (index === 1 || index === 3) return "side";
    return "edge";
  };

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
            subtitle="Showcasing our work with leading brands across the globe"
            variant="light"
            className="mb-12 lg:mb-16"
          />
        </motion.div>

        {/* Projects Carousel with synced dots */}
        <Carousel>
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                image={project.image}
                variant={getVariant(index)}
              />
            </motion.div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
