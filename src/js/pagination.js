import Pagination from 'tui-pagination'; 
import {eventsModif} from "./eventModification.js";
import eventServiceApi from "./search-API";
import { renderCards } from './firstPageLoad';
// import card from '../templates/card.hbs';
import card from '../templates/cardModif.hbs';
import refs from './refs';



const container = document.querySelector('#tui-pagination-container');

function setEventsOnPage() {
    const windowOuterWidth = window.outerWidth;
    if (windowOuterWidth > 768 && windowOuterWidth < 1280) {
        eventServiceApi.size = 20;
    } else {
        eventServiceApi.size = 20;
    }
  }



function setPagination(totalEvents) {
    const options = {
        totalItems: 1000,
        itemsPerPage: eventServiceApi.size,
        visiblePages: 5,
        page: 1,
        centerAlign: false,
    };
    const pagination = new Pagination(container, options);

    console.log(pagination)
    pagination.on('beforeMove', function (eventData) {
        eventServiceApi.page = eventData.page - 1;
        setEventsOnPage();
        eventServiceApi.fetchEvent().then(response=>{refs.cardsContainer.innerHTML=card(response)}).catch(console.log);
      });
}


export { setEventsOnPage, setPagination };


