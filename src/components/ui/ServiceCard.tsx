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
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
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
        "flex flex-col items-center",
        "pt-6 sm:pt-8 pb-5 sm:pb-6 px-4 sm:px-5",
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
      {/* Icon */}
      <div
        className={cn(
          "rounded-[16px] sm:rounded-[20px] flex items-center justify-center mb-4 sm:mb-5",
          isActive
            ? "w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28"
            : "w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24",
          // Icon background always gold gradient
          "bg-gradient-to-b from-[#FBF7D3] via-[#906F1E] to-[#FBDD97]"
        )}
      >
        <Image
          src={icon}
          alt={title}
          width={60}
          height={60}
          className="w-2/3 h-2/3 object-contain"
        />
      </div>

      {/* Title */}
      <h3
        className={cn(
          "font-black text-center mb-2 sm:mb-3 leading-tight",
          isActive
            ? "text-xl sm:text-2xl lg:text-3xl text-black"
            : "text-lg sm:text-xl lg:text-2xl",
          !isActive && "bg-gradient-to-b from-[#FEF8C5] via-[#906F1E] to-[#FBDD97] bg-clip-text text-transparent"
        )}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={cn(
          "text-center px-2 flex-1 line-clamp-4",
          isActive
            ? "text-sm sm:text-base text-black/80"
            : "text-xs sm:text-sm text-white/70"
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
          "font-bold rounded-[20px] sm:rounded-[25px] transition-all mt-auto",
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
    </motion.div>
  );
};
