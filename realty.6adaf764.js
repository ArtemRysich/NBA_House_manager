var e={};e=function e(t,n,r){function o(i,l){if(!n[i]){if(!t[i]){var s=void 0;if(!l&&s)return s(i,!0);if(a)return a(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[i]={exports:{}};t[i][0].call(u.exports,(function(e){return o(t[i][1][e]||e)}),u,u.exports,e,t,n,r)}return n[i].exports}for(var a=void 0,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},o=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},a=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=a,n.create=function(e,t){var n=function(e,t){var n=r('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),a=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return a.appendChild(e)}));var i=o(a,"IMG"),l=o(a,"VIDEO"),s=o(a,"IFRAME");return!0===i&&n.classList.add("basicLightbox--img"),!0===l&&n.classList.add("basicLightbox--video"),!0===s&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(r(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),i=function(e){return!1!==t.onClose(l)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===a(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(l)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&i()}));var l={element:function(){return n},visible:function(){return a(n)},show:function(e){return!1!==t.onShow(l)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(l)}))},close:i};return l}},{}]},{},[1])(1);var t={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let n;const r=new Uint8Array(16);function o(){if(!n&&(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(r)}const a=[];for(let e=0;e<256;++e)a.push((e+256).toString(16).slice(1));function i(e,t=0){return(a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]).toLowerCase()}var l=function(e,n,r){if(t.randomUUID&&!n&&!e)return t.randomUUID();const a=(e=e||{}).random||(e.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,n){r=r||0;for(let e=0;e<16;++e)n[r+e]=a[e];return n}return i(a)};const s=document.querySelector(".js-add-realty"),c=document.querySelector(".js-filter"),u=document.querySelector(".js-filter-items-remove");var d;const m=null!==(d=JSON.parse(localStorage.getItem("realty-items")))&&void 0!==d?d:[],p=document.querySelector(".js-list");let f=null;function b(){!function(e){const t=document.querySelector(".js-form-realty__preview"),n=new FileReader;n.onload=function(e){f=e.target.result,t.insertAdjacentHTML("beforeend",`<img src="${f}" alt="preview">`)},n.readAsDataURL(e)}(this.files[0])}function y(){window.location.href="./manageItem.html?id="+this.id}function _(e){e.preventDefault(),console.log(document.querySelector(".js-test").value);const{details:t,rooms:n,area:r,price:o,type:a,title:i}=e.currentTarget.elements,s={id:l(),photo:f,title:i.value,details:t.value,rooms:n.value,area:r.value,price:o.value,type:a.value,status:"Продаж"===a.value?"В продажі":"Вільно"};m.push(s),localStorage.setItem("realty-items",JSON.stringify(m)),this.close(),p.innerHTML=v(m)}function v(e){return e.map((({status:e,id:t,photo:n,price:r,area:o,title:a,type:i})=>`\n      <li data-id="${t}" class="js-realty-item main-objects__item">\n        <div class='main-objects__body'>\n          <div class='main-objects__image'>\n            <img src="${n}" alt="${r}">\n          </div>\n          <div class='main-objects__desc'>\n            <h2 class='main-objects__title'>${a}</h2>\n            <h3 class='main-objects__price'>Ціна: ${r}$</h3>\n            <h3 class='main-objects__square'>Площа: ${o} м<sup>2</sup></h3>\n            <h3 class='main-objects__status'>Статус: ${e}</h3>\n          </div>\n        </div>\n    </li>`)).join("")}u.addEventListener("click",(function(){c.reset(),p.innerHTML=v(m)})),c.addEventListener("submit",(function(e){e.preventDefault();const{}=e.currentTarget.elements})),s.addEventListener("click",(function(){const t=e.create('\n    <form action="submit" class="js-form-realty form-realty">\n\n    <div class=\'form-realty__input-block form-realty__input-block_row\'>\n      <label for="photo" class=\'form-realty__label\'>Завантажте фото об\'єкту</label>\n      <label for="photo" class=\'form-realty__image-btn\'></label>\n      <input type="file" name="realty-photo" id="photo" accept="image/png, image/jpeg"  class="js-test"hidden>\n    </div>\n\n    <div class="js-form-realty__preview form-realty__preview"></div>\n\n    <div class=\'form-realty__input-block\'>\n    <label for="text" class=\'form-realty__label\'>Назва вашого об\'єкта</label>\n    <input type="text" class=\'form-realty__input\' name="realty-title" id="title">\n    </div>\n\n    <div class=\'form-realty__input-block\'>\n      <label for="details" class=\'form-realty__label\'>Опис об\'єкту</label>\n      <textarea class=\'form-realty__input\' name="realty-details" id="details"></textarea>\n    </div>\n\n    <div class=\'form-realty__input-block\'>\n      <label for="rooms" class=\'form-realty__label\'>Кількість кімнат</label>\n      <input type="number" class=\'form-realty__input\' min="0" name="realty-rooms" id="rooms">\n    </div>\n\n    <div class=\'form-realty__input-block\'>\n      <label for="area" class=\'form-realty__label\'>Площа об\'єкту м<sup>2</sup>;</label>\n      <input type="number" class=\'form-realty__input\' min="0" name="realty-area" id="area">\n    </div>\n\n    <div class=\'form-realty__input-block\'>\n      <label for="price" class=\'form-realty__label\'>Вартість об\'єкту</label>\n      <input type="number" class=\'form-realty__input\' min="0" name="realty-price" id="price">\n    </div>\n\n    <div class=\'form-realty__input-block\'>\n      <label for="type" class=\'form-realty__label\'>Тип пропозиції</label>\n      <select name="realty-type" id="type" class=\'form-realty__select\'>\n        <option value="Продаж">Продаж</option>\n        <option value="Оренда">Оренда</option>\n      </select>\n    </div>\n    <button class=\'form-realty__create\'>Створити об\'єкт</button>\n  </form>',{onShow:()=>{document.body.classList.add("lock")},onClose:()=>{document.body.classList.remove("lock")}});t.show();const n=document.querySelector(".js-form-realty");n.addEventListener("submit",_.bind(t)),n.photo.addEventListener("change",b)})),p.addEventListener("click",(function(t){if(!t.target.closest(".js-realty-item"))return;const{id:n}=t.target.closest(".js-realty-item").dataset,{title:r,photo:o,details:a,price:i,area:l,rooms:s,type:c,status:u}=m.find((({id:e})=>e===n));e.create(`<div data-id="${n}" class='manage-popup'>\n  <div class='manage-popup__image'>\n    <img src="${o}" alt="${r}">\n  </div>\n  <h2 class='manage-popup__title'>${r}</h2>\n  <h3 class='manage-popup__details'>${a}</h3>\n  <h3 class='manage-popup__price'>Ціна: ${i} $</h3>\n  <h3 class='manage-popup__square>Площа: ${l} м<sup>2</sup></h3>\n  <h3 class='manage-popup__numbers'>Кількість кімнат: ${s}</h3>\n  <h3 class='manage-popup__type'>Тип: ${c}</h3>\n  <h3 class='manage-popup__status'>Статус: ${u}</h3>\n  <button class="js-realty-info manage-popup__button">Управління об'єктом</button>\n  </div>`).show();document.querySelector(".js-realty-info").addEventListener("click",y.bind({id:n}))})),m.length&&p.insertAdjacentHTML("beforeend",v(m));
//# sourceMappingURL=realty.6adaf764.js.map
