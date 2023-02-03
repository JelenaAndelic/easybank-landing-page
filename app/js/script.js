const hamburgerMenu = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const fadeMenu = document.querySelector(".header__menu");

hamburgerMenu.addEventListener("click", function () {
  console.log("open hamburger");
  if (header.classList.contains("open")) {
    // Close Humburger Menu
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeMenu.classList.add("has-fade");
  } else {
    // Open Humburger Menu
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeMenu.classList.remove("has-fade");
  }
});
