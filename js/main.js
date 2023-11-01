import {createFormReservation} from './modules/createFormReservation.js';

const init = async () => {
  const dataModule = await import('./modules/apiTravel.js');
  const dateFormModule = await import('./modules/createFormDateSelection.js');
  const timerModule = await import('./modules/creareTimerMain.js');
  const data = await dataModule.getDate();
  const timer = timerModule.createTimerMain();
  const heroTextElement = document.querySelector('.hero__text');
  const tourContent = document.querySelector('.tour__content');
  const dateForm = dateFormModule.createFormDateSelection(data);
  const reservationContainer = document.querySelector('.reservation__container');
  const formReservation = createFormReservation(data);

  reservationContainer.append(formReservation);
  tourContent.append(dateForm);

  heroTextElement.insertAdjacentElement('afterend', timer);
};

init();
