$(document).ready(function () {
  // Раскрывающийся список меню
  $(".mobile-menu__btn").on("click", function () {
    $(".mobile-menu__navigation").slideToggle();
    $(".mobile-menu__navigation").toggleClass("active");
  });
  $(".mobile-menu__close-btn").on("click", function () {
    $(".mobile-menu__navigation").slideToggle();
    $(".mobile-menu__navigation").toggleClass("active");
  });
});
