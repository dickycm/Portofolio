document.addEventListener("DOMContentLoaded", () => {
  const roles = [
    "Selamat Datang di",
    "Creative UX/UI Designer",
    "Front-End Developer",
  ];

  const typingElement = document.getElementById("typing-text");
  if (!typingElement) return;

  let currentText = "";
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      charIndex--;
      currentText = currentRole.substring(0, charIndex);
    } else {
      charIndex++;
      currentText = currentRole.substring(0, charIndex);
    }

    typingElement.textContent = currentText;

    let delay = isDeleting ? 40 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
      delay = 1200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 300;
    }

    setTimeout(type, delay);
  }

  type();
});

// Deteksi ketika modal ditutup
const modalProjek = document.getElementById('modalProjek');
if (modalProjek) {
  modalProjek.addEventListener('hidden.bs.modal', function () {
    // Hapus backdrop yang tertinggal
    const backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach(b => b.remove());

    // Hapus class overflow dari body jika masih tertinggal
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  });
}
