import './sass/main.scss';
import './js/event-search';
import CustomSelect from './js/custom-select';
import './js/modalClose';
import './js/firstPageLoad.js'
import './js/pagination'




const select = new CustomSelect('#select', {
    name: 'car',
    targetValue: 'Choose country',
    options: [
      ['afghanistan', 'Afghanistan'],
      ['albania', 'Albania'],
      ['algeria', 'Algeria'],
      ['andorra', 'Andorra'],
      ['angola', 'Angola'],['antigua and Barbuda', 'Antigua and Barbuda'],['Argentina', 'Argentina']
    ],
    onSelected(select, option) {
      // выбранное значение
      console.log(`Выбранное значение: ${select.value}`);
      // индекс выбранной опции
      console.log(`Индекс выбранной опции: ${select.selectedIndex}`);
      // выбранный текст опции
      const text = option ? option.textContent : '';
      console.log(`Выбранный текст опции: ${text}`);
    },
  });

  document.querySelector('.select').addEventListener('select.change', (e) => {
    const btn = e.target.querySelector('.select__toggle');
    // выбранное значение
    console.log(`Выбранное значение: ${btn.value}`);
     // индекс выбранной опции
    console.log(`Индекс выбранной опции: ${btn.dataset.index}`);
    // выбранный текст опции
    const selected = e.target.querySelector('.select__option_selected');
    const text = selected ? selected.textContent : '';
    console.log(`Выбранный текст опции: ${text}`);
  });


