$(document).ready(function () {
  // При клике на mobile-menu__btn
  $(".mobile-menu__btn").click(function () {
    $("li").slideDown({
      // плавно отображаем элементы <li> в документе
      duration: 800, // продолжительность анимации
      easing: "linear", // скорость анимации
      complete: function () {
        // callback
        $(".status").text("Элементы плавно появились");
      },
      queue: false, // не ставим в очередь
    });
  });
});
