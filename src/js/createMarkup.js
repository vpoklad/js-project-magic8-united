// Альтернатива для файлам card.hbs, event.hbs, eventFormate.hbs.
// Дає можливість кожній карці на сторінці присвоїти порядковий номер.
// В перспективі це дозволить уникнути зайвого запиту при рендері модалки.

import sortImagesByWidth from "./sortImages.js";

export function createMarkupGrid (events) { 
  const markupCards = events.map(event => createMarkupCard (event));
  return markupCards.join('');
}

let id = -1;
function createMarkupCard (event) {
  id += 1;  
  const imagesSort = sortImagesByWidth(event.images);
  return `
    <li class="cards__item hvr-buzz-out" tabindex="0" data-id=${id} data-eventId=${event.id}>
      <div class="thumb">
        <img class="cards__img" src=${imagesSort[0].url} alt=${event.name} width="180" height="227" />
      </div>  
      <h3 class="item__title">${event.name}</h3>
      <p class="item__date">${event.dates.start.localDate}</p>
      <p class="item__location">
        ${event.dates.timezone}
      </p>
    </li>
  `
}

export function createMarkupIntoModal (event) {
  const imagesSort = sortImagesByWidth(event.images);
  const info = event.info !== undefined ? event.info : '';
  const localDate = event.dates.start.localDate;
  const localTime = (event.dates.start.localTime).slice(0, 5);
  const timeZone = event.dates.timezone;
  const city = event._embedded.venues[0].city.name;
  const country = event._embedded.venues[0].country.name;
  const places = event._embedded.venues[0].name !== undefined ? event._embedded.venues[0].name : '';
  const priceRanges = event.priceRanges;
  const priceSt = priceRanges[0] !== undefined ? `${priceRanges[0].min} - ${priceRanges[0].max}` : '-';
  const priceStCurrency = priceRanges[0] !== undefined ? priceRanges[0].currency : '';
  const priceVip = priceRanges[1] !== undefined ? `${priceRanges[1].min} - ${priceRanges[1].max}` : '-';
  const priceVipCurrency = priceRanges[1] !== undefined ? priceRanges[1].currency : '';

  return `
    <div class="modal_main__thumb">
      <img src=${imagesSort[0].url} alt="event" />
    </div>

    <div class="modal__flex">
      <div class="modal__flex-thumb">
        <img class="modal_main__image" src=${imagesSort[0].url} alt=${event.name}/>
      </div>

      <div class="modal__content">
        <div class="modal__meta modal__meta--scroll ">
          <h3 class="modal_main__title">INFO</h3>
          <p>${info}</p>
        </div>

        <div class="modal__meta">
          <h3 class="modal_main__title">WHEN</h3>
          <p>${localDate}</p>
          <p>${localTime} (${timeZone})</p>
        </div>

        <div class="modal__meta">
          <h3 class="modal_main__title">WHERE</h3>
          <p>${city}, ${country}</p>
          <p>${places}</p>
        </div>

        <div class="modal__meta">
          <h3 class="modal_main__title">WHO</h3>
          <p>${event.name}</p>
        </div>

        <div class="modal__meta">
          <h3 class="modal_main__title">PRICES</h3>
          <p class="modal__price">
            Standart ${priceSt} ${priceStCurrency}
          </p>
          <a
                  href="${event.url}"
                  data-eventId=${event.id}
                  class="button button--ticket"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-modal_button_standard
                >BUY TICKETS</a>
                <div class =""> 
          
        </div>
      </div>
    </div>
  `
}