const init = async () => {
  const dataModule = await import('./modules/apiTravel.js');
  const getDateFormModule = await import('./modules/createFormDateSelection.js');
  const timerModule = await import('./modules/creareTimerMain.js');
  const data = await dataModule.getDate();
  const timer = timerModule.createTimerMain();
  const heroTextElement = document.querySelector('[data-timer-deadline]');
  const tourContent = document.querySelector('.tour__content');
  const getDateForm = getDateFormModule.createFormDateSelection(data);
  const reservationContainer = document.querySelector('.reservation__container');
  const getFormReservationModule = await import('./modules/createFormReservation.js');
  const getFormReservation = getFormReservationModule.createFormReservation(data);
  const menu = document.querySelector('.header__menu');
  const burger = document.querySelector('.header__menu-button');
  const headerLink = document.querySelectorAll('.header__link');

  reservationContainer.append(getFormReservation);
  tourContent.append(getDateForm);
  heroTextElement.append(timer.timerTitle, timer.timerItemDays, timer.timerItemHours, timer.timerItemMinutes);

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
};

init();


