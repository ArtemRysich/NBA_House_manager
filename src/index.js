import User from './services/auth/user';
import * as basicLightbox from 'basiclightbox';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

const signUpBtn = document.querySelector('.js-show-signUp');
const logInBtn = document.querySelector('.js-show-signIn');

signUpBtn.addEventListener('click', showSignUp);
logInBtn.addEventListener('click', showLogIn);

function showSignUp() {
  const instance = basicLightbox.create(`
  <form class="js-signIn signIn">
    <input type="email" name="email" class='signIn__input' placeholder="Введіть емейл" />
    <input type="password" class='signIn__input' name="password" placeholder="Введіть пароль" />
    <button class='signIn__button'>Зареєструватись</button>
  </form>
    `);
    instance.show()
    const signIn = document.querySelector('.js-signIn');
    signIn.addEventListener('submit', onCreateUser);
}
function showLogIn() {
  const instance = basicLightbox.create(`
    <form class="js-logIn logIn">
    <input type="email" name="email" class='logIn__input' placeholder="Введіть емейл..." />

    <input type="password" name="password" class='logIn__input' placeholder="Введіть пароль..." />

    <button class='logIn__button'>Увійти</button>
  </form>
  `, {
    onShow: () => {
      document.body.classList.add('lock');
    },
    onClose: () => {
      document.body.classList.remove('lock');
    }
  });
  instance.show()
  const logIn = document.querySelector('.js-logIn');
  logIn.addEventListener('submit', onLogInUser);
}


function onCreateUser(e) {
  e.preventDefault();

  const userData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    password: document.getElementById('reg-pswd').value,
  };

  const user = new User(userData);

  user.create();
  console.log(user);
}

function onLogInUser(e) {
  e.preventDefault();
  console.log(e.currentTarget.elements);
  const {
    email: { value: email },
    password: { value: password },
  } = e.currentTarget.elements;

  const userData = {
    email,
    password,
  };

  const user = new User(userData);

  user.logIn();
}
