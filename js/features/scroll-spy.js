document.addEventListener("DOMContentLoaded", () => {

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("a[href^='#']");

  if (!sections.length || !navLinks.length) return;

  window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - 150) {
        currentSection = section.getAttribute("id");
      }

    });

    navLinks.forEach((link) => {

      link.classList.remove("active");

      const href = link.getAttribute("href");

      if (href === `#${currentSection}`) {
        link.classList.add("active");
      }

    });

  });

});