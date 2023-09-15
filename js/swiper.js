$(document).ready(function() {
    function remToPx(remValue) {
        // Получаем текущий базовый размер шрифта (font-size) из элемента <html>
        var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    
        // Переводим значение из rem в px
        var pxValue = remValue * htmlFontSize;
    
        // Округляем значение до целых пикселей (по желанию)
        return Math.round(pxValue) + 'px';
    }
    let catalogSmallSwiper = new Swiper('.catalog-small-swiper', {
        slidesPerView: 'auto',
        spaceBetween: `${remToPx(2)}rem`,
        navigation: {
            prevEl: '.catalog-small-prev-btn',
            nextEl: '.catalog-small-next-btn',
          },
    });
    let catalogBrandSwiper = new Swiper('.catalog__brand-swiper', {
        slidesPerView: 'auto',
        spaceBetween: `${remToPx(1)}rem`,
        navigation: {
            prevEl: '.catalog__brand-prev-btn',
            nextEl: '.catalog__brand-next-btn',
          },
    });

    let recomendationSlider = new Swiper('.recomendation__slider', {
        slidesPerView: 4,
        spaceBetween: `${remToPx(2)}rem`,
        navigation: {
          prevEl: '.recomendation__slider-prev',
          nextEl: '.recomendation__slider-next',
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

    let instrumentsSlider = new Swiper('.instruments__slider', {
        slidesPerView: 4,
        spaceBetween: `${remToPx(2)}rem`,
        navigation: {
          prevEl: '.instruments__slider-prev',
          nextEl: '.instruments__slider-next',
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

    let preparatoryWorkSlider = new Swiper('.preparatory-work__slider', {
        slidesPerView: 4,
        spaceBetween: `${remToPx(2)}rem`,
        navigation: {
          prevEl: '.preparatory-work__slider-prev',
          nextEl: '.preparatory-work__slider-next',
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

    const fast_photo_bottom1 = new Swiper('.fast_photo_bottom1', {
      slidesPerView: 'auto',
      freeMode: true,
      watchSlidesProgress: true,
      spaceBetween: `${remToPx(2)}rem`,
    });

    const fast_photo1 = new Swiper('.fast_photo1', {
      spaceBetween: `${remToPx(2)}rem`,
      thumbs: {
          swiper: fast_photo_bottom1,
      },
    });

    const productPBottom = new Swiper('.product_pictures-bottom-swiper', {
      slidesPerView: 'auto',
      freeMode: true,
      watchSlidesProgress: true,
      spaceBetween: `${remToPx(2)}rem`,
    });

    const productP = new Swiper('.product_pictures-swiper', {
      spaceBetween: `${remToPx(2)}rem`,
      thumbs: {
          swiper: productPBottom,
      },
    });
})