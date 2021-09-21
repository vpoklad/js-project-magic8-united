import { isRetina } from './isRetina.js';

let arrEvents = [];
let card;
const increment = () => card += 1;  

export const eventsModif = (events) => {
  if (!events) {return}
  arrEvents = [];
  card = -1; 
  return events.map(event => {
    console.log(`event-${card+1} :>> `, event);
    //console.log(`event[${card+1}]._embedded :>> `, event._embedded);
    const evtEmb = event._embedded;
    const evtDateStart = event.dates.start;
    const evtPlace = event.place;
    const eventNew = {
      city: !evtEmb ? evtPlace.city.name : evtEmb.venues[0].city.name,
      country: !evtEmb ? evtPlace.country.name : evtEmb.venues[0].country.name,
      idCard: increment(),     
      id: event.id,
      image: choseImage(event.images),
      info: event.info,
      localDate: !evtDateStart ? '' : evtDateStart.localDate,
      localTime: !evtDateStart ? '' : (evtDateStart.localTime).slice(0, 5),
      name: event.name,
      place: !evtEmb ? '' : evtEmb.venues[0].name,
      priceSt: findPricesBySt(event.priceRanges),
      priceVip: findPricesByVip(event.priceRanges),
      timeZone: !evtEmb ? event.dates.timezone : evtEmb.venues[0].timezone,
      url: event.url
    }
    arrEvents.push(eventNew);
    return eventNew;
  }
  )
}

// export const eventModif = (event) => (
  export const eventModif = (event) => {
    const evtEmb = event._embedded;
    const evtDateStart = event.dates.start;
    return(
  {
    id: event.id,
    image: choseImage(event.images),
    info: event.info,
    localDate: !evtDateStart ? '' : evtDateStart.localDate,
    localTime: !evtDateStart ? '' : (evtDateStart.localTime).slice(0, 5),
    timeZone: !evtEmb ? '' : evtEmb.venues[0].timezone,
    // timeZone: event._embedded.venues[0].timezone,
    city: !evtEmb ? '' : evtEmb.venues[0].city.name,
    country: !evtEmb ? '' : evtEmb.venues[0].country.name,
    name: event.name,
    // places: !(event._embedded.venues[0].name) ? '' : event._embedded.venues[0].name,
    place: !evtEmb ? '' : evtEmb.venues[0].name,
    priceSt: findPricesBySt(event.priceRanges),
    priceVip: findPricesByVip(event.priceRanges),
    url: event.url
  }
)}

const sortByWidth = (imgA, imgB) => (imgB.width) - (imgA.width);
const sortByHeight = (imgA, imgB) => (imgB.height) - (imgA.height);

export function choseImage (images) {
  if (!images) {return}
  const imagesSort = images.sort(sortByHeight);
  const img = isRetina ? imagesSort[0] : imagesSort[1];
  return img;
};

export function sortImagesByWidth (images) {
  if (!images) {return}
  return images.sort(sortByWidth);
};

function findPricesBySt (prices) {
  if (!prices) {return}
  return prices.find(price => price.type === "standard");
};

function findPricesByVip (prices) {
  if (!prices) {return}
  return prices.find(price => price.type === "vip");
};

function filterImagesByHeight (images) {
  if (!images) {return}
  return images.filter(image => image.height === 639);
};

export function filterImagesByRetina (images) {
  if (!images) {return}
  return images
          .filter(image => image.url.includes('RETINA'))
          .sort(sortByWidth)
};

export function filterImagesByNotRetina (images) {
  if (!images) {return}
  return images
          .filter(image => !(image.url.includes('RETINA')))
          .sort(sortByWidth)
};

export function filterEventsByPriceRangeVip (events) {
  if (!events) {return}
  return events
          .filter(event => event.priceRanges
          .some(priceRang => priceRang.type === "vip"))
      
};