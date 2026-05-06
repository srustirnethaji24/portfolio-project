document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");

  function updateThemeButton() {
    if (body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "☀️ Dark";
      toggleBtn.setAttribute("aria-label", "Switch to light mode");
    } else {
      toggleBtn.textContent = "🌙 Light";
      toggleBtn.setAttribute("aria-label", "Switch to dark mode");
    }
  }

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }

  updateThemeButton();

  toggleBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    // Update button text and icon
    updateThemeButton();

    // Save theme
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
