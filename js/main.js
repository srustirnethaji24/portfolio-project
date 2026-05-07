document.addEventListener("DOMContentLoaded", () => {

  console.log("🚀 Portfolio Initialized");

  // ================= SAFETY CHECK HELPERS =================
  const safeRun = (fn, name) => {
    try {
      if (typeof fn === "function") {
        fn();
      } else {
        console.warn(`⚠️ ${name} is not defined`);
      }
    } catch (error) {
      console.error(`❌ Error in ${name}:`, error);
    }
  };

  // ================= INITIALIZE FEATURES =================

  // Skills
  safeRun(() => renderFilters(skillsData), "Skills Filters");

  // Theme
  safeRun(initThemeToggle, "Theme Toggle");

  // Typing animation
  safeRun(typeEffect, "Typing Effect");

   //Project search/render
  safeRun(initProjectSearch, "Project Search");

  // Contact validation
  safeRun(initContactValidation, "Contact Validation");

  // Modal (optional if exists)
  safeRun(initModal, "Modal");

});