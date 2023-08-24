document.addEventListener('DOMContentLoaded', () => {
  let swiper1 = new Swiper('.banner__slider', {
    slidesPerView: 'auto',
    spaceBetween: `${remToPx(2)}rem`,
    navigation: {
      prevEl: '.banner__slider-prev',
      nextEl: '.banner__slider-next',
    },
  });
  let swiper2 = new Swiper('.brands__content', {
    slidesPerView: 'auto',
    spaceBetween: `${remToPx(2)}rem`,
    navigation: {
      prevEl: '.banner__slider-prev',
      nextEl: '.banner__slider-next',
    },
  });
  let swiper3 = new Swiper('.popular__list', {
    slidesPerView: 'auto',
    spaceBetween: `${remToPx(2)}rem`,
    navigation: {
      prevEl: '.popular__nav-prev',
      nextEl: '.popular__nav-next',
    },
  });

  let swiper4 = new Swiper('.repair__list', {
    slidesPerView: 1,
    spaceBetween: `${remToPx(2)}rem`,
    navigation: {
      prevEl: '.repair__nav-prev',
      nextEl: '.repair__nav-next',
    },
    pagination: {
      el: '.repair__list-pagination',
    },
  });
  let swiper5 = new Swiper('.hits__slider', {
    slidesPerView: 'auto',
    spaceBetween: `${remToPx(2)}rem`,
    navigation: {
      prevEl: '.popular__nav-prev',
      nextEl: '.popular__nav-next',
    },
  });
  let swiper6 = new Swiper('.discont__slider', {
    slidesPerView: 'auto',
    spaceBetween: `${remToPx(2)}rem`,
    navigation: {
      prevEl: '.popular__nav-prev',
      nextEl: '.popular__nav-next',
    },
  });
  let swiper7 = new Swiper('.novelties__slider', {
    slidesPerView: 'auto',
    spaceBetween: `${remToPx(2)}rem`,
    navigation: {
      prevEl: '.popular__nav-prev',
      nextEl: '.popular__nav-next',
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
