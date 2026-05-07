function renderEducation() {

  const container = document.getElementById("education-list");

  // Safety check (prevents runtime crash)
  if (!container || typeof educationsData === "undefined") return;

  container.innerHTML = "";

  educationsData.forEach((edu) => {

    const card = document.createElement("div");
    card.className = "education-card";

    card.innerHTML = `
      <div class="education-header">
        <span class="edu-board">${edu.board}</span>
        <span class="edu-year">${edu.year}</span>
      </div>

      <h3 class="edu-course">${edu.course}</h3>

      <p class="edu-college">${edu.college}</p>

      <p class="edu-percentage">
        ${edu.percentage}
      </p>
    `;

    container.appendChild(card);

  });

}

// Initialize
renderEducation();