var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var s=t("9B8F0");async function r(e){const n={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}},o=await fetch("https://nba-house-manager.herokuapp.com/login",n);if(!o.ok)throw new Error("Invalid password");return o.json()}async function a(e){const n={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}},o=await fetch("https://nba-house-manager.herokuapp.com/users/create/",n);if(!o.ok)throw new Error("Invalid password");return o.json()}const l=document.querySelector(".js-show-signUp"),c=document.querySelector(".js-show-signIn");function i(e){e.preventDefault();const{email:{value:n},password:{value:o}}=e.currentTarget.elements;a({username:n,password:o}).then((e=>console.log(e))).catch((e=>console.log(e)))}function u(e){e.preventDefault(),console.log(e.currentTarget.elements);const{email:{value:n},password:{value:o}}=e.currentTarget.elements;r({username:n,password:o}).then((e=>localStorage.setItem("Token",e.token))).catch((e=>console.log(e)))}l.addEventListener("click",(function(){s.create('\n  <form class="js-signIn signIn">\n    <input type="email" name="email" class=\'signIn__input\' placeholder="Введіть емейл" />\n    <input type="password" class=\'signIn__input\' name="password" placeholder="Введіть пароль" />\n    <button class=\'signIn__button\'>Зареєструватись</button>\n  </form>\n    ').show();document.querySelector(".js-signIn").addEventListener("submit",i)})),c.addEventListener("click",(function(){s.create('\n    <form class="js-logIn logIn">\n    <input type="email" name="email" class=\'logIn__input\' placeholder="Введіть емейл..." />\n    <input type="password" name="password" class=\'logIn__input\' placeholder="Введіть пароль..." />\n    <button class=\'logIn__button\'>Увійти</button>\n  </form>\n  ',{onShow:()=>{document.body.classList.add("lock")},onClose:()=>{document.body.classList.remove("lock")}}).show();document.querySelector(".js-logIn").addEventListener("submit",u)}));
//# sourceMappingURL=index.2428ba83.js.map
