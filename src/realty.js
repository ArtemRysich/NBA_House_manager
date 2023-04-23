import * as basicLightbox from 'basiclightbox';
import { v4 as uuidv4 } from 'uuid';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

const addRealtyBtn = document.querySelector('.js-add-realty');
const LS_KEY = 'realty-items';

const realtyItems = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];
const list = document.querySelector('.js-list');
let img = null;
addRealtyBtn.addEventListener('click', onClick);
list.addEventListener('click', cardHandler);
function handlerAddFilter(evt) {
  evt.preventDefault();
  const { filter } = evt.currentTarget.elements;
  const filteredItems = realtyItems.filter(({status}) => status === filter.value);
  list.innerHTML = createMarkup(filteredItems);
}

function handlerRemoveFilter() {
  filter.reset();
  list.innerHTML = createMarkup(realtyItems);
}
function onClick() {
  const instance = basicLightbox.create(`
    <form action="submit" class="js-form-realty form-realty">

    <div class='form-realty__input-block form-realty__input-block_row'>
      <label for="photo" class='form-realty__label'>Завантажте фото об'єкту*</label>
      <label for="photo" class='form-realty__image-btn'></label>
      <input type="file" name="realty-photo" id="photo" accept="image/png, image/jpeg" hidden>
    </div>

    <div class="js-form-realty__preview form-realty__preview"></div>

    <div class='form-realty__input-block'>
    <label for="text" class='form-realty__label'>Назва вашого об'єкта*</label>
    <input type="text" class='form-realty__input' name="realty-title" id="title">
    </div>

    <div class='form-realty__input-block'>
      <label for="details" class='form-realty__label'>Опис об'єкту*</label>
      <textarea class='form-realty__input' name="realty-details" id="details"></textarea>
    </div>

    <div class='form-realty__input-block'>
      <label for="rooms" class='form-realty__label'>Кількість кімнат*</label>
      <input type="number" class='form-realty__input' min="0" name="realty-rooms" id="rooms">
    </div>

    <div class='form-realty__input-block'>
      <label for="area" class='form-realty__label'>Площа об'єкту м<sup>2</sup>*</label>
      <input type="number" class='form-realty__input' min="0" name="realty-area" id="area">
    </div>

    <div class='form-realty__input-block'>
      <label for="price" class='form-realty__label'>Вартість об'єкту*</label>
      <input type="number" class='form-realty__input' min="0" name="realty-price" id="price">
    </div>

    <div class='form-realty__input-block'>
      <label for="type" class='form-realty__label'>Тип пропозиції*</label>
      <select name="realty-type" id="type" class='form-realty__select'>
        <option value="Продаж">Активно</option>
        <option value="Оренда">Продано</option>
        <option value="Оренда">В оренді</option>
        <option value="Оренда">Підготовлено до оренди</option>
        <option value="Оренда">Архівовано</option>
      </select>
    </div>
    <button class='form-realty__create'>Створити об'єкт*</button>
  </form>`, {
    onShow: () => {
      document.body.classList.add('lock');
    },
    onClose: () => {
      document.body.classList.remove('lock');
    }
  });

  instance.show();

  const form = document.querySelector('.js-form-realty');
  form.addEventListener('submit', addRealty.bind(instance));
  form.photo.addEventListener('change', onLoad);
}

function cardHandler(evt) {
  if (!evt.target.closest('.js-realty-item')) {
    return;
  }
  const { id } = evt.target.closest('.js-realty-item').dataset;
  const { title, photo, details, price, area, rooms, type, status } =
    realtyItems.find(({ id: currentId }) => currentId === id);
  const instance = basicLightbox.create(`<div data-id="${id}" class='manage-popup'>
  <div class='manage-popup__image'>
    <img src="${photo}" alt="${title}">
  </div>
  <h2 class='manage-popup__title'>${title}</h2>
  <h3 class='manage-popup__details'>${details}</h3>
  <h3 class='manage-popup__price'>Ціна: ${price} $</h3>
  <h3 class='manage-popup__square>Площа: ${area} м<sup>2</sup></h3>
  <h3 class='manage-popup__numbers'>Кількість кімнат: ${rooms}</h3>
  <h3 class='manage-popup__type'>Тип: ${type}</h3>
  <h3 class='manage-popup__status'>Статус: ${status}</h3>
  <button class="js-realty-info manage-popup__button">Управління об'єктом</button>
  </div>`);
  instance.show();

  const infoBtn = document.querySelector('.js-realty-info');
  infoBtn.addEventListener('click', handlerRedirectMode.bind({ id }));
}

function onLoad() {
  renderImage(this.files[0]);
}

function handlerRedirectMode() {
  window.location.href = './manageItem.html?id=' + this.id;
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
  const { details, rooms, area, price, type, title } =
    evt.currentTarget.elements;

  const data = {
    id: uuidv4(),
    photo: img,
    title: title.value,
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
  list.innerHTML = createMarkup(realtyItems);
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
      ({ status, id, photo, price, area, title, type }) => `
      <li data-id="${id}" class="js-realty-item main-objects__item">
        <div class='main-objects__body'>
          <div class='main-objects__image'>
            <img src="${photo}" alt="${price}">
          </div>
          <div class='main-objects__desc'>
            <h2 class='main-objects__title'>${title}</h2>
            <h3 class='main-objects__price'>Ціна: ${price}$</h3>
            <h3 class='main-objects__square'>Площа: ${area} м<sup>2</sup></h3>
            <h3 class='main-objects__status'>Статус: ${status}</h3>
          </div>
        </div>
    </li>`
    )
    .join('');
}