const scrollableLists = document.querySelectorAll('.scrollable-list');
let isDown = false;
let startX;
let scrollLeft;

scrollableLists.forEach((scrollableList) => {
  const list = scrollableList.querySelector('ul');

  scrollableList.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - scrollableList.offsetLeft;
    scrollLeft = scrollableList.scrollLeft;
    scrollableList.style.cursor = 'grabbing';
  });

  scrollableList.addEventListener('mouseleave', () => {
    isDown = false;
    scrollableList.style.cursor = 'grab';
  });

  scrollableList.addEventListener('mouseup', () => {
    isDown = false;
    scrollableList.style.cursor = 'grab';
  });

  scrollableList.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollableList.offsetLeft;
    const walk = (x - startX) * 1;
    scrollableList.scrollLeft = scrollLeft - walk;
  });
});
