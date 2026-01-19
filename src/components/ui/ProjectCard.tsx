"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

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

  const imageSizes = {
    main: 260,
    side: 220,
    edge: 175,
  };

  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
      transition={{ duration: 0.3 }}
      className={cn(
        "rounded-card overflow-hidden flex flex-col",
        sizeClasses[variant],
        bgClasses[variant],
        className
      )}
    >
      {/* Image */}
      <div className="relative w-full" style={{ height: imageSizes[variant] }}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center flex-1 p-4">
        <h3
          className={cn(
            "font-black text-center mb-3 lg:mb-4",
            variant === "main" ? "text-2xl lg:text-4xl text-black" : "text-xl lg:text-2xl text-white"
          )}
        >
          {title}
        </h3>

        <Button
          variant={variant === "main" ? "gold" : "white"}
          size={variant === "edge" ? "sm" : "md"}
        >
          Learn More
        </Button>
      </div>
    </motion.div>
  );
};
