const travelItems = document.querySelectorAll('.travel__item');
const travelItemTitle = document.querySelectorAll('.travel__item-title');
const textWrapper = document.querySelectorAll('.travel__item-text-wrapper');

let heightWrapper = 0;

textWrapper.forEach(elem => {
  if (heightWrapper < elem.scrollHeight) {
    heightWrapper = elem.scrollHeight;
  }
});

travelItemTitle.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    for (let i = 0; i < travelItems.length; i++) {
      textWrapper[i].style.height = travelItems[i].classList.contains('travel__item_active') ?
      '' : `${heightWrapper}px`;
      if (index === i) {
        travelItems[i].classList.toggle('travel__item_active');
      } else {
        travelItems[i].classList.remove('travel__item_active');
        textWrapper[i].style.height = '';
      }
    }
  });
});
