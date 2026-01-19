"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { scrollToContact } from "@/lib/smoothScroll";

interface ProjectCardProps {
  title: string;
  image: string;
  variant?: "main" | "side" | "edge";
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  variant = "side",
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

  // Image heights - mobile-first responsive
  const imageSizes = {
    main: "h-[200px] sm:h-[240px] md:h-[280px] lg:h-[308px]",
    side: "h-[180px] sm:h-[200px] md:h-[240px] lg:h-[260px]",
    edge: "h-[150px] sm:h-[160px] md:h-[180px] lg:h-[205px]",
  };

  const titleSizes = {
    main: "text-2xl lg:text-4xl text-black",
    side: "text-xl lg:text-2xl text-white",
    edge: "text-lg lg:text-xl text-white",
  };

  return (
    <div
      className={cn(
        "rounded-card overflow-hidden flex flex-col card-hover",
        sizeClasses[variant],
        bgClasses[variant],
        className
      )}
    >
      {/* Image */}
      <div className={cn("relative w-full flex-shrink-0", imageSizes[variant])}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 395px"
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center flex-1 p-4">
        <h3 className={cn("font-black text-center mb-3 lg:mb-4", titleSizes[variant])}>
          {title}
        </h3>

        <Button
          variant={variant === "main" ? "gold" : "white"}
          size={variant === "edge" ? "sm" : "md"}
          onClick={scrollToContact}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};
