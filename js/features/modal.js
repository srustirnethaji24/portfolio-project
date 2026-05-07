document.addEventListener("DOMContentLoaded", () => {

  const openBtn = document.getElementById("modal-trigger");
  const modal = document.getElementById("contact-modal");
  const closeBtn = document.getElementById("modal-close");
  const cancelBtn = document.getElementById("form-cancel");

  if (!openBtn || !modal) return;

  const openModal = () => {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // prevent background scroll
  };

  const closeModal = () => {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  };

  // OPEN
  openBtn.addEventListener("click", openModal);

  // CLOSE buttons
  closeBtn?.addEventListener("click", closeModal);
  cancelBtn?.addEventListener("click", closeModal);

  // CLOSE outside click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // ESC key support (important UX upgrade)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

});