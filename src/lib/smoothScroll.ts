/**
 * Smoothly scrolls to an element by its ID
 * @param elementId - The ID of the element to scroll to (without #)
 * @param offset - Optional offset from the top (default: 80px for header)
 */
export const smoothScrollTo = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

/**
 * Scrolls to contact section
 */
export const scrollToContact = () => {
  smoothScrollTo("contact");
};
