document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("projects-container");
  const searchInput = document.getElementById("project-search");

  if (!container) return;

  const projects = Array.isArray(window.projectsData)
    ? window.projectsData
    : [];

  function renderProjects(data) {

    container.innerHTML = "";

    if (!data.length) {
      container.innerHTML = `
        <p class="text-center text-gray-500 col-span-full">
          No projects found
        </p>
      `;
      return;
    }

    data.forEach(project => {

      const card = document.createElement("div");

      card.className =
        "bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300";

      card.innerHTML = `
        <h3 class="text-xl font-bold text-gray-800 mb-1">
          ${project.name}
        </h3>

        <p class="text-sm text-blue-600 font-medium mb-2">
          ${project.category}
        </p>

        <p class="text-gray-600 text-sm leading-relaxed mb-4">
          ${project.description}
        </p>

        <div class="flex flex-wrap gap-2 mb-4">
          ${(project.technologies || [])
            .map(tech => `
              <span class="px-3 py-1 text-xs bg-gray-100 border border-gray-200 rounded-full text-gray-700">
                ${tech}
              </span>
            `)
            .join("")}
        </div>

        ${
          project.status
            ? `<span class="text-xs font-semibold px-2 py-1 rounded-full ${
                project.status === "Live"
                  ? "bg-green-100 text-green-600"
                  : "bg-yellow-100 text-yellow-600"
              }">
                ${project.status}
              </span>`
            : ""
        }
      `;

      container.appendChild(card);
    });
  }

  renderProjects(projects);

  if (searchInput) {

    searchInput.addEventListener("input", (e) => {

      const value = e.target.value.toLowerCase().trim();

      const filtered = projects.filter(project =>
        (project.name || "").toLowerCase().includes(value) ||
        (project.category || "").toLowerCase().includes(value) ||
        (project.description || "").toLowerCase().includes(value) ||
        (project.technologies || []).join(" ").toLowerCase().includes(value)
      );

      renderProjects(filtered);
    });
  }

});