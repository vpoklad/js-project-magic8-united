import refs from './refs.js';
import eventMarkup from '../templates/eventModif.hbs';
// import {notifyAlert} from './notify.js';
import eventServiceApi from './search-API.js';

export let authorName;

refs.cardsContainer.addEventListener('click', OnEventClick);

function renderEventMarkup (event) {
    showModal();
    refs.modalContent.innerHTML = eventMarkup(event);

    authorName = event.name;
}

function OnEventClick(evt) {
    evt.preventDefault();
    const target = evt.target.nodeName !== 'LI' ? evt.target.parentElement : evt.target;
    if (target.nodeName !== "LI") return;

    eventServiceApi.queryId = target.dataset.eventid;

    eventServiceApi.searchEventById()
    .then((event) => {console.log('eventModal :>> ', event); renderEventMarkup(event)})
    // .catch(notifyAlert('No data available!'));
}

function showModal () {
    refs.overlay.classList.remove("is-hidden");
    document.body.classList.add("overlay-show");
}
    