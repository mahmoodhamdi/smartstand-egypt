import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-white font-black text-xl md:text-2xl mb-2">
            {label}
          </label>
        )}
        <div className="border-b border-white pb-2">
          <input
            ref={ref}
            className={cn(
              "w-full bg-transparent text-white outline-none placeholder:text-white/50",
              className
            )}
            {...props}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
