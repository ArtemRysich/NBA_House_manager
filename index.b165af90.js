var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("9B8F0");async function s(e){const n={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}},o=await fetch("https://nba-house-manager.herokuapp.com/login",n);if(!o.ok)throw new Error("Invalid password");return o.json()}async function a(e){const n={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}},o=await fetch("https://nba-house-manager.herokuapp.com/users/create/",n);if(!o.ok)throw new Error("Invalid password");return o.json()}const l=document.querySelector(".js-show-signUp"),i=document.querySelector(".js-show-signIn");function c(e){e.preventDefault();const{email:{value:n},password:{value:o}}=e.currentTarget.elements;a({username:n,password:o}).then((e=>console.log(e))).catch((e=>console.log(e)))}function u(e){e.preventDefault(),console.log(e.currentTarget.elements);const{email:{value:n},password:{value:o}}=e.currentTarget.elements;s({username:n,password:o}).then((e=>localStorage.setItem("Token",e.token))).catch((e=>console.log(e)))}l.addEventListener("click",(function(){r.create('\n  <form class="js-signIn">\n    <input type="email" name="email" placeholder="Введіть емейл" />\n    <input type="password" name="password" placeholder="Введіть пароль" />\n    <button>Зареєструватись</button>\n  </form>\n    ').show();document.querySelector(".js-signIn").addEventListener("submit",c)})),i.addEventListener("click",(function(){r.create('\n    <form class="js-logIn">\n    <input type="text" name="email" placeholder="Введіть емейл" />\n\n    <input type="password" name="password" placeholder="Введіть пароль" />\n\n    <button>Увійт</button>\n  </form>\n  ').show();document.querySelector(".js-logIn").addEventListener("submit",u)}));
//# sourceMappingURL=index.b165af90.js.map
