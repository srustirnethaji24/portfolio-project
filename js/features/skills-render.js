document.addEventListener("DOMContentLoaded", () => {

  const skillsContainer = document.getElementById("skills-container");
  const filterContainer = document.getElementById("skills-filters");

  if (!skillsContainer || !filterContainer || typeof skillsData === "undefined") return;

  let activeCategory = "All";

  // ================= GET CATEGORIES =================
  function getCategories() {
    return ["All", ...new Set(skillsData.map(s => s.category))];
  }

  // ================= RENDER SKILLS =================
  function renderSkills(data) {

    skillsContainer.innerHTML = "";

    if (!data.length) {
      skillsContainer.innerHTML = `
        <p class="text-gray-500 col-span-full text-center">
          No skills found
        </p>
      `;
      return;
    }

    data.forEach(skill => {

      const card = document.createElement("div");

      card.className = `
        p-6 bg-white border border-gray-200 rounded-2xl
        text-center shadow-md hover:shadow-xl
        hover:-translate-y-1 transition duration-300
      `;

      card.innerHTML = `
        <h3 class="font-bold text-lg mb-2 text-gray-800">
          ${skill.name}
        </h3>

        <p class="text-sm text-gray-500">
          ${skill.category}
        </p>
      `;

      skillsContainer.appendChild(card);

    });

  }

  // ================= RENDER FILTERS =================
  function renderFilters() {

    filterContainer.innerHTML = "";

    getCategories().forEach(category => {

      const btn = document.createElement("button");

      btn.textContent = category;

      btn.className = `
        px-4 py-2 rounded-full border text-sm transition
        ${category === activeCategory
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-white text-gray-700 border-gray-300 hover:border-blue-500"
        }
      `;

      btn.addEventListener("click", () => {

        activeCategory = category;

        const filtered =
          category === "All"
            ? skillsData
            : skillsData.filter(s => s.category === category);

        renderSkills(filtered);
        renderFilters(); // re-render to update active state

      });

      filterContainer.appendChild(btn);

    });

  }

  // ================= INIT =================
  renderFilters();
  renderSkills(skillsData);

});
