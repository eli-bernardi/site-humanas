const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

document.addEventListener("DOMContentLoaded", () => {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
