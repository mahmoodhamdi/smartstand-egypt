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
        "bg-white border-2 border-black rounded-card w-[140px] sm:w-[180px] lg:w-[272px] h-[70px] sm:h-[90px] lg:h-[133px] flex items-center justify-center p-2 sm:p-3 lg:p-4",
        className
      )}
    >
      <Image
        src={logo}
        alt={name}
        width={180}
        height={90}
        sizes="(max-width: 640px) 120px, (max-width: 1024px) 150px, 180px"
        className="object-contain w-[100px] sm:w-[130px] lg:w-[180px] h-auto"
        loading="lazy"
      />
    </div>
  );
};
