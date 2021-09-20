import axios from "axios";
import refs from './refs.js'
//import card from '../templates/card.hbs';
import card from '../templates/cardModif.hbs';
import { debounce } from "lodash";
import {setPagination, setEventsOnPage} from './pagination.js';
// import { notifyError } from './notify.js';
import {notify} from './notify_sweetalert'
import eventServiceApi from "./search-API.js";
import { createMarkupGrid } from "./createMarkup.js";
import { eventsModif } from './eventModification.js'

function firstPageLoad() {
  eventServiceApi.page = 0,
  setEventsOnPage();

  axios.get('https://app.ticketmaster.com/discovery/v2/events.json?&apikey=y2gr3zDEoAnck6YziFkTdrHptQULpZRO')
    .then(result => {
      renderCards(result.data._embedded.events)
       addClassAnimation()
      setPagination(result.data.page.totalElements)
    }).catch(err=> notify.error
      ('Error loading page. Please refresh the page.')
      // (notifyError('Error loading page. Please refresh the page.')
      )
}


function addClassAnimation() {
 const cardsItemAll = document.querySelectorAll('.cards__item')
  cardsItemAll.forEach(cardItem => cardItem.classList.add('cards__item--animation'))
}
function removeClassAnimation() {
 const cardsItemAll= document.querySelectorAll('.cards__item')
  cardsItemAll.forEach(cardItem => {
  cardItem.classList.remove('cards__item--animation')
  cardItem.style.visibility = "visible"
 })
}


function renderCards(events) {
  //const markup = card(events);
  const markup = card(eventsModif(events));
  //const markup = createMarkupGrid(events);
  refs.cardsContainer.innerHTML = markup;
}



window.addEventListener("load", debounce(firstPageLoad,1000));
window.addEventListener("load",debounce(removeClassAnimation,2000))
