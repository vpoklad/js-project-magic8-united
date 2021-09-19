import refs from './refs.js';
import onCloseMainModal from './modalClose.js';
import eventServiceApi from './search-API';
import templateCard from '../templates/card.hbs';
import { authorName } from './renderModal.js';

refs.buttonMoreFromAuthor.addEventListener('click', searchMoreFromAuthor);

function searchMoreFromAuthor() {
  onCloseMainModal();
  refs.cardsContainer.innerHTML = '';
  refs.searchInput.value = '';
  refs.searchInput.value = authorName;
  eventServiceApi.query = authorName.replaceAll(' ', '%20');
  eventServiceApi.fetchEvent().then(response => {
    refs.cardsContainer.innerHTML = templateCard(response);
  });
}
