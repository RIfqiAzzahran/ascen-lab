import { useEffect } from "react";

/**
 * Tandai elemen [data-reveal] / [data-reveal-stagger] dengan `.is-visible`
 * saat pertama kali masuk layar — animasinya diatur di index.css.
 */
export default function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      "[data-reveal], [data-reveal-stagger]"
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
