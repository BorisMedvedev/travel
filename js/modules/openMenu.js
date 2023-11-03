const menu = document.querySelector('.header__menu');
const burger = document.querySelector('.header__menu-button');
const headerLink = document.querySelectorAll('.header__link');


document.addEventListener('click', (e) => {
  if (e.target === burger) {
    menu.classList.toggle('header__menu_active');
  } else if (e.target !== burger || e.target !== menu) {
    menu.classList.remove('header__menu_active');
  }
});

headerLink.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target === element) {
      menu.classList.remove('header__menu_active');
    }
  });
});
