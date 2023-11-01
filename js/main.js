import {getDate} from './modules/apiTravel.js';
import {createDateSelection} from './modules/createDateSelection.js';

const init = async () => {
  const data = await getDate();
  const timerModule = await import('./modules/creareTimerMain.js');
  const heroTextElement = document.querySelector('.hero__text');
  const timer = timerModule.createTimerMain();
  const tourContent = document.querySelector('.tour__content');
  const dateForm = createDateSelection(data);

  tourContent.append(dateForm);
  heroTextElement.insertAdjacentElement('afterend', timer);
};

init();
