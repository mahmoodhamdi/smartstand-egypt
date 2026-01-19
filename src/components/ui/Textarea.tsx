import React from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-white font-black text-xl md:text-2xl mb-2">
            {label}
          </label>
        )}
        <div className="border-b border-white pb-2">
          <textarea
            ref={ref}
            className={cn(
              "w-full bg-transparent text-white outline-none resize-none placeholder:text-white/50",
              className
            )}
            rows={3}
            {...props}
          />
        </div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
