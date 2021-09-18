import refs from './refs.js';
import eventMarkup from '../templates/event.hbs';
import eventFMarkup from '../templates/eventF.hbs';
import {notifyAlert} from './notify.js';
import eventServiceApi from './search-API.js';

refs.cards.addEventListener('click', OnEventClick);

function renderEventMarkup (event) {
    refs.overlay.classList.remove("is-hidden");
     document.body.classList.add("overlay-show");
     //console.log('event. :>> ', (event.dates.start.localTime).slice(0,5));
    // refs.modalContent.innerHTML = eventMarkup(event);
    //console.log('event :>> ', event);
    refs.modalContent.innerHTML = eventFMarkup(event);
}

function OnEventClick(evt) {
    evt.preventDefault();
    const target = evt.target.nodeName !== 'LI' ? evt.target.parentElement : evt.target;
    //console.log('target :>> ', target);
    if (target.nodeName !== "LI") return;
    
    eventServiceApi.queryId = target.dataset.eventid;
     
    eventServiceApi.searchEventById()
    .then((event) => {
        const eventF = formatEvent (event);
        //console.log('eventF :>> ', eventF);
        renderEventMarkup(eventF)
    })    
    .catch(notifyAlert);
}

function formatEvent (event) {
    const eventF = {
        id: event.id,
        images: event.images,
        info: event.info,
        localDate: event.dates.start.localDate,
        localTime: (event.dates.start.localTime).slice(0, 5),
        timeZone: event.dates.timezone,
        city: event._embedded.venues[0].city.name,
        country: event._embedded.venues[0].country.name,
        name: event.name,
        places: event._embedded.venues[0].name,
        priceRanges: event.priceRanges,
        url: event.url
    }
    //console.log('eventF :>> ', eventF);
    return eventF;
}