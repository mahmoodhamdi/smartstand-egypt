"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface UseCarouselOptions {
  itemCount: number;
  initialIndex?: number;
  autoScroll?: boolean;
  autoScrollInterval?: number;
}

export function useCarousel({
  itemCount,
  initialIndex = Math.floor(itemCount / 2),
  autoScroll = false,
  autoScrollInterval = 5000,
}: UseCarouselOptions) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const lastScrollTime = useRef(0);

  // Debounced scroll handler
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;

    // Debounce
    const now = Date.now();
    if (now - lastScrollTime.current < 50) return;
    lastScrollTime.current = now;

    const container = scrollRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    // Get all card elements
    const cards = container.querySelectorAll("[data-carousel-item]");

    cards.forEach((card, index) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  }, [activeIndex]);

  // Scroll to specific index
  const scrollToIndex = useCallback(
    (index: number) => {
      if (!scrollRef.current) return;
      if (index < 0 || index >= itemCount) return;

      setIsUserInteracting(true);
      setActiveIndex(index);

      const container = scrollRef.current;
      const cards = container.querySelectorAll("[data-carousel-item]");
      const targetCard = cards[index] as HTMLElement;

      if (targetCard) {
        const containerWidth = container.offsetWidth;
        const cardOffsetLeft = targetCard.offsetLeft;
        const cardWidth = targetCard.offsetWidth;

        // Calculate scroll position to center the card
        const scrollPosition =
          cardOffsetLeft - containerWidth / 2 + cardWidth / 2;

        container.scrollTo({
          left: Math.max(0, scrollPosition),
          behavior: "smooth",
        });
      }

      // Reset user interaction flag after scroll completes
      setTimeout(() => {
        setIsUserInteracting(false);
      }, 500);
    },
    [itemCount]
  );

  // Navigate to next/previous
  const next = useCallback(() => {
    scrollToIndex((activeIndex + 1) % itemCount);
  }, [activeIndex, itemCount, scrollToIndex]);

  const prev = useCallback(() => {
    scrollToIndex((activeIndex - 1 + itemCount) % itemCount);
  }, [activeIndex, itemCount, scrollToIndex]);

  // Setup scroll listener
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Use requestAnimationFrame for smoother updates
    let rafId: number;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!isUserInteracting) {
          handleScroll();
        }
      });
    };

    container.addEventListener("scroll", onScroll, { passive: true });

    // Handle touch events
    const onTouchStart = () => setIsUserInteracting(true);
    const onTouchEnd = () => {
      setTimeout(() => setIsUserInteracting(false), 100);
    };

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("scroll", onScroll);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
      cancelAnimationFrame(rafId);
    };
  }, [handleScroll, isUserInteracting]);

  // Initial scroll to center
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToIndex(initialIndex);
    }, 100);
    return () => clearTimeout(timer);
  }, [initialIndex, scrollToIndex]);

  // Auto scroll
  useEffect(() => {
    if (!autoScroll || isUserInteracting) return;

    const timer = setInterval(next, autoScrollInterval);
    return () => clearInterval(timer);
  }, [autoScroll, autoScrollInterval, next, isUserInteracting]);

  return {
    scrollRef,
    activeIndex,
    scrollToIndex,
    next,
    prev,
    isUserInteracting,
  };
}
