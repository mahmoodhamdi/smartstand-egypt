import React from "react";
import Image from "next/image";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";

export const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 lg:px-[100px] py-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="relative w-[200px] lg:w-[294px] h-[40px] lg:h-[57px]">
          <Image
            src="/images/logo/logo-full.svg"
            alt="Smart Stand Egypt"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <Navigation />
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
};
