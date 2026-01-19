"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, id, name, ...props }, ref) => {
    // Use provided id, or generate from name, or use a fallback
    const textareaId = id || (name ? `textarea-${name}` : undefined);

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-white font-black text-xl md:text-2xl mb-2"
          >
            {label}
          </label>
        )}
        <div className="border-b border-white pb-2">
          <textarea
            ref={ref}
            id={textareaId}
            name={name}
            className={cn(
              "w-full bg-transparent text-white outline-none resize-none placeholder:text-white/50",
              className
            )}
            rows={3}
            aria-required={props.required}
            {...props}
          />
        </div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
