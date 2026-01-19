"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";

export const Navigation: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <nav className="flex items-center gap-8">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={() => setActiveItem(item.label)}
          className={cn(
            "text-white font-bold text-[15px] transition-all duration-300",
            activeItem === item.label
              ? "gold-gradient px-4 py-1 rounded-button"
              : "hover:opacity-80"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
