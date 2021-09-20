import { isRetina } from './isRetina.js';

let card;
const increment = () => card += 1;  

export const eventsModif = (events) => {
  card = -1; 
  return events.map(event => (
    {
      idCard: increment(),     
      id: event.id,
      image: choseImage(event.images),
      info: event.info,
      localDate: event.dates.start.localDate,
      timeZone: event._embedded.venues[0].timezone,
      name: event.name,
    })
  )
}

export const eventModif = (event) => (
  {
    id: event.id,
    image: choseImage(event.images),
    info: event.info,
    localDate: event.dates.start.localDate,
    localTime: (event.dates.start.localTime).slice(0, 5),
    timeZone: event._embedded.venues[0].timezone,
    city: event._embedded.venues[0].city.name,
    country: event._embedded.venues[0].country.name,
    name: event.name,
    places: event._embedded.venues[0].name,
    priceSt: findPricesBySt(event.priceRanges),
    priceVip: findPricesByVip(event.priceRanges),
    url: event.url
  }
)

const sortByWidth = (imgA, imgB) => (imgB.width) - (imgA.width);

const sortByHeight = (imgA, imgB) => (imgB.height) - (imgA.height);

export function choseImage (images) {
  if (!images) {return}
  const imagesSort = images.sort(sortByHeight);
  const img = isRetina ? imagesSort[0] : imagesSort[1];
  return img;
}

export function sortImagesByWidth (images) {
  if (!images) {return}
  return images.sort(sortByWidth);
}

function findPricesBySt (prices) {
  if (!prices) {return}
  return prices.find(price => price.type === "standard");
}  

function findPricesByVip (prices) {
  if (!prices) {return}
  return prices.find(price => price.type === "vip");
}  

function filterImagesByHeight (images) {
  if (!images) {return}
  return images.filter(image => image.height === 639);
}  

export function filterImagesByRetina (images) {
  if (!images) {return}
  return images
          .filter(image => image.url.includes('RETINA'))
          .sort(sortByWidth)
}

export function filterImagesByNotRetina (images) {
  if (!images) {return}
  return images
          .filter(image => !(image.url.includes('RETINA')))
          .sort(sortByWidth)
}

export function filterEventsByPriceRangeVip (events) {
  if (!events) {return}
  return events
          .filter(event => event.priceRanges
          .some(priceRang => priceRang.type === "vip"))
      
}