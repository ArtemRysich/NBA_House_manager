var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,a.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);var l=a("9B8F0");async function r(e){const t=localStorage.getItem("Token"),n={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`}},a=await fetch("https://nba-house-manager.herokuapp.com/objrent/create/",n);if(!a.ok)throw new Error("Invalid password");return a.json()}var o=a("8HGhi");const s=document.querySelector(".js-add-realty"),i=[],c=document.querySelector(".js-list"),d=document.querySelector(".js-logout");let u=null;s.addEventListener("click",(function(){const e=l.create('\n    <form action="submit" class="js-form-realty form-realty">\n\n    <div class=\'form-realty__input-block form-realty__input-block_row\'>\n      <label for="photo" class=\'form-realty__label\'>Завантажте фото об\'єкту*</label>\n      <label for="photo" class=\'form-realty__image-btn\'></label>\n      <input type="file" name="realty-photo" id="photo" accept="image/png, image/jpeg" hidden required>\n    </div>\n\n    <div class="js-form-realty__preview form-realty__preview"></div>\n\n    <div class=\'form-realty__input-block\'>\n    <label for="text" class=\'form-realty__label\'>Назва вашого об\'єкта*</label>\n    <input type="text" class=\'form-realty__input\' name="realty-title" id="title" required>\n    </div>\n\n    <div class=\'form-realty__input-block\'>\n      <label for="details" class=\'form-realty__label\'>Опис об\'єкту*</label>\n      <textarea class=\'form-realty__input\' name="realty-details" id="details" required></textarea>\n    </div>\n\n    <div class=\'form-realty__input-block\'>\n      <label for="rooms" class=\'form-realty__label\'>Кількість кімнат*</label>\n      <input type="number" class=\'form-realty__input\' min="0" name="realty-rooms" id="rooms" required>\n    </div>\n\n    <div class=\'form-realty__input-block\'>\n      <label for="area" class=\'form-realty__label\'>Площа об\'єкту м<sup>2</sup>*</label>\n      <input type="number" class=\'form-realty__input\' min="0" name="realty-area" id="area" required>\n    </div>\n\n    <div class=\'form-realty__input-block\'>\n      <label for="price" class=\'form-realty__label\'>Вартість об\'єкту*</label>\n      <input type="number" class=\'form-realty__input\' min="0" name="realty-price" id="price" required>\n    </div>\n\n    <div class=\'form-realty__input-block\'>\n      <label for="type" class=\'form-realty__label\'>Тип пропозиції*</label>\n      <select name="realty-type" id="type" class=\'form-realty__select\' required>\n        <option value="Оренда">Оренда</option>\n        <option value="Продаж">Продаж</option>\n      </select>\n    </div>\n    <button class=\'form-realty__create\'>Створити об\'єкт</button>\n  </form>',{onShow:()=>{document.body.classList.add("lock")},onClose:()=>{document.body.classList.remove("lock")}});e.show();const t=document.querySelector(".js-form-realty");t.addEventListener("submit",f.bind(e)),t.photo.addEventListener("change",m)})),c.addEventListener("click",(function(e){if(!e.target.closest(".js-realty-item"))return;const{id:t}=e.target.closest(".js-realty-item").dataset,{title:n,photo:a,details:r,price:o,area:s,rooms:c,type:d,status:u}=i.find((({id:e})=>e===Number(t)));l.create(`<div data-id="${t}" class='manage-popup'>\n  <div class='manage-popup__image'>\n    <img src="${a}" alt="${n}">\n  </div>\n  <h2 class='manage-popup__title'>${n}</h2>\n  <h3 class='manage-popup__details'>${r}</h3>\n  <h3 class='manage-popup__price'>Ціна: ${o} $</h3>\n  <h3 class='manage-popup__square>Площа: ${s} м<sup>2</sup></h3>\n  <h3 class='manage-popup__numbers'>Кількість кімнат: ${c}</h3>\n  <h3 class='manage-popup__type'>Тип: ${d}</h3>\n  <h3 class='manage-popup__status'>Статус: ${u}</h3>\n  <button class="js-realty-info manage-popup__button">Управління об'єктом</button>\n  </div>`).show();document.querySelector(".js-realty-info").addEventListener("click",_.bind({id:t}))})),d.addEventListener("click",(function(){localStorage.clear(),location.href="./index.html"}));const p=document.querySelector(".js-filter");function m(){!function(e){const t=document.querySelector(".js-form-realty__preview"),n=new FileReader;n.onload=function(e){u=e.target.result,t.innerHTML=`<img src="${u}" alt="preview">`},n.readAsDataURL(e)}(this.files[0])}function _(){window.location.href="./manageItem.html?id="+this.id}function f(e){e.preventDefault();const{details:t,rooms:n,area:a,price:l,type:o,title:s}=e.currentTarget.elements;r({photo:u,title:s.value,details:t.value,rooms:n.value,area:a.value,price:l.value,type:o.value,status:"Продаж"===o.value?"В продажі":"Вільно"}).then((e=>{i.push(e),c.insertAdjacentHTML("beforeend",y(i))})).catch((e=>console.log(e))),this.close()}function y(e){return e.map((({status:e,id:t,photo:n,price:a,area:l,title:r,type:o})=>`\n      <li data-id="${t}" class="js-realty-item main-objects__item">\n        <div class='main-objects__body'>\n          <div class='main-objects__image'>\n            <img src="${n}" alt="${a}">\n          </div>\n          <div class='main-objects__desc'>\n            <h2 class='main-objects__title'>${r}</h2>\n            <h3 class='main-objects__price'>Ціна: ${a}$</h3>\n            <h3 class='main-objects__square'>Площа: ${l} м<sup>2</sup></h3>\n            <h3 class='main-objects__status'>Статус: ${e}</h3>\n          </div>\n        </div>\n    </li>`)).join("")}document.querySelector(".js-filter-items-remove").addEventListener("click",(function(){p.reset(),(0,o.getCollection)().then((e=>{e.length&&c.insertAdjacentHTML("beforeend",y(i))}))})),p.addEventListener("submit",(function(e){e.preventDefault();const{filter:t}=e.currentTarget.elements,n=i.filter((({status:e})=>e===t.value));c.innerHTML=y(n)})),(0,o.getCollection)().then((e=>{e.length&&(i.push(...e),c.insertAdjacentHTML("beforeend",y(i)))}));
//# sourceMappingURL=realty.a243fa7c.js.map