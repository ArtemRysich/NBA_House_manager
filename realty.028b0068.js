!function(){var e={};e=function e(t,n,a){function o(i,l){if(!n[i]){if(!t[i]){var s=void 0;if(!l&&s)return s(i,!0);if(r)return r(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[i]={exports:{}};t[i][0].call(u.exports,(function(e){return o(t[i][1][e]||e)}),u,u.exports,e,t,n,a)}return n[i].exports}for(var r=void 0,i=0;i<a.length;i++)o(a[i]);return o}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},o=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},r=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=r,n.create=function(e,t){var n=function(e,t){var n=a('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),r=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return r.appendChild(e)}));var i=o(r,"IMG"),l=o(r,"VIDEO"),s=o(r,"IFRAME");return!0===i&&n.classList.add("basicLightbox--img"),!0===l&&n.classList.add("basicLightbox--video"),!0===s&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(a(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),i=function(e){return!1!==t.onClose(l)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===r(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(l)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&i()}));var l={element:function(){return n},visible:function(){return r(n)},show:function(e){return!1!==t.onShow(l)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(l)}))},close:i};return l}},{}]},{},[1])(1);var t,n={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},a=new Uint8Array(16);function o(){if(!t&&!(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(a)}for(var r=[],i=0;i<256;++i)r.push((i+256).toString(16).slice(1));function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}var s,c=function(e,t,a){if(n.randomUUID&&!t&&!e)return n.randomUUID();var r=(e=e||{}).random||(e.rng||o)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){a=a||0;for(var i=0;i<16;++i)t[a+i]=r[i];return t}return l(r)},u=document.querySelector(".js-add-realty"),d="realty-items",m=null!==(s=JSON.parse(localStorage.getItem(d)))&&void 0!==s?s:[],p=document.querySelector(".js-list"),f=null;function b(){var e,t,n;e=this.files[0],t=document.querySelector(".js-form-realty__preview"),(n=new FileReader).onload=function(e){f=e.target.result,t.insertAdjacentHTML("beforeend",'<img src="'.concat(f,'" alt="preview">'))},n.readAsDataURL(e)}function v(){window.location.href="./manageItem.html?id="+this.id}function y(e){e.preventDefault();var t=e.currentTarget.elements,n=t.details,a=t.rooms,o=t.area,r=t.price,i=t.type,l=t.title,s={id:c(),photo:f,title:l.value,details:n.value,rooms:a.value,area:o.value,price:r.value,type:i.value,status:"Продаж"===i.value?"В продажі":"Вільно"};m.push(s),localStorage.setItem(d,JSON.stringify(m)),this.close(),p.innerHTML=_(m)}function _(e){return e.map((function(e){var t=e.status,n=e.id,a=e.photo,o=e.price,r=e.area,i=e.title;e.type;return'\n      <li data-id="'.concat(n,"\" class=\"js-realty-item main-objects__item\">\n        <div class='main-objects__body'>\n          <div class='main-objects__image'>\n            <img src=\"").concat(a,'" alt="').concat(o,"\">\n          </div>\n          <div class='main-objects__desc'>\n            <h2 class='main-objects__title'>").concat(i,"</h2>\n            <h3 class='main-objects__price'>Ціна: ").concat(o,"$</h3>\n            <h3 class='main-objects__square'>Площа: ").concat(r," м<sup>2</sup></h3>\n            <h3 class='main-objects__status'>Статус: ").concat(t,"</h3>\n          </div>\n        </div>\n    </li>")})).join("")}u.addEventListener("click",(function(){var t=e.create('\n    <form action="submit" class="js-form-realty form-realty">\n\n    <div class=\'form-realty__input-block form-realty__input-block_row\'>\n      <label for="photo" class=\'form-realty__label\'>Завантажте фото об\'єкту</label>\n      <label for="photo" class=\'form-realty__image-btn\'></label>\n      <input type="file" name="realty-photo" id="photo" accept="image/png, image/jpeg" hidden>\n    </div>\n\n    <div class="js-form-realty__preview form-realty__preview"></div>\n\n    <div class=\'form-realty__input-block\'>\n    <label for="text" class=\'form-realty__label\'>Назва вашого об\'єкта</label>\n    <input type="text" class=\'form-realty__input\' name="realty-title" id="title">\n    </div>\n\n    <div class=\'form-realty__input-block\'>\n      <label for="details" class=\'form-realty__label\'>Опис об\'єкту</label>\n      <textarea class=\'form-realty__input\' name="realty-details" id="details"></textarea>\n    </div>\n\n    <div class=\'form-realty__input-block\'>\n      <label for="rooms" class=\'form-realty__label\'>Кількість кімнат</label>\n      <input type="number" class=\'form-realty__input\' min="0" name="realty-rooms" id="rooms">\n    </div>\n\n    <div class=\'form-realty__input-block\'>\n      <label for="area" class=\'form-realty__label\'>Площа об\'єкту м<sup>2</sup>;</label>\n      <input type="number" class=\'form-realty__input\' min="0" name="realty-area" id="area">\n    </div>\n\n    <div class=\'form-realty__input-block\'>\n      <label for="price" class=\'form-realty__label\'>Вартість об\'єкту</label>\n      <input type="number" class=\'form-realty__input\' min="0" name="realty-price" id="price">\n    </div>\n\n    <div class=\'form-realty__input-block\'>\n      <label for="type" class=\'form-realty__label\'>Тип пропозиції</label>\n      <select name="realty-type" id="type" class=\'form-realty__select\'>\n        <option value="Продаж">Продаж</option>\n        <option value="Оренда">Оренда</option>\n      </select>\n    </div>\n    <button class=\'form-realty__create\'>Створити об\'єкт</button>\n  </form>',{onShow:function(){document.body.classList.add("lock")},onClose:function(){document.body.classList.remove("lock")}});t.show();var n=document.querySelector(".js-form-realty");n.addEventListener("submit",y.bind(t)),n.photo.addEventListener("change",b)})),p.addEventListener("click",(function(t){if(!t.target.closest(".js-realty-item"))return;var n=t.target.closest(".js-realty-item").dataset.id,a=m.find((function(e){return e.id===n})),o=a.title,r=a.photo,i=a.details,l=a.price,s=a.area,c=a.rooms,u=a.type,d=a.status;e.create('<div data-id="'.concat(n,"\" class='manage-popup'>\n  <div class='manage-popup__image'>\n    <img src=\"").concat(r,'" alt="').concat(o,"\">\n  </div>\n  <h2 class='manage-popup__title'>").concat(o,"</h2>\n  <h3 class='manage-popup__details'>").concat(i,"</h3>\n  <h3 class='manage-popup__price'>Ціна: ").concat(l," $</h3>\n  <h3 class='manage-popup__square>Площа: ").concat(s," м<sup>2</sup></h3>\n  <h3 class='manage-popup__numbers'>Кількість кімнат: ").concat(c,"</h3>\n  <h3 class='manage-popup__type'>Тип: ").concat(u,"</h3>\n  <h3 class='manage-popup__status'>Статус: ").concat(d,'</h3>\n  <button class="js-realty-info manage-popup__button">Управління об\'єктом</button>\n  </div>')).show(),document.querySelector(".js-realty-info").addEventListener("click",v.bind({id:n}))})),m.length&&p.insertAdjacentHTML("beforeend",_(m))}();
//# sourceMappingURL=realty.028b0068.js.map
