import axios from "axios";
import refs from './refs.js'
import card from '../templates/card.hbs';


function firstPageLoad() {
      axios.get('https://app.ticketmaster.com/discovery/v2/events.json?&apikey=y2gr3zDEoAnck6YziFkTdrHptQULpZRO')
        .then(result => {
          renderCards(result.data._embedded.events);
        console.log(result.data._embedded.events)}).catch(err => console.log(err))
  }


  
function renderCards(events) {
    const markup = card(events)
    refs.cardsContainer.innerHTML=markup
      
}

document.addEventListener("DOMContentLoaded", firstPageLoad);
