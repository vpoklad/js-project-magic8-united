import Pagination from 'tui-pagination'; 
import eventServiceApi from "./search-API"
import {renderEventMarkup} from './renderEventIntoModal'


const container = document.querySelector('#tui-pagination-container');

function setEventsOnPage() {
    const windowOuterWidth = window.outerWidth;
    if (windowOuterWidth > 768 && windowOuterWidth < 1280) {
      apiService.size = 15;
    } else {
      apiService.size = 16;
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
        apiService.page = eventData.page - 1;
        setEventsOnPage();
        apiService.fetchEvent().then(renderEventMarkup).catch(console.log);
      });
}

export default setPagination;