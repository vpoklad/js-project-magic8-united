import axios from "axios";
import refs from './refs.js'
//import card from '../templates/card.hbs';
import card from '../templates/cardModif.hbs';
import { debounce } from "lodash";
import {setPagination, setEventsOnPage} from './pagination.js';
import { notifyError } from './notify.js';
import eventServiceApi from "./search-API.js";
import { createMarkupGrid } from "./createMarkup.js";
import { eventsModif } from './eventModification.js'

function firstPageLoad() {
  eventServiceApi.pageReset();
  setEventsOnPage();

  eventServiceApi.fetchEvent()
    .then(events => { 
      refs.cardsContainer.innerHTML = card(eventsModif(events));
      addClassAnimation();
      setPagination(eventServiceApi.totalEvents);
    }).catch(()=>notifyError('Error loading page. Please refresh the page.'))
};

export function addClassAnimation() {
 const cardsItemAll = document.querySelectorAll('.cards__item')
  cardsItemAll.forEach(cardItem => cardItem.classList.add('cards__item--animation'))
};

export function removeClassAnimation() {
 const cardsItemAll= document.querySelectorAll('.cards__item')
  cardsItemAll.forEach(cardItem => {
  cardItem.classList.remove('cards__item--animation')
  cardItem.style.visibility = "visible"
 })
}

window.addEventListener("load", debounce(firstPageLoad, 400));
window.addEventListener("load",debounce(removeClassAnimation,1500))