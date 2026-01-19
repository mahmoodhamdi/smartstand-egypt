"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, id, name, ...props }, ref) => {
    // Use provided id, or generate from name, or use a fallback
    const inputId = id || (name ? `input-${name}` : undefined);

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-white font-black text-xl md:text-2xl mb-2"
          >
            {label}
          </label>
        )}
        <div className="border-b border-white pb-2">
          <input
            ref={ref}
            id={inputId}
            name={name}
            className={cn(
              "w-full bg-transparent text-white outline-none placeholder:text-white/50",
              className
            )}
            aria-required={props.required}
            {...props}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
