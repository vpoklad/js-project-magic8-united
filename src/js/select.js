import CustomSelect from './custom-select';

const select = new CustomSelect('#select', {
    name: 'country',
    targetValue: 'Choose country',
    options: [
      ['US', 'USA'],
      ['AD', 'Andorra'],
      ['AI', 'Anguilla'],
      ['AR', 'Argentina'],
      ['AT', 'Austria'],
      ['AZ', 'Azerbaijan'],
      ['BS', 'Bahamas'],
      ['BS', 'Bahamas'],
      ['BH', 'Bahrain'],
      ['BB', 'Barbados'],
      ['BE', 'Belgium'],
      ['BM', 'Bermuda'],
      ['BR', 'Brazil'],
      ['BG', 'Bulgaria'],
      ['CA', 'Canada'],
      ['CL', 'Chile'],
      ['CN', 'China'],
      ['CO', 'Colombia'],
      ['CR', 'Costa Rica'],
      ['HR', 'Croatia'],
      ['CY', 'Cyprus'],
      ['CZ', 'Czech Republic'],
      ['DK', 'Denmark'],
      ['DO', 'Dominican Republic'],
      ['EC', 'Ecuador'],
      ['EE', 'Estonia'],
      ['FO', 'Faroe Islands'],
      ['FI', 'Finland'],
      ['FR', 'France'],
      ['GE', 'Georgia'],
      ['DE', 'Germany'],
      ['GH', 'Ghana'],
      ['GI', 'Gibraltar'],
      ['GB', 'Great Britain'],
      ['GR', 'Greece'],
      ['HK', 'Hong Kong'],
      ['HU', 'Hungary'],
      ['IS', 'Iceland'],
      ['IN', 'India'],
      ['IE', 'Ireland'],
      ['IL', 'Israel'],
      ['IT', 'Italy'],
      ['JM', 'Jamaica'],
      ['JP', 'Japan'],
      ['KR', 'Korea, Republic of'],
      ['LV', 'Latvia'],
      ['LB', 'Lebanon'],
      ['LT', 'Lithuania'],
      ['LU', 'Luxembourg'],
      ['MY', 'Malaysia'],
      ['MT', 'Malta'],
      ['MX', 'Mexico'],
      ['MC', 'Monaco'],
      ['ME', 'Montenegro'],
      ['MA', 'Morocco'],
      ['NL', 'Netherlands'],
      ['AN', 'Netherlands Antilles'],
      ['NZ', 'New Zealand'],
      ['ND', 'Northern Ireland'],
      ['NO', 'Norway'],
      ['PE', 'Peru'],
      ['PL', 'Poland'],
      ['PT', 'Portugal'],
      ['RO', 'Romania'],
      ['RU', 'Russian Federation'],
      ['LC', 'Saint Lucia'],
      ['SA', 'Saudi Arabia'],
      ['RS', 'Serbia'],
      ['SG', 'Singapore'],
      ['SK', 'Slovakia'],
      ['SI', 'Slovenia'],
      ['ZA', 'South Africa'],
      ['ES', 'Spain'],
      ['SE', 'Sweden'],
      ['CH', 'Switzerland'],
      ['TW', 'Taiwan'],
      ['TH', 'Thailand'],
      ['TT', 'Trinidad and Tobago'],
      ['TR', 'Turkey'],
      ['UA', 'Ukraine'],
      ['AE', 'United Arab Emirates'],
      ['UY', 'Uruguay'],
      ['VE', 'Venezuela']
    ],
    onSelected(select, option) {
      // // выбранное значение
      // console.log(`Выбранное значение: ${select.value}`);
      // // индекс выбранной опции
      // console.log(`Индекс выбранной опции: ${select.selectedIndex}`);
      // // выбранный текст опции
      // const text = option ? option.textContent : '';
      // console.log(`Выбранный текст опции: ${text}`);
    },
  });

  document.querySelector('.select').addEventListener('select.change', (e) => {
    const btn = e.target.querySelector('.select__toggle');
    // // выбранное значение
    // console.log(`Выбранное значение: ${btn.value}`);
    //  // индекс выбранной опции
    // console.log(`Индекс выбранной опции: ${btn.dataset.index}`);
    // // выбранный текст опции
    const selected = e.target.querySelector('.select__option_selected');
    const text = selected ? selected.textContent : '';
    // console.log(`Выбранный текст опции: ${text}`);
  });