import * as basicLightbox from 'basiclightbox';
import { v4 as uuidv4 } from 'uuid';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

const notificationButton = document.querySelector('.notification');
const LS_KEY = 'notificationMessages'

let notificationMessages;
if(localStorage.getItem(LS_KEY)){
    notificationMessages = localStorage.getItem(LS_KEY);
}
else{
    notificationMessages = [
        {
            id: uuidv4(), title: 'Notification 1', description: 'Description', read: false
        },
        {
            id: uuidv4(), title: 'Notification 2', description: 'Description', read: true
        },
        {
            id: uuidv4(), title: 'Notification 3', description: 'Description', read: true
        },
    ];
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
});

function renderNotificationItems(){
    let layout = ``;
    notificationMessages.forEach(notification => {
        layout += `
        <li class='notification-popup__item ${notification.read ? '' : 'read'}'>
            <h2 class='notification-popup__title'>${notification.title}</h2>
            <div class='notification-popup__description'>${notification.description}</div>
        </li>`
    })
    return layout
}