document.addEventListener("DOMContentLoaded", () => {

  const filtersContainer = document.getElementById("skills-filters");

  if (!filtersContainer || typeof skillsData === "undefined") return;

  let activeCategory = "All";

  // ================= GET UNIQUE CATEGORIES =================
  function getCategories(data) {

    const categories = new Set();
    categories.add("All");

    data.forEach(skill => {
      if (skill.category) {
        categories.add(skill.category);
      }
    });

    return Array.from(categories);

  }

  // ================= RENDER FILTERS =================
  function renderFilters(data) {

    filtersContainer.innerHTML = "";

    const categories = getCategories(data);

    categories.forEach(category => {

      const btn = document.createElement("button");

      btn.textContent = category;

      btn.className = `
        px-4 py-2 rounded-full border text-sm transition
        ${category === activeCategory
          ? "bg-pink-500 text-white border-pink-500"
          : "bg-white text-gray-700 border-gray-300 hover:border-pink-400"
        }
      `;

      btn.addEventListener("click", () => {

        activeCategory = category;

        // Re-render filters to update active state
        renderFilters(data);

        // Filter skills
        const filtered =
          category === "All"
            ? data
            : data.filter(skill => skill.category === category);

        renderSkills(filtered);

      });

      filtersContainer.appendChild(btn);

    });

  }

  // Init
  renderFilters(skillsData);

});