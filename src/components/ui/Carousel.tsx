"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode[];
  className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({ children, className }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(Math.floor(children.length / 2));

  // Calculate which item is most centered
  const updateActiveIndex = useCallback(() => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const childElement = child as HTMLElement;
      const childCenter = childElement.offsetLeft + childElement.offsetWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  // Listen to scroll events
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      updateActiveIndex();

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Scroll ended
      }, 150);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });

    // Initial position - center the middle item
    const initialTimeout = setTimeout(() => {
      scrollToIndex(Math.floor(children.length / 2));
    }, 100);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
      clearTimeout(initialTimeout);
    };
  }, [updateActiveIndex, children.length]);

  // Scroll to specific index
  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const child = container.children[index] as HTMLElement;

    if (child) {
      const containerCenter = container.offsetWidth / 2;
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const scrollPosition = childCenter - containerCenter;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  // Handle dot click
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    scrollToIndex(index);
  };

  return (
    <div className={cn("relative", className)}>
      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-3 sm:gap-4 lg:gap-6 items-end overflow-x-auto pb-6 px-4 sm:px-6 lg:px-[100px] scrollbar-hide scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ scrollSnapAlign: "center" }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-6 gap-1">
        {children.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span
              className={cn(
                "rounded-full transition-all duration-300 block",
                index === activeIndex
                  ? "w-8 h-3 gold-gradient"
                  : "w-3 h-3 bg-white/50 hover:bg-white/70"
              )}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
};
