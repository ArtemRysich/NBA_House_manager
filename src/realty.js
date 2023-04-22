import * as basicLightbox from 'basiclightbox';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

const addRealtyBtn = document.querySelector('.js-add-realty');
const LS_KEY = 'realty-items';
const realtyItems = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];
addRealtyBtn.addEventListener('click', onClick);

function onClick() {
  const instance = basicLightbox.create(`
    <form action="submit" class="js-form-realty form-realty">

    <div class='form-realty__input-block form-realty__input-block_row'>
      <label for="photo" class='form-realty__label'>Завантажте фото об'єкту</label>
      <label for="photo" class='form-realty__image-btn'></label>
      <input type="file" name="realty-photo" id="photo" accept="image/png, image/jpeg" hidden>
    </div>
    
    <div class='form-realty__input-block'>
      <label for="details" class='form-realty__label'>Опис об'єкту</label>
      <input type="text" class='form-realty__input' name="realty-details" id="details">
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
