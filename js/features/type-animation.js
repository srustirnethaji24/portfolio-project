document.addEventListener("DOMContentLoaded", () => {

  const element = document.getElementById("typing-text");

  if (!element) return;

  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Backend Developer",
    "Frontend Developer"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 1200;

  function type() {

    const currentRole = roles[roleIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    element.textContent = currentRole.substring(0, charIndex);

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    // Word complete → pause before deleting
    if (!isDeleting && charIndex === currentRole.length) {
      delay = delayBetweenWords;
      isDeleting = true;
    }

    // Word deleted → move to next word
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(type, delay);
  }

  type();

});