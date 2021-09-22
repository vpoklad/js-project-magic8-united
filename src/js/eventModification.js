import { isRetina } from './isRetina.js';

export let arrEvents;
let card;
const increment = () => card += 1;  

export const eventsModif = (events) => {
  if (!events) {return}
  arrEvents = [];
  card = -1; 
  return events.map(event => {
    console.log(`event-${card+1} :>> `, event);

    const eventNew = {
      city: findCity(event),
      country: findCountry(event),
      idCard: increment(),     
      id: event.id,
      image: findImage(event.images),
      info: event.info,
      localDate: findLocalDate(event),
      localTime: findLocalTime(event),
      name: !(event.name) ? '' : event.name,
      place: findPlace(event),
      priceSt: findPricesBySt(event.priceRanges),
      priceVip: findPricesByVip(event.priceRanges),
      timeZone: findTimeZone(event),
      url: !(event.url) ? '' : event.url
    }

    arrEvents.push(eventNew);
    return eventNew;
  }
  )
}
const findCity = (event) => event._embedded ? event._embedded.venues[0].city.name : event.place ? evtPlace.city.name : '';

const findCountry = (event) => event._embedded ? event._embedded.venues[0].country.name : event.place ? evtPlace.country.name : '';

function findImage (images) {
  if (!images) {return}
  const sortByHeight = (imgA, imgB) => (imgB.height) - (imgA.height);
  const imagesSort = images.sort(sortByHeight);
  const chooseImg = isRetina ? imagesSort[0] : imagesSort[1];
  return chooseImg;
};

const findLocalDate = (event) => event.dates.start.localDate ? event.dates.start.localDate : event._embedded ? event._embedded.venues[0].start.localDate : '';

const findLocalTime = (event) => event.dates.start.localDate ? (event.dates.start.localTime).slice(0, 5) : event._embedded ? (event._embedded.venues[0].start.localTime).slice(0, 5) : '';;

const findPlace = (event) => event._embedded ? event._embedded.venues[0].name : event.place ? event.place : ''

function findPricesBySt (prices) {
  if (!prices) {return}
  return prices.find(price => price.type === "standard");
};

function findPricesByVip (prices) {
  if (!prices) {return}
  return prices.find(price => price.type === "vip");
};

const findTimeZone = (event) => event.dates.timezone ? event.dates.timezone : event._embedded ? event._embedded.venues[0].timezone : '';

function filterEventsByPriceRangeVip (events) {
  if (!events) {return}
  return events
          .filter(event => event.priceRanges
          .some(priceRang => priceRang.type === "vip"))
      
};