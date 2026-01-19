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

  const textClasses = {
    main: "text-black",
    side: "text-white",
    edge: "text-white",
  };

  const titleSizes = {
    main: "text-4xl",
    side: "text-3xl",
    edge: "text-2xl",
  };

  const iconSizes = {
    main: 168,
    side: 125,
    edge: 101,
  };

  return (
    <div
      className={cn(
        "rounded-card flex flex-col items-center pt-8 pb-6 px-4",
        sizeClasses[variant],
        bgClasses[variant],
        className
      )}
    >
      {/* Icon Circle */}
      <div
        className="gold-gradient rounded-full flex items-center justify-center mb-6"
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
          "font-black text-center mb-4",
          titleSizes[variant],
          variant === "main" ? "text-black" : "gold-text-gradient"
        )}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={cn(
          "text-center mb-6 px-4",
          variant === "edge" ? "text-xs" : "text-sm",
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
    </div>
  );
};
