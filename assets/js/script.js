$(function () {
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: ".swiper-pagination",

    // Navigation arrows
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",

    // And if we need scrollbar
    // scrollbar: '.swiper-scrollbar',

    autoplay: 3000,
  });

  var v = document.getElementsByTagName("video")[0];

  v.addEventListener(
    "canplay",
    function () {
      mySwiper.stopAutoplay();
    },
    true
  );

  v.addEventListener(
    "ended",
    function () {
      mySwiper.startAutoplay();
    },
    true
  );
});

burger = document.querySelector(".burger");
burger_wrap = document.querySelector(".burger-wrap");
mobileMenu = document.querySelector(".mobile-menu");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  mobileMenu.classList.toggle("open");
});


