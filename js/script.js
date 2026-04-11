const toggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".nav-mobile");

toggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});