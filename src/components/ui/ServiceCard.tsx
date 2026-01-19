"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
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
        "flex flex-col items-center",
        "p-4 sm:p-5 lg:p-6",
        "flex-shrink-0 cursor-pointer select-none",
        "transition-colors duration-300",

        // Fixed base size - same for all
        "w-[200px] sm:w-[240px] md:w-[260px] lg:w-[280px]",
        "h-[280px] sm:h-[340px] md:h-[380px] lg:h-[400px]",

        // Active: larger
        isActive && "!w-[240px] sm:!w-[280px] md:!w-[320px] lg:!w-[360px]",
        isActive && "!h-[340px] sm:!h-[400px] md:!h-[440px] lg:!h-[480px]",

        // Background
        isActive ? "bg-white shadow-2xl" : "bg-black/90 border border-white/20"
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "rounded-[16px] sm:rounded-[20px] flex items-center justify-center",
          "mb-3 sm:mb-4",
          isActive
            ? "w-16 sm:w-20 md:w-24 lg:w-28 h-16 sm:h-20 md:h-24 lg:h-28"
            : "w-12 sm:w-16 md:w-20 lg:w-24 h-12 sm:h-16 md:h-20 lg:h-24",
          "gold-gradient"
        )}
      >
        <Image
          src={icon}
          alt={title}
          width={60}
          height={60}
          className="w-1/2 h-1/2 object-contain"
        />
      </div>

      {/* Title */}
      <h3
        className={cn(
          "font-black text-center leading-tight mb-2 sm:mb-3",
          isActive
            ? "text-lg sm:text-xl md:text-2xl lg:text-3xl text-black"
            : "text-base sm:text-lg md:text-xl lg:text-2xl gold-text-gradient"
        )}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={cn(
          "text-center flex-1 line-clamp-3 sm:line-clamp-4 px-1",
          isActive
            ? "text-xs sm:text-sm md:text-base text-black/70"
            : "text-[10px] sm:text-xs md:text-sm text-white/60"
        )}
      >
        {description}
      </p>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          e.stopPropagation();
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }}
        className={cn(
          "font-bold rounded-full mt-auto",
          "min-h-[36px] sm:min-h-[40px] md:min-h-[44px]",
          "px-4 sm:px-5 md:px-6",
          "text-xs sm:text-sm md:text-base",
          isActive ? "gold-gradient text-white" : "bg-white text-black"
        )}
      >
        Learn More
      </motion.button>
    </motion.div>
  );
};
