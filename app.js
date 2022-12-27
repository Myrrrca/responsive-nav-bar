const burger = document.querySelector(".burger");
const navBurger = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

const navSlide = () => {
  navBurger.classList.toggle("nav-active");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
    }
  });
  burger.classList.toggle("toggle");
};

burger.addEventListener("click", navSlide);
