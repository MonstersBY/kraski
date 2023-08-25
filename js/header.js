document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn-menu');
  const header = document.querySelector('.header');
  const headerOverlay = document.querySelector('.header__menu-overlay');

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    header.classList.toggle('menu-show');
    headerOverlay.classList.toggle('overlay-show')
    document.body.classList.toggle('no-scroll');
    if (!header.classList.contains('menu-show')) {
      header.classList.add('menu-closing');
      setTimeout(() => {
        header.classList.remove('menu-closing');
      }, 490);
    }
  });
});
