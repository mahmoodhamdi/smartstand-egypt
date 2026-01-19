import React from "react";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/lib/constants";

export const SocialIcons: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.platform}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-12 md:h-12 transition-transform hover:scale-110"
        >
          <Image
            src={social.icon}
            alt={social.platform}
            width={48}
            height={48}
            className="w-full h-full object-contain"
          />
        </a>
      ))}
    </div>
  );
};
