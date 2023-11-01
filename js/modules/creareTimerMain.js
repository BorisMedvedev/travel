export const createTimerMain = () => {
  const heroTimer = document.createElement('div');
  const timerTitle = document.createElement('p');
  const timerItemDays = document.createElement('div');
  const timerCountDays = document.createElement('span');
  const timerUnitsDays = document.createElement('span');
  const timerItemHours = document.createElement('div');
  const timerCountHours = document.createElement('span');
  const timerUnitsHours = document.createElement('span');
  const timerItemMinutes = document.createElement('div');
  const timerCountMinutes = document.createElement('span');
  const timerUnitsMinutes = document.createElement('span');

  timerItemMinutes.append(timerCountMinutes, timerUnitsMinutes);
  timerItemHours.append(timerCountHours, timerUnitsHours);
  timerItemDays.append(timerCountDays, timerUnitsDays);
  heroTimer.append(timerTitle, timerItemDays, timerItemHours, timerItemMinutes);

  heroTimer.setAttribute('data-timer-deadline', '11/21/2023');

  timerTitle.textContent = 'До конца акции осталось:';

  timerUnitsDays.textContent = 'дней';
  timerUnitsHours.textContent = 'часов';
  timerUnitsMinutes.textContent = 'минут';

  heroTimer.className = 'hero__timer timer';
  timerTitle.className = 'timer__title';
  timerItemDays.className = 'timer__item timer__item_days';
  timerCountDays.className = 'timer__count timer__count_days';
  timerUnitsDays.className = 'timer__units timer__units_days';
  timerItemHours.className = 'timer__item timer__item_hours';
  timerCountHours.className = 'timer__count timer__count_hours';
  timerUnitsHours.className = 'timer__units timer__units_hours';
  timerItemMinutes.className = 'timer__item timer__item_minutes';
  timerCountMinutes.className = 'timer__count timer__count_minutes';
  timerUnitsMinutes.className = 'timer__units timer__units_minutes';


  return heroTimer;
};
