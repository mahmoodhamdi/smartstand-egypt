import React from "react";
import Image from "next/image";
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
    main: "w-[395px] h-[474px]",
    side: "w-[295px] h-[402px]",
    edge: "w-[237px] h-[323px]",
  };

  const bgClasses = {
    main: "bg-white",
    side: "bg-black",
    edge: "bg-black",
  };

  const imageSizes = {
    main: 308,
    side: 260,
    edge: 205,
  };

  return (
    <div
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
            "font-black text-center mb-4",
            variant === "main" ? "text-4xl text-black" : "text-2xl text-white"
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
    </div>
  );
};
