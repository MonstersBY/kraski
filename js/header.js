document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn-menu');
  const header = document.querySelector('.header');
  const headerOverlay = document.querySelector('.header__overlay');
  const btnClose = document.querySelector('.header__overlay-close');
  const btnCloseCatalog = document.querySelector('.header_catalog-top--exit');

  btn.addEventListener('click', () => {
    btn.classList.toggle('opened');
    btn.setAttribute('aria-expanded', btn.classList.contains('opened'));
    btn.classList.toggle('active');
    header.classList.toggle('menu-show');
    headerOverlay.classList.toggle('overlay-show');
    document.body.classList.toggle('no-scroll');
    if (!header.classList.contains('menu-show')) {
      header.classList.add('menu-closing');
      setTimeout(() => {
        header.classList.remove('menu-closing');
      }, 490);
    }
  });

  $('.header__overlay-close, .header_catalog-top--exit').on('click', function(){
    $('.header_catalog').removeClass('active')
    headerOverlay.classList.add('ovelay-closing');
    btnClose.style.display = 'none';
    headerOverlay.style.background = 'transparent';
    document.body.style.overflow = 'hidden';
    btn.style.pointerEvents = 'none';
    setTimeout(() => {
      document.body.style.overflow = 'initial';
      btn.style.pointerEvents = 'auto';

      btnClose.style.display = 'block';
      headerOverlay.style.background = 'rgba(59, 60, 64, 0.4039215686)';

      headerOverlay.classList.remove('ovelay-closing');
      header.classList.remove('menu-show');
      headerOverlay.classList.remove('overlay-show');
      btn.classList.remove('opened', 'active');
    }, 490);
  })

  // btnClose.addEventListener('click', () => {
  //   headerOverlay.classList.add('ovelay-closing');
  //   btnClose.style.display = 'none';
  //   headerOverlay.style.background = 'transparent';
  //   document.body.style.overflow = 'hidden';
  //   btn.style.pointerEvents = 'none';
  //   setTimeout(() => {
  //     document.body.style.overflow = 'initial';
  //     btn.style.pointerEvents = 'auto';

  //     btnClose.style.display = 'block';
  //     headerOverlay.style.background = 'rgba(59, 60, 64, 0.4039215686)';

  //     headerOverlay.classList.remove('ovelay-closing');
  //     header.classList.remove('menu-show');
  //     headerOverlay.classList.remove('overlay-show');
  //     btn.classList.remove('opened', 'active');
  //   }, 490);
  // });

  let lastScroll = 0;
  $(window).scroll(function () {
    var scrollPosition = $(window).scrollTop()

    if(scrollPosition>0) {
      $('.header-fixed').addClass('active')
      $('.header-fixed').parents('.header').children('.header_container').css('margin-top', $('.header-fixed').height())
    } else {
      $('.header-fixed').removeClass('active')
      $('.header-fixed').parents('.header').children('.header_container').css('margin-top', 0)
    }

    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      $('body').removeClass('scrollUp');
      return;
    }
    if (currentScroll > lastScroll && !$('body').hasClass('scrollDown')) {
      // down
      $('body').removeClass('scrollUp');
      $('body').addClass('scrollDown');
    } else if (currentScroll < lastScroll && $('body').hasClass('scrollDown')) {
      // up
      $('body').removeClass('scrollDown');
      $('body').addClass('scrollUp');
    }
    lastScroll = currentScroll;
  })

  $('.header__search .search').on('input', function(){
    if($(this).val()) {
      $('.header-fixed').addClass('searching')
      if (screen.width < 769) {
        $('body').addClass('modalac')
      }
    }
  })
  $('.header__search .search').on( "focus", function() {
    $('.header-fixed').addClass('searching')
    if (screen.width < 769) {
      $('body').addClass('modalac')
    }
  });

  $('.btn-search-back').on('click', function(){
    $('.header__search .search').val('')
    $('.header-fixed').removeClass('searching')
    $('body').removeClass('modalac')
  })

  $('.header__catalog, .header__overlay-item').on('click', function(){
    $(this).toggleClass('active')
    $('.header_catalog').toggleClass('active')
  })
  $('.header_catalog-top--prev').on('click', function(){
    $('.header_catalog').removeClass('active')
  })
  $('.header_catalog-item-top').on('click', function(e){
    if (screen.width < 769) {
      e.preventDefault();
      $(this).parents('.header_catalog-item').toggleClass('active')
    }
  })
  $(document).mouseup(function (e) {
    if (screen.width > 769) {
      var container = $('.header__search');
      var box = $('.header_search');
      if (container.has(e.target).length === 0 && box.has(e.target).length === 0){
        $('.header-fixed').removeClass('searching')
      }

      let hBtn = $('.header__catalog')
      let hBox = $('.header_catalog')
      if(hBtn.has(e.target).length === 0) {
        $('.header__catalog').removeClass('active')
        $('.header_catalog').removeClass('active')
      }
    }
  });
});
