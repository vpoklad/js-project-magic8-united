import axios from 'axios';
import { alert, notice, info, success, error } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';

const ROOT_URL = "https://app.ticketmaster.com/discovery/v2/";
const KEY = "y2gr3zDEoAnck6YziFkTdrHptQULpZRO";


class EventServiceApi {
  constructor() {
    this.page = 0;
    this.totalPages ='';
    this.searchQuery = "";
    this.countryQuery = "";
    this.eventId = "";
    this.totalEvents = '';
  }

  fetchEvent() {

    let url = `${ROOT_URL}events.json?&page=${this.page}&keyword=${this.searchQuery}&apikey=${KEY}`;
    
    if (this.countryQuery !== '') {
      url =`${ROOT_URL}events.json?&page=${this.page}&countryCode=${this.countryQuery}&keyword=${this.searchQuery}&apikey=${KEY}`;
    }
    
    return axios.get(url).then(result => {
     
       if (!result.data._embedded) {
        alert({
          text: "Looks like there is no such even!",
          delay: 2000,
        })
        // console.log("Looks like there is no such even!");
        return
      }
      
      try {
        // this.page += 1;
        // console.log(result.data._embedded.events);
        this.totalEvents = result.data.page.totalElements;
        this.totalPages = result.data.page.totalPages;
        // console.log(this.totalPages);
        return result.data._embedded.events;
      } catch (error) {
        // Поставить Нотификашку для отлова ошибки
        console.log("try catch", error);
      }
    }).catch(err => {
      console.log('catch', err)
    }) 
  }

  searchEventById() {
    return axios.get(`${ROOT_URL}events/${this.eventId}.json?apikey=${KEY}`).then(data => {
      console.log(data);
      return data
    })
  }

  pageReset(){
      this.page = 1;
  }
  incrementPage() {
    this.page += 1;
  }
  decrementPage() {
    if (this.page === 1) {
      return
    }
    this.page -= 1;
   }
  
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get selectQuery() {
    return this.countryQuery;
  }
  set selectQuery(newSelectQuery) {
    this.countryQuery = newSelectQuery;
  }

};
const eventServiceApi = new EventServiceApi;
export default eventServiceApi;