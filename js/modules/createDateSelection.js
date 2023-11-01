export const createDateSelection = (datas) => {
  const form = document.createElement('form');
  const labelDate = document.createElement('label');
  const selectDate = document.createElement('select');
  const optionDate = document.createElement('option');
  const tourButton = document.createElement('button');
  const labelPeople = document.createElement('label');
  const selectPeople = document.createElement('select');
  const optionPeople = document.createElement('option');

  tourButton.className = 'button tour__button';
  form.className = 'tour__form';
  labelDate.className = 'tour__select-wrapper tour__select-wrapper_date';
  selectDate.name = 'dates';
  selectDate.id = 'tour__date';
  selectDate.className = 'tour__select';
  optionDate.className = 'tour__option';
  optionDate.textContent = 'Выбери дату';
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

  datas.forEach(element => {
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
