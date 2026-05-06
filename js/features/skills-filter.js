const filtersContainer = document.getElementById("skills-filters");

function getCategories(data) {
    const categories = ["All"];

    data.forEach(skill => {
        if (!categories.includes(skill.category)) {
            categories.push(skill.category);
        }
    });

    return categories;
}

function renderFilters(data) {

    if (!filtersContainer) return;

    filtersContainer.innerHTML = ""; // IMPORTANT FIX

    const categories = getCategories(data);

    categories.forEach(category => {

        const btn = document.createElement("button");

        btn.textContent = category;
        btn.className = "md:px-4 md:py-2 bg-yellow-200 rounded hover:bg-green-400 transition";

        btn.addEventListener("click", () => {

            // active state
            document.querySelectorAll("#skills-filters button")
                .forEach(b => b.classList.remove("bg-green-500"));

            btn.classList.add("bg-green-500");

            const filtered =
                category === "All"
                    ? data
                    : data.filter(skill => skill.category === category);

            renderSkills(filtered);
        });

        filtersContainer.appendChild(btn);
    });
}
