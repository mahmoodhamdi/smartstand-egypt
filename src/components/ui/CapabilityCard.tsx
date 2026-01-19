import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

interface CapabilityCardProps {
  title: string;
  description: string;
  className?: string;
}

export const CapabilityCard: React.FC<CapabilityCardProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-white border-2 border-black rounded-card p-4 sm:p-6 w-full h-auto min-h-[160px] sm:min-h-[180px] lg:h-[215px] flex flex-col card-hover",
        className
      )}
    >
      {/* Title Button */}
      <Button variant="gold" size="md" className="self-center mb-3 sm:mb-4">
        {title}
      </Button>

      {/* Description */}
      <p className="text-black text-center text-xs sm:text-sm lg:text-base font-bold leading-relaxed flex-1">
        {description}
      </p>
    </div>
  );
};
