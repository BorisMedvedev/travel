const init = async () => {
  const dataModule = await import('./modules/apiTravel.js');
  const dateFormModule = await import('./modules/createDateSelection.js');
  const timerModule = await import('./modules/creareTimerMain.js');
  const data = await dataModule.getDate();
  const timer = timerModule.createTimerMain();
  const heroTextElement = document.querySelector('.hero__text');
  const tourContent = document.querySelector('.tour__content');
  const dateForm = dateFormModule.createDateSelection(data);

  tourContent.append(dateForm);
  heroTextElement.insertAdjacentElement('afterend', timer);
};

init();
