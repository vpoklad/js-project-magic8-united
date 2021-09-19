import refs from './refs.js';
import eventMarkup from '../templates/event.hbs';
import eventFormateMarkup from '../templates/eventFormate.hbs';
import { notifyAlert } from './notify.js';
import eventServiceApi from './search-API.js';
import arrEvents from './search-API.js';
import sortImagesByWidth from './sortImages.js';
import { createMarkupIntoModal } from './createMarkup.js';

refs.cards.addEventListener('click', OnEventClick);

function renderEventMarkup(event) {
  //console.log('event :>> ', event);
  refs.overlay.classList.remove('is-hidden');
  document.body.classList.add('overlay-show');
  refs.modalContent.innerHTML = createMarkupIntoModal(event);
  // refs.modalContent.innerHTML = eventFormateMarkup(event);
}

function OnEventClick(evt) {
  evt.preventDefault();
  const target = evt.target.nodeName !== 'LI' ? evt.target.parentElement : evt.target;
  //console.log('target :>> ', arrEvents);
  if (target.nodeName !== 'LI') return;

  eventServiceApi.queryId = target.dataset.eventid;

  eventServiceApi
    .searchEventById()
    .then(event => renderEventMarkup(event))
    // .then((event) => renderEventMarkup(formatEvent(event)))
    .catch(notifyAlert);
}

const formatEvent = event => ({
  id: event.id,
  images: sortImagesByWidth(event.images),
  info: event.info,
  localDate: event.dates.start.localDate,
  localTime: event.dates.start.localTime.slice(0, 5),
  timeZone: event.dates.timezone,
  city: event._embedded.venues[0].city.name,
  country: event._embedded.venues[0].country.name,
  name: event.name,
  places: event._embedded.venues[0].name,
  priceRanges: event.priceRanges,
  url: event.url,
});
