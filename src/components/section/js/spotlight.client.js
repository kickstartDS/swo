export const addSpotlightEffect = () => {
  const initializeSpotlightEffect = () => {
    const sections = document.querySelectorAll(".dsa-section--spotlight");
    sections.forEach((section) => {
      section.addEventListener("mousemove", (event) => {
        const rect = section.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        section.style.setProperty(
          "--dsa-section__spotlight--position-x",
          `${x}px`
        );
        section.style.setProperty(
          "--dsa-section__spotlight--position-y",
          `${y}px`
        );
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeSpotlightEffect);
  } else {
    initializeSpotlightEffect();
  }
};
