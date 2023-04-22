import * as basicLightbox from 'basiclightbox';
import { v4 as uuidv4 } from 'uuid';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';
const addRealtyBtn = document.querySelector('.js-add-realty');
const LS_KEY = 'realty-items';
const realtyItems = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];
const list = document.querySelector('.js-list');
let img = null;

addRealtyBtn.addEventListener('click', onClick);

function onClick() {
  const instance = basicLightbox.create(`
    <form action="submit" class="js-form-realty form-realty">


    <div class='form-realty__input-block form-realty__input-block_row'>
      <label for="photo" class='form-realty__label'>Завантажте фото об'єкту</label>
      <label for="photo" class='form-realty__image-btn'></label>
      <input type="file" name="realty-photo" id="photo" accept="image/png, image/jpeg" hidden>
    </div>
    <div class="js-form-realty__preview"></div>

    <div class='form-realty__input-block'>
    <label for="text" class='form-realty__label'>Назва вашого об'єкта</label>
    <input type="text" class='form-realty__input' name="realty-title" id="title">
    </div>

    <div class='form-realty__input-block'>
      <label for="details" class='form-realty__label'>Опис об'єкту</label>
      <textarea type="text" class='form-realty__input' name="realty-details" id="details"></textarea>
    </div>

    <div class='form-realty__input-block'>
      <label for="rooms" class='form-realty__label'>Кількість кімнат</label>
      <input type="number" class='form-realty__input' min="0" name="realty-rooms" id="rooms">
    </div>

    <div class='form-realty__input-block'>
      <label for="area" class='form-realty__label'>Площа об'єкту м<sup>2</sup>;</label>
      <input type="number" class='form-realty__input' min="0" name="realty-area" id="area">
    </div>

    <div class='form-realty__input-block'>
      <label for="price" class='form-realty__label'>Вартість об'єкту</label>
      <input type="number" class='form-realty__input' min="0" name="realty-price" id="price">
    </div>

    <div class='form-realty__input-block'>
      <label for="type" class='form-realty__label'>Тип пропозиції</label>
      <select name="realty-type" id="type" class='form-realty__select'>
        <option value="Продаж">Продаж</option>
        <option value="Оренда">Оренда</option>
      </select>
    </div>
    <button class='form-realty__create'>Створити об'єкт</button>
  </form>`);

  instance.show();

  const form = document.querySelector('.js-form-realty');
  form.addEventListener('submit', addRealty.bind(instance));
  form.photo.addEventListener('change', onLoad);
}

function onLoad() {
  renderImage(this.files[0]);
}

function renderImage(file) {
  const container = document.querySelector('.js-form-realty__preview');
  const reader = new FileReader();

  reader.onload = function (event) {
    img = event.target.result;
    container.insertAdjacentHTML(
      'beforeend',
      `<img src="${img}" alt="preview">`
    );
  };

  reader.readAsDataURL(file);
}

function addRealty(evt) {
  evt.preventDefault();
  const { title, details, rooms, area, price, type } =
    evt.currentTarget.elements;

  const data = {
    id: uuidv4(),
    title: title.value,
    photo: img,
    details: details.value,
    rooms: rooms.value,
    area: area.value,
    price: price.value,
    type: type.value,
    status: type.value === 'Продаж' ? 'В продажі' : 'Вільно',
  };
  realtyItems.push(data);
  localStorage.setItem(LS_KEY, JSON.stringify(realtyItems));
  this.close();
}

(function () {
  if (!realtyItems.length) {
    return;
  }
  list.insertAdjacentHTML('beforeend', createMarkup(realtyItems));
})();

function createMarkup(arr) {
  return arr
    .map(
      ({ status, id, photo, price, area }) => `
      <li data-id="${id}">
        <img src="${photo}" alt="${price}">
        <h2>${title}</h2>
        <h2>Статус: ${status}</h2>
        <h3>Ціна: ${price} $</h3>
        <h2>Площа: ${area} м<sup>2</sup></h2>
    </li>`
    )
    .join('');
}
