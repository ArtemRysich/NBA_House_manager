import * as basicLightbox from 'basiclightbox';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

const notificationButton = document.querySelector('.notification');

const realtyItems = JSON.parse(localStorage.getItem('realty-items'));

const notificationMessages = [];

for(let i = 0; i < realtyItems.length; i++){
    const item = realtyItems[i];
    const date = new Date();
    let rentFinalDay = parseInt(item.rentTime.slice(8,10));
    let rentFinalMonth = parseInt(item.rentTime.slice(5,7));
    let currentDay = date.getDate();
    let currentMonth = date.getMonth();
    if(rentFinalMonth < currentMonth){
        item.read = false;
        notificationMessages.push(item);
    }
    if((rentFinalDay - 3 > currentDay) && (rentFinalMonth === currentMonth || rentFinalMonth < currentMonth)){
        item.read = false;
        notificationMessages.push(item);
    }
}

const notificationNumbres = document.querySelector('.notification__numbers');

if(!notificationMessages.length){
    notificationNumbres.style.display = 'none';
}
else{
    notificationNumbres.style.display = '';
    notificationNumbres.innerHTML = notificationMessages.length;
}

notificationButton.addEventListener('click', () => {
    const instance = basicLightbox.create(`
        <div class='notification-popup notification-popup'>
            <ul class='notification-popup__list'>
                ${renderNotificationItems()}
            </ul>
        </div>
    `)
    instance.show();
    const notificationList = document.querySelector('.notification-popup__list');
    notificationList.addEventListener('click', (e) => {
        if(e.target.closest('.notification-popup__item')){
            e.target.closest('.notification-popup__item').classList.remove('read')
        }
    })
});


function renderNotificationItems(){
    let layout = ``;
    notificationMessages.forEach(notification => {
        layout += `
        <li class='notification-popup__item ${notification?.read ? '' : 'read'}' data-uniq-id='${notification?.id}'>
            <h2 class='notification-popup__title'>Увага</h2>
            <div class='notification-popup__description'>Залишилося менше 3-x днів до зняття орендної плати в будинку <strong>${notification?.title}!</strong></div>
        </li>`
    })
    return layout;
}