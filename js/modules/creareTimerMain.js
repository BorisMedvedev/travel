import {formatNumber} from '../utils.js';

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

  heroTimer.setAttribute('data-timer-deadline', '');

  timerTitle.textContent = 'До конца акции осталось:';
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

  const timer = (deadline) => {
    const targetDate = new Date(deadline).getTime();

    const timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
        clearInterval(timerInterval);
        timerTitle.textContent = 'Акция закончилась';
        timerCountDays.textContent = '00';
        timerCountHours.textContent = '00';
        timerCountMinutes.textContent = '00';
        return;
      }

      const formatTime = (time) => (time < 10 ? `0${time}` : time);

      const days = formatTime(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
      const hours = formatTime(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const minutes = formatTime(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)));

      const hoursForms = ['час', 'часа', 'часов'];
      const daysForms = ['день', 'дня', 'дней'];
      const minutesForms = ['минут', 'минута', 'минуты'];

      timerCountDays.textContent = days;
      timerUnitsDays.textContent = formatNumber(days, daysForms);
      timerCountHours.textContent = hours;
      timerUnitsHours.textContent = formatNumber(hours, hoursForms);
      timerCountMinutes.textContent = minutes;
      timerUnitsMinutes.textContent = formatNumber(minutes, minutesForms);
    }, 1000);
  };


  const deadline = '2023/11/7 12:10';
  timer(deadline);


  return heroTimer;
};
