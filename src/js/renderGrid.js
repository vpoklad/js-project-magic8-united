let id = -1;

export function renderGrid (events) { 
  const cards = events.map(event => createMarkupCard (event));
  return cards.join('');
}

function createMarkupCard (event) {
  id += 1;  
  
  return `
    <li class="cards__item hvr-buzz-out" tabindex="0" data-id=${id} data-eventId=${event.id}>
      <div class="thumb">
        <img class="cards__img" src=${event.images[5].url} alt=${event.name} width="180" height="227" />
      </div>  
      <h3 class="item__title">${event.name}</h3>
      <p class="item__date">${event.dates.start.localDate}</p>
      <p class="item__location">
        ${event.dates.timezone}
      </p>
    </li>
  `
}