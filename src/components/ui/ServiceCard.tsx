"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  variant?: "main" | "side" | "edge";
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  variant = "main",
  className,
}) => {
  const sizeClasses = {
    main: "w-[300px] lg:w-[395px] h-[400px] lg:h-[474px]",
    side: "w-[260px] lg:w-[295px] h-[350px] lg:h-[402px]",
    edge: "w-[220px] lg:w-[237px] h-[300px] lg:h-[323px]",
  };

  const bgClasses = {
    main: "bg-white",
    side: "bg-black",
    edge: "bg-black",
  };

  const textClasses = {
    main: "text-black",
    side: "text-white",
    edge: "text-white",
  };

  const titleSizes = {
    main: "text-2xl lg:text-4xl",
    side: "text-xl lg:text-3xl",
    edge: "text-lg lg:text-2xl",
  };

  const iconSizes = {
    main: 140,
    side: 105,
    edge: 85,
  };

  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
      transition={{ duration: 0.3 }}
      className={cn(
        "rounded-card flex flex-col items-center pt-6 lg:pt-8 pb-4 lg:pb-6 px-4",
        sizeClasses[variant],
        bgClasses[variant],
        className
      )}
    >
      {/* Icon Circle */}
      <div
        className="gold-gradient rounded-full flex items-center justify-center mb-4 lg:mb-6"
        style={{
          width: iconSizes[variant],
          height: iconSizes[variant],
        }}
      >
        <Image
          src={icon}
          alt={title}
          width={iconSizes[variant] * 0.55}
          height={iconSizes[variant] * 0.55}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3
        className={cn(
          "font-black text-center mb-3 lg:mb-4",
          titleSizes[variant],
          variant === "main" ? "text-black" : "gold-text-gradient"
        )}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={cn(
          "text-center mb-4 lg:mb-6 px-2 lg:px-4 text-xs lg:text-sm",
          textClasses[variant]
        )}
      >
        {description}
      </p>

      {/* Button */}
      <Button
        variant={variant === "main" ? "gold" : "white"}
        size={variant === "edge" ? "sm" : "md"}
        className="mt-auto"
      >
        Learn More
      </Button>
    </motion.div>
  );
};
