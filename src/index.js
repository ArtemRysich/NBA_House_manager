import * as basicLightbox from 'basiclightbox';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

import { loginCall } from './services/auth/login';
import { signUpCall } from './services/auth/signup';

const signUpBtn = document.querySelector('.js-show-signUp');
const logInBtn = document.querySelector('.js-show-signIn');
const linkHeader = document.querySelector('.js-link');
const regForm = document.querySelector('.js_reg');

signUpBtn.addEventListener('click', showSignUp);
logInBtn.addEventListener('click', showLogIn);

if (localStorage.getItem('Token')) {
  linkHeader.hidden = false;
  regForm.innerHTML = `<span class="js-logout header__link">Вийти</span>`;
  const logout = document.querySelector('.js-logout');
  logout.addEventListener('click', handlerLogout);
}

function showSignUp() {
  const instance = basicLightbox.create(`
  <form class="js-signIn signIn">
    <input type="email" name="email" class='signIn__input' placeholder="Введіть емейл" required/>
    <input type="password" class='signIn__input' name="password" placeholder="Введіть пароль" required/>
    <button class='signIn__button'>Зареєструватись</button>
  </form>
    `);
  instance.show();
  const signIn = document.querySelector('.js-signIn');
  signIn.addEventListener('submit', onCreateUser.bind(instance));
}
function showLogIn() {
  const instance = basicLightbox.create(
    `
    <form class="js-logIn logIn">
    <input type="text" name="email" class='logIn__input' placeholder="Введіть емейл..." required/>
    <input type="password" name="password" class='logIn__input' placeholder="Введіть пароль..." required/>
    <button class='logIn__button'>Увійти</button>
  </form>
  `,
    {
      onShow: () => {
        document.body.classList.add('lock');
      },
      onClose: () => {
        document.body.classList.remove('lock');
      },
    }
  );
  instance.show();
  const logIn = document.querySelector('.js-logIn');
  logIn.addEventListener('submit', onLogInUser.bind(instance));
}

function onCreateUser(e) {
  e.preventDefault();

  const instanse = this;
  const {
    email: { value: username },
    password: { value: password },
  } = e.currentTarget.elements;

  const userData = {
    username,
    password,
  };

  signUpCall(userData)
    .then(() => {
      instanse.close();
    }).then(() => loginCall(userData).then(data=> {
        linkHeader.hidden = false;
        regForm.innerHTML = `<span class="js-logout header__link">Вийти</span>`;
        const logout = document.querySelector('.js-logout');
        logout.addEventListener('click', handlerLogout);
        localStorage.setItem('Token', data.token);
        instanse.close();
    }))
    .catch(err => console.log(err));
}

function onLogInUser(e) {
  e.preventDefault();
  const {
    email: { value: username },
    password: { value: password },
  } = e.currentTarget.elements;

  const userData = {
    username,
    password,
  };
  loginCall(userData)
    .then(data => {
      const instanse = this;
      linkHeader.hidden = false;
      regForm.innerHTML = `<span class="js-logout header__link">Вийти</span>`;
      const logout = document.querySelector('.js-logout');
      logout.addEventListener('click', handlerLogout);
      localStorage.setItem('Token', data.token);
      instanse.close();
    })
    .catch(err => console.log(err));
}

function handlerLogout() {
  localStorage.removeItem('Token');
  linkHeader.hidden = true;
  regForm.innerHTML = `<span class="js-show-signIn header__link">Увійти</span> / <span class="js-show-signUp header__link">Зареєструватись</span>`;
  const signUpBtn = document.querySelector('.js-show-signUp');
  const logInBtn = document.querySelector('.js-show-signIn');
  signUpBtn.addEventListener('click', showSignUp);
  logInBtn.addEventListener('click', showLogIn);
}
