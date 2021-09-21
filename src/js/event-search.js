import eventServiceApi from "./search-API";
import templateCard from "../templates/cardModif.hbs";
import refs from "./refs";
import debounce from 'lodash.debounce';
import { info } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import { setPagination } from './pagination.js';
import {animationCards} from "./firstPageLoad";

refs.searchInput.addEventListener('input', debounce(onInput, 600));

function onInput(e) {
  // console.log(refs.searchInput.value);
  if (e.target.value.trim() === '' && eventServiceApi.selectQuery !== "") {
      eventServiceApi.query = "";
      eventServiceApi.fetchEvent().then(events => {
      if(events===undefined){return}
      refs.cardsContainer.innerHTML = templateCard(events);
      animationCards();
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

  eventServiceApi.fetchEvent().then(events => {
    // console.log(events);
   if(events===undefined){return}
      // refs.cardsContainer.innerHTML = templateCard(events);
    refs.cardsContainer.innerHTML = templateCard(events);
    animationCards();
    setPagination(eventServiceApi.totalEvents);
  });
};
