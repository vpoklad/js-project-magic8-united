import refs from './refs.js';
import onCloseMainModal from './modalClose.js';
import EventServiceApi from './search-API';
import templateCard from '../templates/card.hbs';
import { authorName } from './renderEventIntoModal.js';

refs.buttonMoreFromAuthor.addEventListener('click', searchMoreFromAuthor);
console.log(authorName);

function searchMoreFromAuthor() {
  onCloseMainModal();
  refs.cardsContainer.innerHTML = '';
  refs.searchInput.value = '';
  refs.searchInput.value = authorName;
  const eventServiceApi = new EventServiceApi();
  eventServiceApi.query = refs.searchInput.value.replace(' ', '%20');
  eventServiceApi.fetchEvent().then(response => {
    refs.cardsContainer.innerHTML = templateCard(response);
  });
}
