import EventServiceApi from "./search-API";
import templateCard from "../templates/card.hbs";
import refs from "./refs";
import debounce from 'lodash.debounce';

const eventServiceApi = new EventServiceApi;
export default refs.searchInput.addEventListener('input', debounce(onInput, 700));

// export default eventServiceApi.searchEventById().then(res=>console.log(res.data))

function onInput(e) {
  // console.log(refs.searchInput.value);
  eventServiceApi.query = refs.searchInput.value.trim();
 console.log(refs.nextPage);
  if (eventServiceApi.query !== refs.searchInput.value.trim()) {
    eventServiceApi.pageReset()
  }

  eventServiceApi.fetchEvent().then(response => {
  refs.cardsContainer.innerHTML = templateCard(response);
});
}

  // refs.nextPage.addEventListener('click', openNextPage)
// function openNextPage(e) {
//   eventServiceApi.incrementPage();
//    eventServiceApi.fetchEvent().then(response => {
//      refs.cardsContainer.innerHTML = templateCard(response);
//      });
    
// }