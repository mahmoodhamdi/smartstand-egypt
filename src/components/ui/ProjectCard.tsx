"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  image: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  isActive = false,
  onClick,
}) => {
  return (
    <motion.div
      data-carousel-item
      onClick={onClick}
      animate={{
        scale: isActive ? 1 : 0.88,
        opacity: isActive ? 1 : 0.7,
      }}
      whileHover={{
        scale: isActive ? 1.02 : 0.92,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      className={cn(
        "rounded-[24px] sm:rounded-[30px]",
        "overflow-hidden flex flex-col",
        "flex-shrink-0 cursor-pointer select-none",
        "transition-colors duration-300",

        // Fixed base size
        "w-[200px] sm:w-[240px] md:w-[260px] lg:w-[280px]",
        "h-[280px] sm:h-[340px] md:h-[380px] lg:h-[400px]",

        // Active: larger
        isActive && "!w-[240px] sm:!w-[280px] md:!w-[320px] lg:!w-[360px]",
        isActive && "!h-[340px] sm:!h-[400px] md:!h-[440px] lg:!h-[480px]",

        // Background
        isActive ? "bg-white shadow-2xl" : "bg-black/90 border border-white/20"
      )}
    >
      {/* Image */}
      <div className="relative w-full h-[55%]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 360px"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center flex-1 p-3 sm:p-4">
        <h3
          className={cn(
            "font-black text-center leading-tight mb-3 sm:mb-4",
            isActive
              ? "text-lg sm:text-xl md:text-2xl lg:text-3xl text-black"
              : "text-base sm:text-lg md:text-xl text-white"
          )}
        >
          {title}
        </h3>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className={cn(
            "font-bold rounded-full",
            "min-h-[36px] sm:min-h-[40px] md:min-h-[44px]",
            "px-4 sm:px-5 md:px-6",
            "text-xs sm:text-sm md:text-base",
            isActive ? "gold-gradient text-white" : "bg-white text-black"
          )}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};
