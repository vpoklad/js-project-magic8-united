import Pagination from 'tui-pagination'; 
import {addClassAnimation, removeClassAnimation} from "./firstPageLoad";
import eventServiceApi from "./search-API";
//import { renderCards } from './firstPageLoad';
import card from '../templates/cardModif.hbs';
import refs from './refs';
import { hideLoader, showLoader } from './preloader';
import { debounce } from 'lodash';
// export {showLoader, hideLoader} from './preloader'


const container = document.querySelector('#tui-pagination-container');

function setEventsOnPage() {
    const windowOuterWidth = window.outerWidth;
    if (windowOuterWidth > 768 && windowOuterWidth < 1280) {
        eventServiceApi.size = 20;
    } else {
        eventServiceApi.size = 20;
    }
  }

function scrollPagination() {
    window.scrollTo({ top: 300, behavior: 'smooth' });
}

function setPagination(totalEvents,) {
    const options = {
        totalItems: totalEvents > 1000 ? 1000 : totalEvents,
        itemsPerPage: eventServiceApi.size,
        visiblePages: window.outerWidth < 768 ? 3 : 5,
        page: 1,
        centerAlign: true,
    };

    const pagination = new Pagination(container, options);
    console.log(options.visiblePages)
    pagination.on('beforeMove', function (eventData) {
        eventServiceApi.page = eventData.page - 1;
        setEventsOnPage();
        showLoader();
      eventServiceApi.fetchEvent()
        .then(events => {
        refs.cardsContainer.innerHTML = card(events);
          addClassAnimation();
          setTimeout(removeClassAnimation, 1500);
        })
        .then(scrollPagination)
        .catch(console.log)
        .finally(hideLoader);
      });
}

export { setEventsOnPage, setPagination };


