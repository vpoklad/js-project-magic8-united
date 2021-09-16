import axios from "axios";
import refs from './refs.js'
import card from '../templates/card.hbs';
import { debounce } from "lodash";
import setPagination from './pagination.js'


function firstPageLoad() {
  axios.get('https://app.ticketmaster.com/discovery/v2/events.json?&classificationName=music&apikey=y2gr3zDEoAnck6YziFkTdrHptQULpZRO')
    .then(result => {
      renderCards(result.data._embedded.events)
      setPagination(result.data.length-1)
      addClassAnimation()

    }).catch(err => console.log(err))
  
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
  const markup = card(events)
  refs.cardsContainer.innerHTML=markup
      
}

document.addEventListener("DOMContentLoaded", firstPageLoad);
window.addEventListener("load",debounce(removeClassAnimation,500))
