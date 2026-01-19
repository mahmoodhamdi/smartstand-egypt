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
        "bg-white border-2 border-black rounded-card p-6 w-full max-w-[502px] h-[215px] flex flex-col",
        className
      )}
    >
      {/* Title Button */}
      <Button variant="gold" size="md" className="self-center mb-4">
        {title}
      </Button>

      {/* Description */}
      <p className="text-black text-center text-base font-black">
        {description}
      </p>
    </div>
  );
};
