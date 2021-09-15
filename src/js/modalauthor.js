import refs from './refs.js';
import authorInfoTemplate from '../templates/authorinfo.hbs';

refs.buttonAuthorInfo.addEventListener('click', getAuthorInfo);
refs.buttonAuthorClose.addEventListener('click', closeAuthorInfo);

function getAuthorInfo() {
  // здесь получаем данные
  const authorInfoText = [];
  refs.buttonAuthorInfo.disabled = true;
  authorInfoText.push('More from this author ....');
  makeAuthorModal(authorInfoText);
}

function makeAuthorModal(authorInfoText) {
  refs.authorOverlay.classList.remove('is-hidden');
  refs.authorInfo.insertAdjacentHTML('beforeend', authorInfoText.map(authorInfoTemplate));
}

function closeAuthorInfo() {
  refs.authorOverlay.classList.add('is-hidden');
  refs.buttonAuthorInfo.disabled = false;
  refs.authorInfo.innerHTML = '';
}
