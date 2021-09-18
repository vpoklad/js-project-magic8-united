import axios from "axios";
import refs from './refs.js'
import card from '../templates/card.hbs';
import { debounce } from "lodash";
import {setPagination, setEventsOnPage} from './pagination.js';
import { notifyError } from './notify.js';
import eventServiceApi from "./search-API.js";


function firstPageLoad() {
  eventServiceApi.page = 0,
  setEventsOnPage();

  axios.get('https://app.ticketmaster.com/discovery/v2/events.json?&apikey=y2gr3zDEoAnck6YziFkTdrHptQULpZRO')
    .then(result => {
      renderCards(result.data._embedded.events)
       addClassAnimation()
      setPagination(result.data.page.totalElements)
    }).catch(err=>notifyError('Error loading page. Please refresh the page.'))
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
  const markup = card(events);
  refs.cardsContainer.innerHTML = markup;
}
document.addEventListener("DOMContentLoaded", firstPageLoad);
window.addEventListener("load",debounce(removeClassAnimation,500))