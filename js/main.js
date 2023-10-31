const init = async () => {
  const timerModule = await import('./modules/creareTimerMain.js');
  const heroTextElement = document.querySelector('.hero__text');
  const timer = timerModule.createTimerMain();

  heroTextElement.insertAdjacentElement('afterend', timer);
};

init();
