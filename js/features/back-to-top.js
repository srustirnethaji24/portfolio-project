const backToTopBtn = document.getElementById("back-to-top");

// Safety check (prevents runtime errors)
if (backToTopBtn) {

  // Show / Hide on scroll
  window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
      backToTopBtn.classList.remove("hidden");
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.add("hidden");
      backToTopBtn.classList.remove("visible");
    }

  });

  // Smooth scroll to top
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

}