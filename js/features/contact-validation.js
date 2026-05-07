function initContactValidation() {

    const form = document.getElementById("contact-form");
    const message = document.getElementById("form-message");

    if (!form || !message) return;

    form.addEventListener("submit", function (e) {

        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();

        // Reset message
        message.textContent = "";
        message.style.color = "red";

        // Basic validation
        if (!name || !email) {
            e.preventDefault();
            message.textContent = "⚠️ Please fill all required fields";
            return;
        }

        if (!email.includes("@")) {
            e.preventDefault();
            message.textContent = "⚠️ Please enter a valid email";
            return;
        }

        // If valid → allow Formspree submission
        message.style.color = "green";
        message.textContent = "Sending message... 🚀";

    });

}

// Initialize
initContactValidation();