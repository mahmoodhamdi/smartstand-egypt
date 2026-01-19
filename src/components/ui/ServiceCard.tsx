"use client";

import React from "react";
import Image from "next/image";
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
  // Mobile-first responsive sizes
  const sizeClasses = {
    main: "w-[280px] sm:w-[320px] md:w-[360px] lg:w-[395px] h-[360px] sm:h-[400px] md:h-[440px] lg:h-[474px]",
    side: "w-[240px] sm:w-[260px] md:w-[280px] lg:w-[295px] h-[320px] sm:h-[350px] md:h-[380px] lg:h-[402px]",
    edge: "w-[200px] sm:w-[210px] md:w-[220px] lg:w-[237px] h-[280px] sm:h-[290px] md:h-[300px] lg:h-[323px]",
  };

  // Main card is white, others are black
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
    edge: "text-lg lg:text-xl",
  };

  // Icon circle sizes
  const iconSizes = {
    main: { wrapper: 140, icon: 77 },
    side: { wrapper: 110, icon: 60 },
    edge: { wrapper: 85, icon: 47 },
  };

  const descSizes = {
    main: "text-sm lg:text-base",
    side: "text-xs lg:text-sm",
    edge: "text-xs",
  };

  return (
    <div
      className={cn(
        "rounded-card flex flex-col items-center justify-between py-6 lg:py-8 px-4 card-hover",
        sizeClasses[variant],
        bgClasses[variant],
        className
      )}
    >
      {/* Icon Circle with Gold Gradient */}
      <div
        className="gold-gradient rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          width: iconSizes[variant].wrapper,
          height: iconSizes[variant].wrapper,
        }}
      >
        <Image
          src={icon}
          alt={title}
          width={iconSizes[variant].icon}
          height={iconSizes[variant].icon}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3
        className={cn(
          "font-black text-center mt-4 lg:mt-6",
          titleSizes[variant],
          variant === "main" ? "text-black" : "gold-text-gradient"
        )}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={cn(
          "text-center mt-2 lg:mt-4 px-2 leading-relaxed",
          descSizes[variant],
          textClasses[variant]
        )}
      >
        {description}
      </p>

      {/* Button */}
      <div className="mt-4 lg:mt-6">
        <Button
          variant={variant === "main" ? "gold" : "white"}
          size={variant === "edge" ? "sm" : "md"}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};
