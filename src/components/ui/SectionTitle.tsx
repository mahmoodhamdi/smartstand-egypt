import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  variant?: "light" | "dark";
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  variant = "dark",
  className,
}) => {
  const textColor = variant === "dark" ? "text-black" : "text-white";

  return (
    <div className={cn("text-center px-4", className)}>
      <h2 className={cn("font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2", textColor)}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("font-black text-xs sm:text-sm md:text-base", textColor)}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
