"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  image: string;
  isActive?: boolean;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  isActive = false,
  className,
}) => {
  return (
    <motion.div
      layout
      animate={{
        scale: isActive ? 1 : 0.9,
        opacity: isActive ? 1 : 0.85,
      }}
      whileHover={{ scale: isActive ? 1.02 : 0.95, opacity: 1 }}
      transition={{
        layout: { duration: 0.4, ease: "easeInOut" },
        scale: { duration: 0.3 },
        opacity: { duration: 0.3 }
      }}
      className={cn(
        // Base styles
        "rounded-[24px] sm:rounded-[28px] lg:rounded-[30px]",
        "overflow-hidden flex flex-col",
        "flex-shrink-0 transition-all duration-300",
        "cursor-pointer",

        // Size - Active is larger
        isActive
          ? "w-[280px] h-[380px] sm:w-[320px] sm:h-[420px] lg:w-[360px] lg:h-[460px]"
          : "w-[220px] h-[320px] sm:w-[250px] sm:h-[360px] lg:w-[280px] lg:h-[400px]",

        // Background - Active is white, others black
        isActive
          ? "bg-white shadow-2xl"
          : "bg-black border border-white/10",

        className
      )}
    >
      {/* Image */}
      <div className={cn(
        "relative w-full",
        isActive ? "h-[55%]" : "h-[50%]"
      )}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center flex-1 p-4 sm:p-5">
        <h3
          className={cn(
            "font-black text-center mb-4 leading-tight",
            isActive
              ? "text-xl sm:text-2xl lg:text-3xl text-black"
              : "text-lg sm:text-xl lg:text-2xl text-white"
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
            "font-bold rounded-[20px] sm:rounded-[25px] transition-all",
            "min-h-[40px] sm:min-h-[44px] lg:min-h-[48px]",
            "px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5",
            "text-sm sm:text-base",
            isActive
              ? "gold-gradient text-white shadow-lg"
              : "bg-white text-black hover:bg-gray-100"
          )}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};
