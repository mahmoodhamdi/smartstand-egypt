"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { cn } from "@/lib/utils";

const projects = [
  { id: "1", title: "El Ezaby Pharmacy", image: "/images/projects/el-ezaby.webp" },
  { id: "2", title: "Yolo Cosmetics", image: "/images/projects/yolo.webp" },
  { id: "3", title: "LG Egypt", image: "/images/projects/lg.webp" },
  { id: "4", title: "BOSCH", image: "/images/projects/bosch.webp" },
  { id: "5", title: "Abdullah Al-Othaim Markets", image: "/images/projects/othaim.webp" },
];

export const ProjectsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(2);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const childRect = child.getBoundingClientRect();
      const childCenter = childRect.left + childRect.width / 2;
      const distance = Math.abs(containerCenter - childCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  const scrollToCard = useCallback((index: number) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const child = container.children[index] as HTMLElement;

    if (child) {
      const containerWidth = container.offsetWidth;
      const childOffsetLeft = child.offsetLeft;
      const childWidth = child.offsetWidth;
      const scrollPosition = childOffsetLeft - (containerWidth / 2) + (childWidth / 2);

      container.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: "smooth",
      });
    }

    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll, { passive: true });

    const timer = setTimeout(() => {
      scrollToCard(2);
    }, 300);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [handleScroll, scrollToCard]);

  return (
    <section id="projects" className="relative py-16 sm:py-20 lg:py-28 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image src="/images/shapes/main.svg" alt="" fill className="object-cover" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 px-4"
        >
          <h2 className="text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3">
            Projects
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto">
            Showcasing our work with leading brands across the globe
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className={cn(
              "flex items-center justify-start gap-4 sm:gap-5 lg:gap-6",
              "overflow-x-auto scrollbar-hide scroll-smooth",
              "snap-x snap-mandatory",
              "pb-8"
            )}
            style={{
              paddingLeft: "max(16px, calc(50vw - 700px))",
              paddingRight: "max(16px, calc(50vw - 700px))",
            }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="snap-center flex-shrink-0"
                onClick={() => scrollToCard(index)}
              >
                <ProjectCard
                  title={project.title}
                  image={project.image}
                  isActive={activeIndex === index}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToCard(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={cn(
                "rounded-full transition-all duration-300 cursor-pointer",
                index === activeIndex
                  ? "w-8 h-3 gold-gradient"
                  : "w-3 h-3 bg-white/40 hover:bg-white/60"
              )}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
