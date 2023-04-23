import User from './services/auth/user';
import * as basicLightbox from 'basiclightbox';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

const signUpBtn = document.querySelector('.js-show-signUp');
const logInBtn = document.querySelector('.js-show-signIn');

signUpBtn.addEventListener('click', showSignUp);
logInBtn.addEventListener('click', showLogIn);

function showSignUp() {
  const instance = basicLightbox.create(`
  <form class="js-signIn">
    <input type="text" name="name" placeholder="Ім'я користувача" />

    <input type="email" name="email" placeholder="Введіть емейл" />

    <input type="password" name="password" placeholder="Введіть пароль" />

    <button>Зареєструватись</button>
  </form>
    `);
    instance.show()
    const signIn = document.querySelector('.js-signIn');
    signIn.addEventListener('submit', onCreateUser);
}
function showLogIn() {
  const instance = basicLightbox.create(`
    <form class="js-logIn">
    <input type="email" name="email" placeholder="Введіть емейл" />

    <input type="password" name="password" placeholder="Введіть пароль" />

    <button>Увійт</button>
  </form>
  `);
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
