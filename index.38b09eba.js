var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o),o.register("9B8F0",(function(e,n){e.exports=function e(n,t,o){function i(a,s){if(!t[a]){if(!n[a]){var c=void 0;if(!s&&c)return c(a,!0);if(r)return r(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=t[a]={exports:{}};n[a][0].call(u.exports,(function(e){return i(n[a][1][e]||e)}),u,u.exports,e,n,t,o)}return t[a].exports}for(var r=void 0,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(e,n,t){Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.visible=void 0;var o=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");return t.innerHTML=e.trim(),!0===n?t.children:t.firstChild},i=function(e,n){var t=e.children;return 1===t.length&&t[0].tagName===n},r=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};t.visible=r,t.create=function(e,n){var t=function(e,n){var t=o('\n\t\t<div class="basicLightbox '.concat(n.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),r=t.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return r.appendChild(e)}));var a=i(r,"IMG"),s=i(r,"VIDEO"),c=i(r,"IFRAME");return!0===a&&t.classList.add("basicLightbox--img"),!0===s&&t.classList.add("basicLightbox--video"),!0===c&&t.classList.add("basicLightbox--iframe"),t}(e=function(e){var n="string"==typeof e,t=e instanceof HTMLElement==1;if(!1===n&&!1===t)throw new Error("Content must be a DOM element/node or string");return!0===n?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(n)),a=function(e){return!1!==n.onClose(s)&&function(e,n){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===r(e)||e.parentElement.removeChild(e),n()}),410),!0}(t,(function(){if("function"==typeof e)return e(s)}))};!0===n.closable&&t.addEventListener("click",(function(e){e.target===t&&a()}));var s={element:function(){return t},visible:function(){return r(t)},show:function(e){return!1!==n.onShow(s)&&function(e,n){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),n()}))}),10),!0}(t,(function(){if("function"==typeof e)return e(s)}))},close:a};return s}},{}]},{},[1])(1)})),o.register("8HGhi",(function(e,n){var t,o,i,r;async function a(){const e={method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("Token")}`}},n=await fetch("https://nba-house-manager.herokuapp.com/objrent/all/",e);if(!n.ok)throw new Error("Invalid password");return n.json()}t=e.exports,o="getCollection",i=function(){return a},Object.defineProperty(t,o,{get:i,set:r,enumerable:!0,configurable:!0})}));var i=o("9B8F0"),r=o("8HGhi");const a=document.querySelector(".notification");function s(){let e="";return notificationMessages.forEach((n=>{e+=`\n        <li class='notification-popup__item ${(null==n?void 0:n.read)?"":"read"}' data-id='${null==n?void 0:n.id}'>\n            <h2 class='notification-popup__title'>Увага</h2>\n            <div class='notification-popup__description'>Залишилося менше 3-x днів до зняття орендної плати в будинку <strong>${null==n?void 0:n.title}!</strong></div>\n        </li>`})),e}(0,r.getCollection)().then((e=>{const n=[];if(e)for(let t=0;t<e.length;t++){const o=e[t];if(o.rentTime){const e=new Date;let t=parseInt(o.rentTime.slice(8,10)),i=parseInt(o.rentTime.slice(5,7)),r=e.getDate(),a=e.getMonth();i<a&&(o.read=!1,n.push(o)),t-3>r&&(i===a||i<a)&&(o.read=!1,n.push(o))}}const t=document.querySelector(".notification__numbers");n.length?(t.style.display="",t.innerHTML=n.length):t.style.display="none",a.addEventListener("click",(()=>{if(n.length){i.create(`\n              <div class='notification-popup notification-popup'>\n                  <ul class='notification-popup__list'>\n                      ${s()}\n                  </ul>\n              </div>\n          `).show();document.querySelector(".notification-popup__list").addEventListener("click",(e=>{const n=e.target.closest(".notification-popup__item");if(n){n.classList.remove("read"),n.remove();n.dataset.id;let e=parseInt(t.innerHTML);e>=1&&(e--,t.innerHTML=e),0===e&&(t.style.display="none")}}))}}))}));
//# sourceMappingURL=index.38b09eba.js.map
