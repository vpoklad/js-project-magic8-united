import refs from './refs.js';
import onCloseMainModal from './modalClose.js';
import EventServiceApi from './search-API';
import templateCard from '../templates/card.hbs';

refs.buttonMoreFromAuthor.addEventListener('click', searchMoreFromAuthor);

function searchMoreFromAuthor() {
  onCloseMainModal();
  refs.cardsContainer.innerHTML = '';
  refs.searchInput.value = '0';
  const eventServiceApi = new EventServiceApi();
  eventServiceApi.query = refs.searchInput.value;
  eventServiceApi.fetchEvent().then(response => {
    refs.cardsContainer.innerHTML = templateCard(response);
  });
}
