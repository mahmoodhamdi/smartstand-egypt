"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
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
    bg: "bg-white",
    titleColor: "text-black",
    descColor: "text-black/80",
    buttonClass: "gold-gradient text-white",
    iconWrapper: "gold-gradient",
    titleSize: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
    descSize: "text-xs sm:text-sm",
    iconWrapperSize: "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32",
    iconSize: 60,
  },
  side: {
    container: cn(
      "w-[220px] h-[300px]",
      "sm:w-[250px] sm:h-[340px]",
      "md:w-[280px] md:h-[380px]",
      "lg:w-[300px] lg:h-[400px]",
      "xl:w-[320px] xl:h-[420px]"
    ),
    bg: "bg-black",
    titleColor: "gold-text-gradient",
    descColor: "text-white/80",
    buttonClass: "bg-white text-black hover:bg-gray-100",
    iconWrapper: "gold-gradient",
    titleSize: "text-lg sm:text-xl md:text-2xl lg:text-[28px]",
    descSize: "text-[10px] sm:text-xs md:text-sm",
    iconWrapperSize: "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28",
    iconSize: 50,
  },
  edge: {
    container: cn(
      "w-[180px] h-[260px]",
      "sm:w-[200px] sm:h-[290px]",
      "md:w-[220px] md:h-[320px]",
      "lg:w-[240px] lg:h-[340px]",
      "xl:w-[260px] xl:h-[360px]"
    ),
    bg: "bg-black",
    titleColor: "gold-text-gradient",
    descColor: "text-white/70",
    buttonClass: "bg-white text-black hover:bg-gray-100",
    iconWrapper: "gold-gradient",
    titleSize: "text-base sm:text-lg md:text-xl lg:text-2xl",
    descSize: "text-[9px] sm:text-[10px] md:text-xs",
    iconWrapperSize: "w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24",
    iconSize: 40,
  },
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
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
        "flex flex-col items-center justify-between",
        "pt-5 sm:pt-6 lg:pt-8 pb-4 sm:pb-5 lg:pb-6 px-3 sm:px-4 lg:px-5",
        "flex-shrink-0 transition-all duration-300",
        config.container,
        config.bg,
        isActive && "ring-2 ring-[#FBDD97]/50",
        className
      )}
    >
      {/* Icon Circle */}
      <div
        className={cn(
          "rounded-full flex items-center justify-center flex-shrink-0",
          config.iconWrapperSize,
          config.iconWrapper
        )}
      >
        <Image
          src={icon}
          alt={title}
          width={config.iconSize}
          height={config.iconSize}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3
        className={cn(
          "font-black text-center mt-3 sm:mt-4 leading-tight",
          config.titleSize,
          config.titleColor
        )}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={cn(
          "text-center px-1 sm:px-2 mt-2 flex-1 line-clamp-4",
          config.descSize,
          config.descColor
        )}
      >
        {description}
      </p>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className={cn(
          "font-bold rounded-[20px] sm:rounded-[25px] transition-all mt-3",
          "min-h-[36px] sm:min-h-[40px] lg:min-h-[44px]",
          "px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5",
          "text-xs sm:text-sm lg:text-base",
          config.buttonClass
        )}
      >
        Learn More
      </motion.button>
    </motion.div>
  );
};
