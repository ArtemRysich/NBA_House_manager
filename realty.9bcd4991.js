var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);var r=a("9B8F0");var l={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let o;const s=new Uint8Array(16);function i(){if(!o&&(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!o))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(s)}const c=[];for(let e=0;e<256;++e)c.push((e+256).toString(16).slice(1));function d(e,t=0){return(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase()}var u=function(e,t,n){if(l.randomUUID&&!t&&!e)return l.randomUUID();const a=(e=e||{}).random||(e.rng||i)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=a[e];return t}return d(a)};const p=document.querySelector(".js-add-realty");var m;const f=null!==(m=JSON.parse(localStorage.getItem("realty-items")))&&void 0!==m?m:[],_=document.querySelector(".js-list");let y=null;p.addEventListener("click",(function(){const e=r.create('\n    <form action="submit" class="js-form-realty form-realty">\n\n    <div class=\'form-realty__input-block form-realty__input-block_row\'>\n      <label for="photo" class=\'form-realty__label\'>Завантажте фото об\'єкту*</label>\n      <label for="photo" class=\'form-realty__image-btn\'></label>\n      <input type="file" name="realty-photo" id="photo" accept="image/png, image/jpeg" hidden required>\n    </div>\n\n    <div class="js-form-realty__preview form-realty__preview"></div>\n\n    <div class=\'form-realty__input-block\'>\n    <label for="text" class=\'form-realty__label\'>Назва вашого об\'єкта*</label>\n    <input type="text" class=\'form-realty__input\' name="realty-title" id="title" required>\n    </div>\n\n    <div class=\'form-realty__input-block\'>\n      <label for="details" class=\'form-realty__label\'>Опис об\'єкту*</label>\n      <textarea class=\'form-realty__input\' name="realty-details" id="details" required></textarea>\n    </div>\n\n    <div class=\'form-realty__input-block\'>\n      <label for="rooms" class=\'form-realty__label\'>Кількість кімнат*</label>\n      <input type="number" class=\'form-realty__input\' min="0" name="realty-rooms" id="rooms" required>\n    </div>\n\n    <div class=\'form-realty__input-block\'>\n      <label for="area" class=\'form-realty__label\'>Площа об\'єкту м<sup>2</sup>*</label>\n      <input type="number" class=\'form-realty__input\' min="0" name="realty-area" id="area" required>\n    </div>\n\n    <div class=\'form-realty__input-block\'>\n      <label for="price" class=\'form-realty__label\'>Вартість об\'єкту*</label>\n      <input type="number" class=\'form-realty__input\' min="0" name="realty-price" id="price" required>\n    </div>\n\n    <div class=\'form-realty__input-block\'>\n      <label for="type" class=\'form-realty__label\'>Тип пропозиції*</label>\n      <select name="realty-type" id="type" class=\'form-realty__select\' required>\n        <option value="Оренда">Оренда</option>\n        <option value="Продаж">Продаж</option>\n      </select>\n    </div>\n    <button class=\'form-realty__create\'>Створити об\'єкт</button>\n  </form>',{onShow:()=>{document.body.classList.add("lock")},onClose:()=>{document.body.classList.remove("lock")}});e.show();const t=document.querySelector(".js-form-realty");t.addEventListener("submit",g.bind(e)),t.photo.addEventListener("change",v)})),_.addEventListener("click",(function(e){if(!e.target.closest(".js-realty-item"))return;const{id:t}=e.target.closest(".js-realty-item").dataset,{title:n,photo:a,details:l,price:o,area:s,rooms:i,type:c,status:d}=f.find((({id:e})=>e===t));r.create(`<div data-id="${t}" class='manage-popup'>\n  <div class='manage-popup__image'>\n    <img src="${a}" alt="${n}">\n  </div>\n  <h2 class='manage-popup__title'>${n}</h2>\n  <h3 class='manage-popup__details'>${l}</h3>\n  <h3 class='manage-popup__price'>Ціна: ${o} $</h3>\n  <h3 class='manage-popup__square>Площа: ${s} м<sup>2</sup></h3>\n  <h3 class='manage-popup__numbers'>Кількість кімнат: ${i}</h3>\n  <h3 class='manage-popup__type'>Тип: ${c}</h3>\n  <h3 class='manage-popup__status'>Статус: ${d}</h3>\n  <button class="js-realty-info manage-popup__button">Управління об'єктом</button>\n  </div>`).show();document.querySelector(".js-realty-info").addEventListener("click",h.bind({id:t}))}));const b=document.querySelector(".js-filter");function v(){!function(e){const t=document.querySelector(".js-form-realty__preview"),n=new FileReader;n.onload=function(e){y=e.target.result,t.insertAdjacentHTML("beforeend",`<img src="${y}" alt="preview">`)},n.readAsDataURL(e)}(this.files[0])}function h(){window.location.href="./manageItem.html?id="+this.id}function g(e){e.preventDefault();const{details:t,rooms:n,area:a,price:r,type:l,title:o}=e.currentTarget.elements,s={id:u(),photo:y,title:o.value,details:t.value,rooms:n.value,area:a.value,price:r.value,type:l.value,status:"Продаж"===l.value?"В продажі":"Вільно"};f.push(s),localStorage.setItem("realty-items",JSON.stringify(f)),this.close(),_.innerHTML=j(f)}function j(e){return e.map((({status:e,id:t,photo:n,price:a,area:r,title:l,type:o})=>`\n      <li data-id="${t}" class="js-realty-item main-objects__item">\n        <div class='main-objects__body'>\n          <div class='main-objects__image'>\n            <img src="${n}" alt="${a}">\n          </div>\n          <div class='main-objects__desc'>\n            <h2 class='main-objects__title'>${l}</h2>\n            <h3 class='main-objects__price'>Ціна: ${a}$</h3>\n            <h3 class='main-objects__square'>Площа: ${r} м<sup>2</sup></h3>\n            <h3 class='main-objects__status'>Статус: ${e}</h3>\n          </div>\n        </div>\n    </li>`)).join("")}document.querySelector(".js-filter-items-remove").addEventListener("click",(function(){b.reset(),_.innerHTML=j(f)})),b.addEventListener("submit",(function(e){e.preventDefault();const{filter:t}=e.currentTarget.elements,n=f.filter((({status:e})=>e===t.value));_.innerHTML=j(n)})),f.length&&_.insertAdjacentHTML("beforeend",j(f));
//# sourceMappingURL=realty.9bcd4991.js.map
