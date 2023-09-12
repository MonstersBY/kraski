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
    pagination: {
      el: '.brands__slider-pagination',
    },
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: `${remToPx(2)}rem`,
        grid: {
          rows: 2,
          fill: 'rows',
        },
      },
      // Медиа-запрос для ширины больше 768px
      769: {
        slidesPerView: 'auto',
        grid: {
          rows: 1,
          fill: 'columns',
        },
      },
    },
  });
  let swiper3 = new Swiper('.popular__list', {
    slidesPerView: 'auto',
    spaceBetween: `${remToPx(2)}rem`,
    navigation: {
      prevEl: '.popular__nav-prev',
      nextEl: '.popular__nav-next',
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: `${remToPx(2)}rem`,
        grid: {
          rows: 2,
          fill: 'rows',
        },
        pagination: {
          el: '.popular-pagination--mob',
          clickable: true,
        },
      },
      // Медиа-запрос для ширины больше 768px
      769: {
        slidesPerView: 4,
        grid: {
          rows: 1,
          fill: 'columns',
        },
      },
    },
  });

  let swiper4 = new Swiper('.repair__list', {
    slidesPerView: 1,
    spaceBetween: `${remToPx(2)}rem`,
    loop: true,
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
      prevEl: '.hits__nav-prev',
      nextEl: '.hits__nav-next',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: `${remToPx(2)}rem`,
        grid: {
          rows: 2,
          fill: 'rows',
        },
        pagination: {
          el: '.popular-pagination--mob',
          clickable: true,
        },
      },
      // Медиа-запрос для ширины больше 768px
      769: {
        slidesPerView: 4,
        grid: {
          rows: 1,
          fill: 'columns',
        },
      },
    },
  });

  let swiper6 = new Swiper('.discont__slider', {
    slidesPerView: 'auto',
    spaceBetween: `${remToPx(2)}rem`,
    navigation: {
      prevEl: '.discont__slider-prev',
      nextEl: '.discont__slider-next',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: `${remToPx(2)}rem`,
        grid: {
          rows: 2,
          fill: 'rows',
        },
        pagination: {
          el: '.popular-pagination--mob',
          clickable: true,
        },
      },
      // Медиа-запрос для ширины больше 768px
      769: {
        slidesPerView: 4,
        grid: {
          rows: 1,
          fill: 'columns',
        },
      },
    },
  });
  let swiper7 = new Swiper('.novelties__slider', {
    slidesPerView: 4,
    spaceBetween: `${remToPx(2)}rem`,
    navigation: {
      prevEl: '.novelties__slider-prev',
      nextEl: '.novelties__slider-next',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: `${remToPx(2)}rem`,
        grid: {
          rows: 2,
          fill: 'rows',
        },
        pagination: {
          el: '.popular-pagination--mob',
          clickable: true,
        },
      },
      // Медиа-запрос для ширины больше 768px
      769: {
        slidesPerView: 4,
        grid: {
          rows: 1,
          fill: 'columns',
        },
      },
    },
  });
  let swiper8 = new Swiper('.shops-swiper', {
    slidesPerView: 1,
    spaceBetween: `${remToPx(1)}rem`,
    breakpoints: {
      769: {
        slidesPerView: 4,
        spaceBetween: `${remToPx(2)}rem`,
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
