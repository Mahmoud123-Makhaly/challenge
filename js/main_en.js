function handleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".nav_bar");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
// owl carousel
$("#owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay: true,

  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: false,
      autoplay: true,
    },
    600: {
      items: 3,
      nav: false,
      dots: false,
      autoplay: true,
    },
    1000: {
      items: 7,
      nav: false,
      loop: true,
      dots: false,
      autoplay: true,
    },
  },
});
$(".testimonials.owl-carousel").owlCarousel({
  loop: true,
  margin: 28,
  responsiveClass: true,
  autoplay: true,

  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: false,
      autoplay: true,
    },
    600: {
      items: 2,
      nav: false,
      dots: false,
      autoplay: true,
    },
    1000: {
      items: 3,
      nav: false,
      loop: true,
      dots: false,
      autoplay: true,
    },
  },
});
// our team owl carousel
$(".team.owl-carousel").owlCarousel({
  loop: true,
  margin: 28,
  responsiveClass: true,
  autoplay: true,

  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: false,
      autoplay: true,
    },
    600: {
      items: 2,
      nav: false,
      dots: false,
      autoplay: true,
    },
    1000: {
      items: 5,
      nav: false,
      loop: true,
      dots: false,
      autoplay: true,
    },
  },
});
// map
$(document).ready(function () {
  var map = L.map("map").setView([51.505, -0.09], 13); // Set initial coordinates and

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map);

  L.marker([51.5, -0.09])
    .addTo(map)
    .bindPopup("Hello, this is a marker!")
    .openPopup();
});
//localization

document
  .getElementById("langSwitchButton")
  .addEventListener("click", function () {
    window.location.href = "index_ar.html";
  });
document
  .getElementById("langSwitchButton")
  .addEventListener("click", function () {
    var currentLang = document.documentElement.lang;

    var newLang = currentLang === "en" ? "ar" : "en";

    document.documentElement.lang = newLang;

    document.body.dir = newLang === "ar" ? "rtl" : "ltr";
  });
