const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

const navSlide = () => {
  navLinks.classList.add("nav-active");
};

burger.addEventListener("click", navSlide);
