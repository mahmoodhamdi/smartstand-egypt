"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SliderDotsProps {
  total: number;
  active: number;
  className?: string;
}

export const SliderDots: React.FC<SliderDotsProps> = ({
  total,
  active,
  className,
}) => {
  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "h-2 rounded-full transition-all duration-300",
            index === active
              ? "w-8 gold-gradient"
              : "w-2 bg-white/50"
          )}
        />
      ))}
    </div>
  );
};
