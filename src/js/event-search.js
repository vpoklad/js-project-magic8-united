import eventServiceApi from "./search-API";
import templateCard from "../templates/cardModif.hbs";
import refs from "./refs";
import debounce from 'lodash.debounce';
import { info, alert } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import { setPagination } from './pagination.js';
import { animationCards } from "./firstPageLoad";
import { apiService } from "./select";


refs.searchInput.addEventListener('input', debounce(onInput, 600));

function onInput(e) {
    if (e.target.value.trim() === '' && eventServiceApi.selectQuery !== "") {
      eventServiceApi.query = "";
      apiService();
      return
    };
    if (e.target.value.trim() === '') {
    eventServiceApi.query = "";
    notifyInfo('Please enter you request!');
      // { text: 'Please enter you request!',
      // delay: 5000})
    return
    };


    eventServiceApi.query = e.target.value.trim();
    apiService();
};
