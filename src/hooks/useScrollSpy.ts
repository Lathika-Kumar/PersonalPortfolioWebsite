import { useEffect, useState } from "react";

export function useScrollSpy(selectors: string[], options?: IntersectionObserverInit) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = selectors.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options || { rootMargin: "-30% 0px -70% 0px" }); // Triggers when the section is in the middle-top area of screen

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selectors, options]);

  return activeId;
}
