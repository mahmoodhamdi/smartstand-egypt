import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PartnerCardProps {
  name: string;
  logo: string;
  className?: string;
}

export const PartnerCard: React.FC<PartnerCardProps> = ({
  name,
  logo,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-white border-2 border-black rounded-card w-[272px] h-[133px] flex items-center justify-center p-4",
        className
      )}
    >
      <Image
        src={logo}
        alt={name}
        width={180}
        height={90}
        className="object-contain"
      />
    </div>
  );
};
