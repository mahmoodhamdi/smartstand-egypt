"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "gold" | "white" | "black";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "gold", size = "md", children, ...props }, ref) => {
    const baseStyles = "font-bold rounded-button transition-all duration-300 inline-flex items-center justify-center cursor-pointer";

    const variants = {
      gold: "gold-gradient text-white hover:shadow-lg",
      white: "bg-white text-black hover:bg-gray-100",
      black: "bg-black text-white hover:bg-gray-900",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm min-h-[44px]",
      md: "px-5 sm:px-6 py-3 text-sm sm:text-base min-h-[44px]",
      lg: "px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg min-h-[44px]",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
