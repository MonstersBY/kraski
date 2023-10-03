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

  $('.order-card__btn-cancel').on( "click", function(e) {
    e.preventDefault();
    $('body').addClass('modalac')
    $('.order-modal').addClass('active')
  });

//   убираем изменить при пустом input
  let $input = $(".form__item-inner input");
  let $button = $(".form__item-inner button");

  // Проверяем, есть ли значение в input при загрузке страницы
  if ($input.val() === "") {
    $button.hide();
  }

  // Следим за изменениями значения в input
  $input.on("input", function() {
    if ($(this).val() === "") {
      $button.hide();
    } else {
      $button.show();
    }
  });


  let lkSwiper = new Swiper('.lk-info__scrollable', {
		slidesPerView: 'auto',
		spaceBetween: `${remToPx(1.5)}rem`,
		navigation: {
			prevEl: '.lk-info__scrollable-prev',
			nextEl: '.lk-info__scrollable-next',
		},

		breakpoints: {
			769: {
				spaceBetween: `${remToPx(1.2)}rem`,
			},
		},
	});

  function remToPx(remValue) {
		// Получаем текущий базовый размер шрифта (font-size) из элемента <html>
		var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

		// Переводим значение из rem в px
		var pxValue = remValue * htmlFontSize;

		// Округляем значение до целых пикселей (по желанию)
		return Math.round(pxValue) + 'px';
	}
});

