const header = document.querySelector('.header');
const burgerButton = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.header__nav');

window.addEventListener('scroll', () => {
    if(pageYOffset > 40 && !header.classList.contains('header_bg')){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
})

burgerButton.addEventListener('click', () => {
    document.body.classList.toggle('lock');
    burgerButton.classList.toggle('active');
    burgerMenu.classList.toggle('active');
});