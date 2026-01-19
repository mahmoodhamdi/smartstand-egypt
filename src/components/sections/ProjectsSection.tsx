"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { cn } from "@/lib/utils";
import { PROJECTS } from "@/lib/constants";

const cardVariants = ["edge", "side", "main", "side", "edge"] as const;

export const ProjectsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(2);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;

    const cards = container.querySelectorAll('[data-card-index]');
    let closestIndex = 2;
    let closestDistance = Infinity;

    cards.forEach((card) => {
      const cardElement = card as HTMLElement;
      const index = parseInt(cardElement.dataset.cardIndex || "0");
      const cardCenter = cardElement.offsetLeft + cardElement.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const card = container.querySelector(`[data-card-index="${index}"]`) as HTMLElement;

    if (card) {
      const containerCenter = container.offsetWidth / 2;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const scrollTo = cardCenter - containerCenter;

      container.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => scrollToCard(2), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section id="projects" className="relative py-16 sm:py-20 lg:py-28 bg-[#0D0D0D] overflow-hidden">
      {/* Background Shape */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image src="/images/shapes/main.svg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 opacity-20 mix-blend-luminosity">
          <Image src="/images/shapes/vector1.svg" alt="" fill className="object-cover" />
        </div>
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16 px-4"
        >
          <h2 className="text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3">
            Projects
          </h2>
          <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto">
            Showcasing our work with leading brands across the globe
          </p>
        </motion.div>

        {/* Cards Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className={cn(
              "flex items-end gap-4 sm:gap-5 lg:gap-6",
              "overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory",
              "pb-8"
            )}
            style={{
              paddingLeft: "max(1rem, calc(50vw - 700px))",
              paddingRight: "max(1rem, calc(50vw - 700px))",
            }}
          >
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                data-card-index={index}
                className="snap-center flex-shrink-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  image={project.image}
                  variant={cardVariants[index]}
                  isActive={activeIndex === index}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {PROJECTS.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToCard(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={cn(
                "rounded-full transition-all duration-300 cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center p-2",
              )}
              aria-label={`Go to project ${index + 1}`}
            >
              <span
                className={cn(
                  "rounded-full block transition-all duration-300",
                  index === activeIndex
                    ? "w-6 sm:w-8 h-2.5 sm:h-3 gold-gradient"
                    : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/40 hover:bg-white/60"
                )}
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
