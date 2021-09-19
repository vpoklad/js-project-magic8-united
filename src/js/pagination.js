import Pagination from 'tui-pagination'; 

import eventServiceApi from "./search-API";
import { renderCards } from './firstPageLoad';
import card from '../templates/card.hbs';
import refs from './refs';



const container = document.querySelector('#tui-pagination-container');

function setEventsOnPage() {
    const windowOuterWidth = window.outerWidth;
    if (windowOuterWidth > 768 && windowOuterWidth < 1280) {
        eventServiceApi.size = 15;
    } else {
        eventServiceApi.size = 16;
    }
  }



function setPagination(totalEvents) {
    const options = {
        totalItems: totalEvents > 1000 ? 1000 : totalEvents,
        itemsPerPage: eventServiceApi.size,
        visablePages: 5,
        page: 1,
        centerAlign: true,

    };
    const pagination = new Pagination(container, options);

    pagination.on('beforeMove', function (eventData) {
        eventServiceApi.page = eventData.page - 1;
        setEventsOnPage();
        eventServiceApi.fetchEvent().then(response=>{refs.cardsContainer.innerHTML=card(response)}).catch(console.log);
      });
}

console.log(eventServiceApi)
export { setEventsOnPage, setPagination };


