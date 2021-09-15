import Pagination from 'tui-pagination'; 

const container = document.querySelector('#tui-pagination-container');
const options = { // below default value of options
     totalItems: 100,
     itemsPerPage: 16,
     visiblePages: 5,
     page: 1,
     centerAlign: true,
     firstItemClassName: 'tui-first-child',
     lastItemClassName: 'tui-last-child',
     template: {
         page: '<a href="#" class="tui-page-btn">{{page}}</a>',
         currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
         moveButton:
             '<a href="#" class="tui-page-btn tui-{{type}}">' +
                 '<svg class="tui-ico-{{type}}"><use href="../images/icon-{{type}}.svg"></use></svg>' +
             '</a>',
         disabledMoveButton:
             '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
                 '<svg class="tui-ico-{{type}}"><use href="../images/icon-{{type}}.svg"></use></use></svg>' +
             '</span>',
         moreButton:
             '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
                 '<span class="tui-ico-ellip">...</span>' +
             '</a>'
     }
};
const pagination = new Pagination(container, options);