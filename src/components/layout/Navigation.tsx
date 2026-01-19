"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));

      // Check sections from bottom to top to find the active one
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Section is considered active if its top is within the top 40% of viewport
          if (rect.top <= window.innerHeight * 0.4) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex items-center gap-6 xl:gap-8">
      {NAV_ITEMS.map((item) => {
        const sectionId = item.href.replace("#", "");
        const isActive = activeSection === sectionId;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "font-bold text-[15px] transition-all duration-300",
              isActive
                ? "gold-gradient px-4 py-1 rounded-button text-white"
                : "text-white hover:text-[#FBDD97]"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};
