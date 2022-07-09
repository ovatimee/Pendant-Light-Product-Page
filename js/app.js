const btnMenu = document.querySelector(".trigger"),
  menuClass = document.querySelector("nav");

btnMenu.addEventListener("click", () => {
  menuClass.classList.toggle("showmenu");
});

const btnLight = document.querySelector(".t-light"),
  addClass = document.querySelector(".site");
btnLight.addEventListener("click", () => {
  addClass.classList.toggle("turnon");
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    cliackable: true,
  },
  breakpoints: {
    641: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
});
