import './modules/acc.js';
import './modules/openMenu.js';
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


  reservationContainer.append(getFormReservation);
  tourContent.append(getDateForm);
  heroTextElement.append(timer.timerTitle, timer.timerItemDays, timer.timerItemHours, timer.timerItemMinutes);
};

init();


