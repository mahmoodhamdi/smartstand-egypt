"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "px-4 sm:px-6 lg:px-[100px] py-4 lg:py-6",
        isScrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg py-3 lg:py-4"
          : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className="relative w-[180px] sm:w-[220px] lg:w-[294px] h-[35px] sm:h-[45px] lg:h-[57px]"
        >
          <Image
            src="/images/logo/logo-full.svg"
            alt="Smart Stand Egypt"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <Navigation />
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </motion.header>
  );
};
