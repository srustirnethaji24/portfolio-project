document.addEventListener("DOMContentLoaded", () => {

  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  if (!toggleBtn) return;

  // ================= THEME INIT =================
  const savedTheme = localStorage.getItem("theme");

  const systemPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const initialTheme =
    savedTheme || (systemPrefersDark ? "dark" : "light");

  if (initialTheme === "dark") {
    body.classList.add("dark-mode");
  }

  // ================= UPDATE BUTTON =================
  function updateButton() {

    const isDark = body.classList.contains("dark-mode");

    toggleBtn.textContent = isDark ? "☀️" : "🌙";

    toggleBtn.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode"
    );

  }

  updateButton();

  // ================= TOGGLE THEME =================
  toggleBtn.addEventListener("click", () => {

    body.classList.toggle("dark-mode");

    const isDark = body.classList.contains("dark-mode");

    localStorage.setItem("theme", isDark ? "dark" : "light");

    updateButton();

  });

});