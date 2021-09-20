import eventServiceApi from "./search-API";
// import templateCard from "../templates/card.hbs";
import templateCard from "../templates/cardModif.hbs";
import refs from "./refs";
import debounce from 'lodash.debounce';
import { alert, notice, info, success, error } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import { setPagination, setEventsOnPage } from './pagination.js';
import { eventsModif } from './eventModification.js'
import {addClassAnimation, removeClassAnimation} from "./firstPageLoad";


refs.searchInput.addEventListener('input', debounce(onInput, 700));
refs.searchInput.addEventListener('input',debounce(removeClassAnimation,1500));
// export default eventServiceApi.searchEventById().then(res=>console.log(res.data))

function onInput(e) {
  // console.log(refs.searchInput.value);
  if (e.target.value.trim() === '' && eventServiceApi.selectQuery !== "") {
      eventServiceApi.query = "";
      eventServiceApi.fetchEvent().then(response => {
      if(response===undefined){return}
      refs.cardsContainer.innerHTML = templateCard(response);
      setPagination(eventServiceApi.totalEvents);});
    return
  }
if (e.target.value.trim() === '') {
    eventServiceApi.query = "";
    info({
      text: 'Please enter you request!',
      delay: 5000
    })
    return
  }
  eventServiceApi.query = e.target.value.trim();

  eventServiceApi.fetchEvent().then(response => {
    // console.log(response);
   if(response===undefined){return}
      // refs.cardsContainer.innerHTML = templateCard(response);
    refs.cardsContainer.innerHTML = templateCard(eventsModif(response));
    addClassAnimation();
    setPagination(eventServiceApi.totalEvents);
  });
};
// window.addEventListener("load",debounce(removeClassAnimation,2000))
// options.totalItems = eventServiceApi.totalPages;
  // refs.nextPage.addEventListener('click', openNextPage)
// function openNextPage(e) {
//   eventServiceApi.incrementPage();
//    eventServiceApi.fetchEvent().then(response => {
//      refs.cardsContainer.innerHTML = templateCard(response);
//      });
    
// }