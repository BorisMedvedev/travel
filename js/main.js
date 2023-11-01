const init = async () => {
  const dataModule = await import('./modules/apiTravel.js');
  const getDateFormModule = await import('./modules/createFormDateSelection.js');
  const timerModule = await import('./modules/creareTimerMain.js');
  const data = await dataModule.getDate();
  const timer = timerModule.createTimerMain();
  const heroTextElement = document.querySelector('.hero__text');
  const tourContent = document.querySelector('.tour__content');
  const getDateForm = getDateFormModule.createFormDateSelection(data);
  const reservationContainer = document.querySelector('.reservation__container');
  const getFormReservationModule = await import('./modules/createFormReservation.js');
  const getFormReservation = getFormReservationModule.createFormReservation(data);

  reservationContainer.append(getFormReservation);
  tourContent.append(getDateForm);

  heroTextElement.insertAdjacentElement('afterend', timer);
};

init();
