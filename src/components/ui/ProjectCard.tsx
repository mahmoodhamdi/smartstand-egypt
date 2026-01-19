"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  image: string;
  variant?: "main" | "side" | "edge";
  isActive?: boolean;
  className?: string;
}

// Responsive card configurations
const cardConfig = {
  main: {
    container: cn(
      // Mobile → Tablet → Desktop
      "w-[260px] h-[340px]",
      "sm:w-[300px] sm:h-[380px]",
      "md:w-[340px] md:h-[420px]",
      "lg:w-[380px] lg:h-[460px]",
      "xl:w-[400px] xl:h-[480px]"
    ),
    imageHeight: "h-[55%]",
    bg: "bg-white",
    titleColor: "text-black",
    buttonClass: "gold-gradient text-white",
    titleSize: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
  },
  side: {
    container: cn(
      "w-[220px] h-[300px]",
      "sm:w-[250px] sm:h-[340px]",
      "md:w-[280px] md:h-[380px]",
      "lg:w-[300px] lg:h-[400px]",
      "xl:w-[320px] xl:h-[420px]"
    ),
    imageHeight: "h-[55%]",
    bg: "bg-black",
    titleColor: "gold-text-gradient",
    buttonClass: "bg-white text-black hover:bg-gray-100",
    titleSize: "text-lg sm:text-xl md:text-2xl lg:text-[28px]",
  },
  edge: {
    container: cn(
      "w-[180px] h-[260px]",
      "sm:w-[200px] sm:h-[290px]",
      "md:w-[220px] md:h-[320px]",
      "lg:w-[240px] lg:h-[340px]",
      "xl:w-[260px] xl:h-[360px]"
    ),
    imageHeight: "h-[55%]",
    bg: "bg-black",
    titleColor: "gold-text-gradient",
    buttonClass: "bg-white text-black hover:bg-gray-100",
    titleSize: "text-base sm:text-lg md:text-xl lg:text-2xl",
  },
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  variant = "main",
  isActive = false,
  className,
}) => {
  const config = cardConfig[variant];

  const handleClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
      transition={{ duration: 0.3 }}
      className={cn(
        "rounded-[24px] sm:rounded-[28px] lg:rounded-[30px]",
        "flex flex-col overflow-hidden",
        "flex-shrink-0 transition-all duration-300",
        config.container,
        config.bg,
        isActive && "ring-2 ring-[#FBDD97]/50",
        className
      )}
    >
      {/* Image */}
      <div className={cn("relative w-full flex-shrink-0", config.imageHeight)}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 400px"
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center flex-1 p-3 sm:p-4 lg:p-5">
        <h3
          className={cn(
            "font-black text-center mb-2 sm:mb-3 leading-tight",
            config.titleSize,
            config.titleColor
          )}
        >
          {title}
        </h3>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          className={cn(
            "font-bold rounded-[20px] sm:rounded-[25px] transition-all",
            "min-h-[36px] sm:min-h-[40px] lg:min-h-[44px]",
            "px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5",
            "text-xs sm:text-sm lg:text-base",
            config.buttonClass
          )}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};
