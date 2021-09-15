
import {notifyAlert} from './notify.js';
//import {renderGallery, renderGalleryContainer, clearGalleryContainer, } from './markup.js';
import EventApiServiceById from './apiServiceModal.js';
//import {OnImageClick} from './modal.js';


//let firstLoad = true;
const eventApiServiceById = new EventApiServiceById();

export function OnEventClick(evt){
    evt.preventDefault();
    if (evt.target.nodeName !== "LI") return;

    const id = evt.target.dataset.id;
    //console.log('id :>> ', id);
    eventApiServiceById.query = id;
    
    //eventApiServiceById.resetPage();

    eventApiServiceById.fetchEvent()   
    .then(event => {
      console.log('Event :>> ', event);
      // console.log('EventInfo :>> ', searchEvent.info);
      // console.log('searchEvent.dates.start.localDate; :>> ', searchEvent.dates.start.localDate);
      // const event = searchEvent;
      // console.log('event :>> ', event);
      const info = event.info;
      console.log('info :>> ', info);
      const localDate = event.dates.start.localDate;
      console.log('localDate :>> ', localDate);
      const localTime = event.dates.start.localTime;
      console.log('localTime :>> ', localTime);
      const timeZone = event.dates.timezone;
      console.log('timeZone :>> ', timeZone);
      const cityName = event._embedded.venues[0].city.name;
      console.log('cityName :>> ', cityName);
      const countryName = event._embedded.venues[0].country.name;
      console.log('countryName :>> ', countryName);
      const pleaseName = event._embedded.venues[0].name;
      console.log('pleaseName :>> ', pleaseName);
      const name = event.name;
      console.log('name :>> ', name);
      const priceStandard = event.priceRanges[0];
      const priceStandardMin = priceStandard.min;
      console.log('priceStandardMin :>> ', priceStandardMin);
      const priceStandardMax = priceStandard.max;
      console.log('priceStandardMax :>> ', priceStandardMax);
      const priceStandardCurrency = priceStandard.currency;
      console.log('priceStandardCurrency :>> ', priceStandardCurrency);

      // console.log('info :>> ', info);
      // console.log('localDate :>> ', localDate);
      // console.log('localTime :>> ', localTime);
      // console.log('timeZone :>> ', timeZone);
      // console.log('cityName :>> ', cityName);
      // console.log('countryName :>> ', countryName);
      // console.log('pleaseName :>> ', pleaseName);
      // console.log('name :>> ', name);
      // console.log('priceStandardMin :>> ', priceStandardMin);
      // console.log('priceStandardMax :>> ', priceStandardMax);
      // console.log('priceStandardCurrency :>> ', priceStandardCurrency);

      // firstLoad = true;
      // clearGalleryContainer();
      // renderGalleryContainer();
      // renderGallery(searchImages);

      // watchObserver();

      
    })
    .catch(notifyAlert);
}

export function onLoadMoreImages () {
    if (eventApiService.page === 2 && firstLoad) {
        firstLoad = false;
        return;
     }

    eventApiService.fetchImages()
    .then(renderGallery)
    .catch(notifyAlert);
}

export function watchObserver () {
  const intersection = document.querySelector('#intersection');  
  const options = {
    //root: body,
    rootMargin: '100px',
  }  
  const observer = new IntersectionObserver(onLoadMoreImages, options);
  //if (intersection.isIntersecting){
   observer.observe(intersection);
  //}
}