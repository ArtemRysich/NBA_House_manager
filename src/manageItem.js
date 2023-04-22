import * as basicLightbox from 'basiclightbox';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

const loc = document.location;
const searchId = loc.search.slice(4);
const LS_KEY = 'realty-items';
const realtyItems = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];
const currentItem = realtyItems.find(({ id }) => id === searchId);
const container = document.querySelector('.js-container');
createMarkup(currentItem);
function createMarkup({
  type,
  title,
  status,
  rooms,
  price,
  photo,
  details,
  area,
}) {
  container.innerHTML = `<div class='main-manage__body'>
  <div class='main-manage__image'>
    <img src="${photo}" alt="${title}">
  </div>
  <div class='main-manage__text'>
    <h2 class='main-manage__title'>${title}</h2>
    <h3 class='main-manage__desc'>Опис: ${details}</h3>
    <h3 class='main-manage__type'>Тип: ${type}</h3>
    <h3 class='main-manage__rooms'>Кімнат: ${rooms}</h3>
    <h3 class='main-manage__status'>Статус: ${status}</h3>
    <h3 class='main-manage__price'>Ціна: ${price}</h3>
    <h3 class='main-manage__square'>Площа: ${area}</h3>
  <button type="button" class="js-edit main-manage__button">Редагувати об'єкт</button>
  </div> 
</div>`
}

const editBtn = document.querySelector('.js-edit');
editBtn.addEventListener('click', handlerEditMode);

function handlerEditMode() {
  const { title, photo, details, price, area, rooms, type, status } =
    currentItem;
  const instance = basicLightbox.create(`
<form action="submit" class="js-form-realty form-realty form-realty_big">

<div class='form-realty__input-block form-realty__input-block_row'>
  <label for="photo" class='form-realty__label'>Завантажте фото об'єкту</label>
  <label for="photo" class='form-realty__image-btn'></label>
  <input type="file" name="realty-photo" id="photo" accept="image/png, image/jpeg" hidden>
</div>
<div class="js-form-realty__preview form-realty__preview"><img src="${photo}" alt="preview"></div>

<div class='form-realty__input-block'>
<label for="text" class='form-realty__label'>Назва вашого об'єкта</label>
<input type="text" class='form-realty__input' name="realty-title" id="title" value="${title}">
</div>

<div class='form-realty__input-block'>
  <label for="details" class='form-realty__label'>Опис об'єкту</label>
  <textarea type="text" class='form-realty__input' name="realty-details" id="details">${details}</textarea>
</div>

<div class='form-realty__input-block'>
  <label for="rooms" class='form-realty__label'>Кількість кімнат</label>
  <input type="number" class='form-realty__input' min="0" name="realty-rooms"  value="${rooms}" id="rooms">
</div>

<div class='form-realty__input-block'>
  <label for="area" class='form-realty__label'>Площа об'єкту м<sup>2</sup>;</label>
  <input type="number" class='form-realty__input' min="0" name="realty-area" value="${area}" id="area">
</div>

<div class='form-realty__input-block'>
  <label for="price" class='form-realty__label'>Вартість об'єкту</label>
  <input type="number" class='form-realty__input' min="0" name="realty-price"  value="${price}" id="price">
</div>

<div class='form-realty__input-block'>
  <label for="type" class='form-realty__label'>Тип пропозиції</label>
  <select name="realty-type" id="type" class='form-realty__select'>
    <option value="Продаж" ${
      type === 'Продаж' ? 'selected' : ''
    }>Продаж</option>
    <option value="Оренда" ${
      type === 'Оренда' ? 'selected' : ''
    }>Оренда</option>
  </select>
</div>
${getStatus(type, status)}
<button class='form-realty__create'>Зберегти</button>
<button class='form-realty__create'>Відмінити</button>
</form>`);
  instance.show();
}

// const instance = basicLightbox.create(`
// <form action="submit" class="js-form-realty form-realty">

// <div class='form-realty__input-block form-realty__input-block_row'>
//   <label for="photo" class='form-realty__label'>Завантажте фото об'єкту</label>
//   <label for="photo" class='form-realty__image-btn'></label>
//   <input type="file" name="realty-photo" id="photo" accept="image/png, image/jpeg" hidden>
// </div>
// <div class="js-form-realty__preview"><img src="${photo}" alt="preview"></div>

// <div class='form-realty__input-block'>
// <label for="text" class='form-realty__label'>Назва вашого об'єкта</label>
// <input type="text" class='form-realty__input' name="realty-title" id="title" value="${title}">
// </div>

// <div class='form-realty__input-block'>
//   <label for="details" class='form-realty__label'>Опис об'єкту</label>
//   <textarea type="text" class='form-realty__input' name="realty-details" id="details">${details}</textarea>
// </div>

// <div class='form-realty__input-block'>
//   <label for="rooms" class='form-realty__label'>Кількість кімнат</label>
//   <input type="number" class='form-realty__input' min="0" name="realty-rooms"  value="${rooms}" id="rooms">
// </div>

// <div class='form-realty__input-block'>
//   <label for="area" class='form-realty__label'>Площа об'єкту м<sup>2</sup>;</label>
//   <input type="number" class='form-realty__input' min="0" name="realty-area" value="${area}" id="area">
// </div>

// <div class='form-realty__input-block'>
//   <label for="price" class='form-realty__label'>Вартість об'єкту</label>
//   <input type="number" class='form-realty__input' min="0" name="realty-price"  value="${price}" id="price">
// </div>

// <div class='form-realty__input-block'>
//   <label for="type" class='form-realty__label'>Тип пропозиції</label>
//   <select name="realty-type" id="type" class='form-realty__select'>
//     <option value="Продаж" ${
//       type === 'Продаж' ? 'selected' : ''
//     }>Продаж</option>
//     <option value="Оренда" ${
//       type === 'Оренда' ? 'selected' : ''
//     }>Оренда</option>
//   </select>

//   ${getStatus(type, status)}

// </div>
// <button class='form-realty__create'>Зберегти</button>
// <button class='form-realty__create'>Відмінити</button>
// </form>`);
// instance.show();}

function getStatus(type, status) {
  if (type === 'Продаж') {
    return `<div class='form-realty__input-block'>
          <label for="status" class='form-realty__label'>Статус</label>
          <select name="realty-status" id="status" class='form-realty__select'>
              <option value="В продажі" ${
                status === 'В продажі' ? 'selected' : ''
              }>В продажі</option>
              <option value="Продано" ${
                status === 'Продано' ? 'selected' : ''
              }>Продано</option>
          </select>
          </div>`;
  } else {
    return `<div class='form-realty__input-block'>
          <label for="status" class='form-realty__label'>Статус</label>
          <select name="realty-status" id="status" class='form-realty__select'>
              <option value="Вільно" ${
                status === 'Вільно' ? 'selected' : ''
              }>Вільно</option>
              <option value="Здано" ${
                status === 'Здано' ? 'selected' : ''
              }>Здано</option>
          </select>
          </div>`;
  }
}
