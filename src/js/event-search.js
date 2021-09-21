import eventServiceApi from "./search-API";
import templateCard from "../templates/cardModif.hbs";
import refs from "./refs";
import debounce from 'lodash.debounce';
import {notifyInfo, notifySuccess} from './notify'
// import { alert, notice, info, success, error } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import { setPagination, setEventsOnPage } from './pagination.js';
import {addClassAnimation, removeClassAnimation} from "./firstPageLoad";


refs.searchInput.addEventListener('input', debounce(onInput, 600));
refs.searchInput.addEventListener('input',debounce(removeClassAnimation,1700));
// export default eventServiceApi.searchEventById().then(res=>console.log(res.data))

function onInput(e) {
  // console.log(refs.searchInput.value);
  if (e.target.value.trim() === '' && eventServiceApi.selectQuery !== "") {
      eventServiceApi.query = "";
      eventServiceApi.fetchEvent().then(events => {
      if(events===undefined){return}
      refs.cardsContainer.innerHTML = templateCard(events);
      addClassAnimation();
      setPagination(eventServiceApi.totalEvents);});
    return
  }
if (e.target.value.trim() === '') {
    eventServiceApi.query = "";
    notifyInfo('Please enter you request!');
      // { text: 'Please enter you request!',
      // delay: 5000})
    return
  }
  eventServiceApi.query = e.target.value.trim();

  eventServiceApi.fetchEvent().then(events => {
    // console.log(events);
   if(events===undefined){return}
      // refs.cardsContainer.innerHTML = templateCard(events);
    refs.cardsContainer.innerHTML = templateCard(events);
    addClassAnimation();
    setPagination(eventServiceApi.totalEvents);
    notifySuccess(`Your request '${eventServiceApi.searchQuery}' '${eventServiceApi.countryQuery}' has been successfully processed! Found ${eventServiceApi.totalEvents} events.`);
  });
};
// window.addEventListener("load",debounce(removeClassAnimation,2000))
// options.totalItems = eventServiceApi.totalPages;
  // refs.nextPage.addEventListener('click', openNextPage)
// function openNextPage(e) {
//   eventServiceApi.incrementPage();
//    eventServiceApi.fetchEvent().then(events => {
//      refs.cardsContainer.innerHTML = templateCard(events);
//      });

// }
