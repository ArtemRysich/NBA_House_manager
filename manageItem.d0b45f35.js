!function(){var e={};e=function e(t,n,a){function o(l,s){if(!n[l]){if(!t[l]){var i=void 0;if(!s&&i)return i(l,!0);if(r)return r(l,!0);var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[l]={exports:{}};t[l][0].call(u.exports,(function(e){return o(t[l][1][e]||e)}),u,u.exports,e,t,n,a)}return n[l].exports}for(var r=void 0,l=0;l<a.length;l++)o(a[l]);return o}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},o=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},r=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=r,n.create=function(e,t){var n=function(e,t){var n=a('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),r=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return r.appendChild(e)}));var l=o(r,"IMG"),s=o(r,"VIDEO"),i=o(r,"IFRAME");return!0===l&&n.classList.add("basicLightbox--img"),!0===s&&n.classList.add("basicLightbox--video"),!0===i&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(a(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),l=function(e){return!1!==t.onClose(s)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===r(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(s)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&l()}));var s={element:function(){return n},visible:function(){return r(n)},show:function(e){return!1!==t.onShow(s)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(s)}))},close:l};return s}},{}]},{},[1])(1);var t,n=document.location.search.slice(4),a="realty-items",o=null!==(t=JSON.parse(localStorage.getItem(a)))&&void 0!==t?t:[],r=o.find((function(e){return e.id===n})),l=document.querySelector(".js-container"),s=document.querySelector(".js-timer"),i=null;function c(e){var t=e.type,n=e.title,a=e.status,o=e.rooms,r=e.price,s=e.photo,i=e.details,c=e.area;l.innerHTML="<div class='main-manage__body'>\n  <div class='main-manage__image'>\n    <img src=\"".concat(s,'" alt="').concat(n,"\">\n  </div>\n  <div class='main-manage__text'>\n    <h2 class='main-manage__title'>").concat(n,"</h2>\n    <h3 class='main-manage__desc'>Опис: ").concat(i,"</h3>\n    <h3 class='main-manage__type'>Тип: ").concat(t,"</h3>\n    <h3 class='main-manage__rooms'>Кімнат: ").concat(o,"</h3>\n    <h3 class='main-manage__status'>Статус: ").concat(a,"</h3>\n    <h3 class='main-manage__price'>Ціна: ").concat(r,"</h3>\n    <h3 class='main-manage__square'>Площа: ").concat(c,'</h3>\n  <button type="button" class="js-edit main-manage__button">Редагувати об\'єкт</button>\n  </div> \n</div>')}function u(e){e.preventDefault();var t=e.currentTarget.elements,l=t.details,s=t.rooms,u=t.area,d=t.price,f=t.type,v=t.title,p=t.status,_=null;if("Здано"===p.value&&!r.rentTime){var b=new Date,y=b.getMonth();b.setMonth(11!==y?y+1:0),_=b,console.log("tyt",_)}var h={id:n,photo:i,title:v.value,details:l.value,rooms:s.value,area:u.value,price:d.value,type:f.value,status:p.value,rentTime:_};c(h),m(h.rentTime);var g=o.findIndex((function(e){return e.id===n}));o[g]=h,localStorage.setItem(a,JSON.stringify(o)),this.close()}function d(){var e,t,n;e=this.files[0],t=document.querySelector(".js-form-realty__preview"),(n=new FileReader).onload=function(e){i=e.target.result,t.insertAdjacentHTML("beforeend",'<img src="'.concat(i,'" alt="preview">'))},n.readAsDataURL(e)}function m(e){e&&setInterval((function(){var t=new Date(e),l=new Date,i=t-l;if(i<=0){var c=o.findIndex((function(e){return e.id===n})),u=l.getMonth();t.setMonth(11!==u?u+1:0),r.rentTime=t,o[c]=data,localStorage.setItem(a,JSON.stringify(o))}var d=function(e){var t=1e3,n=60*t,a=60*n,o=24*a,r=Math.floor(e/o),l=Math.floor(e%o/a),s=Math.floor(e%o%a/n),i=Math.floor(e%o%a%n/t);return{days:r,hours:l,minutes:s,seconds:i}}(i),m=d.days,f=d.hours,v=d.minutes,p=d.seconds;s.innerHTML='<div class="field">\n    <h2>До отримання оренди залишилось</h2>\n  <span class="value" data-days>'.concat(m,'</span>\n  <span class="label">Днів</span>\n  </div>\n  <div class="field">\n  <span class="value" data-hours>').concat(f,'</span>\n  <span class="label">Годин</span>\n  </div>\n  <div class="field">\n  <span class="value" data-minutes>').concat(v,'</span>\n  <span class="label">Хвилин</span>\n  </div>\n  <div class="field">\n  <span class="value" data-seconds>').concat(p,'</span>\n  <span class="label">Секунд</span>\n  </div>')}),1e3)}c(r),m(r.rentTime),document.querySelector(".js-edit").addEventListener("click",(function(){var t=r.title,n=r.photo,a=r.details,o=r.price,l=r.area,s=r.rooms,c=r.type,m=r.status;i=n;var f=e.create('\n<form action="submit" class="js-form-realty form-realty form-realty_big">\n\n<div class=\'form-realty__input-block form-realty__input-block_row\'>\n  <label for="photo" class=\'form-realty__label\'>Завантажте фото об\'єкту</label>\n  <label for="photo" class=\'form-realty__image-btn\'></label>\n  <input type="file" name="realty-photo" id="photo" accept="image/png, image/jpeg" hidden>\n</div>\n<div class="js-form-realty__preview form-realty__preview"><img src="'.concat(n,'" alt="preview"></div>\n\n<div class=\'form-realty__input-block\'>\n<label for="text" class=\'form-realty__label\'>Назва вашого об\'єкта</label>\n<input type="text" class=\'form-realty__input\' name="realty-title" id="title" value="').concat(t,'">\n</div>\n\n<div class=\'form-realty__input-block\'>\n  <label for="details" class=\'form-realty__label\'>Опис об\'єкту</label>\n  <textarea type="text" class=\'form-realty__input\' name="realty-details" id="details">').concat(a,'</textarea>\n</div>\n\n<div class=\'form-realty__input-block\'>\n  <label for="rooms" class=\'form-realty__label\'>Кількість кімнат</label>\n  <input type="number" class=\'form-realty__input\' min="0" name="realty-rooms"  value="').concat(s,'" id="rooms">\n</div>\n\n<div class=\'form-realty__input-block\'>\n  <label for="area" class=\'form-realty__label\'>Площа об\'єкту м<sup>2</sup>;</label>\n  <input type="number" class=\'form-realty__input\' min="0" name="realty-area" value="').concat(l,'" id="area">\n</div>\n\n<div class=\'form-realty__input-block\'>\n  <label for="price" class=\'form-realty__label\'>Вартість об\'єкту</label>\n  <input type="number" class=\'form-realty__input\' min="0" name="realty-price"  value="').concat(o,'" id="price">\n</div>\n\n<div class=\'form-realty__input-block\'>\n  <label for="type" class=\'form-realty__label\'>Тип пропозиції</label>\n  <select name="realty-type" id="type" class=\'form-realty__select\'>\n    <option value="Продаж" ').concat("Продаж"===c?"selected":"",'>Продаж</option>\n    <option value="Оренда" ').concat("Оренда"===c?"selected":"",">Оренда</option>\n  </select>\n</div>\n").concat(function(e,t){return"Продаж"===e?'<div class=\'form-realty__input-block\'>\n          <label for="status" class=\'form-realty__label\'>Статус</label>\n          <select name="realty-status" id="status" class=\'form-realty__select\'>\n              <option value="В продажі" '.concat("В продажі"===t?"selected":"",'>В продажі</option>\n              <option value="Продано" ').concat("Продано"===t?"selected":"",">Продано</option>\n          </select>\n          </div>"):'<div class=\'form-realty__input-block\'>\n          <label for="status" class=\'form-realty__label\'>Статус</label>\n          <select name="realty-status" id="status" class=\'form-realty__select\'>\n              <option value="Вільно" '.concat("Вільно"===t?"selected":"",'>Вільно</option>\n              <option value="Здано" ').concat("Здано"===t?"selected":"",">Здано</option>\n          </select>\n          </div>")}(c,m),"\n<button class='form-realty__create'>Зберегти</button>\n\n</form>\n<button type=\"button\" class='form-realty__create js-form-realty__close'>Відмінити</button>\n</div>"));f.show();var v=document.querySelector(".js-form-realty"),p=document.querySelector(".js-form-realty__close");v.addEventListener("submit",u.bind(f)),p.addEventListener("click",(function(){return f.close()})),v.photo.addEventListener("change",d)}))}();
//# sourceMappingURL=manageItem.d0b45f35.js.map
