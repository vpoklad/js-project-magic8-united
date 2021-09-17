import refs from './refs.js';
import onCloseMainModal from './modalClose.js';

refs.buttonMoreFromAuthor.addEventListener('click', searchMoreFromAuthor);

function searchMoreFromAuthor() {
  onCloseMainModal();
  refs.cardsContainer.innerHTML = '';
  //обнулить пагинацию
  //вызавать поиск
}
