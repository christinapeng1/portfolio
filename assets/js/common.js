// Sound effects
// const initializeSoundEffects = () => {
//   const squeak = document.getElementById("squeak-sound");
//   const mouseImg = document.querySelector(".squeaky-mouse");
//   const clickSound = document.getElementById("click-sound");

//   if (mouseImg) {
//     mouseImg.addEventListener("click", () => {
//       squeak.currentTime = 0;
//       squeak.play();
//     });
//   }

//   // Add click sound to all links
//   document.querySelectorAll("a").forEach((link) => {
//     link.addEventListener("click", function (event) {
//       if (clickSound) {
//         clickSound.currentTime = 0;
//         clickSound.play();
//       }
//     });
//   });
// };

// Navigation active state
const initializeNavigation = () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const currentUrl = window.location.href;

  navLinks.forEach((link) => {
    const linkUrl = link.href;
    link.classList.remove("active");

    if (
      linkUrl === currentUrl ||
      (link.pathname === window.location.pathname &&
        link.hash === window.location.hash) ||
      (link.pathname === window.location.pathname && !link.hash)
    ) {
      link.classList.add("active");
    }
  });
};

// Page transitions
const initializePageTransitions = () => {
  const content = document.getElementById("page-content");
  if (!content) return; // Skip if page-content doesn't exist

  // Add slide-in class when page loads
  window.addEventListener("load", () => {
    if (content) {
      content.classList.add("slide-in");
    }
  });

  // Handle back/forward navigation
  window.addEventListener("popstate", () => {
    window.location.reload();
  });

  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Skip if it's a modal-related element, opens in new tab, or is a hash link
      if (
        this.closest("#image-modal") ||
        this.hasAttribute("target") ||
        (href && href.startsWith("#"))
      ) {
        return;
      }

      // Skip if it's an image inside an article
      if (this.closest("article img")) {
        return;
      }

      // Handle navigation
      e.preventDefault();
      if (content) {
        content.classList.remove("slide-in");
        content.classList.add("slide-out");
      }

      window.location.href = href;

    });
  });
};

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // initializeSoundEffects();
  initializeNavigation();
  initializePageTransitions();
});
