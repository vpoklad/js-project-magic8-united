import CustomSelect from './custom-select';

import EventServiceApi from "./search-API";
import templateCard from "../templates/card.hbs";
import refs from "./refs";



const select = new CustomSelect('#select', {
    name: 'country',
    targetValue: '',
    options: [ ],

        
    // onSelected(select, option) {
    //   // выбранное значение
    //   console.log(`Выбранное значение: ${select.value}`);
    //   // индекс выбранной опции
    //   console.log(`Индекс выбранной опции: ${select.selectedIndex}`);
    //   // выбранный текст опции
    //   const text = option ? option.textContent : '';
    //   console.log(`Выбранный текст опции: ${text}`);
    // },
  });
  
console.log(select._params.options);
 

  const eventServiceApi = new EventServiceApi;
  
  document.querySelector('.select').addEventListener('select.change', onSelect);

  function onSelect (e) {
    const select = e.target.querySelector('.select__toggle');
    
    eventServiceApi.selectQuery = select.dataset.value

    eventServiceApi.fetchEvent().then(response => {
      console.log(response);
    if(response===undefined){return}
    refs.cardsContainer.innerHTML = templateCard(response);

  });

  }








  
  // document.querySelector('.select').addEventListener('select.change', (e) => {
  //   const select = e.target.querySelector('.select__toggle');
  //   // выбранное значение
  //   console.log(`Выбранное значение: ${select.dataset.value}`);
  //    // индекс выбранной опции
  //   console.log(`Индекс выбранной опции: ${select.dataset.index}`);
  //   // выбранный текст опции
  //   const selected = e.target.querySelector('.select__option_selected');
  //   const text = selected ? selected.textContent : '';
  //   console.log(`Выбранный текст опции: ${text}`);
  // });

