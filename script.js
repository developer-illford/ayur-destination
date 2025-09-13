function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuOverlay = document.getElementById("menuOverlay");

  // toggle classes
  mobileMenu.classList.toggle("active");
  menuOverlay.classList.toggle("active");
}

// close when clicking outside
document.getElementById("menuOverlay").addEventListener("click", (e) => {
  const mobileMenu = document.getElementById("mobileMenu");
  if (!mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove("active");
    document.getElementById("menuOverlay").classList.remove("active");
  }
});

// close on scroll
window.addEventListener("scroll", () => {
  document.getElementById("mobileMenu").classList.remove("active");
  document.getElementById("menuOverlay").classList.remove("active");
});

// close on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("mobileMenu").classList.remove("active");
    document.getElementById("menuOverlay").classList.remove("active");
  }
});
