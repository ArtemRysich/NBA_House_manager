import * as basicLightbox from 'basiclightbox';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

const addRealtyBtn = document.querySelector('.js-add-realty');
const LS_KEY = 'realty-items';
const realtyItems = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];
addRealtyBtn.addEventListener('click', onClick);

function onClick() {
  const instance = basicLightbox.create(`
    <form action="submit" class="js-form-realty form-realty">
    <label for="photo">Завантажте фото об'єкту</label>
    <input type="file" name="realty-photo" id="photo" accept="image/png, image/jpeg">

    <label for="details">Опис об'єкту</label>
    <input type="text" name="realty-details" id="details">

    <label for="rooms">Кількість кімнат</label>
    <input type="number" min="0" name="realty-rooms" id="rooms">

    <label for="area">Площа об'єкту м<sup>2</sup>;</label>
    <input type="number" min="0" name="realty-area" id="area">

    <label for="price">Вартість об'єкту</label>
    <input type="number" min="0" name="realty-price" id="price">

    <label for="type">Тип пропозиції</label>
    <select name="realty-type" id="type">
      <option value="Продаж">Продаж</option>
      <option value="Оренда">Оренда</option>
    </select>
    <button>Створити об'єкт</button>
  </form>`);

  instance.show();

  const form = document.querySelector('.js-form-realty');
  form.addEventListener('submit', addRealty)
}

function addRealty(evt) {
  evt.preventDefault();
  const {
    photo,
    details,
    rooms,
    area,
    price,
    type,
  } = evt.currentTarget.elements;
console.log(evt.currentTarget.elements);
console.log(photo,
    details,
    rooms,
    area,
    price,
    type,);
  const data = {
    photo: photo.value,
    details: details.value,
    rooms: rooms.value,
    area: area.value,
    price: price.value,
    type: type.value,
  };
  realtyItems.push(data);
  localStorage.setItem(LS_KEY, JSON.stringify(realtyItems));
}
