import refs from './refs.js';
import eventMarkup from '../templates/event.hbs';
import {notifyAlert} from './notify.js';
import EventApiServiceById from './apiServiceModal.js';

refs.cards.addEventListener('click', OnEventClick);

function renderEventMarkup (event) {
    refs.overlay.classList.remove("is-hidden");
    refs.modalContent.innerHTML = eventMarkup(event);
}

function OnEventClick(evt) {
    evt.preventDefault();
    const target = evt.target.nodeName !== 'LI' ? evt.target.parentElement : evt.target;
    //console.log('target :>> ', target);
    if (target.nodeName !== "LI") return;
    
    const eventApiServiceById = new EventApiServiceById();
    eventApiServiceById.query = target.dataset.eventid;
    
    //eventApiServiceById.resetPage();

    eventApiServiceById.fetchEvent()   
    .then((event) => renderEventMarkup(event))
    .catch(notifyAlert);
}

