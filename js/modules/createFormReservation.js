export const createFormReservation = (data) => {
  const form = document.createElement('form');
  const labelDate = document.createElement('label');
  const selectDate = document.createElement('select');
  const optionDate = document.createElement('option');
  const tourButton = document.createElement('button');
  const labelPeople = document.createElement('label');
  const selectPeople = document.createElement('select');
  const optionPeople = document.createElement('option');

  tourButton.className = 'button reservation__button';
  form.className = 'reservation__form';
  labelDate.className = 'reservation__select-wrapper reservation__select-wrapper_date';
  selectDate.name = 'dates';
  selectDate.id = 'reservation__date';
  selectDate.className = 'reservation__select';
  optionDate.className = 'tour__option';
  optionDate.textContent = 'Дата путешествия';
  tourButton.textContent = 'Узнать цену';
  optionPeople.textContent = 'Количество человек';
  labelPeople.className = 'tour__select-wrapper tour__select-wrapper_people';
  selectPeople.name = 'people';
  selectPeople.id = 'tour__people';
  selectPeople.className = 'tour__select';

  selectPeople.append(optionPeople);
  labelPeople.append(selectPeople);
  selectDate.append(optionDate);
  labelDate.append(selectDate);
  form.append(labelDate, labelPeople, tourButton);

  data.forEach(element => {
    const optionDate = document.createElement('option');
    const optionPeople = document.createElement('option');
    optionDate.className = 'tour__option';
    optionPeople.className = 'tour__option';
    optionDate.textContent = element.date;
    optionPeople.textContent = `${element['min-people']}-${element['max-people']}`;
    selectPeople.append(optionPeople);
    selectDate.append(optionDate);
  });

  return form;
};


{/* <form action="#" class="reservation__form">
  <h2 class="reservation__title">Бронирование тура</h2>
  <div class="reservation__inputs">
    <div class="reservation__selects">
      <label
        class="reservation__select-wrapper reservation__select-wrapper_date">
        <select name="dates" id="reservation__date"
          class="reservation__select">
          <option value="" class="tour__option">Дата путешествия
          </option>
          <option value="4.02 - 18.02"
            class="tour__option reservation__option">4.02 - 18.02
          </option>
          <option value="7.02 - 21.02"
            class="tour__option reservation__option">7.02 - 21.02
          </option>
          <option value="12.02 - 26.02"
            class="tour__option reservation__option">12.02 - 26.02
          </option>
          <option value="20.02 - 6.03"
            class="tour__option reservation__option">20.02 - 6.03
          </option>
        </select>
      </label>
      <label
        class="reservation__select-wrapper reservation__select-wrapper_people">
        <select name="people" id="reservation__people"
          class="reservation__select">
          <option value="" class="tour__option reservation__option">
            Количество человек</option>
          <option value="" class="tour__option reservation__option">1
          </option>
          <option value="" class="tour__option reservation__option">2
          </option>
          <option value="" class="tour__option reservation__option">3
          </option>
          <option value="" class="tour__option reservation__option">4
          </option>
          <option value="" class="tour__option reservation__option">5
          </option>
          <option value="" class="tour__option reservation__option">6
          </option>
        </select>
      </label>
    </div>
  </div>

  <div class="reservation__contacts">

    <div class="reservation__input-wrap">
      <label for="reservation__name"
        class="reservation__label">ФИО</label>
      <input required type="text"
        class="reservation__input reservation__input_name"
        id="reservation__name" placeholder="Введите ваше ФИО">
    </div>

    <div class="reservation__input-wrap">
      <label for="reservation__phone"
        class="reservation__label">Телефон</label>
      <input required type="text" class="reservation__input"
        id="reservation__phone" placeholder="Введите номер телефона">
    </div>
  </div>

  <div class="reservation__bottom">
    <div class="reservation__info">
      <p class="reservation__data">24 ноября - 7 декабря, 4 человека
      </p>
      <p class="reservation__price">459 590₽</p>
    </div>
    <button class="button reservation__button">Забронировать</button>
  </div>
</form> */}
