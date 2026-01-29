const openNav = document.getElementById("mobile-button");
const closeNav = document.getElementById("close-mobile-navigation");
const mobileNav = document.getElementById("mobile-navigation");

openNav.addEventListener("click", () => {
  mobileNav.classList.add("active");
});


closeNav.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});


mobileNav.addEventListener("click", (e) => {
  if (e.target === mobileNav) {
    mobileNav.classList.remove("active");
  }
});