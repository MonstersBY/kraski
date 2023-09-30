$(document).ready(function () {
  // Раскрывающийся список меню
  $(".vacancy__header").on("click", function () {
    // Ищем ближайший .vacancy__container-requirements и .vacancy__btn внутри родительского .vacancy__block
    let containerRequirements = $(this)
      .closest(".vacancy__block")
      .find(".vacancy__container-requirements");
    let btn = $(this).closest(".vacancy__block").find(".vacancy__btn");

    containerRequirements.slideToggle();
    btn.toggleClass("active");
  });


  $(".btn-empty").on("click", function (e) {
    e.preventDefault();
    $("body").addClass("modalac");
    $(".anketa-modal").addClass("active");
  });
  $(".anketa-form").on("submit", function (e) {
    e.preventDefault();
    $(".anketa-modal-container--first").css("display", "none");
    $(".anketa-modal-container--second").css("display", "block");
  });
  $(".modal-screen, .modal-container--exit, .modal-container-btn--exit").on(
    "click",
    function (e) {
      $("body").removeClass("modalac");
      $(".anketa-modal").removeClass("active");
      $(".anketa-modal-container--first").css("display", "block");
      $(".anketa-modal-container--second").css("display", "none");
    }
  );

  document.getElementById("fileInput").addEventListener("change", function (e) {
    let fileName = e.target.files[0].name;
    alert("Выбран файл: " + fileName);
  });
});
